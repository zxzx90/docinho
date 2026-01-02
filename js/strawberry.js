document.addEventListener('DOMContentLoaded', function() {
    // --- CÓDIGO DO SLIDESHOW ---
    const photos = [
        'img/kk.jpeg', // Caminho para a foto inicial do card (na raiz da pasta sweet)

        // Adicione aqui todos os caminhos para as suas fotos do slideshow.
        // Certifique-se de que os nomes e a pasta (ex: 'images/') estão corretos.
    ];

    let currentIndex = 0;
    const currentPhoto = document.getElementById('current-photo');
    const currentPhotoLink = document.getElementById('current-photo-link');
    const slideshowContainer = document.getElementById('slideshow-container');

    function changePhoto() {
        if (!currentPhoto || photos.length === 0) {
            console.warn("Elemento 'current-photo' não encontrado ou array 'photos' vazio.");
            return;
        }

        // Incrementa o índice e volta para o início se ultrapassar o tamanho do array
        currentIndex = (currentIndex + 1) % photos.length;
        const nextPhotoSrc = photos[currentIndex];

        // Aplica um efeito de fade-out
        currentPhoto.style.opacity = 0;

        setTimeout(() => {
            currentPhoto.src = nextPhotoSrc;
            // Se houver links diferentes para cada foto, a lógica iria aqui
            // currentPhotoLink.href = 'link_para_foto_' + currentIndex + '.html'; 
            currentPhoto.style.opacity = 1; // Aplica um fade-in
        }, 500); // Tempo do fade-out (meio segundo)
    }

    // Inicia o slideshow automático a cada X segundos (5000 milissegundos = 5 segundos)



    // Opcional: Pausar/Retomar slideshow ao passar o mouse
    if (slideshowContainer) {
        slideshowContainer.addEventListener('mouseenter', () => {
            clearInterval(slideshowInterval); // Pausa o slideshow
        });

        slideshowContainer.addEventListener('mouseleave', () => {
            slideshowInterval = setInterval(changePhoto, 5000); // Retoma o slideshow
        });
    }

    // --- CÓDIGO PARA O MENU HAMBÚRGUER ---
    const menuIcon = document.getElementById('menuIcon');
    const mainNav = document.querySelector('.main-nav');
    
    // NOVO: Cria e adiciona o overlay dinamicamente ao body
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.appendChild(overlay);

    if (menuIcon && mainNav) {
        menuIcon.addEventListener('click', function() {
            menuIcon.classList.toggle('active');
            mainNav.classList.toggle('active');
            overlay.classList.toggle('active'); // Alternar a classe 'active' no overlay
        });

        // Fechar o menu ao clicar no overlay
        overlay.addEventListener('click', function() {
            menuIcon.classList.remove('active');
            mainNav.classList.remove('active');
            overlay.classList.remove('active'); // Esconde o overlay
        });

        // Fechar o menu ao clicar em um item de navegação
        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menuIcon.classList.remove('active');
                mainNav.classList.remove('active');
                overlay.classList.remove('active'); // Esconde o overlay
            });
        });
    } else {
        console.warn("Elementos do menu hambúrguer não encontrados (menuIcon ou mainNav).");
    }
});








/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}

/* Menu hidden */
if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
   const navMenu = document.getElementById('nav-menu')
   // When we click on each nav__link, we remove the show-menu class
   navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SHOW DROPDOWN ===============*/
const showDropdown = (dropdownId) =>{
   const dropdown = document.getElementById(dropdownId)

   dropdown.addEventListener('click', ()=>{
      /* Show dropdown */
      dropdown.classList.toggle('show-dropdown')
   })
}
showDropdown('dropdown')
