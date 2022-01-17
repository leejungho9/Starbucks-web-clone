const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');


searchEl.addEventListener('click', function() {
    //Logic..
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function(){
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});

const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function () {
    console.log(window.scrollY);
    if(window.scrollY > 500) {
        //배지 숨기기
        //gsap.to(요소, 지속시간(s), 옵션);
        gsap.to(badgeEl, .6, {
            opacity : 0,
            display : 'none'
        });

        
    } else {
        //배지 보이기
        gsap.to(badgeEl, .6, {
            opacity : 1,
            display : 'block'
        });
   
    }
}, 300));
/* 300 = 0.3초  throttle : 일정시간 실행되도록 제한 걸음 */
// _.throttle (함수, 실행시간(ms) 
//scrollY : 스크롤의 위치가 갱신되며 표시


const fadeEls = document.querySelectorAll('.visual .fade-in');
//페이드 요소 갯수만큼 인수로 적은 함수가 반복된다.
fadeEls.forEach(function (fadeEl,  index) {
    gsap.to(fadeEl, 1, {
        delay : (index + 1) * .7,
        opacity: 1
    });

});
