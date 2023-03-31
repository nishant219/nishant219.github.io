import { animateScroll as scroll } from 'react-scroll';
import { useEffect, useState } from 'react';


function Test() {

    const [showScrollButton, setShowScrollButton] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.pageYOffset > 500) {
          setShowScrollButton(true);
        } else {
          setShowScrollButton(false);
        }
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);



  return (

    <div>
      {/* <button onClick={() => scroll.scrollToTop()}>
        Scroll to Top
      </button>
      <section id="section-1" className="bg-red-400 h-20">
        <h1>Section 1</h1>
      </section>
      <section id="section-2" className="bg-red-400 h-20">
        <h1>Section 2</h1>
        <button onClick={() => scroll.scrollTo('#section-1', { smooth: true })}>
          Scroll to Section 1
        </button>
      </section> */}



      {showScrollButton && (
        <button
          className="fixed bottom-4 right-4 p-4 rounded-full bg-gray-800 text-white"
          onClick={() => scroll.scrollTo('#section-1', { duration: 100, smooth: true })}
        >
          Scroll to Top
        </button>
      )}
      <section id="section-1" className="bg-red-300 h-0">
        <h1> </h1>
      </section>
      {/* <section id="section-2" className="bg-yellow-200 h-0">
        <h1>Section 2</h1>
      </section> */}


    </div>
  );
}

export default Test;
