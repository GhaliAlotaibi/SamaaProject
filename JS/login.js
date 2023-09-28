document.getElementById('Login').addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    let email = ''
    axios.get('https://64fdcced596493f7af7e9ac2.mockapi.io/api/v1/users').then(function (response) {
        api = response.data;
        for (let i = 0; i <= api.length; i++) {
            if (
                response.data[i].username === username &&
                response.data[i].password === password
                )
              {
                email = response.data[i].email;

                localStorage.setItem("username", username)
                localStorage.setItem('email', email)
                setTimeout(function() {
                    window.location.href = "/HTML/Home.html"
                }, 4000);
                Swal.fire({
                    title: "! تم تسجيل دخولك بنجاح",
                    text: "... يتم تحويلك الى الصفحة الرئيسية",
                    background: "white",
                    allowOutsideClick : false,
                    confirmButtonText: "حسنًا",
                    icon: "success",
                    confirmButtonColor:"#16425B",
                })
              } else {
                Swal.fire({
                  position: "center",
                  icon: "warning",
                  title: "تأكد من الاسم او كلمة المرور",
                  showConfirmButton: true,
                  timer: 3000,
                  confirmButtonText : "حسنًا"
                });
              }
            }
    })
})