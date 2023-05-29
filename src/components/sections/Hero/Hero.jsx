import zigzag from "../../../assets/zigzag.svg";
import mockup from "../../../assets/iphone.png";
import waves from "../../../assets/waves.png";
import { Heading } from "../../Headings/Headings";

import { motion } from "framer-motion";
import { Container } from "../../Containers/Containers";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { Link } from "react-router-dom";

const Hero = () => {
  const isMobile = useMediaQuery("(max-width: 842px)");
  // const transition = { duration: 2, type: "spring", delay: 1.3 };

  return (
    <div className="relative">
      <Container>
        <div className="mt-16 md:mt-[170px] flex">
          <div>
            <img src={zigzag} alt="" />
            <div className="max-w-[532px]">
              <Heading>Ипотечные сервисы под ключ для ваших клиентов</Heading>
              <p className="text-xl mt-6">
                Инстатека поможет получить ипотеку для ваших клиентов - повышаем
                конверсию и ускоряем одобрение до нескольких минут
              </p>
            </div>
            <div className="max-w-[480px] flex gap-2 md:gap-5">
              <Link
                to="/register"
                className="
                  block w-full rounded-md
                text-white text-md font-bold text-center
                bg-appOrange hover:bg-[#fd9e84] app-transition 
                  py-[15px] px-[6px] mt-20"
              >
                Подключиться
              </Link>
              <Link
                to="/application"
                className="
                  block w-full rounded-md
                text-white text-md font-bold text-center
                bg-appDark hover:bg-[#7981a0] app-transition 
                  py-[15px] px-[6px] mt-20"
              >
                Экспресс заявка
              </Link>
            </div>
          </div>
          <div className="flex flex-1 justify-center relative max-[842px]:hidden">
            <motion.img
              src={mockup}
              alt=""
              className="relative z-[2]"
              transition={{
                duration: 2,
                type: "spring",
                delay: 0.4,
              }}
              initial={{ bottom: "-3rem" }}
              whileInView={{ bottom: "0rem" }}
            />
          </div>
        </div>
      </Container>
      {!isMobile && (
        <img
          src={waves}
          alt=""
          className="absolute -z-10 h-full right-0 top-0"
        />
      )}
    </div>
  );
};

export default Hero;
