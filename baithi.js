var btnSubmit = document.forms["register-form"]["btn-submit"];
btnSubmit.onclick = function () {
    var txtName = document.forms["register-form"]["Name"];
    var msgName = txtName.nextElementSibling;
    if (txtName == null || txtName.value.length == 0) {
        msgName.innerHTML = "*Vui lòng nhập tên của bạn.";
        msgName.classList.remove("hidden-text");
    else if (txtName.value.length > 50){
        msgName.innerHTML="*Tên của ban quá dài";
        msgName.classList.remove("hidden-text");
    } else {
        msgName.innerHTML="Tên hợp lệ";
        msgName.classList.remove("hidden-text");
        msgName.classList.remove("danger-text");
        msgName.classList.add("success-text");
    }
    var txtemail = document.forms["register-form"]["email"];
    var msgemail = msgemail.nextElementSibling;
    var a=txtemail.value.includes("@");
    if (txtemail == null || txtemail.value.length == 0) {
        msgemail.innerHTML ="*Vui lòng nhập email của bạn.";
        msgemail.classList.remove("hidden-text");
    }
    else if (a==false){
        msgemail.innerHTML = "Sai cú pháp email!";
        msgemail.classList.remove("success-text");
        msgemail.classList.add("danger-text");
        msgemail.classList.remove("hidden-text");
    }
    else{
        msgemail.innerHTML = "Email hợp lệ.";
        msgemail.classList.remove("hidden-text");
        msgemail.classList.remove("danger-text");
        msgemail.classList.add("success-text");
    }
    var txtphone=document.forms["register-form"]["phone"];
    var msgphone=msgphone.nextElementSibling;
        if (txtphone == null || txtphone.value.length == 0) {
            msgphone.innerHTML = "*Vui lòng nhập phone của bạn.";
            msgphone.classList.remove("hidden-text");
        }
        else {
            msgphone.innerHTML="Phone hợp lệ";
            msgphone.classList.remove("hidden-text");
            msgphone.classList.remove("danger-text");
            msgphone.classList.add("success-text");
        }
}