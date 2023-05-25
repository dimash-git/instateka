const Drawer = ({ children, isOpen, setIsOpen }) => {
  return (
    <div
      className={
        "fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-300 translate-x-0  "
          : " transition-all delay-200 opacity-0 translate-x-full  ")
      }
    >
      <div
        className={
          "w-screen max-w-[69%] right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (isOpen ? " translate-x-0 " : " translate-x-full ")
        }
      >
        <div className="">{children}</div>
      </div>
      <div
        className="w-screen h-full cursor-pointer"
        onClick={() => {
          setIsOpen(false);
        }}
      ></div>
    </div>
  );
};

export default Drawer;
