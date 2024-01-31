function updateCurrentYear() {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;
}

document.addEventListener('DOMContentLoaded', updateCurrentYear);
