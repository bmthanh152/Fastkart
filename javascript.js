// go to top
let button_to_top = document.querySelector('.btn-go-to-top');
button_to_top.addEventListener('click',function(){
    document.documentElement.style.scrollBehavior = "smooth";
    document.documentElement.scrollTop = 0; //for gg chorm
    document.body.scrollTop = 0;            //for safari
})
button_to_top.addEventListener('click',function(){
    document.documentElement.style.scrollBehavior = "auto";
})

// overlay
document.querySelectorAll('a').forEach(el => el.addEventListener('click',function(){
    document.querySelector('.skin').style.visibility = 'visible';
    document.querySelector('.skin').style.opacity = '1';
    document.querySelector('.form-comeback').style.visibility = 'visible';
    document.querySelector('.form-comeback').style.opacity = '1';
    document.querySelector('.form-comeback').style.top = '0';
}))
document.querySelector('.form-comeback-btn').addEventListener('click',function(){
    document.querySelector('.skin').style.visibility = 'hidden';
    document.querySelector('.skin').style.opacity = '0';
    document.querySelector('.form-comeback').style.visibility = 'hidden';
    document.querySelector('.form-comeback').style.opacity = '0';
    document.querySelector('.form-comeback').style.top = '-64px';
})

// document.querySelector('.skin').addEventListener('click',function(){
//     document.querySelector('.skin').style.visibility = 'hidden';
//     document.querySelector('.skin').style.opacity = '0';
//     document.querySelector('.form-comeback').style.visibility = 'hidden';
//     document.querySelector('.form-comeback').style.opacity = '0';
//     document.querySelector('.form-comeback').style.top = '-64px';
// })

//change theme color
document.querySelector('.themecolor-section input').addEventListener('change',function(){
    let theme_color = document.querySelector('.themecolor-section input').value ;
    document.querySelector(':root').style.setProperty('--theme-color',theme_color);
})

document.querySelector('.btn-turn-on').addEventListener('click',function(){
    document.querySelector('.themecolor-section').style.visibility = 'visible';
    document.querySelector('.themecolor-section').style.opacity = '1';
    document.querySelector('.themecolor-section').style.top = '-6rem';
    document.querySelector('.btn-turn-on').style.visibility = 'hidden';
    document.querySelector('.btn-turn-off').style.visibility = 'visible';
})

document.querySelector('.btn-turn-off').addEventListener('click',function(){
    document.querySelector('.themecolor-section').style.visibility = 'hidden';
    document.querySelector('.themecolor-section').style.opacity = '0';
    document.querySelector('.themecolor-section').style.top = '-4rem';
    document.querySelector('.btn-turn-on').style.visibility = 'visible';
    document.querySelector('.btn-turn-off').style.visibility = 'hidden';
})

// nav-bar fixed
window.onscroll = function() {nav_bar()};
function nav_bar() {
    if (document.documentElement.scrollTop > 20) {
        document.querySelector('.navbar_row').classList.add('navbar_header_onscroll');
    }
    else { 
    document.querySelector('.navbar_row').classList.remove('navbar_header_onscroll');
    }
}
