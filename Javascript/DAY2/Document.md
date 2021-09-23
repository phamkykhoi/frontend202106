Javascript (Part 02)

1. Biểu thức điều kiện

gender = 1  // 1: Name, 2: Nữ

* Một cửa hàng có chương trình giảm giá khi mua sản phẩm
  Giá sản phẩm: 5000.000
  - Nếu khách là nữ sẽ được giảm 30%
  - Nếu khách là nam sẽ được giảm 15%

  Yêu cầu: In ra màn hình tổng tiền mà khách phải trả

1.1 IF ELSE

Syntax simple
    if (condition) {
        // When condition true
    } else {
        // When condition false
    }

Syntax multil condition
    if (condition1) {
        // When condition1 true
    } else if (condition2) {
        // When condition2 true
    } else if (condition3) {
        // When condition3 true
    } else {
        // False
    }

* inline condition
    condion ? true : false

2. Vòng lặp
- Ý nghĩa của vòng lặp:

* In ra màn hình giá trị từ 1 -> 1000
  In ra màn hình giá trị từ 20 -> 1

    document.write(1)
    document.write(2)
    document.write(3)
    document.write(4)
    .....
    .....
    document.write(10)

* while
Cú pháp:

    while(điều_kiện) {
        // Your logic
    }

* Các cú pháp điều khiển vòng lòng lặp trong javascript
- break: Thoát khỏi vòng lặp
- continue: Bỏ qua qua giá trị đang lặp
- Cả 2 cái trên sẽ sử dụng kết hợp với if else

* for
    Cú pháp:

        for (start; condition; start +/-) {
            
        }


* Sử dụng vòng lặp lồng nhau
- In ra bảng cửu chương từ 
    2  -  10

2 x 1 = 2       3 x 1 = 3
2 x 2 = 4       3 x 2 = 6
...........     ...........
2 x 10 = 20     3 x 10 = 30

3. Function trong Javascript

- Cú pháp:
    function functionName() {

    }

    let getName = function() {

    }

    let getEmail = () => {

    }

    const testFunction = () => {

    }

- Có thể có, hoặc không có tham số truyền vào

    function functionName(param1, param2,...) {

    }

    let getName = function(param1, param2,...) {

    }

    let getEmail = (param1, param2,...) => {

    }

    const testFunction = (param1, param2,...) => {

    }

- Để sử dụng 1 function
    funtionName()
    or 
    funtionName(param1, param2)

- Để trả về giá trị của 1 function, sử dụng return

Note: Không phải function cũng có giá trị trả về
    function fnName() {
        return value
    }

    function fnName() {
        document.write('Menu')
    }
