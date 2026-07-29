# serverless-qrcode-hub

[中文](#-中文) | [English](#-english)

---

## 🇨🇳 中文

### CHANGELOG


苦于微信群聊二维码 7 天自动失效，开发了这个能生成永久二维码的工具，**不需要服务器**。基于 Cloudflare Workers 和 D1 实现。

### 功能特性

- 🔗 **永久短链/活码**：生成固定短短链接指向微信群二维码，随时后台更新
- 😋 **全能短链**：可作为普通短链接生成器
- ☁️ **零服务器成本**：基于 Cloudflare Workers & D1 打造
- 🌐 **多语言支持**：支持中英文界面切换
- 🎨 **高度自定义**：支持自定义二维码样式、Logo 及跳转提示
- 💻 **无缝管理**：后台随时无缝更新图片与链接
- 🔐 **安全防护**：支持后台访问密码保护

👉 <a href="https://qrdemo.2020818.xyz" target="_blank">演示 Demo 地址</a>（登录密码: `demo`）

### 预览图

- **登录页面**
  ![preview-login](./images/preview-login.png)

- **管理后台 1：添加普通短链**
  ![preview-admin](./images/preview-admin.png)

- **管理后台 2：添加微信二维码**
  ![preview-admin2](./images/preview-admin2.png)

- **生成二维码 preview**
  ![preview-qr](./images/preview-qr.png)

- **微信扫码识别**
  ![preview-wechat](./images/preview-wechat.jpg)

### 使用步骤

1. 登录 Cloudflare 并创建 **D1 SQL 数据库**。  
   ![](./images/1_1.png) ![](./images/1_2.png)
2. 复制并保存好 **D1 SQL 数据库 ID**。  
   ![](./images/2_1.png)
3. 回到 GitHub，**Fork** 本仓库到你的账号下。  
   ![](./images/3.png)
4. 打开 Fork 后仓库里的 `wrangler.toml` 文件并编辑。  
   ![](./images/4_1.png)
5. 将 `d1_databases` 下的 `database_id` 替换为你第一步复制的 D1 数据库 ID 并保存提交（Commit）。  
   ![](./images/5_1.png)
6. 回到 Cloudflare 创建 **Workers** 项目。  
   ![](./images/6.jpg)
7. 选择你 Fork 的 GitHub 仓库，点击 **保存并部署**。  
   ![](./images/7.jpg)
8. 等待部署成功，建议绑定自定义域名（默认分配的 `*.workers.dev` 域名国内访问较慢）。  
   ![](./images/8.jpg)
9. 绑定你的二级域名。  
   ![](./images/9.jpg) ![](./images/10.jpg)
10. 设置访问密码（推荐使用两段随机 UUID 字符串作为强密码）。  
    ![](./images/11.png)
11. 创建普通短链与微信群活码示例：  
    ![](./images/12.png) ![](./images/14.png)

---

## 🇺🇸 English

### CHANGELOG

Tired of WeChat group QR codes expiring every 7 days? This serverless tool helps you generate permanent QR codes and dynamic short links **without needing a server**, built on Cloudflare Workers and D1 database.



### Features

- 🔗 **Permanent Live QR Code**: Fixed URLs pointing to dynamically updated WeChat QR codes.
- 😋 **URL Shortener**: Acts as a general-purpose short link manager.
- ☁️ **100% Serverless**: Powered by Cloudflare Workers & D1 with zero server costs.
- 🌐 **Multi-Language**: Built-in support for multiple languages.
- 🎨 **Customizable**: Customize QR code appearance, logos, and redirect notes.
- 💻 **Admin Portal**: Instant updates to target URLs or images without reprinting materials.
- 🔐 **Password Protection**: Secure admin dashboard authentication.

👉 <a href="https://qrdemo.2020818.xyz" target="_blank">Live Demo</a> (Password: `demo`)

### Screenshots

- **Login Page**  
  ![preview-login](./images/preview-login.png)

- **Admin Dashboard 1: Standard Link**  
  ![preview-admin](./images/preview-admin.png)

- **Admin Dashboard 2: WeChat QR Code**  
  ![preview-admin2](./images/preview-admin2.png)

- **QR Code Preview**  
  ![preview-qr](./images/preview-qr.png)

- **WeChat Mobile Scanning View**  
  ![preview-wechat](./images/preview-wechat.jpg)

### Step-by-Step Deployment Guide

1. Log in to Cloudflare and create a **D1 SQL Database**.  
   ![](./images/1_1.png) ![](./images/1_2.png)
2. Copy your **D1 Database ID**.  
   ![](./images/2_1.png)
3. **Fork** this repository to your GitHub account.  
   ![](./images/3.png)
4. Open and edit `wrangler.toml` in your forked repository.  
   ![](./images/4_1.png)
5. Replace `database_id` under `d1_databases` with your copied D1 Database ID and commit changes.  
   ![](./images/5_1.png)
6. Go back to Cloudflare and create a **Workers** project.  
   ![](./images/6.jpg)
7. Connect your GitHub account, choose the repository, and click **Save and Deploy**.  
   ![](./images/7.jpg)
8. Attach a custom domain for better access stability (Optional but recommended).  
   ![](./images/9.jpg) ![](./images/10.jpg)
9. Configure an admin access password in environment variables.  
   ![](./images/11.png)

---
