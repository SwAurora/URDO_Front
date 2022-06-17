const password = document.getElementById('password');
const toggle = document.getElementById('toggle');

function showHide()
{
    if (password.type === 'password')
    {
        password.setAttribute('type', 'text');
    }
    else
    {
        password.setAttribute('type', 'password');
        toggle.classList.remove('hide');
    }
}