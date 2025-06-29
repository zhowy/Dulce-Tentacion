<template>
  <nav class="sticky-nav">
    <div class="nav-container">
      <!-- Logo a la izquierda -->
      <div class="logo-small">Dulce Tentación</div>

      <!-- Enlaces centrados -->
      <ul class="nav-links center-links">
        <li>
          <router-link to="/" class="nav-link" exact-active-class="active">
            <i class="fas fa-home"></i><span>Inicio</span>
          </router-link>
        </li>
        <li>
          <router-link to="/productos" class="nav-link" exact-active-class="active">
            <i class="fas fa-birthday-cake"></i><span>Productos</span>
          </router-link>
        </li>
        <li>
          <router-link to="/nosotros" class="nav-link" exact-active-class="active">
            <i class="fas fa-heart"></i><span>Nosotros</span>
          </router-link>
        </li>
        <li>
          <router-link to="/contacto" class="nav-link" exact-active-class="active">
            <i class="fas fa-envelope"></i><span>Contacto</span>
          </router-link>
        </li>
      </ul>

      <!-- Botón de inicio de sesión a la derecha -->
      <div class="login-button">
        <router-link to="/acceder" class="nav-link">
          <i class="fas fa-user-circle"></i><span>Iniciar Sesión</span>
        </router-link>
      </div>
    </div>
  </nav>
  <div class="userlogin-wrapper">
    <div class="userlogin-container">
      <div class="userlogin-header">
        <h1>Dulce Tentación</h1>
        <p>¡Bienvenido de nuevo! Inicia sesión en tu cuenta</p>
      </div>

      <form class="userlogin-form">
        <div class="userlogin-form-group">
          <label for="email">Correo electrónico</label>
          <input type="email" id="email" placeholder="tucorreo@ejemplo.com" required />
        </div>

        <div class="userlogin-form-group">
          <label for="password">Contraseña</label>
          <input type="password" id="password" placeholder="••••••••" required />
        </div>

        <div class="userlogin-forgot-password">
          <a href="#">¿Olvidaste tu contraseña?</a>
        </div>

        <button type="submit" class="userlogin-btn userlogin-btn-primary">
          <i class="fas fa-sign-in-alt"></i> Iniciar Sesión
        </button>

        <div class="userlogin-social-login">
          <button type="button" class="userlogin-social-btn">
            <i class="fab fa-google"></i>
          </button>
          <button type="button" class="userlogin-social-btn">
            <i class="fab fa-facebook-f"></i>
          </button>
          <button type="button" class="userlogin-social-btn">
            <i class="fab fa-apple"></i>
          </button>
        </div>
      </form>

      <div class="userlogin-footer">
        ¿No tienes una cuenta? <a href="/registro">Regístrate aquí</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AccederUsuario'
}
</script>

<style>
:root {
  --primary-pastel: #FFD1DC;
  --secondary-pastel: #FFECB8;
  --accent-pastel: #B5EAD7;
  --light-pastel: #FFF4F4;
  --text-color: #5A3E36;
  --soft-shadow: 0 4px 20px rgba(0,0,0,0.08);
  --border-radius: 12px;
}

body {
  margin: 0;
  font-family: 'Quicksand', sans-serif;
  background-image: url('https://images.unsplash.com/photo-1571115177098-24ec42ed204d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80');
  background-size: cover;
  background-position: center;
  background-color: rgba(255, 244, 244, 0.9);
  background-blend-mode: overlay;
  min-height: 100vh;
}

.userlogin-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
}

.userlogin-container {
  width: 100%;
  max-width: 500px;
  background: white;
  border-radius: var(--border-radius);
  box-shadow: var(--soft-shadow);
  overflow: hidden;
  position: relative;
}

/* Resto de estilos igual que antes */

.userlogin-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 8px;
  background: linear-gradient(90deg, var(--primary-pastel), var(--accent-pastel), var(--primary-pastel));
}

.userlogin-header {
  padding: 30px;
  text-align: center;
  background-color: var(--light-pastel);
}

.userlogin-header h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
  color: var(--text-color);
}

.userlogin-header p {
  color: #8d6e63;
}

.userlogin-form {
  padding: 30px;
}

.userlogin-form-group {
  margin-bottom: 25px;
  position: relative;
}

.userlogin-form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: var(--text-color);
}

.userlogin-form-group input {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ffccd5;
  border-radius: 8px;
  font-size: 1rem;
  background-color: #fff9f9;
}

.userlogin-form-group input:focus {
  outline: none;
  border-color: var(--primary-pastel);
  box-shadow: 0 0 0 3px rgba(255, 209, 220, 0.3);
}

.userlogin-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  gap: 8px;
  width: 100%;
}

.userlogin-btn-primary {
  background-color: var(--primary-pastel);
  color: var(--text-color);
  box-shadow: var(--soft-shadow);
}

.userlogin-btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 24px rgba(255, 209, 220, 0.4);
}

.userlogin-footer {
  text-align: center;
  padding: 20px;
  border-top: 1px solid #ffebee;
  font-size: 0.9rem;
}

.userlogin-footer a {
  color: var(--text-color);
  font-weight: 600;
  text-decoration: none;
}

.userlogin-footer a:hover {
  text-decoration: underline;
}

.userlogin-social-login {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 15px;
}

.userlogin-social-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  color: var(--text-color);
  border: 1px solid #ffccd5;
  cursor: pointer;
  transition: all 0.3s;
}

.userlogin-social-btn:hover {
  background-color: var(--light-pastel);
  transform: translateY(-3px);
}

.userlogin-forgot-password {
  text-align: right;
  margin-top: -15px;
  margin-bottom: 20px;
}

.userlogin-forgot-password a {
  color: #8d6e63;
  font-size: 0.9rem;
  text-decoration: none;
}

.userlogin-forgot-password a:hover {
  text-decoration: underline;
}

@media (max-width: 480px) {
  .userlogin-container {
    margin: 10px;
  }

  .userlogin-header, .userlogin-form {
    padding: 20px;
  }
}
</style>
