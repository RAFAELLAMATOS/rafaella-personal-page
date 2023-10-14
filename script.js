function toggleMenu(){
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".hamburguer-icon")
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

function getCurrentYear() {
    return new Date().getFullYear();
}

// Update the footer year
document.getElementById('footer-year').textContent = `© ${getCurrentYear()} Rafaella Matos. All rights reserved.`;