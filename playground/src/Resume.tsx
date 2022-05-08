import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import "uno.css"
import '@unocss/reset/tailwind.css'



function Resume() {
  const [markdown] = useState<string>(() => {
    const globResult = import.meta.globEager("../../README.md", {
      as: "raw",
    })
    console.log("🚀 ~ file: Resume.tsx ~ line 13 ~ Resume ~ globResult", globResult)

    return (Object.values(globResult)[0]) as unknown as string
  })

  const [animated, setAnimated] = useState(true)

  useEffect(() => {
    // setAnimated(true)
    setTimeout(() => {
      setAnimated(false)
    }, 100)
  }, [])

  return (
    <div className="Resume font-sans">
      <div className="container text-dark mx-auto p-y-4 p-x-2">
        <div className={`w-full    ${animated ? "-translate-x-100vw" : "transition-transform translate-x-0 transition-delay-100 ease-in-out translate-x-0"} `}>
          <ReactMarkdown
            components={{
              h1: ({ node, ...props }) => <h1 className="text-3xl text-dark font-semibold" {...props}></h1>,
              h2: ({ node, ...props }) => <h2 className="p-y-1.5 text-xl text-dark font-semibold" {...props}></h2>,
              h3: ({ node, ...props }) => <h3 className="p-y-1 text-lg text-dark font-semibold" {...props}></h3>,
              h4: ({ node, ...props }) => <h4 className="p-y-0.5 text-md text-dark font-semibold" {...props}></h4>,
              h5: ({ node, ...props }) => <h5 className="text-lg text-dark font-semibold" {...props}></h5>,
              ul: ({ node, ...props }) => <ul className="m-t-1 m-l-8 text-dark list-disc list-outside" {...props}></ul>,
              ol: ({ node, ...props }) => <ol className="m-t-1 m-l-8 text-dark list-decimal list-outside" {...props}></ol>,
              li: ({ node, ...props }) => <li className="p-y-0.25 text-dark-300" {...props}></li>,
              a: ({ node, ...props }) => <a className="text-blue underline" {...props}></a>,
              p: ({ node, ...props }) => <p className="text-dark-700 font-medium p-y-1" {...props}></p>,
              strong: ({ node, ...props }) => <strong className="text-dark font-semibold" {...props}></strong>,
            }}
            remarkPlugins={[]}>
            {markdown}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  )
}

export default Resume

