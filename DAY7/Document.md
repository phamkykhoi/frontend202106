CSS
- Khai báo
- Độ ưu tiên
- Selector
    + tagName, class, id
    ....................


* Cấu trúc của một thuộc tính CSS

    selector {
        cssAttribute: valueOfAttribute;
        ..............................
        ..............................
    }

    selector1, selector2,... {
        cssAttribute: valueOfAttribute;
        ..............................
        ..............................   
    }

* Các thuộc tính CSS thường sử dụng

1. Nhóm các thuộc tính dành cho text

### font-size: Qui định cỡ chữ

    Đơn vị: px, em, rem, %,... (unit)
    Cú pháp:
        font-size: number(unit)
        Ex: font-size: 12px;

### font-family: Qui định kiểu chữ
    Cú pháp
        font-family: kiểu font
        Ex: font-family: 'Tahoma'

### color: Qui định màu chữ
    Cú pháp:
        color: #000 / #fff / #DFFF00 / black / yellow / orange rbg (255, 191, 0)

### text-decoration: Qui định về đường kẻ cho văn bản
    text-decoration: overline      // Gạch chân phía trên
                     underline     // Gạch chân phía dưới
                     line-through  // Xóa văn bản

### font-weight: In đậm văn bản
    Cú pháp: 
        font-weight: bold; // In đậm
                     ~500  // Medium
                     700 ~ bold

### font-style: Thường dùng cho in nghiêng văn bản
    Cú pháp:
        font-style: italic;

### text-transform: Qui định chữ hoa chữ thường
    text-transform: uppercase   // Qui định tât cả về chữ hoa
                    capitalize  // Qui định tất cả chữ cái đầu tiên là chữ hoa
                    lowercase   // Qui định tất cả về chữ thường

### text-indent: Qui định thụt vào đầu dòng
    Cú pháp:
        text-indent: ?px;
        Ex: text-indent: 20px;

### line-height: Qui định khoảng cách giữa các dòng văn bản
    Cú pháp:
        line-height: ?px;

### letter-spacing: Qui định khoảng cách giữa

     letter-spacing: ?px

### text-align: Canh nội dung văn bản theo chiều ngang
    text-align: left       // Canh nội dung về bên trái
                right      // Canh nội dung về bên phải
                center     // Đưa nội dung ra giữa

### writing-mode: Xoay nội dung theo chiều của trục tọa độ
    
    writing-mode: horizontal-tb
                  vertical-rl
                  vertical-lr

2. Nhóm các thuộc tính qui định độ rộng và độ cao cho thẻ HTML

- width: ?px | ?% | ?vh | ? vw
- max-width: ?px | ?% | ?vh | ? vw
- min-width: ?px | ?% | ?vh | ? vw

- height: ?px | ?% | ?vh | ? vw
- max-height: ?px | ?% | ?vh | ? vw
- min-height: ?px | ?% | ?vh | ? vw

3. Thuộc tính border
Thứ tự các cạnh của thẻ: top - right - bottom - left

- Giúp tạo đường viền cho thẻ HTML
    border: ?px style color;
    border-left: ?px style color;

    border-width: ?px

    border-color: ??
    border-style: ?
    border-radius: ?px;

    border-left-color: value;
    border-left-style: value;

    border-top-left-radius: ?px;
    border-top-right-radius: ?px;
    border-bottom-right-radius: ?px;
    border-bottom-left-radius: ?px;

4. margin & padding
- Margin: cho phép tạo khoảng cách giữa các thẻ HTML với nhau tính từ đường viền bên ngoài của thẻ

- padding: Cho phép tạo khoảng cách từ đường viền bên đến nội dung mà nó chứa

* Cú pháp của margin
    Thu gọn:
        margin: top right bottom left;

        Ex: margin: 10px 20px 30px 40px;

    Chi tiết: 
        margin-left: ?px;
        margin-top: ?px;
        margin-right: ?px
        margin-bottom: ?px

* Cú pháp của padding
    Thu gọn:
        padding: top right bottom left;

        Ex: padding: 10px 20px 30px 40px;

    Chi tiết
        padding-left: ?px;
        padding-top: ?px;
        padding-right: ?px
        padding-bottom: ?px
