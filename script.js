const form = document.getElementById('registroForm');
const pass = document.getElementById('pass');
const pass2 = document.getElementById('pass2');
const fotoInput = document.getElementById('foto');
const previewImg = document.getElementById('previewImg');

// 🖼️ Previsualizar foto de perfil
fotoInput.addEventListener('change', function(e) {
    const archivo = e.target.files[0];
    if (archivo) {
        const lector = new FileReader();
        lector.onload = function(evt) {
            previewImg.src = evt.target.result;
        };
        lector.readAsDataURL(archivo);
    }
});

// ✅ Validación al enviar
form.addEventListener('submit', function(e) {
    e.preventDefault();

    // 🔒 Validar contraseña mínima 8 caracteres
    if (pass.value.length < 8) {
        alert('❌ La contraseña debe tener al menos 8 caracteres.');
        pass.focus();
        return;
    }

    // 🔄 Validar que coincidan las contraseñas
    if (pass.value !== pass2.value) {
        alert('❌ Las contraseñas no coinciden.');
        pass2.focus();
        return;
    }

    // ✅ Todo correcto
    alert('✅ Registro completado con éxito. ¡Bienvenido!');
    form.reset();
    previewImg.src = "https://cdn-icons-png.flaticon.com/512/149/149071.png"; // Volver a imagen original
});
