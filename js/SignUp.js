// const password = document.getElementById('password');
// const toggle = document.getElementById('toggle');
//
// function showHide()
// {
//     if (password.type === 'password')
//     {
//         password.setAttribute('type', 'text');
//     }
//     else
//     {
//         password.setAttribute('type', 'password');
//         toggle.classList.remove('hide');
//     }
// }

// /* 비밀번호 보여주는 css */
// #toggle
// {
//     position: absolute;
//     top: 50%;
//     right: 5px;
//     transform: translateY(-50%);
//     width: 50px;
//     height: 40px;
//     /* background: url(../img/show.png); */
//     background-size: cover;
//     cursor: pointer;
// }

$('#password').keyup(function()
{
    let pwd1 = $('#password').val();
    $('#passwordCheck').attr('pattern', pwd1);
})

$('#chk').click(function()
{
    let checked = $('#chk').is(':checked');

    if(checked)
    {
        $('#joinForm input:checkbox').prop('checked', true);
    }
    else
    {
        $('#joinForm input:checkbox').prop('checked', false);
    }
});

