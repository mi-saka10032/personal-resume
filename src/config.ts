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
  { label: "Vue", progress: 80 },
  { label: "React", progress: 75 },
  { label: "Node", progress: 70 },
];

// 技术栈
const skillStack: string[] = [
  "熟练掌握HTML、CSS(SASS)、Javascript(TS)",
  "熟练掌握JS语法ES6、ESNEXT、AJAX",
  "熟练掌握Vue2和Vue3项目结构&开发规范",
  "熟悉React的语法与项目开发",
  "熟悉Vue和React的运行机制与原理",
  "熟悉Webpack、Vite等构建工具的运行机制与性能优化",
  "熟悉Git分支管理、GitFlow执行",
  "了解Midway(NodeJs)后端项目开发，了解Java语法与SpringMVC结构",
  "了解跨端开发、服务端渲染、微前端应用等",
];

// 工作经历
const workInfo: Work[] = [
  {
    title: "成都互联汇智有限公司 - 前端开发工程师",
    startTime: "2020.9",
    endTime: "2021.9",
    desc: [
      `负责公司首页CMS内容管理系统新闻、活动等内容的日常维护`,
      `参与公司新域名首页重构，完成资源管理、新闻活动等模块重构，项目框架采用<mark>Nuxt(Vue2生态)</mark>实现SEO，要求<mark>与原CMS首页显示完全一致</mark>`,
      `参与「个人中心」的前端开发工作，主要负责登录注册、个人信息、账号绑定等功能，项目采用技术为Vue2+VueRouter+ElementUI`,
    ],
  },
  {
    title: "欧冶云商成都研发分部 - 前端开发工程师",
    startTime: "2021.11",
    endTime: "2023.3",
    desc: [
      `参与公司知识管理项目「知钢」的前端开发`,
      [
        `技术栈：Vue2+VueRouter+VueX+自研组件库`,
        `完成路由结构优化、个人中心搭建及功能汇总、样式规范审查、CodeReview等工作`,
        `开发过程中优化提升了顶栏、搜索框、尾部等公共组件，封装了滑块验证、PDF带水印防爬、Video防爬组件等`,
      ],
      `深度参与「智慧物流」项目前端开发`,
      [
        `技术栈：Vue2+VueRouter+VueX+自研组件库`,
        `项目初期按照原型图与设计稿独立封装了复杂表单、筛选栏、双层表格、图片轮播&PDF轮播、Echarts等公共组件，编写了大量公共工具类、装饰器等文件`,
        `搭建了公共布局、ESLint规则并设计实现了包括「首页」和「委托方/仓储方菜单」在内的完整路由结构`,
        `项目中期设计变更需求，「委托方菜单」迁移到[买家系统]项目<mark>(JSP+Vue混合项目)</mark>中做菜单融合，独力完成了委托方菜单代码与组件的迁移、路由重构等工作`,
        `页面开发与调试过程中负责全部首页内容，着眼FCP和LCP完成了一系列<mark>性能优化</mark>`,
        `「委托方菜单」负责发布运输委托功能，作为平台主流程的<mark>头部流程</mark>，保时保量完成了开发内容并为后续流程提供了可复用逻辑代码`,
        `「仓储方菜单」负责公告管理功能，出于稳定性考虑封装固化了Tinymce富文本组件`,
        `配合角色权限验证，实现了「委托方/仓储方菜单」前端角色鉴权与动态路由，难点<mark>菜单嵌套最多4级，要求在同一个url下进行，不能使用VueRouter解决</mark>`,
      ],
      `参与多个管理系统（中台管理系统、物流管理系统、钢铁产能系统）的子菜单页面开发，完成产能资源、会员中心相关列表的CRUD、文件上传等功能，采用技术为：Vue2+VueRouter+VueX+ElementUI`,
      `针对「公司总部」提供的前端组件库文档内容描述与功能演示不完整的地方，重写了一份组件库文档<mark>(Vue+Markdown)</mark>并通过nginx静态部署至局域网ipv4，为成都公司的同事提供便利`,
    ],
  },
];

// 个人开源项目
const projects: Project[] = [
  {
    title: "[项目1]Vite+Vue脚手架工具",
    demoLink: "https://www.npmjs.com/package/vite-vue-build",
    demoName: "NPM链接",
    startTime: "2022.5",
    endTime: "2022.6",
    skill: "Node+TypeScript+EJS",
    background: "实现一款基于Vite，个人定制化依赖的项目模板生成工具",
    result:
      "cmd指令窗口支持Vue版本(Vue2/Vue3)、预编译css、UI库等可选项，可动态生成项目模板并自带各种定制依赖",
  },
  {
    title: "[项目2]Vite+Element模板框架",
    demoLink: "https://gitee.com/mi-sa-ka10032/vite-element-admin",
    demoName: "repo链接",
    startTime: "2022.5",
    endTime: "2022.6",
    skill: "Vite+Vue2+ElementUI",
    background:
      "初衷是公司管理系统的框架模板来自开源项目「Vue-Element-Admin」，为了加深框架理解、深入Webpack与Vite的差异性对比而实现该项目",
    result:
      "将模板框架从Vue-Cli移植到Vite上，解决了大量CJS与ES6的差异性问题，可作为加快开发速度的替代「Vue-Element-Admin」框架",
  },
  {
    title: "[项目3]公司组件代码生成器",
    demoLink:
      "https://github.com/mi-saka10032/SHGT-Component-CodeGenerator/releases",
    demoName: "release链接",
    startTime: "2022.6",
    endTime: "2022.7",
    skill: "Electron+ElectronBuilder+Webpack+Vue2+VueX+自研组件库",
    background:
      "公司组件库基于ElementUI二次开发，为了照顾多方项目系统，属性繁多文档复杂，因此做了一款可视化代码生成器方便生成代码模板",
    result: "围绕最复杂的表单组件和表格组件，实现了可动态生成模板代码的桌面app",
  },
];

const evaluations = [
  `我有比较强的学习能力和对新事物的接受能力，善于深挖业务逻辑与代码原理，`,
  `在工作中能及时与产品、UI、后端、测试、业务等多方同事沟通需求、协调问题，`,
  `业余时间喜欢拓展知识面，拓展技术广度与深度，`,
  `“多静多思考，反省不张扬”是我给自己总结的“十字箴言”，“活到老，学到老”是我的人生目标`,
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
