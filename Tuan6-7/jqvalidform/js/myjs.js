$(document).ready(function () {
    $("#txtName").blur(function () { 
        let mauKT = /([A-Z]{1}[a-z]+)((\s{1}[A-Z]{1}[a-z]+){1,})$/
        let ten = $("#txtName").val();
        if (mauKT.test(ten)==true) {
            $("#checkName").html("Nhập đúng mẫu");
        } else {
            $("#checkName").html("Nhập sai mẫu");
        }
    });

    $("#txtSDT").blur(function () { 
        let mauKT = /^[0-9]{4}[0-9]{3}[0-9]{3}$/
        let sdt = $("#txtSDT").val();
        if (mauKT.test(sdt) == true) {
            $("#checkSDT").html("Nhập đúng mẫu");
        } else {
            $("#checkSDT").html("Nhập sai mẫu");
        }
    });

    $("#txtEmail").blur(function () { 
        let mauKT = /^([a-z0-9]+)@([a-z0-9]+)\.([a-z\.]{2,6})$/
        let mail = $("#txtEmail").val();
        if (mauKT.test(mail) == true) {
            $("#checkEmail").html("Nhập đúng mẫu");
        } else {
            $("#checkEmail").html("Nhập sai mẫu");
        }
    });

    $("#txtPassword").blur(function () { 
        let mauKT = /^(?=.*[A-Za-z])(?=.*[\d])[A-Za-z\d]{8,}$/
        let password = $("#txtPassword").val();
        if (mauKT.test(password)==true) {
            $("#checkPassword").html("Nhập đúng mẫu");
        } else {
            $("#checkPassword").html("Nhập sai mẫu");
        }
    });
});