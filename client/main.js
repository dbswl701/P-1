const toggleBtn = document.querySelector('.navbar_toggleBtn');
// html 안에 있는 class node들 중에 navbar_toggleBtn이라는 class를 가진 녀석을 찾아서 여기 toggleBtn에 연결
const menu = document.querySelector('.navbar-menu');

toggleBtn.addEventListener('click', ()=> {
  console.log("click!");
  menu.classList.toggle('active');
});

menu.addEventListener('click', ()=> {
  console.log("click!!!!");
});
