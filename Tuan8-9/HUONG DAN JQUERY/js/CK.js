$(document).ready(function () {
    var i=1;
    $("#myBtn").click(function () { 
        $("#myModal").modal();        
    });

    function kiemTraMa() {
        var re = /^[A-Z]{3}\-[A-Z]{3}\-\d{2}\-\d{4}$/;
        var  ma = $("#txtMa").val();
        if (ma=="") {
            $("#tbMa").html("* bắt buộc nhập");
            return false;
        }
        if (!re.test(ma)) {
            $("#tbMa").html("* Mã tour theo mẫu: XXX-XXX-00-0000");
            return false;
        }
        $("#tbMa").html("*");
        return true;
    }
    $("#txtMa").blur(kiemTraMa);

    function kiemTraDD() {
        var  ma = $("#txtDiemDen").val();
        if (ma=="") {
            $("#tbDiemDen").html("* bắt buộc nhập");
            return false;
        }
        $("#tbDiemDen").html("*");
        return true;
    }
    $("#txtDiemDen").blur(kiemTraDD);
    //Ham KT ngay khoi hanh
    function kiemTraNgayKH() {
        var today = new Date();
        var ngay = new Date($("#txtNgay").val());
        today.setDate(today.getDate()+30);
        if (ngay<today) {
            $("#tbNgay").html("Ngày khởi hành phải sau ngày hiện tại 30 ngày");
            return false;
        }
        $("#tbNgay").html("*");
        return true
    }
    $("#txtMa").blur(kiemTraNgayKH);
    //Ham Kt gia
    function kiemTraGia() {
        var re = /^[A-Z]{3}\-[A-Z]{3}\-\d{2}\-\d{4}$/;
        var  gia = $("#txtGia").val();
        if (gia=="") {
            $("#tbGia").html("* bắt buộc nhập");
            return false;
        }
        if (isNaN(gia)) {
            $("#tbGia").html("* phải nhập số");
            return false;
        }
        if (eval(gia)<0) {
            $("#tbGia").html("* phải nhập số > 0");
            return false;
        }
        $("#tbGia").html("*");
        return true;
    }
    $("#txtGia").blur(kiemTraGia);

    $("#btnSave").click(function () { 
        if (!kiemTraDD()||!kiemTraGia||!kiemTraMa()||!kiemTraNgayKH()) {
            $("#thongbao").html("Mời bạn nhập đúng và đầy đủ thông tin");
            return false;
        }
        var anh = $("#txtAnh").val().substring(12);
        row = "<tr>";
        row += "<th>" + (i++) +"</th>";  
        row += "<th>" + $("#txtMa").val() +"</th>";                                                                                     
        row += "<th>" + $("#txtDiemDen").val() +"</th>";
        row += "<th>" + $("#txtNgay").val() +"</th>";
        row += "<th>" + $("#txtTG").val() +"</th>";
        row += "<th>" + $("#txtGia").val() +"</th>";
        row += "<th>" + anh +"</th>";
        row += "</tr>";
        $("table tbody").append(row);
        $("#myModal").modal("hide");
        return true;
    });
});
