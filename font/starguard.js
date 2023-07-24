document.addEventListener('DOMContentLoaded', function() {
    var banner = document.querySelector('.banner');
    var video = banner.querySelector('video');
  
    video.addEventListener('click', function() {
      banner.classList.add('clicked');
    });
  });
  
  
  
  document.querySelector('.read-more').addEventListener('click', function() {
      var article = this.parentNode;
      var moreContent = article.querySelector('.more-content');
      
      if (article.classList.contains('show-more')) {
        article.classList.remove('show-more');
        this.textContent = 'READ MORE';
      } else {
        article.classList.add('show-more');
        this.textContent = 'SHOW LESS';
      }
    });

    let prevScrollPos = window.pageYOffset;

    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
    
    function handleScroll() {
      const elements = document.querySelectorAll('.about-section');
    
      const currentScrollPos = window.pageYOffset;
      const scrollingDown = currentScrollPos > prevScrollPos;
    
      elements.forEach((element) => {
        if (isInViewport(element)) {
          element.classList.add('animate');
          if (scrollingDown) {
            element.classList.remove('hidden');
          } else {
            element.classList.add('hidden');
          }
        } else {
          element.classList.remove('animate');
        }
      });
    
      prevScrollPos = currentScrollPos;
    }