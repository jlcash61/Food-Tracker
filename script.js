document.getElementById('fast-food-btn').addEventListener('click', function() {
    showPage('fast-food-page');
});

document.getElementById('restaurant-btn').addEventListener('click', function() {
    showPage('restaurant-page');
});

document.getElementById('grocery-store-btn').addEventListener('click', function() {
    showPage('grocery-store-page');
});

document.getElementById('back-to-home-1').addEventListener('click', function() {
    showPage('home-page');
});

document.getElementById('back-to-home-2').addEventListener('click', function() {
    showPage('home-page');
});

document.getElementById('back-to-home-3').addEventListener('click', function() {
    showPage('home-page');
});

function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page, #home-page');
    pages.forEach(page => page.classList.add('hidden'));

    // Show the selected page
    document.getElementById(pageId).classList.remove('hidden');
}
