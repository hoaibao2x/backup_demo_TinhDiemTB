/** 
 * Tính điểm khối 1
 **/

function tinhdiemTB() {
    var toan = document.getElementById('diemToan').value;
    var ly = document.getElementById('diemLy').value;
    var hoa = document.getElementById('diemHoa').value;
    // console.log(toan,ly,hoa);

    //  parseInt() => Kiểu số nguyên
    //  parseFloat() => Kiểu số  thực
    // var dtb = (Number(toan) + Number(ly) + Number(hoa)) / 3;
    // document.getElementById('txtResult').innerHTML = 'Khối 1: ' + dtb;
    document.getElementById('txtResult').innerHTML = 'Khối 1: ' + tinhDTBParams(toan,ly,hoa);

}

function tinhdiemTB2() {
    var toan = document.getElementById('diemToan2').value;
    var sinh = document.getElementById('diemSinh').value;
    var hoa = document.getElementById('diemHoa2').value;
    // console.log(toan,ly,hoa);

    //  parseInt() => Kiểu số nguyên
    //  parseFloat() => Kiểu số  thực
    // var dtb = (Number(toan) + Number(ly) + Number(hoa)) / 3;
    // document.getElementById('txtResult').innerHTML = 'Khối 1: ' + dtb;
    document.getElementById('txtResult2').innerHTML = 'Khối 2: ' + tinhDTBParams(toan,sinh,hoa);
}

function tinhDTBParams(diem1,diem2,diem3) {
    var dtb = (Number(diem1) + Number(diem2) + Number(diem3)) / 3;
    document.getElementById('txtResult').innerHTML = dtb;

    return dtb;
}