import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-web';
import animate from 'lottie-web';

const Movielottie = () => {
    const container = useRef(null);
  
    useEffect(() => {
      Lottie.loadAnimation({
        container: container.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: require('./movie.json'),
      });
      animate.setSpeed(0.3);
    }, []);
  
    return (
    
          <div ref={container} style={{width: '280px',height: '280px'}}></div>
        
    );
  };
  
  export default Movielottie;