import { useEffect, useRef, useState } from 'react'

function useAnimate(initialValue) {
    const targetRef = useRef()
    const [show, setShow] = useState(initialValue)
    useEffect(() => {

        function handleIntersection(entries) {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const notInitial=!initialValue
              setShow(notInitial)
            }else{
              // setShow(initialValue)
            }
          });
        }
        
        const observer = new IntersectionObserver(handleIntersection);
        if(targetRef.current){
          observer.observe(targetRef.current)
        }
    
      },[])
      return [show,targetRef]
}

export default useAnimate