const hamburguer = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const menuItens = document.querySelectorAll('.menu li');
const switchThemeMode = document.querySelector('.dark-mode__btn');
const scroll = document.querySelectorAll('.container');
const svgCurveTop = document.querySelector('.shape-fill-top');
const svgCurveBottom = document.querySelector('.shape-fill-bottom');
const main = document.querySelector('main');
const footer = document.querySelector('footer');

/*close mobile menu on touch*/
menuItens.forEach(item => {
    item.addEventListener('click', (e) => {
    menu.classList.toggle('active')
    });
});

/*toggle mobile menu*/
hamburguer.addEventListener('click', (e) => {
    hamburguer.classList.toggle('active');
    menu.classList.toggle('active');
})

/*dark mode theme*/
switchThemeMode.addEventListener('click', (e) => {
    switchThemeMode.classList.toggle('on');
    main.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
    menu.classList.toggle('dark-mode');
    
    if(switchThemeMode.classList.contains('on')){
        hamburguer.style.color = '#fff'; 
        svgCurveTop.style.fill = '#111';
        svgCurveBottom.style.fill = '#111';
    } else {
        hamburguer.style.color = '#111';
        svgCurveTop.style.fill = '#fff';
        svgCurveBottom.style.fill = '#fff';
    }
});

/*scroll smooth*/
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { 
        entry.target.classList.toggle('show', entry.isIntersecting);
    });
}, {
    threshold: 0.1,
});
 scroll.forEach( section => {
      observer.observe(section);
});

