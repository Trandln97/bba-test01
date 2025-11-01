## Lesson 4
1. **JavaScript - phạm vi của biến**
**Phạm vi (scope)** xác định nơi mà biến có thể được truy cập.
JavaScript có ba loại phạm vi:
- **Toàn cục (Global)**: biến có thể truy cập từ bất kỳ đâu trong chương trình.  
- **Function scope (Hàm)**: biến chỉ có thể truy cập bên trong hàm được khai báo.  
- **Block scope (Khối)**: biến chỉ có thể truy cập bên trong khối.
  
**Hoisting** là cơ chế mà JavaScript **di chuyển các khai báo biến và hàm lên đầu phạm vi của chúng** trước khi thực thi code.  

2. **JavaScript - break và continue**
<br>
**break** dùng để **thoát hoàn toàn khỏi vòng lặp ngay lập tức**, bỏ qua mọi vòng lặp còn lại. <br>
Ví dụ `break` trong vòng lặp
```javascript
// Thoát khi tìm thấy giá trị
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // Thoát vòng lặp khi i = 5
    }
    console.log(i);
}
```
<br>

**continue** dùng để bỏ qua phần còn lại của vòng lặp hiện tại và chuyển sang lần lặp tiếp theo.

```javascript
const scores = [85, 92, 78, 95, 60, 88];

console.log("Điểm >= 80:");
for (let score of scores) {
    if (score < 80) {
        continue; // Bỏ qua điểm < 80
    }
    console.log(score);
}
```

3. **JavaScript - câu điều kiện nâng cao**
<br>
**if ... else** dùng để thực thi **mã khác nhau** cho trường hợp **true** và **false**.
<br>
còn **if...else...if** để kiểm tra nhiều điều kiện theo thứ tự
**Ternary operator** (toán tử điều kiện): Cách viết ngắn gọn cho if...else đơn giản.


4. **JavaScript - vòng lặp nâng cao**
<br>
***for...in Loop:***
Dùng để **duyệt qua các thuộc tính (properties) có thể đếm được** của một object, bao gồm cả thuộc tính kế thừa.
<br>
***forEach Method:***
Method của **Array** để thực thi một function cho mỗi phần tử.  
Không thể dùng break hoặc continue trong forEach.

5. **JavaScript - Utils function**
<br>
*Utils function là các hàm có sẵn của JavaScript, giúp việc code trở nên nhanh hơn.* <br>
 
***String utils***
- trim(): cắt khoảng trắng hai đầu  
  - trimStart(): cắt bên trái  
  - trimREnd(): cắt bên phải
- toLowerCase(): chuyển chuỗi thành chữ thường
- toUpperCase(): chuyển chuỗi thành chữ hoa
- includes(<substr>): kiểm tra chuỗi bao gồm chuỗi con <substr>
- replace(<chuỗi cần thay>, <chuỗi mới>): thay thế chuỗi con bằng chuỗi mới  
- split(<tách_bởi_gì>): tách chuỗi thành mảng dựa trên ký tự hoặc chuỗi  
- substring(<điểm_bắt_đầu>, <điểm_kết_thúc>): lấy 1 chuỗi con từ điểm bắt đầu tới điểm kết thúc  
- indexOf(<chuỗi kí tự>): tìm vị trí của chuỗi con
<br>

***Array utils***
- map: Tạo mảng mới bằng cách áp dụng một hàm lên từng phần tử của mảng gốc. Trả về mảng mới có cùng độ dài  
- filter: Tạo mảng mới chỉ chứa các phần tử thỏa mãn điều kiện trong hàm callback. Trả về mảng đã được lọc  
- find: Tìm và trả về phần tử đầu tiên trong mảng thỏa mãn điều kiện. Trả về undefined nếu không tìm thấy  
- push: Thêm một hoặc nhiều phần tử vào cuối mảng. Thay đổi mảng gốc và trả về độ dài mới  
- pop: Xóa và trả về phần tử cuối cùng của mảng. Thay đổi mảng gốc và làm giảm độ dài  
- shift: Xóa và trả về phần tử đầu tiên của mảng. Thay đổi mảng gốc và làm giảm độ dài  
- unshift: Thêm một hoặc nhiều phần tử vào đầu mảng. Thay đổi mảng gốc và trả về độ dài mới của mảng





