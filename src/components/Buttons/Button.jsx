import { Link } from "react-router-dom";

const Button = ({ to = "", children }) => {
  return (
    <Link
      to={to}
      className="
        block w-full rounded-md
      text-white text-md font-bold text-center
      bg-appOrange hover:bg-[#fd9e84] app-transition 
        py-[15px] px-[6px] mt-20"
    >
      {children}
    </Link>
  );
};

export default Button;
