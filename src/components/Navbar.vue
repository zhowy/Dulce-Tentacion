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
</template>

<script>
export default {
  name: 'AppNavbar' // ✅ Nombre multi-palabra para cumplir con ESLint
}
</script>

<style scoped>
.sticky-nav {
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  padding: 12px 0;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.logo-small {
  font-family: 'Pacifico', cursive;
  font-size: 1.5rem;
  color: var(--text-color);
  flex: 1;
}

.nav-links.center-links {
  display: flex;
  gap: 15px;
  list-style: none;
  justify-content: center;
  flex: 2;
}

.login-button {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--text-color);
  padding: 8px 16px;
  border-radius: 50px;
  font-weight: 500;
  text-decoration: none;
}

.nav-link:hover {
  background-color: var(--light-pastel);
}

@media (max-width: 768px) {
  .nav-container {
    flex-direction: column;
    align-items: center;
  }

  .logo-small,
  .login-button {
    justify-content: center;
    margin-bottom: 10px;
  }

  .nav-links.center-links {
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
