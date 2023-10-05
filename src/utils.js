export const handleOffsetChange = (setOffset) => {
  const handleResize = () => {
    if (window.innerWidth <= 900) {
      setOffset(-50);
    } else {
      setOffset(70);
    }
  };

  window.addEventListener('resize', handleResize);

  handleResize();

  return () => {
    window.removeEventListener('resize', handleResize);
  };
};
