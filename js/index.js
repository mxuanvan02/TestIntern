// var userRemember = localStorage.getItem('rememberMe')
// var storedUserName = localStorage.getItem('userName');
// // var storedPassword = localStorage.getItem('password');
// var userUN = document.getElementById('userUserName');
// // var userPassword = document.getElementById('userPassword');
// if (userRemember) {
//   userUN.value = storedUserName
//   // userPassword.value = userPassword
// } else {
//   userUN.value = ""
// }

var storedName = localStorage.getItem('name');
if (storedName === null) {
  document.getElementById('navLogin').innerHTML = '<a href="/login.html" class="uppercase">Login</a>';
} else {
  document.getElementById('navLogin').innerHTML = 'Xin chao ' + storedName + '!'
}

function onRegister() {
  var name = document.getElementById('name');
  var email = document.getElementById('email');
  var userName = document.getElementById('userName');
  var password = document.getElementById('password');
  var repeatPassword = document.getElementById('repeatPassword')
  var lowerCaseLetters = /[a-z]/g;
  var upperCaseLetters = /[A-Z]/g;
  var numbers = /[0-9]/g;

  if (name.value.length == 0) {
    alert('Bạn phải nhập họ tên');

  } else if (email.value.length == 0) {
    alert('Bạn phải nhập email');

  } else if (userName.value.length == 0) {
    alert('Bạn phải nhập tên đăng nhập');

  } else if (password.value.length == 0) {
    alert('Bạn phải nhập mật khẩu');

  } else if (repeatPassword.value.length == 0) {
    alert('Bạn phải nhập nhập lại mật khẩu');

  } else if (repeatPassword.value != password.value) {
    alert('Nhập lại mật khẩu phải giống mật khẩu');

  } else if (password.value.length > 8) {
    alert('Mật khẩu tối đa 8 ký tự');

  } else if (!password.value.match(numbers)) {
    alert('Mật khẩu phải chứa ít nhất 1 kí tự số');

  } else if (!password.value.match(upperCaseLetters)) {
    alert('Mật khẩu phải chứa ít nhất 1 kí tự hoa');

  } else if (!password.value.match(lowerCaseLetters)) {
    alert('Mật khẩu phải chứa ít nhất 1 kí tự thường');

  } else {
    localStorage.setItem('name', name.value)
    localStorage.setItem('email', email.value)
    localStorage.setItem('userName', userName.value);
    localStorage.setItem('password', password.value);
    alert('Bạn đã đăng ký thành công!');
  }
}

function onLogin() {
  // localStorage.removeItem('redirecMainPage')
  var storedUserName = localStorage.getItem('userName');
  var storedPassword = localStorage.getItem('password');

  
  var userUserName = document.getElementById('userUserName');
  var userPassword = document.getElementById('userPassword');
  var userRemember = document.getElementById('rememberMe')
  
  localStorage.setItem('rememberMe', userRemember.checked);
  if (userUserName.value == storedUserName && userPassword.value == storedPassword) {
    localStorage.setItem('redirectMainPage', "/index.html")
    alert('Bạn đã đăng nhập thành công!');
  } else {
    alert('Đăng nhập lỗi!');
  }
}


