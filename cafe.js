
  

  document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a[href^="#"]');
  
    links.forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  });

  
  
  document.addEventListener('DOMContentLoaded', () => {
    const scrollTopButton = document.createElement('button');
    scrollTopButton.textContent = '↑';
    scrollTopButton.style='border-radius:50%;font-size:30px;background-color:pink;';
    scrollTopButton.classList.add('scroll-top');
    document.body.appendChild(scrollTopButton);
  
    scrollTopButton.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  
    window.addEventListener('scroll', () => {
      if (window.scrollY > 3965) {
        scrollTopButton.style.display = 'block';
      } else {
        scrollTopButton.style.display = 'none';
      }
    });
  });

    // Select the element to animate
    const contactscroll = document.querySelector('.container');

    // Create an Intersection Observer to trigger animation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          contactscroll.classList.add('appear');  // Add 'appear' class when the element enters the viewport
        } else {
          contactscroll.classList.remove('appear');  // Optional: remove 'appear' class if the element exits the viewport
        }
      });
    }, {
      threshold: [0.1, 0.4]  // Trigger animation when 10% of the element is visible and stop at 40%
    });
  
    // Start observing the element
    observer.observe(contactscroll);
  


      // Select the element to animate
      const menuscroll = document.querySelector('.menu_container');

      // Create an Intersection Observer to trigger animation
      const observerr = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            menuscroll.classList.add('appearr');  // Add 'appear' class when the element enters the viewport
          } else {
            menuscroll.classList.remove('appearr');  // Optional: remove 'appear' class if the element exits the viewport
          }
        });
      }, {
        threshold: [0.1, 0.4]  // Trigger animation when 10% of the element is visible and stop at 40%
      });
    
      // Start observing the element
      observerr.observe(menuscroll);
    
      const bannerscroll = document.querySelector('.banner-container');

      // Create an Intersection Observer to trigger animation
      const observerrr = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            bannerscroll.classList.add('appearrr');  // Add 'appear' class when the element enters the viewport
          } else {
            bannerscroll.classList.remove('appearrr');  // Optional: remove 'appear' class if the element exits the viewport
          }
        });
      }, {
        threshold: [0.1, 0.4]  // Trigger animation when 10% of the element is visible and stop at 40%
      });
    
      // Start observing the element
      observerrr.observe(bannerscroll);
    