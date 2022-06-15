let nav = document.querySelector('.nav-all');
let leftArrow = document.querySelector('#arrow img');
let cnt = 0;
let wrap = document.getElementById('wrap');

function moving_sidebar()
{
    if(cnt === 0)
    {
        nav.style.transform = 'translateX(-100%)';
        leftArrow.style.transform = 'scale(-1)';
        leftArrow.style.transition = '0.8s';
        wrap.style.marginLeft='20px';
        wrap.style.transition = '0.8s'
        cnt++;
    }
    else
    {
        nav.style.transform = 'translateX(0%)';
        leftArrow.style.transform = 'scale(1)';
        leftArrow.style.transition = '0.8s';
        wrap.style.marginLeft='270px';
        cnt--;
    }
}

function GoHome()
{
    location.href = "Index.html";
}

function MiniHomePage()
{
    location.href = "https://www.naver.com";
}

function PointShop()
{
    location.href = 'PointShop.html';
}

function MyPage()
{
    location.href = '#';
}

function Login()
{
    location.href = 'Login.html';
}

let chk1 = document.getElementById('check1');
let chk2 = document.getElementById('check2');
let chk3 = document.getElementById('check3');
let chk4 = document.getElementById('check4');
let span = document.getElementsByTagName('span');
chk1.addEventListener('change', function()
{
    chk2.checked = false;
    chk3.checked = false;
    chk4.checked = false;
    radioReset(span);
    if(this.checked)
    {
        span[8].innerHTML = '&#65293'; //full-width하이픈
        span[9].style.color = '#6B6ECA';
        span[9].style.fontWeight = 'bold';
    }
    else
    {
        span[8].innerHTML = '&#65291';
        span[9].style.color = '#616161';
    }
});
chk2.addEventListener('change', function()
{
    chk1.checked = false;
    chk3.checked = false;
    chk4.checked = false;
    radioReset(span);
    if(this.checked)
    {
        span[10].innerHTML = '&#65293';
        span[11].style.color = '#6B6ECA';
        span[11].style.fontWeight = 'bold';
    }
    else
    {
        span[10].innerHTML = '&#65291';
        span[11].style.color = '#616161';
    }
});
chk3.addEventListener('change', function()
{
    chk1.checked = false;
    chk2.checked = false;
    chk4.checked = false;
    radioReset(span);
    if(this.checked)
    {
        span[12].innerHTML = '&#65293';
        span[13].style.color = '#6B6ECA';
        span[13].style.fontWeight = 'bold';
    }
    else
    {
        span[12].innerHTML = '&#65291';
        span[13].style.color = '#616161';
    }
});
chk4.addEventListener('change', function()
{
    chk1.checked = false;
    chk2.checked = false;
    chk3.checked = false;
    radioReset(span);
    if(this.checked)
    {
        span[14].innerHTML = '&#65293';
        span[15].style.color = '#6B6ECA';
        span[15].style.fontWeight = 'bold';
    }
    else
    {
        span[14].innerHTML = '&#65291';
        span[16].style.color = '#616161';
    }
});

function radioReset(span)
{
    for(let i = 6; i <= 14; i += 2)
    {
        span[i].innerHTML = '&#65291';
        span[i + 1].style.color = '#616161';
        span[i + 1].style.fontWeight = 'normal';
    }
}

// 다크 모드
const body = document.querySelector('body');
const modeSwitch = body.querySelector(".toggle-switch");

modeSwitch.addEventListener("click", () =>
{
    body.classList.toggle("dark");
});
