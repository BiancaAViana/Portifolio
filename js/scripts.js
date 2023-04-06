const hamburguer = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const menuItens = document.querySelectorAll('.menu li');
const scroll = document.querySelectorAll('.container');

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
});

/*scroll visibility*/
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { 
        entry.target.classList.toggle('show', entry.isIntersecting);
    });
}, {
    threshold: 0.2,
});
 scroll.forEach( scroll => {
      observer.observe(scroll);
});

