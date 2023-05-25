import zigzag from "../../../assets/zigzag.svg";
import mockup from "../../../assets/iphone.png";
import waves from "../../../assets/waves.png";
import { Heading } from "../../Headings/Headings";
import Button from "../../Buttons/Button";

import { motion } from "framer-motion";
import { Container } from "../../Containers/Containers";
import useMediaQuery from "../../../hooks/useMediaQuery";

const Hero = () => {
  const isMobile = useMediaQuery("(max-width: 842px)");
  // const transition = { duration: 2, type: "spring", delay: 1.3 };

  return (
    <div className="relative">
      <Container>
        <div className="mt-[170px] flex">
          <div>
            <img src={zigzag} alt="" />
            <div className="max-w-[532px]">
              <Heading>Ипотечные сервисы под ключ для ваших клиентов</Heading>
              <p className="text-xl mt-6">
                Инстатека поможет получить ипотеку для ваших клиентов - повышаем
                конверсию и ускоряем одобрение до нескольких минут
              </p>
            </div>
            <div className="max-w-[344px]">
              <Button to="/register" className="">
                Подключиться
              </Button>
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
