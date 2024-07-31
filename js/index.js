
const btnIngresar=document.getElementById('ingresar');
btnIngresar.addEventListener('click', () => {
    window.location.href = 'pages/pages1.html';
});

let svgDemo = document.querySelectorAll('.demo-svg-path');
svgDemo.addEventListener('DOMContentLoaded', function() {
    anime({
        targets: '.svgDemo',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1500,
        delay: function(el, i) { return i * 250 },
        direction: 'alternate',
        loop: true
    });
});

