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
    <section class="hero" id="inicio">
        <div class="hero-content">
            <h1 class="hero-title">Los Mejores Pasteles Artesanales</h1>
            <p class="hero-subtitle">Elaborados con ingredientes frescos y de la más alta calidad para endulzar tus momentos especiales</p>
            <div class="hero-buttons">
                <a href="#productos" class="btn btn-primary"><i class="fas fa-birthday-cake"></i> Ver Catálogo</a>
                <a href="#contacto" class="btn btn-secondary"><i class="fas fa-calendar-alt"></i> Hacer Pedido</a>
            </div>
        </div>
        <div class="hero-scroll-indicator">
            <span>Desliza para descubrir</span>
            <i class="fas fa-chevron-down"></i>
        </div>
    </section>
    
    <!-- Productos Destacados -->
    <section class="section" id="productos">
        <h2 class="section-title">Nuestras Delicias</h2>
        <div class="products-grid">
            <!-- Producto 1 -->
            <div class="product-card">
                <div class="product-img">
                    <img src="https://i.pinimg.com/736x/22/a4/b8/22a4b8a161f95dac5e0cd23cba4b5612.jpg" alt="Pastel de Chocolate" loading="lazy">
                </div>
                <div class="product-info">
                    <div class="product-header">
                        <h3 class="product-title">Chocolate Supremo</h3>
                        <div class="product-price">$450</div>
                    </div>
                    <p class="product-desc">Delicioso pastel de chocolate con relleno de ganache y cubierta de chocolate belga, decorado con fresas frescas y virutas de chocolate.</p>
                    <div class="product-actions">
                        <button class="btn-add-to-cart">¡Ordena ya!</button>
                    </div>
                </div>
            </div>
            
            <!-- Producto 2 -->
            <div class="product-card">
             
                <div class="product-img">
                    <img src="https://images.unsplash.com/photo-1571115177098-24ec42ed204d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="Pastel de Frutas" loading="lazy">
                </div>
                <div class="product-info">
                    <div class="product-header">
                        <h3 class="product-title">Fresas con Crema</h3>
                        <div class="product-price">$400</div>
                    </div>
                    <p class="product-desc">Esponjoso pastel de vainilla con fresas frescas de temporada y crema batida natural, decorado con chocolate blanco.</p>
                    <div class="product-actions">
                        <button class="btn-add-to-cart">¡Ordena ya!</button>
                    </div>
                </div>
            </div>
            <!-- Producto 5 -->
            <div class="product-card">
           
                <div class="product-img">
                    <img src="https://i.pinimg.com/736x/c4/3d/82/c43d82a0467956cd067cf332de8fc598.jpg" alt="Pastel de Red Velvet" loading="lazy">
                </div>
                <div class="product-info">
                    <div class="product-header">
                        <h3 class="product-title">Red Velvet Elegante</h3>
                        <div class="product-price">$480</div>
                    </div>
                    <p class="product-desc">Exquisito pastel de terciopelo rojo con capas de crema de queso y decoración minimalista en tonos rojos y blancos.</p>
                    <div class="product-actions">
                        <button class="btn-add-to-cart">¡Ordena ya!</button>
                    </div>
                </div>
            </div>

        </div>
    </section>
    
    <!-- Sobre Nosotros -->
    <section class="section about" id="nosotros">
        <h2 class="section-title">Nuestra Historia</h2>
        <div class="about-content">
            <img src="https://cdn-icons-png.flaticon.com/512/3577/3577429.png" alt="Chef pastelero" class="chef-img">
            <p>En <strong>Dulce Tentación</strong> llevamos más de 5 años endulzando los momentos especiales de nuestros clientes.</p>
        </div>
        
        <!-- Decoración -->
            </section>
    
    <!-- Contacto -->
    <section class="section contact" id="contacto">
        <h2 class="section-title">Haz tu Pedido</h2>
        <div class="contact-form-container">
            <form id="pedidoForm">
                <div class="form-group">
                    <label for="name"><i class="fas fa-user"></i> Nombre completo</label>
                    <input type="text" id="name" name="name" required>
                </div>
                
                <div class="form-group">
                    <label for="email"><i class="fas fa-envelope"></i> Correo electrónico</label>
                    <input type="email" id="email" name="email" required>
                </div>
                
                <button type="submit" class="btn-submit">
                    <i class="fas fa-paper-plane"></i> Enviar pedido
                </button>
                
                <p class="form-note">Todos los pedidos requieren 48 horas de anticipación</p>
            </form>
        </div>
    </section>
    
    <!-- Footer -->
    <footer>
        <div class="footer-grid">
            <div class="footer-about">
                <div class="footer-logo">Dulce Tentación</div>
                <p class="footer-about-text">Pastelería artesanal dedicada a crear los mejores momentos dulces desde 2020. Utilizamos ingredientes de la más alta calidad y recetas tradicionales.</p>
                <div class="social-links">
                    <a href="#" class="social-link"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="social-link"><i class="fab fa-instagram"></i></a>
                    <a
  href="https://wa.me/527721448071"
  target="_blank"
  rel="noopener noreferrer"
  class="social-link"
>
  <i class="fab fa-whatsapp"></i>
</a>

                    <a href="#" class="social-link"><i class="fab fa-pinterest-p"></i></a>
                </div>
            </div>
            
            <div class="footer-links">
                <h3>Menú</h3>
                <ul>
                    <li><a href="#inicio"><i class="fas fa-chevron-right"></i> Inicio</a></li>
                    <li><a href="#productos"><i class="fas fa-chevron-right"></i> Productos</a></li>
                    <li><a href="#nosotros"><i class="fas fa-chevron-right"></i> Sobre nosotros</a></li>
                    <li><a href="#contacto"><i class="fas fa-chevron-right"></i> Contacto</a></li>
                </ul>
            </div>
            
            <div class="footer-contact">
                <h3>Contacto</h3>
                <ul>
                    <li><a href="#"><i class="fas fa-map-marker-alt"></i> Av. Dulces 123, Ciudad Azúcar</a></li>
                    <li><a href="tel:+525512345678"><i class="fas fa-phone"></i> (55) 1234 5678</a></li>
                    <li><a href="mailto:info@dulcetentacion.com"><i class="fas fa-envelope"></i> info@dulcetentacion.com</a></li>
                    <li><a href="#"><i class="fas fa-clock"></i> Lunes a Sábado: 9am - 8pm</a></li>
                </ul>
            </div>
            
            
        </div>
        
        <div class="footer-bottom">
            <p>&copy; 2025 Dulce Tentación. Todos los derechos reservados.</p>
            <p>Diseñado con <i class="fas fa-heart" style="color: #ff4d6d;"></i> para los amantes del dulce</p>
        </div>
    </footer>
</template>

<script>
export default {
  name: 'InicioComponent' 
}

document.addEventListener('DOMContentLoaded', function() {
    const inicioSection = document.getElementById('inicio');
    let sparklesInterval;
    let isVisible = false;

    
    const colors = [
        '#FFB6C1', 
        '#D8BFD8', 
        '#ADD8E6', // Colores de las chispitas $unny
        '#98FB98', 
        '#FFDAB9', 
        '#DDA0DD'  
    ];

    // Crear una chispa supuestamente nada mas son circulos jaja $unny
    function createSparkle() {
        if (!isVisible) return;

        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        
        const size = Math.random() * 5 + 3;
        const posX = Math.random() * 100;
        const duration = Math.random() * 5 + 3;
        const delay = Math.random() * 2;
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        sparkle.style.width = `${size}px`;
        sparkle.style.height = `${size}px`;
        sparkle.style.left = `${posX}%`;
        sparkle.style.top = `-10px`;
        sparkle.style.background = color;
        sparkle.style.animationDuration = `${duration}s`;
        sparkle.style.animationDelay = `${delay}s`;
        
        inicioSection.appendChild(sparkle);
        
        setTimeout(() => {
            sparkle.remove();
        }, (duration + delay) * 1000);
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                isVisible = true;
                sparklesInterval = setInterval(createSparkle, 100);
            } else {
                isVisible = false;
                clearInterval(sparklesInterval);
                
                document.querySelectorAll('.sparkle').forEach(sparkle => {
                    sparkle.remove();
                });
            }
        });
    }, { threshold: 0.1 });

    observer.observe(inicioSection);

   
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
            this.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = 'var(--soft-shadow)';
        });
    });

 
    window.addEventListener('scroll', function() {
        const scrollIndicator = document.querySelector('.hero-scroll-indicator');
        if (scrollIndicator) {
            if (window.scrollY > 100) {
                scrollIndicator.style.opacity = '0';
                scrollIndicator.style.visibility = 'hidden';
            } else {
                scrollIndicator.style.opacity = '1';
                scrollIndicator.style.visibility = 'visible';
            }
        }
    });
});
</script>

<style >
/* Variables y estilos base $sunny*/
:root {
    --primary-pastel: #FFD1DC;
    --secondary-pastel: #FFECB8;
    --accent-pastel: #B5EAD7;
    --light-pastel: #FFF4F4;
    --text-color: #5A3E36;
    --soft-shadow: 0 4px 20px rgba(0,0,0,0.08);
    --border-radius: 12px;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: all 0.25s cubic-bezier(0.2, 0, 0.1, 1);
}

body {
    font-family: 'Quicksand', sans-serif;
    background-color: var(--light-pastel);
    color: var(--text-color);
    line-height: 1.6;
    overflow-x: hidden;
}

h1, h2, h3, h4 {
    font-family: 'Pacifico', cursive;
    font-weight: 400;
    color: var(--text-color);
}

a {
    text-decoration: none;
    color: inherit;
}

img {
    max-width: 100%;
    height: auto;
}

/* Botones  $sunny*/
.btn {
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
}

.btn-primary {
    background-color: var(--primary-pastel);
    color: var(--text-color);
    box-shadow: var(--soft-shadow);
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 24px rgba(255, 209, 220, 0.4);
}

.btn-secondary {
    background-color: white;
    color: var(--text-color);
    border: 1px solid var(--primary-pastel);
}

.btn-secondary:hover {
    background-color: var(--light-pastel);
}

/* Header  $sunny*/
header {
    background: linear-gradient(135deg, var(--primary-pastel) 0%, #ff8fa3 100%);
    color: white;
    padding: 30px 0;
    text-align: center;
    position: relative;
    overflow: hidden;
}

.logo {
    font-size: clamp(2.5rem, 5vw, 3.5rem);
    margin-bottom: 10px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
    animation: gentle-pulse 3s infinite;
}

.slogan {
    font-style: italic;
    font-size: clamp(1rem, 2vw, 1.2rem);
    text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
}

/* Hero section  $sunny*/
.hero {
    height: 90vh;
    min-height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: url('https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80') center/cover no-repeat;
    position: relative;
    overflow: hidden;
}

.hero-content {
    max-width: 800px;
    padding: 0 20px;
    z-index: 2;
}

.hero-title {
    font-size: clamp(2.5rem, 5vw, 4rem);
    margin-bottom: 20px;
    animation: fadeInDown 1s ease;
    color: white;
    text-shadow: 2px 2px 8px rgba(0,0,0,0.3);
}

.hero-subtitle {
    font-size: clamp(1rem, 2vw, 1.5rem);
    margin-bottom: 40px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    color: white;
    text-shadow: 1px 1px 3px rgba(0,0,0,0.3);
}

.hero-buttons {
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
}

.hero-scroll-indicator {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    font-size: 0.9rem;
    animation: bounce 2s infinite;
}

/* Estilos para las chispas  $sunny */
.sparkle {
    position: absolute;
    pointer-events: none;
    animation: fall linear forwards;
    border-radius: 50%;
}

@keyframes fall {
    0% {
        transform: translateY(0);
    }
    to {
        transform: translateY(100vh);
    }
}

/* Sección de productos  $sunny*/
.section {
    padding: 80px 20px;
    position: relative;
}

.section-title {
    font-size: clamp(2rem, 5vw, 3rem);
    margin-bottom: 50px;
    text-align: center;
    position: relative;
    display: inline-block;
    left: 50%;
    transform: translateX(-50%);
}

.section-title::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, var(--primary-pastel), var(--accent-pastel), var(--primary-pastel));
    border-radius: 2px;
}

.products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 30px;
    max-width: 1200px;
    margin: 0 auto;
}

.product-card {
    background: white;
    border-radius: var(--border-radius);
    overflow: hidden;
    box-shadow: var(--soft-shadow);
}

.product-card:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 8px 25px rgba(0,0,0,0.1);
}

.product-badge {
    position: absolute;
    top: 15px;
    right: 15px;
    background-color: var(--accent-pastel);
    color: var(--text-color);
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
    z-index: 2;
}

.product-img {
    height: 250px;
    overflow: hidden;
    position: relative;
}

.product-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.8s ease;
}

.product-card:hover .product-img img {
    transform: scale(1.05);
}

.product-info {
    padding: 20px;
}

.product-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
}

.product-title {
    font-size: 1.25rem;
    margin: 0;
}

.product-price {
    font-weight: 700;
    color: #ff4d6d;
    font-size: 1.1rem;
}

.product-desc {
    color: #8d6e63;
    font-size: 0.95rem;
    margin-bottom: 15px;
    line-height: 1.5;
}

.product-actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.btn-favorite {
    background: none;
    border: none;
    color: #ccc;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.3s;
}

.btn-favorite:hover, .btn-favorite.active {
    color: #ff4d6d;
}

.btn-add-to-cart {
    background-color: var(--primary-pastel);
    border: none;
    padding: 8px 16px;
    border-radius: 20px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
    font-size: 0.9rem;
}

.btn-add-to-cart:hover {
    background-color: #ffb3c1;
}

/* Sobre nosotros  $sunny*/
.about {
    background-color: #ffebee;
    position: relative;
}

.about::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 20px;
    background: url('data:image/svg+xml;utf8,<svg viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="%23ffebee" opacity=".25"/><path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="%23ffebee" opacity=".5"/><path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="%23ffebee"/></svg>');
    background-size: cover;
    transform: rotate(180deg);
    top: -19px;
}

.about-content {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
    font-size: 1.1rem;
    line-height: 1.8;
}

.about-content p {
    margin-bottom: 20px;
}

.chef-img {
    width: 180px;
    height: 180px;
    border-radius: 50%;
    object-fit: cover;
    border: 5px solid var(--primary-pastel);
    margin: 30px auto;
    box-shadow: var(--soft-shadow);
    animation: gentle-float 6s ease-in-out infinite;
}


/* Contacto  $sunny*/
.contact {
    background-color: #ffebee;
    position: relative;
}

.contact::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 20px;
    background: url('data:image/svg+xml;utf8,<svg viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="%23ffebee" opacity=".25"/><path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="%23ffebee" opacity=".5"/><path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="%23ffebee"/></svg>');
    background-size: cover;
    bottom: -19px;
}

.contact-form-container {
    max-width: 700px;
    margin: 0 auto;
    background: white;
    padding: 40px;
    border-radius: var(--border-radius);
    box-shadow: var(--soft-shadow);
    position: relative;
}

.contact-form-container::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 8px;
    background: linear-gradient(90deg, var(--primary-pastel), var(--accent-pastel), var(--primary-pastel));
    border-radius: var(--border-radius) var(--border-radius) 0 0;
}

.form-group {
    margin-bottom: 25px;
    position: relative;
}

.form-group label {
    display: block;
    margin-bottom: 8px;
    font-weight: 600;
    color: var(--text-color);
}

.form-group input,
.form-group textarea,
.form-group select {
    width: 100%;
    padding: 12px 15px;
    border: 1px solid #ffccd5;
    border-radius: 8px;
    font-size: 1rem;
    background-color: #fff9f9;
    font-family: 'Quicksand', sans-serif;
}

.form-group input:focus,
.form-group textarea:focus,
.form-group select:focus {
    outline: none;
    border-color: var(--primary-pastel);
    box-shadow: 0 0 0 3px rgba(255, 209, 220, 0.3);
}

.form-group textarea {
    min-height: 150px;
    resize: vertical;
}

.btn-submit {
    width: 100%;
    padding: 15px;
    background-color: var(--primary-pastel);
    color: var(--text-color);
    font-weight: 600;
    font-size: 1.1rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    margin-top: 10px;
}

.btn-submit:hover {
    background-color: #ffb3c1;
}

.form-note {
    text-align: center;
    margin-top: 20px;
    font-size: 0.9rem;
    color: #8d6e63;
}

/* Footer  $sunny*/
footer {
    background: linear-gradient(135deg, #5a3e36 0%, #3e2723 100%);
    color: white;
    padding: 60px 20px 30px;
    position: relative;
}

.footer-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 40px;
    max-width: 1200px;
    margin: 0 auto;
}

.footer-about {
    display: flex;
    flex-direction: column;
}

.footer-logo {
    font-family: 'Pacifico', cursive;
    font-size: 2rem;
    margin-bottom: 15px;
    color: white;
}

.footer-about-text {
    margin-bottom: 20px;
    color: #ffccd5;
    line-height: 1.6;
}

.social-links {
    display: flex;
    gap: 15px;
    margin-top: auto;
}

.social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    color: white;
    transition: all 0.3s;
}

.social-link:hover {
    background-color: var(--primary-pastel);
    color: var(--text-color);
    transform: translateY(-3px);
}

.footer-links h3,
.footer-contact h3 {
    font-size: 1.3rem;
    margin-bottom: 20px;
    color: var(--primary-pastel);
}

.footer-links ul,
.footer-contact ul {
    list-style: none;
}

.footer-links li,
.footer-contact li {
    margin-bottom: 12px;
}

.footer-links a,
.footer-contact a {
    color: #ffccd5;
    display: flex;
    align-items: center;
    gap: 10px;
    transition: color 0.3s;
}

.footer-links a:hover,
.footer-contact a:hover {
    color: white;
}

.footer-newsletter h4 {
    font-size: 1.3rem;
    margin-bottom: 20px;
    color: var(--primary-pastel);
    font-family: 'Quicksand', sans-serif;
    font-weight: 600;
}

.newsletter-form {
    display: flex;
    margin-bottom: 20px;
}

.newsletter-form input {
    flex: 1;
    padding: 12px 15px;
    border: none;
    border-radius: 30px 0 0 30px;
    font-family: 'Quicksand', sans-serif;
}

.newsletter-form input:focus {
    outline: none;
}

.newsletter-form button {
    width: 50px;
    background-color: var(--primary-pastel);
    color: var(--text-color);
    border: none;
    border-radius: 0 30px 30px 0;
    cursor: pointer;
    font-size: 1.1rem;
}

.footer-bottom {
    text-align: center;
    margin-top: 60px;
    padding-top: 30px;
    border-top: 1px solid rgba(255, 204, 213, 0.2);
    color: #ffccd5;
    font-size: 0.9rem;
}


.cake-decoration {
    position: absolute;
    width: 60px;
    height: 60px;
    background-size: contain;
    background-repeat: no-repeat;
    z-index: 1;
    pointer-events: none;
    animation: gentle-float 6s ease-in-out infinite;
}

/* Animaciones  $sunny*/
@keyframes fadeInDown {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes gentle-pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
}

@keyframes gentle-float {
    0%, 100% { transform: translateY(0) rotate(-2deg); }
    50% { transform: translateY(-10px) rotate(2deg); }
}

@keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateY(0) translateX(-50%); }
    40% { transform: translateY(-15px) translateX(-50%); }
    60% { transform: translateY(-7px) translateX(-50%); }
}

/* Responsive */
@media (max-width: 768px) {
    .hero-buttons {
        flex-direction: column;
        gap: 15px;
    }
    
    .products-grid {
        grid-template-columns: 1fr;
    }
    
    .testimonials-grid {
        grid-template-columns: 1fr;
    }
    
    .contact-form-container {
        padding: 30px 20px;
    }
    
    .footer-grid {
        grid-template-columns: 1fr;
        gap: 30px;
    }
}

@media (max-width: 480px) {
    .hero {
        height: auto;
        padding: 100px 0;
    }
    
    .section {
        padding: 60px 20px;
    }
}

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