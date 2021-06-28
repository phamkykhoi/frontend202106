1. Have link repo
- git clone git@github.com:htkhoi/frontend06.git

2. Go to folder project
    cd frontend06

Yêu cầu.
    Tạo branch mới
        branch name: hovaten/register
        -> git checkout -b your_branch_name

    git branch (kiểm tra)

* Xử lý conflict code
- checkout to target_branch
    Ex: git checkout develop

I. HTML Language
1. HTML là gì?
2. Tại sao phải sử dụng HTML
3. Cấu trúc của một trang html
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>HTML Structure Page</title>
        <link /> 
    </head>
    <body>

    </body>
    </html>

4. Các thẻ HTML thường sử dụng

4.1. Nhóm thẻ xử lý văn bản
    - font: Qui định cỡ chữ và màu chữ
      <font color="red" size="6">
        font: Qui định cỡ chữ và màu chữ
      </font>
      thuộc tính color: Qui định màu
      thuộc tính size: Qui định cỡ chữ

    - strong/b
        Quy định in đậm cho văn bản
        <strong>
            Quy định in đậm cho văn bản
        </strong>

        <b>
            Quy định in đậm cho văn bản
        </b>

    - p
        Thẻ thể hiện đoạn văn bản
        <p>Nội dung</p>
        Thuộc tính align: left|right|center

    - small
        Qui định cỡ chữ nhỏ hơn so với cỡ chữ hiện tại
        <small>Nội dung</small>

    - <br/>: Xuống dòng
    - <u>Nội dung</u>: Tạo gạch chân
    - <del>Nội dung</del>: Thể hiện xóa văn bản
    - <hr/>: Tạo đường kẻ ngang
    - <i>Nội dung</i> -> In nghiêng văn bản
    - thẻ h
        Thể hiện tiêu đề cho nội dung
        <h1>Nội dung</h1>
        <h2>Nội dung</h2>
        <h3>Nội dung</h3>
        <h4>Nội dung</h4>
        <h5>Nội dung</h5>
        <h6>Nội dung</h6>

4.2 Thẻ liên kết
    <a href="" title="" target="">Nội dung cho liên kết</a>

    href: Link liên kết
    title: Mô tả cho liên kết
    target: Qui định cách mở liên kết


4.3. Thẻ thể hiện hình ảnh
    <img src="" alt="" width="" height="" />

    src: đường dẫn của file ảnh
    alt: Mô tả cho ảnh (hiển thị khi đường dẫn lỗi)
    width: Độ rộng của ảnh
    height: Qui định độ cao của ảnh

4.4. Thẻ danh sách
    Danh sách tuần tự
        <ol>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <li>Item 5</li>
        </ol>

    Danh sách bất tuần tự
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <li>Item 5</li>
        </ul>

4.5. Nhúng ảnh với svg
    <svg aria-hidden="true" width="100" focusable="false" data-prefix="fab" data-icon="free-code-camp" class="svg-inline--fa fa-free-code-camp fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M97.22,96.21c10.36-10.65,16-17.12,16-21.9,0-2.76-1.92-5.51-3.83-7.42A14.81,14.81,0,0,0,101,64.05c-8.48,0-20.92,8.79-35.84,25.69C23.68,137,2.51,182.81,3.37,250.34s17.47,117,54.06,161.87C76.22,435.86,90.62,448,100.9,448a13.55,13.55,0,0,0,8.37-3.84c1.91-2.76,3.81-5.63,3.81-8.38,0-5.63-3.86-12.2-13.2-20.55-44.45-42.33-67.32-97-67.48-165C32.25,188.8,54,137.83,97.22,96.21ZM239.47,420.07c.58.37.91.55.91.55Zm93.79.55.17-.13C333.24,420.62,333.17,420.67,333.26,420.62Zm3.13-158.18c-16.24-4.15,50.41-82.89-68.05-177.17,0,0,15.54,49.38-62.83,159.57-74.27,104.35,23.46,168.73,34,175.23-6.73-4.35-47.4-35.7,9.55-128.64,11-18.3,25.53-34.87,43.5-72.16,0,0,15.91,22.45,7.6,71.13C287.7,364,354,342.91,355,343.94c22.75,26.78-17.72,73.51-21.58,76.55,5.49-3.65,117.71-78,33-188.1C360.43,238.4,352.62,266.59,336.39,262.44ZM510.88,89.69C496,72.79,483.52,64,475,64a14.81,14.81,0,0,0-8.39,2.84c-1.91,1.91-3.83,4.66-3.83,7.42,0,4.78,5.6,11.26,16,21.9,43.23,41.61,65,92.59,64.82,154.06-.16,68-23,122.63-67.48,165-9.34,8.35-13.18,14.92-13.2,20.55,0,2.75,1.9,5.62,3.81,8.38A13.61,13.61,0,0,0,475.1,448c10.28,0,24.68-12.13,43.47-35.79,36.59-44.85,53.14-94.38,54.06-161.87S552.32,137,510.88,89.69Z"></path></svg>

4.6. Phân loại thẻ

- block Đại diện là div
    Có độ rộng là toàn màn hình
    Chiều cao bằng nội dung nó chứa

- inline Đại diện là span
    Chiều cao và rộng bằng nội dung nó chứa

- none   đại diện  link, meta
    Không hiển lên trình duyệt

