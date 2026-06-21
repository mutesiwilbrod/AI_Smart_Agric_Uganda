// ---------- TAB SWITCHING ----------
const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.getAttribute('data-tab');

    tabButtons.forEach(b => b.classList.remove('active'));
    tabPanels.forEach(p => p.classList.remove('active'));

    btn.classList.add('active');
    document.getElementById(`tab-${target}`).classList.add('active');
  });
});

// ---------- ADD CROP MODAL ----------
const modalOverlay = document.getElementById('addModalOverlay');
const openAddModalBtn = document.getElementById('openAddModalBtn');
const addCropCard = document.getElementById('addCropCard');
const closeModalBtn = document.getElementById('closeModalBtn');
const cancelModalBtn = document.getElementById('cancelModalBtn');
const saveCropBtn = document.getElementById('saveCropBtn');
const addCropForm = document.getElementById('addCropForm');

function openModal(){
  modalOverlay.classList.add('open');
}
function closeModal(){
  modalOverlay.classList.remove('open');
  addCropForm.reset();
}

openAddModalBtn?.addEventListener('click', openModal);
addCropCard?.addEventListener('click', openModal);
closeModalBtn?.addEventListener('click', closeModal);
cancelModalBtn?.addEventListener('click', closeModal);

modalOverlay?.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeModal();
});

saveCropBtn?.addEventListener('click', () => {
  if (addCropForm.reportValidity()) {
    // In a real app this would POST data to the backend / API.
    closeModal();
    alert('Crop saved successfully!');
  }
});

// ---------- ADD FIELD CARD (placeholder action) ----------
const addFieldCard = document.querySelector('.add-field-card');
addFieldCard?.addEventListener('click', () => {
  alert('Add New Field form would open here.');
});
