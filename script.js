var theme = document.querySelector('header')
var theme1 = document.querySelector('footer')
var theme2 = document.querySelector('section')

    function changeClass() {
        if(theme.className == 'corpo'&&
        theme1.className == 'corpo'&&
        theme2.className == 'corpo')
        {
            theme.className = 'ncorpo';
            theme1.className = 'ncorpo';
            theme2.className = 'ncorpo';
        }
        else {
            theme.className = 'corpo';
            theme1.className = 'corpo';
            theme2.className = 'corpo';
        }
    }