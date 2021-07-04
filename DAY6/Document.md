CSS Langauge

## 1. Vì sao sử dụng CSS
- Tránh khai báo quá nhiều thẻ html (giúp trang load nhanh hơn)
- Coding nhanh hơn
- Maintain nhanh hơn (bảo trì nâng cấp)
- Giúp chạy được website trên mọi device (responsive)

## Cách sử dụng CSS cho một trang (Khai báo)
- Khai báo một file CSS
    fileName.css

- Khai báo CSS cho một trang
    * Khai báo nội tuyến (internal)
        <head>
            <style>
                // Your code CSS
            </style>
        </head>
    * Khai báo trực tiếp trên thẻ HTML thông qua thuộc tính style
    * Khai báo ngoại tuyến (external)

## Độ ưu tiên trong CSS
- Sẽ ưu tiên cho những thuộc tính đc định cuối cùng trong toàn bộ chương trình (1)
- !important: Khi chỉ dùng 1 lần important thì thuộc tính có important sẽ có độ ưu tiên cao nhất (2)
- Nếu có nhiều important thì về quy luật (1)  (3)
- Giữa class và ID: ID có độ ưu tiên cao hơn
- Giữa class hoặc ID và tên thẻ HTML
    -> Class có độ ưu tiên cao hơn tên thẻ
    -> ID có độ ưu tiên cao hơn tên thẻ

## Selector trong CSS
- Cú pháp tổng quan 
    selector {
        // Code CSS để làm thay đổi tính chất của thẻ HTML
    }

    selector??
        - Chọn thông qua tên thẻ
            Ex: h3 {
                    // Your code CSS
                }
        - Chọn thông qua tên class
            Ex: .red {
                color: red;
            }

        - Chọn thông qua tên ID
            Ex: #yellow {
                color: red;
            }

        - Qua thuộc tính của thẻ HTML
            Ex:
                input[type='text'] {
                    border:  2px solid red;
                }

                input[type='email'] {
                    border:  2px solid blue;
                }

        - Chọn theo first-child & last-child
            :first-child: Lấy ra thẻ đầu tiên nằm ngay sau thẻ mở body
            :last-child: là thẻ cuối cùng nằm trước thẻ đóng body

        - Chọn thẻ theo thứ tự
            nth-child(number): Lấy vị trí tương đối của thẻ HTML trên trang

            nth-of-type(number): Lấy vị trí tuyệt đối theo tên thẻ

        Note:
            - Có thể dùng nhiều selector cho 1 hoặc nhiều thuộc tính CSS
            - Cú pháp > 
