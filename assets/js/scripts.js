document.addEventListener('DOMContentLoaded', function () {
    const video = document.querySelector('#backgroundVideo');
    const speaker = document.querySelector('#speaker');

    if (video && speaker) {
        speaker.addEventListener('click', () => {
            const isMuted = video.muted; // Verifica el estado del atributo "muted" del video

            if (isMuted) {
                video.muted = false;
                speaker.src = './assets/img/icons/speak.png';
            } else {
                video.muted = true;
                speaker.src = './assets/img/icons/muted.png';
            }
        });
    }


    const categories = document.querySelectorAll('.category');
    const cards = document.querySelectorAll('.card');
    if (categories.length > 0 && cards.length > 0) {
        categories.forEach(category => {
            category.addEventListener('click', function () {
                const filter = category.getAttribute('data-filter');
                cards.forEach(card => {
                    if (card.classList.contains(filter)) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }


    const reservationForm = document.getElementById('reservationForm');
    const confirmationModal = document.getElementById('confirmationModal');
    const closeModal = document.getElementById('closeModal');

    reservationForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const reservationDate = document.getElementById('reservationDate').value;
        const numberOfPeople = document.getElementById('numberOfPeople').value;

        // Guardar los datos en el Local Storage
        const reservationData = {
            firstName,
            lastName,
            email,
            reservationDate,
            numberOfPeople
        };
        localStorage.setItem('reservationData', JSON.stringify(reservationData));

        // Mostrar el modal de confirmación
        confirmationModal.style.display = 'block';
    });

    closeModal.addEventListener('click', function () {
        // Cerrar el modal de confirmación
        confirmationModal.style.display = 'none';
    });

});