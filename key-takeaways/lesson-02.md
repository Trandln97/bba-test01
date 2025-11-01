## Lesson 2
### Version control system
**Version Control System (VCS)** = **Hệ thống quản lý phiên bản** <br> Dùng để theo dõi và quản lý lịch sử thay đổi của mã nguồn. <br> Có ba loại chính: <br> - **Local:** lưu ở máy cá nhân <br> - **Centralize:** lưu ở môt máy chủ tập trung <br> - **Distributed:** lưu ở nhiều máy khác nhau <br>

| Tiêu chí    | Local         |   Centralized    |    Distributed |
| :---------- | :------------ | :--------------: | -------------: |
| Cộng tác    | Không         |        Có        |             Có |
| Offline     | Có            |      Không       |             Có |
| Tốc độ      | Nhanh         |  Phụ thuộc mạng  |          Nhanh |
| Backup      | Không tự động | Có (trên Server) | Có (mọi clone) |
| Độ phức tạp | Thấp          |    Trung bình    |            Cao |



Phổ biến nhất hiện nay *Distributed Version Control System.* <br>


### Git&Github
| Git                                                    | Github                                                                          |
| :----------------------------------------------------- | :------------------------------------------------------------------------------ |
| Là một phần mềm                                        | Là một dịch vụ web                                                              |
| Cài trên máy cá nhân                                   | Host trên website                                                               |
| Là một command line tool                               | Là một công cụ có giao diện                                                     |
| Công cụ quản lý phiên bản, đưa file vào Git repository | Là nơi để upload Git repository lên                                             |
| Có các tính năng của VCS                               | Có tính năng của VCS và một số tính năng khác (Github Actions, Github Co-pilot) |

<br>

### Git
#### Git - three states
1. ***Working Directory*** <br> các file mới hoặc file có thay đổi
2. ***Staging Area*** <br> các file đưa vào vùng chuẩn bị commit (tạo ra các phiên bản)
3. ***Repository*** <br> các commit (các phiên bản)

#### Git - tổng hợp  
- Khởi tạo repo local ***git init***  -- làm một lần duy nhất
- Tạo repo Github và liên kết với repo local ***git remote add origin <ssh_link>***  -- làm một lần duy nhất
- Thêm file vào staging ***git add .*** -- làm mỗi khi có thay đổi
- Commit file ***git commit -m"<message>"*** -- làm mỗi khi có thay đổi
- Push code ***git push origin main*** -- làm mỗi khi có thay đổi

*Question* Trường hợp mỗi repo muốn một tên khác nhau thì sao?
*Answer* Set username, password riêng trong từng repo (đứng tại terminal của repo đó)
 
 - Xem trạng thái file ***git status***
 - Kiểm tra danh sách commit ***git log***

### Git - commit convention
***Type: short description***
- Type <br> - **chore:** sửa nhỏ lẻ, chính tả, xoá file không dùng tới <br> - **feat:** thêm tính năng mới, test case mới <br> - **fix:** sửa lỗi một test trước đó
- Short description: mô tả ngắn gọn (50 ký tự), tiếng Anh hoặc tiếng Việt không dấu


## JavaScript basic
1. ***JavaScript - Hello world***
**console.log("nội dung);**
<br>
*Question* Nếu file nằm trong thư mục, thì câu lệnh sẽ như thế nào? <br>
*Answer* node <đường dẫn tới file>

2. ***JavaScript - Comment***
<br>
**Comment** là một cách vô hiệu hoá tạm thời đoạn code. <br>
Có 2 cách comment: <br> - thêm // vào trước đoạn code, có thể thêm vào giữa dòng <br> - thêm /* vào trước dòng đầu tiên và */ sau dòng cuối cùng. 

3. ***JavaScript - Biến & hằng***
<br>
**Biến** là khái niệm cơ bản nhất trong lập trình <br>
Từ biến trong “biến thiên”, có nghĩa là thay đổi được. <br>
Khai báo biến:
**<từ khoá> <tên biến> = <giá trị>** <br>
Sử dụng:
**console.log(biến);**
<br>
*Question* var và let khác nhau thế nào? Khi nào dùng var, khi nào dùng let <br>
*Answer* <br> - Cú pháp: let ra đời sau và an toàn hơn var (ít được sử dụng hiện nay) <br> - var cho phép khai báo lại còn let thì không, với một đoạn code dài có thể quên rằng đã khai báo trước đó nên dẫn đến nhầm lẫn. <br> - var có phạm vi global, let phạm vi them block.
<br> <br>
**Hằng** là các giá trị không thay đổi được <br> Từ hằng trong từ hằng số <br> Hằng dùng để khai báo các giá trị không có nhu cầu thay đổi hoặc
giá trị chỉ dùng một lần <br> 
Khai báo hằng: <br>
**<từ khoá> <tên hằng> = <giá trị>** <br>
Từ khoá: **const** <br>

*Question* Khi nào dùng biến, khi nào dùng hằng? <br>
*Answer* <br> - Mặc định thì dùng **const**, giúp an toàn hơn, dễ đọc hơn <br> - Chỉ dùng let khi chắc chắn cần gán giá trị <br> - Không dùng var <br>


4. ***JavaScript - Data type***
<br>
Một biến/hằng luôn có kiểu dữ liệu. 
<br>
Kiểu dữ liệu là loại dữ liệu mà biến đó đang mang.
<br>
Trong JavaScript, có 8 kiểu dữ liệu, chia làm 2 nhóm chính: <br>
- Kiểu nguyên thuỷ (primitive types) <br> - Number: Số nguyên và số thực <br> - String: Chuỗi ký tự  <br> - Boolean: Giá trị logic true vs false <br> - Undefined <br> - Null  <br> - Symbol  <br> -BigInt
<br>
- Kiểu tham chiếu (reference types): - Object <br>
  
Để nối chuỗi từ hai biến, ta sử dụng dấu cộng (+):
- const str1 = “Hello”;
- const str2 = “Playwright Viet Nam”
- console.log(str1 + str2); // HelloPlaywright Viet Nam` 
<br>

*Question* Làm sao để biết một biến có kiểu dữ liệu gì? <br>
*Answer* <br> - Đọc code xem khai báo thế nào <br> - Sử dụng hàm typeof <br>

1. ***JavaScript - Toán tử so sánh***  
<br>
**Toán tử so sánh** dùng để so sánh 2 toán hạng. Kết quả trả về ở dạng boolean <br>
Có ba nhóm chính: <br> 
- So sánh không bằng **!**
- So sánh lớn hơn, nhỏ hơn **> < >= <=**
- So sánh bằng **== vs ===** <br> - So sánh "==" (Loose Equality) --> so sánh giá trị sau khi chuyển đổi kiểu dữ liệu<br> - So sánh "===" (Strict Equality) --> So sánh giá trị và kiểu dữ liệu, không chuyển đổi kiểu dữ liệu

*Question* Khi nào so sánh "==", khi nào so sánh "===" <br>
*Answer* <br> - Luôn dùng so sánh "===" <br> - Chỉ dùng "==" khi có chủ đích, muốn so sánh mà không quan tâm tới kiểu dữ liệu <br>
   
6. ***JavaScript - Toán tử logic***
<br>
**Toán tử logic** dùng để kết hợp nhiều điều kiện và trả về boolean
- && (AND): trả về đúng nếu cả 2 vế của mệnh đề đúng
- || (OR): trả về đúng nếu một trong 2 vế của mệnh đề đúng
  
7. ***JavaScript - Toán tử một ngôi***
<br>
**Toán tử một ngôi** là toán tử chỉ cần một toán hạng để thực hiện. <br>
- Prefix: toán tử nằm ở phía trước - tăng trước, trả về sau <br> - ++x; <br> - --x;
- Postfix: toán tử nằm ở phía sau - trả về trước, tăng sau <br> - x++; <br> - x--;

8. ***JavaScript - Toán tử toán học***
<br>
**Toán tử toán học** tương tự như các phép tính cộng trừ nhân chia +, -, *, /

9. ***JavaScript - Câu điều kiện***
<br>
Trong JavaScript, có các loại câu điều kiện:
- if
- if...else
- if...else if...else
- switch...case
<br>
Cú  pháp: if <br>
```
if (<điều kiện>) {
   // code...
}
```

10.  ***JavaScript - Vòng lặp***
<br>
Vòng lặp dùng để lặp lại một đoạn logic.  
Có thể lặp một số lần nhất định, hoặc lặp vô hạn, tùy theo điều kiện dừng.<br>
Trong JavaScript, có các loại vòng lặp:

- `for (i)`
- `for...of`
- `forEach`
- `for...in`
- `while`
- `do...while`

Cú pháp vòng lặp `for (i)`

```
for (<điều kiện khởi tạo>; <điều kiện lặp>; <cập nhật>) {
    // code
}
```
Trong đó:
- Điều kiện khởi tạo: chạy một lần duy nhất, khi vòng lặp bắt đầu. <br>
- Điều kiện lặp: nếu đúng thì chạy tiếp, sai thì dừng. <br>
- Cập nhật: chạy vào mỗi cuối vòng lặp, để thay đổi giá trị của biến đếm.