document.addEventListener('DOMContentLoaded', function() {
    var promoModal = document.getElementById('promo-modal');
    var closePromo = document.getElementById('close-promo');
    var slides = document.querySelectorAll('.promo-slide');
    var descriptions = document.querySelectorAll('.promo-description');
    var currentIndex = 0;

    function showModal() {
        promoModal.classList.remove('hidden');
        document.body.classList.add('modal-open');
    }

    function closeModal() {
        promoModal.classList.add('hidden');
        document.body.classList.remove('modal-open');
    }

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        descriptions.forEach(description => description.classList.add('hidden'));

        slides[index].classList.add('active');
        descriptions[index].classList.remove('hidden');
    }

    closePromo.addEventListener('click', closeModal);

    setInterval(function() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }, 5000); // Change slide every 5 seconds

    // Show the modal initially
    showModal();
});
