Javascript

1. Javascript là gì? Tại sao phải sử dụng Javascript?
2. Khai báo trong Javascript

C1: Nội tuyến trong trang HTML bằng cách sử dụng thẻ
    <script>
        // Your code Javascript
    </script>

C2: Sử dụng Javascript trực tiếp trên thẻ HTML thông qua event (inline)
    events:
        onload=''
        onClick=''
    
    Ex:
    <body onload="alert('Chào mừng bạn đến với khoá Javascript')">
    
C3: Khai báo một file *.js rồi nhúng vào trang thông qua thẻ <script></script> (Ngoại tuyến)

## Lưu ý:
    Khi khai báo thẻ <script> để sử dụng Javascript, Luôn luôn phải khai báo sau cùng tất cả các thẻ html khác trong body.

3. Biến trong Javascript
- Để khai báo biến trong Javascript chúng ta sử dụng 3 từ khoá var, let, const

4. Kiểu dữ liệu trong Javascript
- String
- Number  (JS: Have no bigInt, float, integer,...)
- Object (Json)
- Array
- Boolean
- undefined
- null

-> Để xem kiểu dữ liệu của một giá trị
    typeof($variable)

5. Nối chuỗi trong Javascript
- Để nối chuỗi có 2 cách
    + Sử dụng dấu +
    + Sử dụng cú pháp `${variable}` 
      (Nội suy biến trong Javascript)

6. Quy tắc đặt tên biến trong Javascript
- Không được bắt đầu bằng số
- Không chứa ký tự đặc biệt hoặc khoảng trắng
    -> Ký tự đặc biệt #, @, *, %, ^
- Không được trùng với keywords của Javascript

7. Các phép toán và phép so sánh trong Javascript

* Các phép toán
    - Phép cộng (+)
    - Phép trừ  (-)
    - Phép nhân (*)
    - Phép chia (/)
    - Phép chia lấy dư (%)

* Các phép so sánh
    - So sánh bằng (==)
    - So sánh lớn hơn (>)
    - So sánh lớn hơn hoặc bằng (>=)
    - So sánh nhỏ hơn (<)
    - So sánh nhỏ hơn hoặc bằng (<=)
    - So sánh khác (!=)
    - Phủ định của một kết qủa (!)
    - So sánh đồng nhất (===)
    - So sánh khác đồng nhất (!==)

-> Tất cả các phép so sánh đều trả về kiểu dữ liệu là boolean