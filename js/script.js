document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '.splide', {
        perPage: 3,
        rewind : true,
        padding: {
            right: '2rem',
        }
    }
     ).mount()
     new Splide( '#explore_section').mount();
     new Splide( '#new_arrivals_section',{
        padding: {
            right: '4rem',
        }
     } ).mount();
     new Splide( '#explore_new_section').mount();
     new Splide( '#bespoke_slider', {
        type   : 'loop',
        padding: {
            right: '4rem',
            left : '4rem',
        },
    } ).mount();
    new Splide( '#boardroom_slider', {
        type   : 'loop',
        padding: {
            right: '4rem',
            left : '4rem',
        },
    } ).mount();
} );