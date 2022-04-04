$(document).ready(function() {
    var i = 1; 
    $("#btn2").click(function () { 
        $('#modal-id').modal('toggle');
    });

    function kiemTraTen() {
        var i=1;
        let ten = $("#Name").val();
        let mauKT = /([A-Z]{1}[a-z]+)((\s{1}[A-Z]{1}[a-z]+){1,})$/;
        if(ten==""){
            $("#tbName").html("Không được để trống");
            return false;
        }
        if (!mauKT.test(ten)) {
            $("#tbName").html("Mỗi ký tự đầu viết hoa không sử dụng số");
            return true;
        }
        $("#tbName").html("*");
        return true;
      }
      $("#Name").blur(kiemTraTen);
    
    function kiemTraSoAo() {
        var mauKT = /^\d*$/;
        var soao = $("#Ao").val();
        if (soao=="") {
            $("#tbAo").html("Không được để trống");
            return false;
        }
        if (!mauKT.test(soao)) {
            $("#tbAo").html("Dùng số từ 1 đến 100");
            return false;
        }else{
            if (soao<1||soao>100) {
                $("#tbAo").html("Chỉ dùng từ 1 đến 100");
                return false;
            }else{
                $("#tbAo").html("*");
                return true;
            }
        }
    }
    $("#Ao").blur(kiemTraSoAo);

    function kiemTraDiaChi() {
        var mauKT = /^[A-Z0-9][a-z0-9]*(\s[A-Z0-9][a-z0-9]*)*$/;
        var diachi = $("#DC").val();
        if (diachi=="") {
            $("#tbDC").html("Không được để trống");
            return false;
        }
        if (!mauKT.test(diachi)) {
            $("#tbDC").html("Mỗi ký tự đầu viết hoa không sử dụng số");
            return false;
        }
        $("#tbDC").html("*");
        return true;
    }
    $("#DC").blur(kiemTraDiaChi);

    function kiemTraNTT() {
        var NTT = new Date($("#NTT").val());
        var today = new Date();
        if (NTT=="") {
            $("#tbNTT").html("Không được để trống");
            return false;
        }
        today = today.setDate(today.getDate()+7);
        if (today>NTT) {
            $("#tbNTT").html("Phải sau ngày hiện tại 7 ngày");
            return false;
        }
        $("#tbNTT").html("*");
        return true;
    }
    $("#NTT").blur(kiemTraNTT);

    function kiemTraSDT() {
        var mauKT = /^0\d{3}-\d{3}-\d{3}$/;
        var SDT = $("#SDT").val();
        if (SDT=="") {
            $("#tbSDT").html("Không được để trống");
            return false;
        }
        if (!mauKT.test(SDT)) {
            $("#tbSDT").html("Theo dạng 0xxx-xxx-xxx trong đó x là số");
            return false;
        }
        $("#tbSDT").html("*");
        return true;
    }
    $("#SDT").blur(kiemTraSDT);

    /*$("#Save").click(function () { 
        markup = "<tr><td>" + $("SDT").val() + "</td></tr>";
        tableBody = $("table tbody");
        tableBody.append(markup);
        lineNo++;
        
    });*/

    $("#Save").click(function () { 
        if(kiemTraDiaChi()==true && kiemTraNTT()==true && kiemTraSDT()==true && kiemTraSoAo()==true && kiemTraTen()==true){
            alert("Nhập thông tin thành công");
            row = "<tr>";
            row += "<th>" + (i++) + "</th>";
            row += "<th>" + $("#Name").val() + "</th>";
            row += "<th>" + $("#Ao").val() + "</th>";
            row += "<th>" + $("#DC").val() + "</th>";
            row += "<th>" + $("#NTT").val() + "</th>";
            row += "<th>" + $("#SDT").val() + "</th>";
            row += "<th>" + $("#ADD").val() + "</th>";
            row += "</tr>"
            $("#danhsach").append(row);
            $("#modal-id").modal("hide");
        }
        else{
            alert("Chưa nhập đủ thông tin");
        }
        
    });

})