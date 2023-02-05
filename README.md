# 个人简历

- 这是一份基于 Astro 静态框架编写的个人简历
- HTML 和 CSS 借鉴于https://gitee.com/itsay/resume
- `.github/workflows/deploy.yml`提供 github-pages 自动部署、gitee 仓库同步部署

如果只希望保留 github-pages 的部署功能，不需要 gitee 同步部署，在`.github/workflows/deploy.yml`文件中删除关于 gitee 同步、部署相关的 job: syncToGitee

如果需要开启同步 gitee-pages

1. 在 github 仓库「Settins -> Security -> Secrets and variables -> Actions 」中进行`GITEE_PASSWORD`和`GITEE_RSA_PRIVATE_KEY`秘钥设置
2. 登录 gitee 个人中心，「安全设置 -> SSH 公钥」，添加`GITEE_RSA_PUBLIC_KEY`公钥，与`GITEE_RSA_PRIVATE_KEY`为成对秘钥
3. 每次 github 仓库的 push 推送，将自动触发与 gitee 仓库的同步与部署

注意：第一次 gitee 同步成功后部署会失败，因为 gitee 创建的初始化空仓库默认为 private 仓库，只有先同步一次代码，才能开启 gitee-pages 功能，后续自动与 github 同步部署
