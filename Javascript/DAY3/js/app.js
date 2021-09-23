

function showProductList($ignore8 = false) {
    let content = `<ul>`
        content += `<li>
                <p>Iphone 7</p>
                <small>10.000.000 vnđ</small>
            </li>`
        
        if (!$ignore8) {
            content += `<li>
                <p>Iphone 8</p>
                <small>12.000.000 vnđ</small>
            </li>`
        }
        
        content += `<li>
                <p>Iphone 9</p>
                <small>14.000.000 vnđ</small>
            </li>`

        content += `</ul>`
    
    
        return content
}

function bbc(x, y) {
    let content = '<table border="1" width="600">'

    for (let i = 1; i <= 10; i++) {
        content += '<tr>'

        let startNumber = x;
        let endNumber = y

        for (startNumber; startNumber <= endNumber; startNumber++) {
            content += `<td>${startNumber} x ${i} = ${(startNumber*i)}</td>`
        }

        console.log(x)
        content += '</tr>'
    }

    content += '</table>'

    return content
}

function test(isShow) {
    console.log(isShow)
}