function login() {
    
    elem = document.getElementById('user');
    user = elem.value;
    elem = document.getElementById('pass');
    pass = elem.value;
    if (user == "admin" && pass == "12345") {
    
        window.open("new_page.html")
    }
    if (user =="user" && pass == "00000"){
        window.open("second.html");

    }
    else{
        alert("Innocent pass or login")
        elem=document.getElementById('user');
        elem.style.background = 'red';
    }

}
