let nav = document.querySelector('.nav-all');
let leftArrow = document.querySelector('#arrow img');
let cnt = 0;

function moving_sidebar()
{
    if(cnt === 0)
    {
        nav.style.transform = 'translateX(-105%)';
        leftArrow.style.transform = 'scale(-1)';
        leftArrow.style.transition = '0.8s';
        cnt++;
    }
    else
    {
        nav.style.transform = 'translateX(0%)';
        leftArrow.style.transform = 'scale(1)';
        leftArrow.style.transition = '0.8s';
        cnt--;
    }
}

function MiniHomePage()
{
    location.href = "https://www.naver.com";
}

function PointShop()
{
    location.href = '#';
}

function MyPage()
{
    location.href = '#';
}

function Login()
{
    location.href = '#';
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
        span[6].innerHTML = '&#8722';
        span[6].setAttribute('style', 'margin:0 11px;')
        span[7].style.color = '#6B6ECA';
    }
    else
    {
        span[6].innerHTML = '&#65291';
        span[6].setAttribute('style', 'margin:0 8px')
        span[7].style.color = '#616161';
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
        span[8].innerHTML = '&#8722';
        span[8].setAttribute('style', 'margin:0 11px;')
        span[9].style.color = '#6B6ECA';
    }
    else
    {
        span[8].innerHTML = '&#65291';
        span[8].setAttribute('style', 'margin:0 8px')
        span[9].style.color = '#616161';
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
        span[10].innerHTML = '&#8722';
        span[10].setAttribute('style', 'margin:0 11px;')
        span[11].style.color = '#6B6ECA';
    }
    else
    {
        span[10].innerHTML = '&#65291';
        span[10].setAttribute('style', 'margin:0 8px')
        span[11].style.color = '#616161';
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
        span[12].innerHTML = '&#8722';
        span[12].setAttribute('style', 'margin:0 11px;')
        span[13].style.color = '#6B6ECA';
    }
    else
    {
        span[12].innerHTML = '&#65291';
        span[12].setAttribute('style', 'margin:0 8px')
        span[13].style.color = '#616161';
    }
});

function radioReset(span)
{
    for(let i = 6; i <= 12; i += 2)
    {
        span[i].innerHTML = '&#65291';
        span[i].setAttribute('style', 'margin:0 8px')
        span[i+1].style.color = '#616161';
    }
}