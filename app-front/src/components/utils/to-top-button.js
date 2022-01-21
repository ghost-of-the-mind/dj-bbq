
//* Scroll-to-top button

import React, { useEffect, useState } from "react"

const ScrollToTop = () => {
  const [cssClass, setcssClass] = useState('scroll-to-top-button');
  
  const handleElementsOnScroll = () => {
      let currentScrollPos = window.pageYOffset
  
      if (currentScrollPos > 1600) {
        setcssClass('scroll-to-top-button showBtn');
      } else {
        setcssClass('scroll-to-top-button');
      }
  }

  window.addEventListener('scroll', handleElementsOnScroll);
  
  const handleClick = () => {
    window.scroll({
      top:0,
      behavior:'smooth'
    })
  };
  
    useEffect(() => {
        handleElementsOnScroll()
    }, [])
  
    return (
        <button className={ cssClass }
          onClick={handleClick}
        >
          &#10569;
        </button>
    )
  }

export default ScrollToTop;