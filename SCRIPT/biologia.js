document.querySelectorAll('.diploma-item').forEach(item => {
    item.addEventListener('click', function() {
        const modal = document.getElementById('modal');
        const modalImg = document.getElementById('modal-img');
        modalImg.src = this.getAttribute('data-img');
        modal.style.display = 'flex';
    });
});

document.querySelector('.close').onclick = function() {
    document.getElementById('modal').style.display = 'none';
};

window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};