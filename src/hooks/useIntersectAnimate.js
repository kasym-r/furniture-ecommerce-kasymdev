import { useEffect, useMemo, useState } from 'react'

export default function useIntersectAnimate(options, targetRef) {
        const [isVisible, setIsVisible] = useState(false);

        const callbackFunction = entries =>{
            const [entry ]= entries;
            setIsVisible(entry.isIntersecting)
        }

        const optionsMemo = useMemo(()=>{
            return options;
        }, [options]) 

        useEffect(()=>{
            const observer = new IntersectionObserver(callbackFunction, optionsMemo);
            const currentTraget = targetRef.current;
            if(currentTraget) observer.observe(currentTraget);
        
            return ()=>{
                if(currentTraget) observer.unobserve(currentTraget);
            }
        }, [targetRef, optionsMemo])
  
        return isVisible;
}
