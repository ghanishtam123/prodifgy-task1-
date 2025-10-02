const navbar=document.getElementById('navbar');
window.addEventListener('scroll',()=>{
    if(window.scrollY>50){
        navbar.classList.add("scrolled");
    }else{
        navbar.classList.remove("scrolled");
    }
});

const sections=document.querySelectorAll('section');

function revealSections(){
    const triggerBottom=window.innerHeight *0.85;

    sections.forEach(section=>{
        const sectionTop=section.getBoundingClientRect().top;

        if(sectionTop<triggerBottom){
            section.classList.add('visible');
        }else{
            section.classList.remove('visible');
        }
    });
}

window.addEventListener('scroll', revealSections);

revealSections();