$(document).ready(function () {
    var i=1;
    $("#myBtn").click(function (e) { 
        $("#myModal").modal();
    });
    function ktTen() {
        var ten = $("#txtTen").val();
        //Thêm tiếng việt
        var mau = /^([A-Z]{1}[a-zàáảạãóòỏọõễệ]+)(\s[A-Z]{1}[a-zàáảạãóòỏọõễ]+)+$/
        if (ten == "") {
            $("#tbTen").html("Không được để trống");
            return false;
        }
        if (!mau.test(ten)) {
            $("#tbTen").html("Chữ đầu in hoa không dùng số");
            return false;
        }
        $("#tbTen").html("*");
        return true
    }
    $("#txtTen").blur(ktTen);

    function ktCMND() {
        var cmnd = $("#txtCMND").val();
        var mau = /^[\d]{9,9}$/
        if (cmnd == "") {
            $("#tbCMND").html("Không được để trống");
            return false;
        }
        if (!mau.test(cmnd)) {
            $("#tbCMND").html("Chỉ dùng số 9 ký tự");
            return false;
        }
        $("#tbCMND").html("*");
        return true
    }
    $("#txtCMND").blur(ktCMND);

    function ktDiaChi() {
        var quequan = $("#txtQueQuan").val();
        var mau = /^([A-Z]{1}[a-zàáảạãóòỏọõễệộ]+)(\s[A-Z]{1}[a-zàáảạãóòỏọõễộ]+)+$/
        if (quequan == "") {
            $("#tbQueQuan").html("Không được để trống");
            return false;
        }
        if (!mau.test(quequan)) {
            $("#tbQueQuan").html("Chữ đầu in hoa không dùng số");
            return false;
        }
        $("#tbQueQuan").html("*");
        return true
    }
    $("#txtQueQuan").blur(ktDiaChi);

    function ktEmail() {
        var email = $("#txtEmail").val();
        var mau = /^[A-Za-z\d]+@iuh.edu.vn/
        if (email == "") {
            $("#tbEmail").html("Không được để trống");
            return false;
        }
        if (!mau.test(email)) {
            $("#tbEmail").html("Nhập đúng định dạng example@iuh.edu.vn");
            return false;
        }
        $("#tbEmail").html("*");
        return true
    }
    $("#txtEmail").blur(ktEmail);

    function ktSDT() {
        var sdt = $("#txtSDT").val();
        var mau = /^0[0-9][0-9]-[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]$/
        if (sdt == "") {
            $("#tbSDT").html("Không được để trống");
            return false;
        }
        if (!mau.test(sdt)) {
            $("#tbSDT").html("Bắt buộc (0)xx-xxx-xxxx");
            return false;
        }
        $("#tbSDT").html("*");
        return true
    }
    $("#txtSDT").blur(ktSDT);

    $("#btnSave").click(function () { 
        if (ktCMND()==true && ktDiaChi()==true && ktEmail()==true && ktSDT()==true && ktTen()==true) {
            var row;
            row += "<tr>"
            row += "<th>" + (i++) + "</th>";
            row += "<th>" + $("#txtTen").val(); + "</th>";
            row += "<th>" + $("#txtCMND").val(); + "</th>";
            row += "<th>" + $("#txtQueQuan").val(); + "</th>";
            row += "<th>" + $("#txtEmail").val(); + "</th>";
            row += "<th>" + $("#txtSDT").val(); + "</th>";
            row += "<th>" + $("#file").val(); + "</th>";
            row += "</tr>"
            $("tbody").append(row);
        }
        else{
            alert("Bạn chưa nhập đầy đủ thông tin");
        }
    });
});