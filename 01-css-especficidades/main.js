const accordions = document.querySelectorAll('.accordion-header');
for (let i = 0; i < accordions; i++) {
    accordions[i].addEventListener('click', function(evento) {
        console.log(evento.target)
    })
}

console.log(accordions)