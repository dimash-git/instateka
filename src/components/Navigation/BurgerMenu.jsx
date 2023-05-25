const BurgetMenu = ({ setIsOpen }) => {
  return (
    <button className="block sm:hidden" onClick={() => setIsOpen(true)}>
      <span className="block bg-appGrey w-4 h-0.5"></span>
      <span className="block bg-appGrey w-4 h-0.5 my-1"></span>
      <span className="block bg-appGrey w-4 h-0.5"></span>
    </button>
  );
};

export default BurgetMenu;
