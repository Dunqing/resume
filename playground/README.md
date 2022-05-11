---
theme: true
print: true
github: "https://github.com/Dunqing/resume"
---

# 张三

![头像](https://notion-avatar.vercel.app/api/svg/eyJmYWNlIjo5LCJub3NlIjoxMCwibW91dGgiOjEsImV5ZXMiOjcsImV5ZWJyb3dzIjoxMSwiZ2xhc3NlcyI6MCwiaGFpciI6MTEsImFjY2Vzc29yaWVzIjoxMywiZGV0YWlscyI6MCwiYmVhcmQiOjAsImZsaXAiOjAsImNvbG9yIjoicmdiYSgyNTUsIDAsIDAsIDApIiwic2hhcGUiOiJub25lIn0=)

- [https://github.com/Dunqing](https://github.com/Dunqing/resume)
>
- google@gmail.com
- 3年
>
- Telegram: @luckingforme


## 个人总结

- 熟练运用React+Typescript开发项目
- 参与开源项目，**为Antd，Vite，Dumi解决过Issues，提交过上百个PR**，[ProComponents](https://github.com/ant-design/pro-components) `Collaborator`
- 看过React，Vite，SWR，Acorn等多个开源项目源码
- 较强的学习能力和自控能力

## 工作经历

### 深圳某公司

|职位|工作时间|部门|地址|
|:----:|:----:|:----:|:----:|
|前端工程师|2021.01 ~ 至今|研发部|深圳|

- 参与项目开发和迭代
- 使用 xxx 完成了 xxx
- 使用React+Typescript+Antd+ProComponent开发后台
- 抽离 edraw，taro-swr 等库做为 npm 库供多项目使用
- 把控代码格式和质量，代码审查和合并 merge request

### 深圳某公司

|职位|工作时间|地址|
|:----:|:----:|:----:|
|前端工程师|2020-08 ~ 2021-01|深圳|

- 主要负责新项目的开发和一些还在迭代中的项目需求开发。
- 采用 uniapp 框架开发”车主特卖“小程序，在其中负责搭建小程序这个项目，封装一些针对微信原生 api 和 promise 化。
- 负责迭代”车芝嘛“小程序，该小程序基于 wepy 开发。另外还负责小程序后台的迭代和 bug 修复。

## 专业技能
1. 熟练使用 React, Typescript, Taro, Umi 开发项目
2. 熟练使用 Vite, Rollup，Webpack 等编译工具
3. 熟练使用 jest + enzyme / React Testing Libray 做代码测试
4. 掌握gitlab-ci + docker 自动化部署
5. 熟悉pnpm monorepo
6. 了解 Vue2, Express, Nestjs, Eslint, Prettier, Husky

## 项目经历

### Walle后台（项目负责人）

- 使用Ant Design Pro做初始项目，后经过迭代改造使用pnpm monorepo进行整合项目
- 使用Authing做登录鉴权便于和飞书人员数据进行整合
- 使用RBAC模型去管理整个后台的权限，权限级别到按钮
- 使用gitlab-ci做自动化部署对release-test-xxx分支自动发布到测试环境，对tag release-vx.x.x自动发布到正式环境但需要人为点击最后一个步骤确保无误后部署到线上

### [swr-taro](https://www.npmjs.com/package/taro-swr)

**业务背景是由于公司的小程序对需要对接口进行管理,(替换原来实现的useRequest，api不太友好)。考虑到内部的H5使用的是SWR，统一请求管理库对维护者更加友好，所以决定把SWR适配到Taro中去**

1. 调研SWR具体的实现
2. 将在Taro中不适配的方法改成为Taro原生的方法
3. 新增revalidateOnShow，revalidateOnPullDown属性让SWR可在页面切换时，下拉时刷新请求，更加贴合小程序
4. 发布到npm，供内部多小程序使用

### 公司内部Cli开发（独立完成）

|担任角色|项目周期|
|:----:|:----:|
|负责人|2020.11 ~ 2021.01|

- **publish**：针对公司内部的开发流程实现了自动化推送到build分支之后自动打下tag发给测试&运维部署，并发送消息到钉钉群。
- **create**：一键创建整个项目并install。现在vue模板采用webpack5搭建完成。使用的技术栈有：vue2.x全家桶、typescript4.x、axios、babel、postcss、eslint
- **deploy**：自动部署代码到服务器


## 开源项目

- [resume](https://github.com/Dunqing/resume) 用  Markdown 写简历
- [vite-ant-design-pro](https://github.com/Dunqing/vite-ant-design-pro) 基于 Vite 的 ant-design-pro
- [unplugin-moment-to-dayjs](https://github.com/Dunqing/unplugin-moment-to-dayjs) 基于 Vite 的 ant-design-pro
- [unplugin-moment-to-dayjs](https://github.com/Dunqing/unplugin-moment-to-dayjs) 使用 dayjs 替换moment，支持在 vite, rollup, webpack 中使用
## 教育经历

### Github开源大学

|专业|时间|
|:----:|:----:|
|开源捣鼓|2019.01 - 2021.01|

## 其他

<p style="
    display: flex;
    justify-content: center;
    padding: 0.5rem 0;
">
  <img src="//github-readme-stats.vercel.app/api?username=Dunqing&show_icons=true&icon_color=CE1D2D&text_color=718096&bg_color=ffffff&hide_title=true">
</p>
