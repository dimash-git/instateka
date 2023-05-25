import { Container } from "../Containers/Containers";
import statsWave2 from "../../assets/stats-wave2.png";
import boat from "../../assets/icons/boat.svg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="bg-appDark w-full mt-24 lg:mt-[219px]">
      <Container>
        <div className="flex flex-wrap gap-8 items-center justify-between py-12">
          <div className="flex items-center text-white">
            <div
              className="w-full max-w-[55px] sm:max-w-[60px] mr-4 sm:mr-9 pl-1 min-h-[75px]"
              style={{
                backgroundImage: `url(${statsWave2})`,
                backgroundRepeat: "no-repeat",
                backgroundPositionY: "18px",
              }}
            >
              <img src={boat} alt="" />
            </div>
            <div className="sm:max-w-[506px]">
              <span className="block text-xl max-lg:text-lg font-semibold mb-4">
                Берите на себя меньше работы
              </span>
              <p className="max-lg:text-sm">
                Передавайте контакты клиента - все остальное мы сделаем сами, а
                вы получите комиссионное вознаграждение
              </p>
            </div>
          </div>
          <div className="md:max-w-[303px] w-full">
            <Link
              to="/register"
              className="block w-full rounded-md
      text-white text-md font-bold text-center
      bg-[#4268FB] hover:bg-[#8c9ff4] app-transition 
        py-[15px] px-[6px]"
            >
              Зарегистрироваться
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
