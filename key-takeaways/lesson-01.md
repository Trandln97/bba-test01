## Lesson 1
**Playwright** 
1. là một *framework*, tiền thân là *Puppeteer*, được **Microsoft** phát triển và tài trợ.
2. ####  Ưu điểm của Playwright

- **Cross-browser** – Hỗ trợ Chromium, Firefox, WebKit.  
- **Cross-platform** – Chạy trên Windows, macOS, Linux.  
- **Auto waiting & auto-retry assertion** – Giúp kiểm thử ổn định hơn.  
- **Detailed report** – Có báo cáo đầy đủ cho từng trình duyệt.

**Tool setup**
1. **NVM**
- **NVM (Node Version Manager)** = Công cụ quản lý các phiên bản **Node.js**  
- **Node.js** = chạy code JavaScript

2. **VSCode** <br>
VS Code = IDE = integrated developmet environment code
- Cài đặt VSCode: https://code.visualstudio.com/
- Extension Playwright
- Đổi terninal mặc định => Git Bash
3. **Git** quản lý source code 
- Config username <br> *git config --global user.name "<tên của bạn>"*
- Config email <br> *git config --global user.email "<email của bạn>"*
- Config branchdefault <br> *git config --global init.defaultBranch main*

4. **GitHub** chia sẻ code, làm việc nhóm <br>
***Kết nối với Github***
- Tạo SSH key <br> *ssh-keygen -t rsa -b 4096 -C
"your_email@example.com"*
- Lấy nội dung ssh key <br> cat ~/.ssh/id_ed25519.pub
- Kiểm tra kết nối <br> ssh -T git@github.com
- Truy cập https://github.com/settings/ssh/new để thêm SSH key

***Đưa code lên Github***
- Tạo repo
- Khởi tạo <br> - Khởi tạo ở local ***git init*** <br> - Liên kết repo vừa tạo với Git ***git remote add origin <ssh_link>*** <br> - Thêm code ***git add .*** <br> - Thêm commit ***git commit -m"init project"*** <br> 
- Push code ***git push origin main***

***Invite collaborators*** <br>
Truy cập https://github.com/<username>/<repo_name>/settings/access <br>
Add collaborator



