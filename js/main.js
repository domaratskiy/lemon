
// Выпадающее меню с закрытием при клике вне елемента начало
function openBtn() {
	let menu_dropList = document.querySelector('.menu_recipes__dropList');
	menu_dropList.classList.toggle('menu_active');
	// menu_dropList.addEventListener('transitionend', function(){
	// 	menu_dropList.style.display = 'none';
	// });
}

let gamburgerHover = document.querySelector('.cont_gumburger');

function mobileopenBtn() {
  let mobile_menu__dropList = document.querySelector('.menu');
  mobile_menu__dropList.classList.toggle('menu_active');
  mobile_menu__dropList.style.width = '100%';
  if(getComputedStyle(mobile_menu__dropList).display === 'none'){
    mobile_menu__dropList.style.display = 'block';
  }
  else{
    mobile_menu__dropList.style.display = 'none';
  }
}


// let body = document.querySelector('body');


window.onclick = function(event) {
  if (!event.target.matches('#menu_recipes')) {

    var dropdowns = document.getElementsByClassName("menu_recipes__dropList");
    
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('menu_active')) {
        openDropdown.classList.remove('menu_active');
      }
    }
    
  }

}

// Выпадающее меню с закрытием при клике вне елемента конец

// анимирование логотипа начало
let op_Logo = document.querySelector('.logo');

function Logo(){
	op_Logo.style.opacity = '1';
}

setTimeout(Logo, 1000);
// анимирование логотипа конец

new WOW().init();


let easyBtn = document.querySelector('.easy');
let middleBtn = document.querySelector('.middle');
let longBtn = document.querySelector('.long');

let easyCont = document.querySelector('.complexity_menu_EASY');
console.log(easyCont);
let middleCont = document.querySelector('.complexity_menu_MIDDLE');
let longCont = document.querySelector('.complexity_menu_LONG');

easyBtn.addEventListener('click', function(){
  easyBtn.style.fontWeight = '600';
  middleBtn.style.fontWeight = '300';
  longBtn.style.fontWeight = '300';
  easyCont.style.opacity = '1';
  middleCont.style.opacity = '0';
  longCont.style.opacity = '0';
});

middleBtn.addEventListener('click', function(){
  middleBtn.style.fontWeight = '600';
  longBtn.style.fontWeight = '300';
  easyBtn.style.fontWeight = '300';
  easyCont.style.opacity = '0';
  middleCont.style.opacity = '1';
  longCont.style.opacity = '0';
});

longBtn.addEventListener('click', function(){
  longBtn.style.fontWeight = '600';
  middleBtn.style.fontWeight = '300';
  easyBtn.style.fontWeight = '300';
  easyCont.style.opacity = '0';
  middleCont.style.opacity = '0';
  longCont.style.opacity = '1';
});