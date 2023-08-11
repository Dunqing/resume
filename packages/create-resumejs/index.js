#!/usr/bin/env node
/* eslint-disable no-console */

// Avoids autoconversion to number of the project name by defining that the args
// non associated with an option ( _ ) needs to be parsed as a string. See #4606
const fs = require('node:fs')
const path = require('node:path')
const process = require('node:process')
const argv = require('minimist')(process.argv.slice(2), { string: ['_'] })
const prompts = require('prompts')
const { yellow, red, reset } = require('kolorist')

const cwd = process.cwd()

const TEMPLATES = [
  {
    name: 'react-ts',
    color: yellow,
  },
  {
    name: 'markdown',
    color: yellow,
  },
]

const renameFiles = {
  _gitignore: '.gitignore',
}

async function init() {
  let targetDir = argv._[0]
  let template = argv.template || argv.t

  const defaultProjectName = !targetDir ? 'resume' : targetDir

  let result = {}

  try {
    result = await prompts(
      [
        {
          type: targetDir ? null : 'text',
          name: 'projectName',
          message: reset('Project name:'),
          initial: defaultProjectName,
          onState: (state) =>
            (targetDir = state.value.trim() || defaultProjectName),
        },
        {
          type: () =>
            !fs.existsSync(targetDir) || isEmpty(targetDir) ? null : 'confirm',
          name: 'overwrite',
          message: () =>
            `${
              targetDir === '.'
                ? 'Current directory'
                : `Target directory "${targetDir}"`
            } is not empty. Remove existing files and continue?`,
        },
        {
          type: (_, { overwrite } = {}) => {
            if (overwrite === false)
              throw new Error(`${red('✖')} Operation cancelled`)

            return null
          },
          name: 'overwriteChecker',
        },
        {
          type: () => (isValidPackageName(targetDir) ? null : 'text'),
          name: 'packageName',
          message: reset('Package name:'),
          initial: () => toValidPackageName(targetDir),
          validate: (dir) =>
            isValidPackageName(dir) || 'Invalid package.json name',
        },
        {
          type: 'select',
          name: 'variant',
          message: reset('Select a template:'),
          choices: () => {
            return TEMPLATES.map((template) => {
              return {
                title: template.color(template.name),
                value: template.name,
              }
            })
          },
        },
      ],
      {
        onCancel: () => {
          throw new Error(`${red('✖')} Operation cancelled`)
        },
      },
    )
  } catch (cancelled) {
    console.log(cancelled.message)
    return
  }

  // user choice associated with prompts
  const { overwrite, packageName, variant } = result

  const root = path.join(cwd, targetDir)

  if (overwrite) emptyDir(root)
  else if (!fs.existsSync(root)) fs.mkdirSync(root)

  // determine template
  template = variant || template

  console.log(`\nScaffolding project in ${root}...`)

  const templateDir = path.join(__dirname, `template-${template}`)

  const write = (file, content) => {
    const targetPath = renameFiles[file]
      ? path.join(root, renameFiles[file])
      : path.join(root, file)
    if (content) fs.writeFileSync(targetPath, content)
    else copy(path.join(templateDir, file), targetPath)
  }

  const files = fs.readdirSync(templateDir)
  for (const file of files.filter((f) => f !== 'package.json')) write(file)

  const pkg = require(path.join(templateDir, 'package.json'))

  pkg.name = packageName || targetDir

  write('package.json', JSON.stringify(pkg, null, 2))

  const pkgInfo = pkgFromUserAgent(process.env.npm_config_user_agent)
  const pkgManager = pkgInfo ? pkgInfo.name : 'npm'

  console.log('\nDone. Now run:\n')
  if (root !== cwd) console.log(`  cd ${path.relative(cwd, root)}`)

  switch (pkgManager) {
    case 'yarn':
      console.log('  yarn')
      console.log('  yarn dev')
      break
    default:
      console.log(`  ${pkgManager} install`)
      console.log(`  ${pkgManager} run dev`)
      break
  }
  console.log()
}

function copy(src, dest) {
  const stat = fs.statSync(src)
  if (stat.isDirectory()) copyDir(src, dest)
  else fs.copyFileSync(src, dest)
}

function isValidPackageName(projectName) {
  return /^(?:@[a-z0-9-*~][a-z0-9-*._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/.test(
    projectName,
  )
}

function toValidPackageName(projectName) {
  return projectName
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/^[._]/, '')
    .replace(/[^a-z0-9-~]+/g, '-')
}

function copyDir(srcDir, destDir) {
  fs.mkdirSync(destDir, { recursive: true })
  for (const file of fs.readdirSync(srcDir)) {
    const srcFile = path.resolve(srcDir, file)
    const destFile = path.resolve(destDir, file)
    copy(srcFile, destFile)
  }
}

function isEmpty(path) {
  return fs.readdirSync(path).length === 0
}

function emptyDir(dir) {
  if (!fs.existsSync(dir)) return

  for (const file of fs.readdirSync(dir)) {
    const abs = path.resolve(dir, file)
    // baseline is Node 12 so can't use rmSync :(
    if (fs.lstatSync(abs).isDirectory()) {
      emptyDir(abs)
      fs.rmdirSync(abs)
    } else {
      fs.unlinkSync(abs)
    }
  }
}

/**
 * @param {string | undefined} userAgent process.env.npm_config_user_agent
 * @returns object | undefined
 */
function pkgFromUserAgent(userAgent) {
  if (!userAgent) return undefined
  const pkgSpec = userAgent.split(' ')[0]
  const pkgSpecArr = pkgSpec.split('/')
  return {
    name: pkgSpecArr[0],
    version: pkgSpecArr[1],
  }
}

init().catch((e) => {
  console.error(e)
})
