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

// sticky-navbar

window.onscroll = function() {myFunction()};

var header = document.getElementById("navbar-header");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky-navbar");
  } else {
    header.classList.remove("sticky-navbar");
  }
}
///
var storedName = localStorage.getItem('nameLogin');
document.getElementById('user').innerHTML = 'Xin chào ' + storedName + '!'
// storedName = null
if (storedName === null) {
  document.getElementById('userLoggedIn').style.display = 'none';
  document.getElementById('loginRegister').style.display = 'block';
} else {
  document.getElementById('loginRegister').style.display = 'none';
  document.getElementById('userLoggedIn').style.display = 'block';
}

function onRegister() {
  var register = document.getElementById('registerForm')
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

  } else if (password.value.length < 8) {
    alert('Mật khẩu ít nhất 8 ký tự');

  } else if (!password.value.match(numbers)) {
    alert('Mật khẩu phải chứa ít nhất 1 kí tự số');

  } else if (!password.value.match(upperCaseLetters)) {
    alert('Mật khẩu phải chứa ít nhất 1 kí tự hoa');

  } else if (!password.value.match(lowerCaseLetters)) {
    alert('Mật khẩu phải chứa ít nhất 1 kí tự thường');

  } else {
    register.setAttribute('action', '/login.html')
    localStorage.setItem('name', name.value)
    localStorage.setItem('email', email.value)
    localStorage.setItem('userName', userName.value);
    localStorage.setItem('password', password.value);
    alert('Bạn đã đăng ký thành công!');
  }
}

function onLogin() {
  // localStorage.removeItem('redirecMainPage')
  var userRemember = localStorage.getItem('rememberMe')
  var storedUserName = localStorage.getItem('userName');
  var storedPassword = localStorage.getItem('password');
  var userName = localStorage.getItem('name')

  var login = document.getElementById('loginForm')
  var userUserName = document.getElementById('userUserName');
  var userPassword = document.getElementById('userPassword');
  var userRemember = document.getElementById('rememberMe')
  
  localStorage.setItem('rememberMe', userRemember.checked);
  if (userUserName.value == storedUserName && userPassword.value == storedPassword) {
    login.setAttribute('action', '/index.html')
    localStorage.setItem('nameLogin', userName)
    alert('Bạn đã đăng nhập thành công!');
  } else {
    alert('Đăng nhập lỗi!');
  }
}

// function loged() {

// }

function filterFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('filter-select');
  filter = input.value;
  ul = document.getElementById("list-latest-news");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].id;
    if (filter == "tatca") {
      li[i].style.display = "";
      continue;
    }
    if (a == filter) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}