$(document).ready(function () {
    var i = 1;
    $("#myBtn").click(function () { 
        $("#myModal").modal();
    });
    function KTTen() {
        var kt = /^([A-Z]{1}[a-z]+)(\s[A-Z]{1}[a-z]+)+$/;
        var ten = $("#txtTen").val();
        if (ten=="") {
            $("#tbTen").html("Không được để trống");
            return false;
        }
        if (!(kt.test(ten))) {
            $("#tbTen").html("Chữ cái đầu viết hoa không dùng số");
            return false;
        }
        $("#tbTen").html("*");
        return true;
    }
    $("#txtTen").blur(KTTen);

    function KTAo() {
        var kt = /^[1-9]{1}$/
        var ao = $("#txtAo").val();
        if (ao=="") {
            $("#tbAo").html("Không được để trống");
            return false;
        }
        if (!(kt.test(ao))) {
            $("#tbAo").html("Từ 1-9");
            return false;
        }
        $("#tbAo").html("*");
        return true;
    }
    $("#txtAo").blur(KTAo);

    function KTCLB() {
        var kt = /^([A-Z]{1}[a-z0-9]+)(\s[A-Z]{1}[a-z]+)+(\s[0-9]{1})$/;
        var clb = $("#txtCLB").val();
        if (clb=="") {
            $("#tbCLB").html("Không được để trống");
            return false;
        }
        if (!(kt.test(clb))) {
            $("#tbCLB").html("Chữ cái đầu viết hoa");
            return false;
        }
        $("#tbCLB").html("*");
        return true;
    }
    $("#txtCLB").blur(KTCLB);

    function KTDate() {
        var today = new Date();
        var kt = today.setDate(today.getDate()+15);
        var ngay = new Date($("#txtDate").val());
        if (ngay=="") {
            $("#tbDate").html("Không được để trống");
            return false;
        }
        if (ngay<kt) {
            $("#tbDate").html("Sau ngày hiện tại 15 ngày");
            return false;
        }
        $("#tbDate").html("*");
        return true;
    }
    $("#txtDate").blur(KTDate);
    
    function KTSDT() {
        var kt = /09[\d]{2}-[\d]{3}-[\d]{3}$/
        var sdt = $("#txtSDT").val();
        if (sdt=="") {
            $("#tbSDT").html("Không được để trống");
            return false;
        }
        if (!(kt.test(sdt))) {
            $("#tbSDT").html("09xx-xxx-xxx");
            return false;
        }
        $("#tbSDT").html("*");
        return true;
    }
    $("#txtSDT").blur(KTSDT);

    $("#btnSave").click(function (e) { 
        if (KTAo() && KTCLB() && KTDate() && KTSDT() && KTTen()) {
            var row;
            row += "<tr>";
            row += "<th>" + (i++) + "</th>"
            row += "<th>" + $("#txtTen").val(); + "</th>";
            row += "<th>" + $("#txtAo").val(); + "</th>";
            row += "<th>" + $("#txtCLB").val(); + "</th>";
            row += "<th>" + $("#txtDate").val(); + "</th>";
            row += "<th>" + $("#txtSDT").val(); + "</th>";
            row += "<th>" + $("#file").val(); + "</th>";
            row += "</tr>";
            $("tbody").append(row);
            $("#myModal").modal("hide");

        }
        else{
            alert("Bạn chưa nhập đủ thông tin");
        }
    });
    
        
});