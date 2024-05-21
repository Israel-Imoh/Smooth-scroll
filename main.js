/*
// Option 2 - JQuery smoothe scroll
$('.navbar a').on('click', function(e) {
    if(this.hash !== '') {
        e.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800);
    };
    //console.log(this.hash);
});
*/

// Option 3- Smoothscroll script
//const scroll = new SmoothScroll('.navbar a[href*="#"]' ,{
    speed: 800
//});