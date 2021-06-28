4.7. Thẻ iframe (Không tốt cho SEO -> it dùng)
- Nhúng (kéo) nội dung của trang về trang hiện tại
    <iframe src="đường dẫn của một trang web khác" height="" width="" /></iframe>

4.8. Các thẻ dành cho Form

<form action="" method="GET/POST">
    <label>Content</label>
    <input type="type" size="" placeholder="" />

    <textarea cols="number" rows="number" placeholder=""></textarea>
    <select>
        <option value=""></option>
    </select>
    <button>Content</button>
</form>

Detail:
    - action: Nơi tiếp nhận dữ liệu gửi đến
    - method: Phương thức gửi dữ liệu đi
    - label: Mô tả thông tin cho một input
    - placeholder: mô tả thông cho input
    - type:
        + text: Nội dung nhập là string (Chuỗi)
        + password: Mã hóa nội dung nhập vào
        + radio: Lựa chọn duy nhất
        + checkbox: Cho phép chọn lựa nhiều lựa chọn
        + email: Chỉ cho phép nhập định dạng email
        + number: cho phép nhập dữ liệu là kiểu số
        + date: nhập date
        + time: nhập time

    - select: Cho phép lựa chọn từ các option có sẵn, tạo sự nhất quán về dữ liệu
    - textarea: Nhập dữ liệu với nhiều dòng
        + cols="number"
        + rows="number"

    button: tạo button cho form, validate form khi submit
        type="submit"
        type="reset"

4.9 Table trong HTML

Thành phần
- Hàng: nhiều cột
- Cột: 1 cột chỉ thuộc 1 hàng

<table 
    border="number"
    bgcolor='mã màu'
    cellspacing="number"
    cellpading='number'
    width="number"
    align="left | center | right">
    <tr bgcolor='mã màu' align="">
        <td bgcolor='mã màu' align="" valign="top|middle|bottom">1</td>
        <td>2</td>
        ..........
        <td>N</td>
    </tr>
    <tr>
        <td>1</td>
        <td>2</td>
        ..........
        <td>N</td>
    </tr>
</table>

Chú ý: Số cột của các dòng luôn phải bằng nhau

Gộp cột cùng dòng: 
    - Sử dụng thuộc tính colspan="số cột cần gộp"

Gộp cột khác dòng: 
    - Sử dụng thuộc tính rowspan="số cột cần gộp"