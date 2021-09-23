#### Các hàm xử lý mảng trong Javascript
- length
    - Lấy ra tổng số phần tử trong mảng
- forEach()
    - Duyệt các phần tử trong mảng

- splice(index, number)
    - Xoá phần tử của mảng từ vị trí index bao nhiêu, number: số phần tử sẽ xoá

- push
    - Thêm mới phần tử vào mảng
    
- pop
    - Xóa đi phần tử cuối cùng trong mảng

- shift
    - Xóa đi phần tử đầu tiên trong mảng

- sort
    - Sắp xếp các phần tử trong mảng theo alpha

- reverse
    - Đảo ngược các phần tử trong mảng

- concat()
    - Nối hai mảng với nhau

- map
    - Lấy dữ liệu trong mảng theo điều kiện cụ thể

#### DOM trong Javascript

##### DOM selector
    - selector by ID
        document.getElementById('ID_Name')
    - select by class
        document.getElementsByClassName('Class_Name')
    - selector by tag name
        document.getElementsByClassName('Tag_Name')
    
    * Query Selector in Javascript
        - Selector by class, ID, tag, ...
        - document.querySelector(selectorName)  // Chọn 1 thẻ
        - document.querySelectorAll(selectorName) // Chọn nhiều thẻ
        - selectorName:
            class: .name
            id:  : #name
            tag  : tagName
            attribute: tagName[attribute]

##### DOM event in Javascript
    selector.addEventListener('click', function() {
        // Your code
    })

##### DOM attribute in Javascript
    - setAttribute('attribute_name', value) // Set giá trị cho attribute
    - getAttribute('attribute_name') // lấy giá trị của attribute trên thẻ

##### DOM for Form in Javascript
    - .value: lấy ra giá trị input trên form

##### DOM HTML
    - innerHTML:
        Thay thế content hiện tại của thẻ
        Lấy ra content của thẻ

    - innerText
        Thay thế content hiện tại của thẻ
        Lấy ra content của thẻ
        (không chứ thẻ HTML)