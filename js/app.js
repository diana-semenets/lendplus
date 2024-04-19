const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 3,
    loop: true,
    speed:800,
    spaceBetween: 100,
    observer: true,
  
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: ".swiper-pagination",
      },
    breakpoints: {
        320: {
            slidesPerView: 1.2,
            spaceBetween: 10,
        },
        470: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        850: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        998: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1180: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    }, 
    
  });

  let menuBtn = document.querySelector(".menu-btn");
  let menu = document.querySelector(".menu");
  let menuItems = document.querySelector(".menu__list");
  menuBtn.addEventListener("click", (function() {
      menuBtn.classList.toggle("active");
      menu.classList.toggle("active");
      if (menuBtn.classList.contains("active")) document.body.style.overflow = "hidden"; else document.body.style.overflow = "";
  }));
  menu.addEventListener("click", (e => {
      if (e.target === menu) {
          menu.classList.remove("active");
          menuBtn.classList.remove("active");
          document.body.style.overflow = "";
      }
  }));


  document.addEventListener('keydown', (e) => {
      if (e.code === 'Escape' && menu.classList.contains('active')) {
          menu.classList.remove("active");
          menuBtn.classList.remove("active");
          document.body.style.overflow = "";
      }
  });
 
  document.addEventListener("click", function (e) {
      const target = e.target;
      const its_menu = target == menu || menu.contains(target);
      const its_btnMenu = target == menuBtn;
      const menu_is_active = menu.classList.contains("active");
  
      if (!its_menu && !its_btnMenu && menu_is_active) {
          menu.classList.remove("active");
          menuBtn.classList.remove("active");
          document.body.style.overflow = "";
      }
  });