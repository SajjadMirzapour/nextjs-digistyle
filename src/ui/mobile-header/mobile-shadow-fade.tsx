function MobileShadowFade({ show }) {
  return (
    <div
      className={`fixed top-0 right-0 w-full h-screen bg-black duration-500 transition-opacity ease-in-out ${
        show ? "opacity-80 z-40" : "opacity-0 z-0"
      }`}
    ></div>
  );
}

export default MobileShadowFade;
