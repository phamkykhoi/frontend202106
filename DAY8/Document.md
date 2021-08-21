CSS

1. Background

- Tạo ảnh nền hoặc màu nền cho một thẻ HTML

Cú pháp:

    * Cách viết thu gọn của background:

        background: color image repeat position attachment size;

            - color: Qui định màu nền cho thẻ
            - imgage: url(path_image)
                Qui định ảnh nền cho một thẻ HTML
            - repeat: repeat-x, repeat-y , no-repeat
                Cho phép lặp lại ảnh nền
            - position: Qui định vị trị của ảnh nền
            - attachment: Fix or not with scroolbar
            - size: Dùng cho ảnh nền, qui định kích thước ảnh nền

    * Cách viết chi tiết theo từng thuộc tính
        background-color: mã màu
        background-image: url(đường dẫn ảnh)
        background-repeat: no-repeat, repeat-x, repeat-y
        background-postion: top right bottom left (?px)
        background-attachment: scroll | fixed 
        background-size: ?px, %, cover, contain

* Kỹ thuật sprite css
- Bản chất là sử dụng background-postion

2. Float & clear
- Những thẻ cùng sử dụng float thì sẽ nằm ngang hàng nhau (Điều kiện là cùng kiểu float: left | right)
- Một thẻ nằm sau thẻ sử dụng float sẽ bị tràn lên và nằm phía dưới thẻ mang float
Lưu ý:
    Khi sử dụng float thì nên float theo một chiều (left hoặc right)
    Clear: Không muốn bị tràn lên thì clear theo float

        clear: both: clear cho cả 2

    float: left | right
    clear: left | right | both;

3. Position & Z-index
- postion: relative | absolute
    ->  left: ?px
        right: ?px
        bottom: ?px
        top: ?px

- z-index: number