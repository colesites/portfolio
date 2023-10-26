const links = document.querySelectorAll('.link');
const sections = document.querySelectorAll('section');

let activeLink = 0;

links.forEach((link, i) => {
    link.addEventListener('click', () => {
        if(activeLink != i){
            links[activeLink].classList.remove('active');
            link.classList.add('active');
            sections[activeLink].classList.remove('active');

            setTimeout(() => {
                activeLink = i;
                sections[i].classList.add('active');
            }, 100);
        }
    })
})

let options = {
    startAngle: -1.55,
    marginLeft: 150,
    size: 150,
    value: 0.99,
    fill: {color: "#ff4f4f"}
}
$(".circle .bar").circleProgress(options)