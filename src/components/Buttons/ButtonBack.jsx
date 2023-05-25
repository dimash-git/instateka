import arrowLeft from "../../assets/icons/arrow-left.svg";
import { useNavigate } from "react-router-dom";

const ButtonBack = () => {
  const navigate = useNavigate();
  return (
    <button
      className="bg-[#F7F7F8] rounded-md p-2 w-7 h-7 hover:bg-[#e5e5ed] app-transition"
      onClick={() => {
        navigate(-1);
      }}
    >
      <img src={arrowLeft} alt="" />
    </button>
  );
};

export default ButtonBack;
