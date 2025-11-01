## Lesson 3
### Git - undo
**File staging -> Working Directory**
<br>
- Restore file cụ thể **git restore --staged <file_name>**
- Restore toàn bộ các file **git restore --staged .**

**File staging -> Working Directory** undo-commit
- Reset một commit **git reset HEAD~1**
- Reset N commit **git reset N~1**
<br>
Commit đầu tiên không thể bị reset. Nếu muốn reset → xoá thư mục .git đi rồi init lại

### Git - Branching
**Git - pull code** lấy code từ server về **git pull origin main** <br>
Git sử dụng nhánh (branch) để tạo ra các “phiên bản” riêng của code, tránh ảnh hưởng tới “bản gốc”. <br>
Khi khởi tạo repo (git init), nhánh mặc định sẽ được tạo ra. <br>
**Một số câu lệnh với nhánh**
- Danh sách nhánh **git branch**
- Tạo nhánh mới **git branch <tên_branch>**
- Chuyển sang nhánh mới **git checkout <tên_branch>**
- Vừa tạo, vừa chuyển sang nhánh mới **git checkout -b <tên>**
- Xoá branch **git branch -D <tên nhánh>**, đứng ở nhánh khác trước khi xoá.
- Để trở về revision (đi về thời điểm xem lúc ấy code có gì) **git checkout <commit_hash>**  <br>
  
*Luôn pull code về trước khi tạo nhánh mới*

### Git - ignore file
File `.gitignore` là một file cấu hình quan trọng trong Git, giúp bạn chỉ định những file và thư mục nào sẽ **không được theo dõi (untracked)** bởi Git.
Trong dự án thường có nhiều file không cần thiết phải đưa vào Git repository, như:
- File tạm thời của hệ điều hành: `.DS_Store`, `Thumbs.db`  
- Thư mục dependencies: `node_modules/`, `vendor/`  
- File build và artifacts: `dist/`, `build/`, `*.exe`  
- File cấu hình cá nhân: IDE settings, environment variables  
- File nhạy cảm: API keys, passwords, certificates  
- File log và database local
<br>

Cú pháp file `.gitignore`

```gitignore
# Comment - dòng bắt đầu bằng # là ghi chú

# Ignore file cụ thể
secret.txt

# Ignore tất cả file có extension .log
*.log

# Ignore thư mục
node_modules/
build/
```
<br>

## JavaScript 
1. **JavaScript - Convention**
**Convention** = quy tắc  
Convention giúp tổ chức code và dự án theo chuẩn, dễ đọc và dễ bảo trì.  
Có nhiều loại convention:  
- Đặt tên file  
- Đặt tên biến  
- Đặt tên commit  

Một số convention phổ biến:
- **snake_case**: trông giống con rắn; tất cả các chữ viết thường, cách nhau bởi dấu gạch dưới `_`  
- **kebab-case**: trông giống que xiên Hàn Quốc; tất cả các chữ viết thường, cách nhau bởi dấu gạch ngang `-`  
- **camelCase**: trông giống con lạc đà; chữ đầu viết thường, các chữ sau viết hoa chữ cái đầu tiên  
- **PascalCase**: tên của nhà toán học Pascal; tất cả các chữ cái đầu viết hoa  

2. **JavaScript - console.log nâng cao**
<br>
**Console.log với ` và "**

```javascript
console.log('Toi la Nga');
console.log('Toi la Nga');
console.log("Toi la Phong");

let variable_name = "Nga";
console.log(`${variable_name}`);

let name = "Nga";
console.log(`Toi la ${name}`);

// Nối chuỗi với dấu cộng
console.log("Toi ten la " + name + "");
```
3. **JavaScript - Object**
<br>
### Object trong JavaScript

**Object** là một trong những kiểu dữ liệu quan trọng nhất trong JavaScript, dùng để lưu trữ dữ liệu dạng **key-value**. <br>
**Object** = đối tượng, dùng để lưu trữ tập hợp các giá trị vào cùng một **biến** hoặc **hằng số**.
Cú pháp
```javascript
let object_name = {
    <key>: <value>,
    <key2>: <value2>,
    ...
};
```
Thay đổi object với `const` trong JavaScript

Đối với object, nếu bạn cố gắng gán một object mới cho biến được khai báo bằng `const`, bạn sẽ gặp lỗi.  

Ví dụ:
```javascript
const student = {"name": "alex", "age": 20};
student = {"name": "Nagi", "age": 18}; // Lỗi
```
Thêm thuộc tính mới vào Object

Để thêm thuộc tính mới vào object, chúng ta có thể dùng **dấu chấm (`.`)** hoặc **ngoặc vuông (`[]`)**.

```javascript
let bike = {
    make: 'Yamaha',
    model: 'YZF-R3'
};

// Thêm thuộc tính bằng dấu chấm
bike.color = "Blue";

// Thêm thuộc tính bằng ngoặc vuông (dành cho key có dấu cách hoặc ký tự đặc biệt)
bike["price new"] = 100;

console.log(bike);
```
Xóa thuộc tính của Object

Để xóa một thuộc tính của object, chúng ta dùng **hàm `delete`**.

```javascript
let employee = {
    name: 'Le Van C',
    age: 30,
    department: 'HR'
};

// Xóa thuộc tính age
delete employee.age;

console.log(employee);
```