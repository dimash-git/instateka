import { useState } from "react";
import logo from "../../../assets/logo.svg";
import useMediaQuery from "../../../hooks/useMediaQuery";
import Drawer from "../../Drawer/Drawer";
import BurgerMenu from "../../Navigation/BurgerMenu";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="flex max-sm:flex-col gap-8 max-sm:text-sm">
      <Link className="flex items-center max-sm:ml-2" to="/application">
        Экспресс заявка
      </Link>
      <a
        className="flex items-center max-sm:ml-2"
        href="https://business.instateka.ru"
      >
        Личный кабинет
      </a>
      <Link
        to="/register"
        className="bg-appOrange hover:bg-[#fd9e84] text-white text-center rounded-md py-[10px] px-4 sm:px-8 app-transition"
      >
        Зарегистрироваться
      </Link>
    </nav>
  );
};

const Header = () => {
  const isMobile = useMediaQuery("(max-width: 678px)");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between mt-[56px] mb-8">
        <img src={logo} alt="" />
        {!isMobile && (
          <div className="text-sm flex gap-7">
            <Nav />
          </div>
        )}
        {isMobile && <BurgerMenu setIsOpen={setIsOpen} />}
      </div>

      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className="px-8 pt-8">
          <Nav />
        </div>
      </Drawer>

      {/* Straight Line */}
      <div className="bg-appLightGrey h-[1px] w-full"></div>
    </>
  );
};

export default Header;
