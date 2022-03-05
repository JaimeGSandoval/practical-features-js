const showOfferBtn = document.querySelector('.show-offer-button');
const modalOverlay = document.querySelector('.modal-overlay');
const acceptOfferBtn = document.querySelector('.accept-offer-btn');
const acceptedText = document.querySelector('.accepted-text');

function toggleModal(e) {
  if (
    e.target.classList.contains('modal') ||
    e.target.classList.contains('promo-box')
  )
    return;
  modalOverlay.classList.toggle('show');
}

showOfferBtn.addEventListener('click', toggleModal);
modalOverlay.addEventListener('click', toggleModal);
acceptOfferBtn.addEventListener('click', function () {
  acceptedText.style.display = 'block';
  showOfferBtn.style.display = 'none';
});
