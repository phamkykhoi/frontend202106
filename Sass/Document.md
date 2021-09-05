Sasss
- Base on Ruby
- Có 2 phiên bản SCSS & SASS
- SCSS: Sử dụng nhiều, cú pháp giống với CSS

SCSS
    body {
        color: red;
    }

    .header {
        @include menu;
    }

SASS
    body
        color: red
    
    .item
        background: blue
    
    
* Sass Concept

1. Biến trong SASS

- Đặt tên biến
    $mainTextColor: orange;
Note: Tách tất cả biến trong project vào 1 file


2. Nested
    nav {
        ul {
            margin: 0px;
            padding: 0px;
            list-style-type: none;

            li {
            display: inline-block;

                a {
                    display: block;
                    text-decoration: none;
                    color: $textColor;
                    font-size: $normalSize;
                    padding: 15px;
                    background: $linkBgColor;

                    &:hover {
                        background: $linkBgHover;
                        color: $linkColorHover;
                    }
                }
            }
        }
    }

3. Mixin
- Cú pháp khai báo
    @mixin mixinName {
        css attribte 1
        css attribte 2
    }

- Sử dụng mixin
    @include tên_mixin;

4. Extend
5. If Else
6. Loop (for, foreach)
7. foreach
8. function
- Khai bao
    @function tenFunction($param2, $param2,...) {
        // You logic
        @return value
    }

Hotreload
Sass in project

