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
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function () {
    console.log(window.scrollY);
    if(window.scrollY > 500) {
        //배지 숨기기
        //gsap.to(요소, 지속시간(s), 옵션);
        gsap.to(badgeEl, .6, {
            opacity : 0,
            display : 'none'
        });
        //버튼 보이기
        gsap.to('#to-top', .2, {
            x:0
        })
    } else {
        //배지 보이기
        gsap.to(badgeEl, .6, {
            opacity : 1,
            display : 'block'
        });
        //버튼 숨기기
        gsap.to(toTopEl, .2, {
            x:100
        })
    }
}, 300));

//_.throttle(함수, 시간)
toTopEl.addEventListener('click', function() {
    gsap.to(window, .7, {
        scrollTo : 0
    })
})

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

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper', {
    direction : 'vertical',
    autoplay : true, //자동재생 여부
    loop : true //반복재생 여부 
});


new Swiper ('.promotion .swiper', {
    direction : 'horizontal',
    slidesPerView : 3, //한번에 보여줄 슬라이드 개수
    spaceBetween : 10, //슬라이드 사이 여백
    centeredSlides : true, //1번 슬라이드가 가운데 보이기
    loop : true,
    autoplay: {
        delay : 5000 //5초에 한 번씩 넘어감 기본값은 3000 (3초)
    },
    pagination: {
        el : '.promotion .swiper-pagination', //페이지 번호 요소 선택자
        clickable : true, //사용자의 페이지 번호 요소 제어
    },
    navigation : {
        prevEl : '.promotion .swiper-prev',
        nextEl : '.promotion .swiper-next'
    }
});
new Swiper ('.awards .swiper', {
    autoplay : true,
    loop:true,
    spaceBetween:30,
    slidesPerView : 5,
    navigation : {
        prevEl : '.awards .swiper-prev',
        nextEl : '.awards .swiper-next',
    }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;


promotionToggleBtn.addEventListener('click', function () {
    isHidePromotion = !isHidePromotion
    if(isHidePromotion) {
        //숨김처리
        promotionEl.classList.add('hide')
    } else {
        //보여지게
        promotionEl.classList.remove('hide')

    }
});

//랜덤함수
function random(min, max) {
    // .toFixed()를 통해 반환된 문자 데이터를 parseFloat()을 통해 소수점읗 가지는 숫자 데이터로 변환
    return parseFloat((Math.random()* (max-min) + min).toFixed(2))
};
function floatingObject(selector, delay, size) {
    //gsap.to(요소, 시간, 옵션);
    gsap.to(selector
        , random(1.5, 2.5),  //애니메이션 동작 시간
        {
        y: size,
        repeat : -1, //무한반복
        yoyo :true, //재생된 애니메이션을 뒤로 다시 동작 
        ease:  Power1.easeInOut, //gsap easing
        delay : random(0, delay) //지연시간
         })
};
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 25);

const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function (spyEl) {
    new ScrollMagic
        .Scene({
            triggerElement : spyEl, //보여짐 여부를 감시할 요소를 지정
            triggerHook : .8        //감시하려는 요소가 0.8 뷰포트에 어떤지점에서 감시되었는지 판단해줌
        })  
        .setClassToggle(spyEl, 'show')
        .addTo(new ScrollMagic.Controller());
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();