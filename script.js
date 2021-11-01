// Javascript for Computers >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const menu = document.querySelector('.menu');
const menuIcon = document.querySelector('.menu__logo-initial');
const menuBox = document.querySelector('.menu__box');
const mainText = document.querySelector('.main-text');
const mainPara = document.querySelector('.main-para');

menu.addEventListener('click', ()=>{
    if (menuBox.style.right == '0%' && menuIcon.style.color == 'black' && mainText.style.opacity == '0' && mainPara.style.opacity == '0') {
        menuBox.style.right = '-100%';
        menuIcon.style.color = '#585858';
        mainText.style.opacity = '1';
        mainPara.style.opacity = '1';
    } else {
        menuBox.style.right = '0%';
        menuIcon.style.color = 'black';
        mainText.style.opacity = '0';
        mainPara.style.opacity = '0';
    }
});


const webHeading = document.querySelector('.web-heading');
const graphicHeading = document.querySelector('.graphic-heading');

webHeading.addEventListener('click', ()=> {
    if (webHeading.style.height == '15%') {
        webHeading.style.height = '100%';
    } else {
        webHeading.style.height = '15%';
    }
});

graphicHeading.addEventListener('click', ()=> {
    if (graphicHeading.style.height == '15%') {
        graphicHeading.style.height = '100%';
    } else {
        graphicHeading.style.height = '15%';
    }
});

const progress1 = document.querySelector('.web-prog1');
const progress2 = document.querySelector('.web-prog2');
const progress3 = document.querySelector('.web-prog3');
const progress4 = document.querySelector('.web-prog4');
const progress5 = document.querySelector('.graphic-prog1');
const progress6 = document.querySelector('.graphic-prog2');
const progress7 = document.querySelector('.graphic-prog3');
const progress8 = document.querySelector('.graphic-prog4');

webHeading.addEventListener('click', ()=>{
    progress1.style.animation = "fillOne 2s forwards";
    progress2.style.animation = "fillTwo 2s forwards";
    progress3.style.animation = "fillThree 2s forwards";
    progress4.style.animation = "fillFour 2s forwards";
});

graphicHeading.addEventListener('click', ()=>{
    progress5.style.animation = "fillFive 2s forwards";
    progress6.style.animation = "fillSix 2s forwards";
    progress7.style.animation = "fillSeven 2s forwards";
    progress8.style.animation = "fillEight 2s forwards";
});

const point1 = document.querySelector('.point1');
const point2 = document.querySelector('.point2');
const point3 = document.querySelector('.point3');
const point4 = document.querySelector('.point4');
const point5 = document.querySelector('.point5');
const point6 = document.querySelector('.point6');
const point7 = document.querySelector('.point7');
const point8 = document.querySelector('.point8');
const year1 = document.querySelector('.year1');
const year2 = document.querySelector('.year2');
const year3 = document.querySelector('.year3');
const year4 = document.querySelector('.year4');
const year5 = document.querySelector('.year5');
const year6 = document.querySelector('.year6');
const year7 = document.querySelector('.year7');
const year8 = document.querySelector('.year8');

// 1st Point
point1.addEventListener('mouseover', ()=>{
    year1.style.animation = 'upDown 1s infinite';
    year1.style.color = 'crimson';
});
point1.addEventListener('mouseout', ()=>{
    year1.style.animation = 'none';
    year1.style.color = 'white';
});

// 2nd Point
point2.addEventListener('mouseover', ()=>{
    year2.style.animation = 'upDown 1s infinite';
    year2.style.color = 'crimson';
});
point2.addEventListener('mouseout', ()=>{
    year2.style.animation = 'none';
    year2.style.color = 'white';
});

// 3rd Point
point3.addEventListener('mouseover', ()=>{
    year3.style.animation = 'upDown 1s infinite';
    year3.style.color = 'crimson';
});
point3.addEventListener('mouseout', ()=>{
    year3.style.animation = 'none';
    year3.style.color = 'white';
});

// 4th Point
point4.addEventListener('mouseover', ()=>{
    year4.style.animation = 'upDown 1s infinite';
    year4.style.color = 'crimson';
});
point4.addEventListener('mouseout', ()=>{
    year4.style.animation = 'none';
    year4.style.color = 'white';
});

// 5th Point
point5.addEventListener('mouseover', ()=>{
    year5.style.animation = 'upDown 1s infinite';
    year5.style.color = 'crimson';
});
point5.addEventListener('mouseout', ()=>{
    year5.style.animation = 'none';
    year5.style.color = 'white';
});

// 6th Point
point6.addEventListener('mouseover', ()=>{
    year6.style.animation = 'upDown 1s infinite';
    year6.style.color = 'crimson';
});
point6.addEventListener('mouseout', ()=>{
    year6.style.animation = 'none';
    year6.style.color = 'white';
});

// 7th Point
point7.addEventListener('mouseover', ()=>{
    year7.style.animation = 'upDown 1s infinite';
    year7.style.color = 'crimson';
});
point7.addEventListener('mouseout', ()=>{
    year7.style.animation = 'none';
    year7.style.color = 'white';
});

// 8th Point
point8.addEventListener('mouseover', ()=>{
    year8.style.animation = 'upDown 1s infinite';
    year8.style.color = 'crimson';
});
point8.addEventListener('mouseout', ()=>{
    year8.style.animation = 'none';
    year8.style.color = 'white';
});

// Javascript for Mobile >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const mobileMenu = document.querySelector('.mobile-menu__logo-initial');
const mobileMenuBox = document.querySelector('.mobile-menu__box');

mobileMenu.addEventListener('click', ()=>{
    if (mobileMenuBox.style.right == '0%') {
        mobileMenuBox.style.right = '-100%';
    } else {
        mobileMenuBox.style.right = '0%';
    }
});

const mobileWebHeading = document.querySelector('.mobile-web-heading');
const mobileGraphicHeading = document.querySelector('.mobile-graphic-heading');

mobileWebHeading.addEventListener('click', ()=> {
    if (mobileWebHeading.style.height == '15%') {
        mobileWebHeading.style.height = '100%';
    } else {
        mobileWebHeading.style.height = '15%';
    }
});

mobileGraphicHeading.addEventListener('click', ()=> {
    if (mobileGraphicHeading.style.height == '15%') {
        mobileGraphicHeading.style.height = '100%';
    } else {
        mobileGraphicHeading.style.height = '15%';
    }
});

mobileWebHeading.addEventListener('click', ()=>{
    progress1.style.animation = "fillOne 2s forwards";
    progress2.style.animation = "fillTwo 2s forwards";
    progress3.style.animation = "fillThree 2s forwards";
    progress4.style.animation = "fillFour 2s forwards";
});

mobileGraphicHeading.addEventListener('click', ()=>{
    progress5.style.animation = "fillFive 2s forwards";
    progress6.style.animation = "fillSix 2s forwards";
    progress7.style.animation = "fillSeven 2s forwards";
    progress8.style.animation = "fillEight 2s forwards";
});
