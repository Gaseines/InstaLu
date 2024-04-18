document.querySelector('.scroll-btn.left').addEventListener('click', () => {
    document.querySelector('.storyContainer').scrollBy({
      left: -100, // Valor em pixels que a barra irá rolar para a esquerda
      behavior: 'smooth'
    });
  });
  
  document.querySelector('.scroll-btn.right').addEventListener('click', () => {
    document.querySelector('.storyContainer').scrollBy({
      left: 100, // Valor em pixels que a barra irá rolar para a direita
      behavior: 'smooth'
    });
  });