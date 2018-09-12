let phoneNumber = prompt("Nhap so dien thoai de xac thuc: ")
function validatephoneNumber(str) {
    regexp = /^[0-9]{2}[-][0][0-9]{9}$/
    if (regexp.test(str)){
        alert("Day la so dien thoai")
    }else alert('Day khong la so dien thoai')
}
validatephoneNumber(phoneNumber);