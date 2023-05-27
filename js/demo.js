/** Function (Hàm)
 * ? + Hàm không có tham số, không có kết quả trả về (return)
 * ? ++ Gom nhóm các dòng code có chung mục đích xử lý
 * ? +++ Gắn vào các event (tương tác của user)
 * 
 * 
 * ? + Hàm có tham số, không có kết quả trả về (return)
 * ? + Hàm có tham sô, có kết quả trả về (return)
 * ? ++ Tái sử dụng, viết code gọn hơn
 */

// Hàm không có tham sô, không có kết quả trả về (return)
function showInfo() {
    console.log('Name: Nguyễn Văn ...');
}

showInfo();

// Hàm có tham số, không có kết quả trả về (return)
function sum() {
    console.log(5 + 6);
}

sum();

// param: tham số
// Phạm vi sử dụng của tham sô: chỉ bên trong hàm khai báo nó
function sum2(num1, num2) {
    console.log(num1 + num2);
}

// Sử dụng (Call function)
// Đối số (Arguments) (Giá trị truyền vào khi gọi hàm)
sum2(5,6);
sum2(10,11);

// ? Phạm vi biến trong ES5
// Global scope (toàn cục)
// Local/ function scope (cục bộ)

var fullName = 'Nguyễn Văn ...';
function sum3(num1,num2) {
    // Khai báo trong hàm sum3
    // Phạm vi trong hàm/ cục bộ
    var total = 0;
    total = num1 + num2;
    console.log(total);
    console.log(fullName);

    return total;  // Lệnh trả kết quả ra khỏi hàm và dừng hàm
}

var ketQua = sum3(11,12);
console.log(ketQua);
console.log(sum3(11,12));