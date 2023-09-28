const form = document.getElementById("inputs");

const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const dataToSave = {
    username: usernameInput.value,
    email: emailInput.value, 
    password: passwordInput.value,
  };

  axios
    .post(
      "https://64fdcced596493f7af7e9ac2.mockapi.io/api/v1/users",
      dataToSave
    )
    .then((response) => {
    
      window.location.href = './login.html'
      
    })
    .catch((error) => {
      console.error("error", error);
    });
});
