function test() {
    // retriving data
    var uid = document.getElementById("username").value;
    var pw = document.getElementById("pwd").value;
    var email = document.getElementById("email").value;
    //storing data
    var user = localStorage.setItem("user_id", uid);
    var pass = localStorage.setItem("pwd", pw);
    var em = localStorage.setItem("email_id", email);

    //retriving data from localStorage and using it for authorization.
    var user = localStorage.getItem("user_id", uid);
    var pass = localStorage.getItem("pwd", pw);
    var em = localStorage.getItem("email_id", email);

    var a, b, c;
    a = "jyoti";
    b = "jyoti@gmail.com";
    c = 123;
    if (a == user && b == em && c == pass) {
        alert("login successful")
    }
    else {
        alert("invalid details");
    }
}


