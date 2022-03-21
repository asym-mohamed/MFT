const navLogo = document.querySelector('#navbar__logo');

const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const profileMenu = document.querySelector('#profile-page');
    const aboutMenu = document.querySelector('#about-page');
    const productMenu = document.querySelector('#product-page');
    const collaborationMenu = document.querySelector('#collaboration-page');
    let scrollPos = window.scrollY;
  
    // adds 'highlight' class to my menu items
    if (scrollPos < 600) {
        homeMenu.classList.add('highlight');
        profileMenu.classList.remove('highlight');
        return;
    }else if (scrollPos < 1400) {
        profileMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        aboutMenu.classList.remove('highlight');
        return;
    }else if (scrollPos < 3800) {
        aboutMenu.classList.add('highlight');
        productMenu.classList.remove('highlight');
        profileMenu.classList.remove('highlight');
        return;
    }else if (scrollPos < 6800) {
        productMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        collaborationMenu.classList.remove('highlight');
        return;
    }else if (scrollPos < 6900) {
        collaborationMenu.classList.add('highlight');
        productMenu.classList.remove('highlight');
        return;
    }
  };
  
  window.addEventListener('scroll', highlightMenu);
  window.addEventListener('click', highlightMenu);