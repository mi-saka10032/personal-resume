// 网站标题
const title = "[简历]余志航-前端开发工程师";

// 个人信息
const avatar = {
  name: "余志航",
  info: "前端开发工程师 / 成都",
  src: "./misaka10032.png",
};

// 基本信息
const baseInfo: Info[] = [
  { label: "个人信息", value: "余志航 / 男 / 26岁" },
  { label: "工作经验", value: "2.5年" },
  { label: "工作状态", value: "在职" },
  { label: "毕业院校", value: "兰州交通大学" },
  { label: "学历", value: "本科" },
  { label: "英语水平", value: "CET-4" },
  { label: "计算机水平", value: "软考中级" },
];

// 联系方式
const contacts: Contact[] = [
  { label: "手机", value: "135-6877-5642", link: false },
  { label: "邮箱", value: "misaka10032@aliyun.com", link: false },
  {
    label: "个人技术笔记",
    value: "https://mi-sa-ka10032.gitee.io/frontend-service-station/",
    link: true,
  },
  { label: "Github", value: "https://github.com/mi-saka10032", link: true },
];

// 技能点
const skills: Skill[] = [
  { label: "HTML", progress: 95 },
  { label: "CSS", progress: 95 },
  { label: "JavaScript", progress: 95 },
  { label: "TypeScript", progress: 85 },
  { label: "Vue", progress: 85 },
  { label: "React", progress: 80 },
  { label: "Webpack", progress: 75 },
  { label: "Vite", progress: 75 },
  { label: "Node", progress: 70 },
  { label: "Electron", progress: 60 },
  { label: "性能优化", progress: 80 },
  { label: "服务端渲染", progress: 70 },
];

// 技术栈
const skillStack: string[] = [
  "熟练掌握HTML、CSS(LESS、SASS)、Javascript、Typescript",
  "熟练掌握JS语法ES6、ESNext、Ajax、Axios",
  "熟练掌握Vue2和Vue3项目结构，熟悉Vue项目开发规范，熟练掌握组件封装",
  "熟悉React的语法与项目开发",
  "熟悉Vue（响应式原理、依赖收集、diff算法、编译运行与更新）和React（JSX、Fiber、WorkInProgress、diff算法）的运行机制与原理",
  "熟悉Webpack、Rollup、Vite等构建工具的运行机制与性能优化、前端性能优化",
  "熟悉Git分支管理、GitFlow执行、应用Devops、Nginx部署等",
  "了解Midway(NodeJs)后端项目开发，了解Java语法与SpringMVC结构",
  "了解跨端开发（Electron）、服务端渲染、微前端应用等",
  "具备从0到1设计、规划、分配、协调及开发完整前端项目的经验",
];

// 工作经历
const workInfo: Work[] = [
  {
    title: "成都互联汇智有限公司 - 初级前端开发工程师",
    startTime: "2020.09",
    endTime: "2021.09",
    desc: [
      `老项目维护：负责公司首页CMS内容管理系统新闻、活动等内容的日常维护`,
      `新首页重构：参与公司新域名首页重构，完成课程管理、新闻活动等模块重构，项目框架采用Nuxt2实现SEO，要求与原CMS首页显示完全一致`,
      `个人中心：主要负责个人中心管理系统中的「登录注册、个人信息、账号绑定」等页面，技术栈：Vue3+VueRouter+VueX`,
    ],
  },
  {
    title: "欧冶云商股份有限公司成都研发部 - 中级前端开发工程师",
    startTime: "2021.11",
    endTime: "至今",
    desc: [
      `参与公司钢铁知识管理首页的前端开发`,
      [
        `技术栈：Vue2+VueRouter+VueX+自研前台组件库`,
        `公共封装：开发过程中优化提升了顶栏、搜索框、尾部等公共组件，封装了滑块验证、PDF带水印防爬、Video防爬组件等`,
        `优化工作：完成路由结构优化、个人中心搭建及功能汇总、样式规范审查、CodeReview等工作`,
      ],
      `深度参与物流平台首页、物流委托方 / 物流仓储方管理前端开发`,
      [
        `技术栈：Vue2+VueRouter+VueX+自研前台组件库`,
        `项目初期：参与设计需求评审任务10余则、开发任务分配8人、开发周期制定与跟进`,
        `项目架构：在架构提供的框架模板基础上，搭建了公共布局、设计ESLint规则并实现了包括「首页」和「委托方/仓储商菜单」在内的完整路由结构`,
        `公共封装：按照原型图与设计稿独立封装了复杂表单表格、筛选栏、PDF轮播等22个公共组件，编写了公共工具类、方法装饰器等13份公共文件`,
        `「首页」负责：全部首页相关内容，着眼于FCP和LCP完成了一系列性能优化，首页基本实现1s启动`,
        `「委托方」负责：发布运输委托功能，作为平台主流程的头部流程，保时保量完成了开发内容并为后续流程提供了可复用逻辑代码，项目上线后主流程平稳运行无重大BUG发生`,
        `「仓储方」负责：公告管理功能，出于稳定性考虑封装固化了TinyMCE富文本组件，实现了公告管理全流程`,
        `<em>项目难点一</em>：项目中期设计需求变更，「委托方」迁移到<mark>[买家系统](JSP+Vue混合项目)</mark>的融合菜单里，1周时间内独力完成了委托方代码与组件的迁移、路由重构等工作`,
        `<em>项目难点二</em>：配合角色权限验证，实现了「委托方/仓储方菜单」前端角色鉴权与动态路由，要求<mark>菜单嵌套最多4级，要求在同一个url下进行，不能使用VueRouter解决</mark>`,
        `<em>项目难点三</em>：总部提供的高德地图封装组件存在加载时序与页面请求时序不确定性问题，数据有时无法正常渲染，通过设计<mark>地图事件管理模型</mark>，配合装饰器实现对代码的低侵入式修复`,
      ],
      `参与多个管理系统（中台管理系统、物流业务管理系统、产能管理系统）的子菜单页面开发`,
      [
        `技术栈：Vue2+VueRouter+VueX+自研中台组件库`,
        `任务协调：参与需求评审、任务分工、进度协调等工作`,
        `内容概述：完成产能资源、会员中心相关列表的CRUD、业务全流程实现`,
      ],
      `针对「公司总部」提供的前台组件库文档内容描述与功能演示不完整的地方，重写了一份组件库文档(Vue+Markdown)并通过nginx静态部署至局域网，为成都公司的同事提供便利`,
    ],
  },
];

// 个人开源项目
const projects: Project[] = [
  {
    title: "[个人前端项目]风景区首页网站",
    demoLink: "https://gitee.com/mask9527/tourist-resort",
    demoName: "repo链接",
    startTime: "2022.04",
    endTime: "2022.05",
    skill: "Vite+Vue3+VueRouter+Pinia+Fabric",
    background: "与朋友合作，闲暇时间完成的风景区首页外包网站，前后端分离项目",
    result: `网站提供首页活动展示、风景区列表与详情显示、评论发布与回复等内容。特色：使用Fabric完成网站需要的刺绣图片DIY（拖拽、上色、切换背景等）功能`,
  },
  {
    title: "[npm脚手架]Vite+Vue脚手架工具",
    demoLink: "https://www.npmjs.com/package/vite-vue-build",
    demoName: "npm链接",
    startTime: "2022.05",
    endTime: "2022.06",
    skill: "Node+TypeScript+EJS",
    background: "实现一款基于Vite，个人定制化依赖的项目模板生成工具",
    result: `cmd指令窗口支持Vue版本(Vue2/Vue3)、预编译css、UI库等可选项，可动态生成项目模板并自带各种定制依赖`,
  },
  {
    title: "[框架模板]Vite+Element模板框架",
    demoLink: "https://gitee.com/mi-sa-ka10032/vite-element-admin",
    demoName: "repo链接",
    startTime: "2022.05",
    endTime: "2022.06",
    skill: "Vite+Vue2+ElementUI",
    background: `初衷是公司管理系统的框架模板来自开源项目「Vue-Element-Admin」，为了加深框架理解、深入Webpack与Vite的差异性对比而实现该项目`,
    result: `将模板框架从VueCli移植到Vite上，解决了大量CJS与ES6的差异性问题，可作为加快开发速度的替代「Vue-Element-Admin」框架`,
  },
  {
    title: "[可视化代码生成器]公司组件代码生成器",
    demoLink:
      "https://github.com/mi-saka10032/SHGT-Component-CodeGenerator/releases",
    demoName: "release链接",
    startTime: "2022.06",
    endTime: "2022.07",
    skill: "Electron+ElectronBuilder+Webpack+Vue2+VueX+自研前台组件库",
    background: `公司组件库基于ElementUI二次开发，为了照顾多方项目系统，属性繁多文档复杂，因此做了一款可视化代码生成器方便生成代码模板`,
    result: `围绕最复杂的表单组件和表格组件，实现了可动态生成模板代码的桌面app，面向公司内部使用`,
  },
];

const evaluations = [
  `我有比较强的学习能力和对新事物的接受能力，善于深挖业务逻辑与代码原理，`,
  `在工作中能及时与产品、UI、后端、测试、业务等多方同事沟通需求、协调问题，`,
  `在代码规范层面有基于公司规范的个人理解，崇尚低耦合度、高复用性、简洁工整的代码规范，`,
  `业余时间喜欢拓展知识面，拓展技术广度与深度。`,
];

const rightAside: RightAside[] = [
  {
    link: "https://gitee.com/mi-sa-ka10032/personal-resume",
    label: "源代码",
  },
  {
    link: "https://mi-sa-ka10032.gitee.io/frontend-service-station/",
    label: "Document",
  },
];

// footer
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();

export default {
  title,
  avatar,
  baseInfo,
  contacts,
  skills,
  skillStack,
  workInfo,
  projects,
  evaluations,
  rightAside,
  year,
  month,
  day,
};
