document.addEventListener('DOMContentLoaded', () => { 

  const onScrollHeader = () => { 

    const header = document.querySelector('.header') 

    let prevScroll = window.pageYOffset
    let currentScroll 

    window.addEventListener('scroll', () => { 

      currentScroll = window.pageYOffset 

      const headerHidden = () => header.classList.contains('header_color') 

      if (currentScroll > prevScroll && !headerHidden()) { 
        header.classList.add('header_color') 
      }
      if (currentScroll < prevScroll && headerHidden()) {
        header.classList.remove('header_color')
      }

      prevScroll = currentScroll

    })

  }

  onScrollHeader() 

});
