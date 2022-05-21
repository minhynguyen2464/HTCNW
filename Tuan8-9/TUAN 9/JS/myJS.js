$(document).ready(function () {
    var i = 1;
    $("#myBtn").click(function () { 
        $("#myModal").modal();
    });
    
    function ktMSSV() {
        var mssv = $("#txtMS").val();
        var mau = /^[\d]{9,9}$/
        if (mssv == "") {
            $("#spMS").html("Không được để trống");
            return false;
        }
        if (!mau.test(mssv)) {
            $("#spMS").html("MSSV có 9 chữ số");
            return false;
        } 
        $("#spMS").html("*");
        return true;
    }
    $("#txtMS").blur(ktMSSV);

    function ktTen() {
        var ten = $("#txtName").val();
        var mau = /^([A-Z]{1}[a-z]+)(\s[A-Z]{1}[a-z]+)+$/
        if (ten == "") {
            $("#spName").html("Không được để trống");
            return false;
        }
        if (!mau.test(ten)) {
            $("#spName").html("Chữ cái đầu viết hoa");
            return false;
        } 
        $("#spName").html("*");
        return true;
    }
    $("#txtName").blur(ktTen);

    function ktEmail() {
        var email = $("#txtEmail").val();
        var mau = /^([A-Za-z\d]+)@iuh.edu.vn$/
        if (email == "") {
            $("#spEmail").html("Không được để trống");
            return false;
        }
        if (!mau.test(email)) {
            $("#spEmail").html("example@iuh.edu.vn");
            return false;
        } 
        $("#spEmail").html("*");
        return true;
    }
    $("#txtEmail").blur(ktEmail);

    $("#btnSave").click(function () { 
        if (ktEmail()==true && ktMSSV()==true && ktTen()==true) {
            var row;
            /*var talent = $('input[name=talent]:checkbox:checked').map(function() {
                return this.value;
            }).get();*/

            var talent = $('input[name=talent]:checked').map(function () {
                return this.value;
            }).get();
            
            row += "<tr>";
            row += "<td>" + (i++) + "</td>"
            row += "<td>" + $("#txtMS").val(); + "</td>"
            row += "<td>" + $("#txtName").val(); + "</td>"
            row += "<td>" + $("input[name=gender]:checked").val(); + "</td>"
            row += "<td>" + talent.join(", ") + "</td>"
            row += "<td>" + $("#txtEmail").val(); + "</td>"
            row += "<td>" + $("#txtTP").val(); + "</td>"
            row += "</tr>";
            $("tbody").append(row);
            $('#myModal').modal("hide");
        }
        else{
            alert("Bạn chưa nhập đầy đủ thông tin");
        }
        
    });
});