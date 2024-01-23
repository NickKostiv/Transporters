import { useState, useEffect } from "react";

function useMobileView(maxWidth: number) {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < maxWidth);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [maxWidth]);

  return isMobileView;
}

export default useMobileView;
