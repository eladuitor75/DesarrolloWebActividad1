// Configuración de Firebase
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCllqsN8JG6xY7DD_sHkxJiWsFcwqg5l-E",
    authDomain: "restaurante-af062.firebaseapp.com",
    projectId: "restaurante-af062",
    storageBucket: "restaurante-af062.appspot.com",
    messagingSenderId: "318963701472",
    appId: "1:318963701472:web:778368aac2f6ffab332285",
    measurementId: "G-NNF71Q7ZFH"
  };

// Inicialización de Firebase
firebase.initializeApp(firebaseConfig);

// Referencia a Firestore
const db = firebase.firestore();

// Referencia al formulario
const form = document.getElementById('reservation-form');

// Evento de envío del formulario
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const date = form.date.value;
    const time = form.time.value;

    // Guardar la reserva en Firestore
    db.collection('reservations').add({
        name,
        email,
        phone,
        date,
        time
    })
    .then(() => {
        alert('Reserva realizada con éxito!');
        form.reset();
    })
    .catch(error => {
        console.error('Error: ', error);
    });
});
