
function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  if (user !== "" && pass !== "") {
    document.getElementById("login-box").style.display = "none";
    document.getElementById("offers-box").style.display = "block";
  } else {
    alert("يرجى إدخال اسم المستخدم وكلمة المرور.");
  }
}
