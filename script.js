function getCurrentYear() {
    return new Date().getFullYear();
}

// Update the footer year
document.getElementById('footer-year').textContent = `© ${getCurrentYear()} Rafaella Matos. All rights reserved.`;