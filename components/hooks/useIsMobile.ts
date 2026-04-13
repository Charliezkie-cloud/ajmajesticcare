import { useEffect, useState } from "react";

export default function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);

  useEffect(() => {
    // console.log(`===== useIsMobile.ts: DEBUG =====`);
    // console.log(`Window inner height: ${window.innerWidth}`);
    // console.log(`Breakpoint: ${breakpoint}`);
    // console.log(`Test: ${window.innerWidth < breakpoint}`);

    function handleResize() {
      setIsMobile(window.innerWidth < breakpoint);
    }
    window.addEventListener("resize", handleResize);
    
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return { isMobile };
}