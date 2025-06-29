<template>
  <div class="userregister-wrapper">
    <div class="userregister-container">
      <div class="userregister-header">
        <h1>Dulce Tentación</h1>
        <p>¡Únete a nuestra comunidad de amantes de los postres!</p>
      </div>

      <form class="userregister-form">
        <div class="userregister-row">
          <div class="userregister-group">
            <label for="first-name">Nombre</label>
            <input type="text" id="first-name" placeholder="Tu nombre" required>
          </div>

          <div class="userregister-group">
            <label for="last-name">Apellido</label>
            <input type="text" id="last-name" placeholder="Tu apellido" required>
          </div>
        </div>

        <div class="userregister-group">
          <label for="email">Correo electrónico</label>
          <input type="email" id="email" placeholder="tucorreo@ejemplo.com" required>
        </div>

        <div class="userregister-group">
          <label for="password">Contraseña</label>
          <input type="password" id="password" placeholder="••••••••" required>
          <div class="userregister-strength">
            <div class="userregister-meter" id="strength-meter"></div>
          </div>
        </div>

        <div class="userregister-group">
          <label for="confirm-password">Confirmar contraseña</label>
          <input type="password" id="confirm-password" placeholder="••••••••" required>
        </div>

        <button type="submit" class="userregister-btn">
          <i class="fas fa-user-plus"></i> Crear Cuenta
        </button>

        <div class="userregister-terms">
          Al registrarte, aceptas nuestros <a id="terms-link">Términos de servicio</a> y <a id="privacy-link">Política de privacidad</a>
        </div>
      </form>

      <div class="userregister-footer">
        ¿Ya tienes una cuenta? <a href="/acceder">Inicia sesión aquí</a>
      </div>
    </div>

    <!-- Modal Términos -->
    <div class="userregister-modal" id="terms-modal">
      <div class="userregister-modal-content">
        <div class="userregister-modal-header">
          <h2>Términos de Servicio</h2>
          <button class="userregister-close-modal">&times;</button>
        </div>
        <div class="userregister-modal-body">
          <h3>1. Pendiente</h3>
          <p>Los términos de servicio están en redacción y serán publicados próximamente.</p>
          <h3>2. Pendiente</h3>
          <p>Trabajamos en una experiencia segura para todos.</p>
          <h3>3. Pendiente</h3>
          <p>Detallaremos las condiciones de uso pronto.</p>
        </div>
      </div>
    </div>

    <!-- Modal Privacidad -->
    <div class="userregister-modal" id="privacy-modal">
      <div class="userregister-modal-content">
        <div class="userregister-modal-header">
          <h2>Política de Privacidad</h2>
          <button class="userregister-close-modal">&times;</button>
        </div>
        <div class="userregister-modal-body">
          <h3>1. Pendiente</h3>
          <p>Estamos desarrollando nuestra política para proteger tus datos.</p>
          <h3>2. Pendiente</h3>
          <p>Cumpliremos con todas las normativas vigentes.</p>
          <h3>3. Pendiente</h3>
          <p>Publicaremos los detalles próximamente.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegistrarUsuario',
  mounted() {
    const passwordInput = document.getElementById('password');
    const strengthMeter = document.getElementById('strength-meter');
    passwordInput.addEventListener('input', function () {
      const password = this.value;
      let strength = 0;
      if (password.length > 0) strength += 20;
      if (password.length >= 8) strength += 20;
      if (/[A-Z]/.test(password)) strength += 20;
      if (/[0-9]/.test(password)) strength += 20;
      if (/[^A-Za-z0-9]/.test(password)) strength += 20;
      strengthMeter.style.width = strength + '%';
      strengthMeter.style.backgroundColor = strength < 40 ? '#ff4d6d' : strength < 80 ? '#ffb3c1' : '#B5EAD7';
    });

    const termsModal = document.getElementById('terms-modal');
    const privacyModal = document.getElementById('privacy-modal');
    const closeBtns = document.querySelectorAll('.userregister-close-modal');
    document.getElementById('terms-link').addEventListener('click', () => {
      termsModal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    });
    document.getElementById('privacy-link').addEventListener('click', () => {
      privacyModal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    });
    closeBtns.forEach(btn =>
      btn.addEventListener('click', () => {
        termsModal.style.display = 'none';
        privacyModal.style.display = 'none';
        document.body.style.overflow = 'auto';
      })
    );
    window.addEventListener('click', (e) => {
      if (e.target === termsModal || e.target === privacyModal) {
        termsModal.style.display = 'none';
        privacyModal.style.display = 'none';
        document.body.style.overflow = 'auto';
      }
    });
  }
}
</script>

<style scoped>
body {
  margin: 0;
  font-family: 'Quicksand', sans-serif;
  background: url('https://images.unsplash.com/photo-1562440499-64c9a111f713?auto=format&fit=crop&w=1974&q=80') no-repeat center center / cover;
  background-color: rgba(255, 244, 244, 0.9);
  background-blend-mode: overlay;
  min-height: 100vh;
}

.userregister-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  min-height: 100vh;
}

.userregister-container {
  max-width: 600px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  position: relative;
  width: 100%;
}

.userregister-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 8px;
  width: 100%;
  background: linear-gradient(90deg, #FFD1DC, #B5EAD7, #FFD1DC);
}

.userregister-header {
  text-align: center;
  background-color: #FFF4F4;
  padding: 30px;
}

.userregister-form {
  padding: 30px;
}

.userregister-row {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.userregister-group {
  flex: 1;
  margin-bottom: 20px;
}

.userregister-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
}

.userregister-group input {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ffccd5;
  border-radius: 8px;
  background: #fff9f9;
  font-family: 'Quicksand', sans-serif;
}

.userregister-strength {
  margin-top: 5px;
  background-color: #ffebee;
  height: 4px;
  border-radius: 2px;
  overflow: hidden;
}

.userregister-meter {
  height: 100%;
  width: 0%;
  transition: width 0.3s;
}

.userregister-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  background-color: #FFD1DC;
  border-radius: 50px;
  border: none;
  width: 100%;
  font-weight: 600;
  cursor: pointer;
  gap: 8px;
}

.userregister-btn:hover {
  background-color: #ffb3c1;
  box-shadow: 0 6px 24px rgba(255, 209, 220, 0.4);
}

.userregister-terms {
  text-align: center;
  margin-top: 20px;
  font-size: 0.85rem;
}

.userregister-footer {
  text-align: center;
  padding: 20px;
  border-top: 1px solid #ffebee;
  font-size: 0.9rem;
}

.userregister-footer a,
.userregister-terms a {
  color: #5A3E36;
  font-weight: 600;
  text-decoration: none;
}

.userregister-footer a:hover,
.userregister-terms a:hover {
  text-decoration: underline;
}

/* Modal */
.userregister-modal {
  display: none;
  position: fixed;
  z-index: 1000;
  inset: 0;
  background: rgba(0,0,0,0.5);
  align-items: center;
  justify-content: center;
}

.userregister-modal-content {
  background: white;
  padding: 30px;
  border-radius: 12px;
  max-width: 600px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
}

.userregister-modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.userregister-close-modal {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

@media (max-width: 768px) {
  .userregister-row {
    flex-direction: column;
  }
}
</style>
