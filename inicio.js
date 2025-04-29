const iconosImg = document.querySelectorAll('.social-icon img');

iconosImg.forEach(icono => {
  icono.addEventListener('mouseover', () => {
    icono.style.opacity = '0.7';
    icono.style.cursor = 'pointer'; // Cambiar el cursor para indicar interactividad
  });
  icono.addEventListener('mouseout', () => {
    icono.style.opacity = '1';
  });
});

iconosImg.forEach(icono => {
  icono.addEventListener('mouseover', () => {
    icono.style.transform = 'scale(1.05)';
    icono.style.transition = 'transform 0.2s ease-in-out';
    icono.style.cursor = 'pointer';
  });
  icono.addEventListener('mouseout', () => {
    icono.style.transform = 'scale(1)';
    icono.style.transition = 'transform 0.2s ease-in-out';
  });
});

const iconosEnlace = document.querySelectorAll('.social-icon');

iconosEnlace.forEach(iconoEnlace => {
  const iconoImg = iconoEnlace.querySelector('img');
  iconoEnlace.addEventListener('click', (event) => {
    event.preventDefault(); // Evita la apertura inmediata del enlace

    iconoImg.style.transform = 'translateY(-3px)';
    iconoImg.style.transition = 'transform 0.1s ease-in-out';

    setTimeout(() => {
      iconoImg.style.transform = 'translateY(0)';
      iconoImg.style.transition = 'transform 0.1s ease-in-out';
      window.location.href = iconoEnlace.href; // Redirige después de la animación
    }, 100);
  });
});
