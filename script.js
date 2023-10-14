function toggleMenu(){
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".hamburguer-icon")
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

function getCurrentYear() {
    return new Date().getFullYear();
}

function openResume(){
    window.open('./assets/file/Rafaella Matos - Resume.pdf')
}

function goContact(){
    location.href='./#contact'
}

function goLinkedin(){
    location.href = "https://www.linkedin.com/in/rafaella-matos/"
}

function goGithub(){
    location.href = "https://www.github.com/RAFAELLAMATOS"
}

function goInstagram(){
    location.href = "https://www.instagram.com/techparamulheres"
}

// Update the footer year
document.getElementById('footer-year').textContent = `© ${getCurrentYear()} Rafaella Matos. All rights reserved.`;