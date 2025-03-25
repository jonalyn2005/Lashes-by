

// Galería de Fotos
const gallerySlide = document.getElementById('gallerySlide');
const images = document.querySelectorAll('#gallerySlide img');
let currentIndex = 0;
const totalImages = images.length;

function updateGallery() {
  gallerySlide.style.transform = 'translateX(' + (-600 * currentIndex) + 'px)';
}
function nextSlide() {
  currentIndex = (currentIndex + 1) % totalImages;
  updateGallery();
}
function prevSlide() {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  updateGallery();
}

// Cambio automático de la galería cada 3 segundos
setInterval(nextSlide, 3000);


//carrito

function agregarAlCarrito(nombreProducto, precio) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.push({ nombre: nombreProducto, precio: precio });
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarCarrito();
  }
  
  function actualizarCarrito() {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let cartItems = document.getElementById('cartItems');
    let total = 0;
  
    cartItems.innerHTML = ''; // Limpiar el contenido del carrito
  
    carrito.forEach(item => {
      let li = document.createElement('li');
      li.textContent = `${item.nombre} - $${item.precio}`;
      cartItems.appendChild(li);
      total += item.precio;
    });
  
    document.getElementById('total').textContent = `Total: $${total}`;
  }
  
  window.onload = function() {
    actualizarCarrito();  // Llama la función para mostrar los productos al cargar la página
  };
  