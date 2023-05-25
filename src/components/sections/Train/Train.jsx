import zigzag from "../../../assets/zigzag.svg";
import { Container } from "../../Containers/Containers";
import { Heading } from "../../Headings/Headings";

import statsWave from "../../../assets/stats-wave.png";
import profile from "../../../assets/icons/profile.svg";
import lifebuoy from "../../../assets/icons/lifebuoy.svg";
import bachelor from "../../../assets/icons/bachelor.svg";
import mockup from "../../../assets/iphone.png";
import waves from "../../../assets/waves.png";

import useMediaQuery from "../../../hooks/useMediaQuery";

const TrainCard = ({ name, icon, children }) => {
  return (
    <div className="flex mb-16">
      <div
        className="w-full max-w-[55px] sm:max-w-[60px] mr-4 sm:mr-[22px] pl-2"
        style={{
          backgroundImage: `url(${statsWave})`,
          backgroundRepeat: "no-repeat",
          backgroundPositionY: "12px",
        }}
      >
        <img src={icon} alt="" />
      </div>
      <div className="sm:max-w-[435px]">
        <span className="block text-xl max-lg:text-lg font-semibold mb-4 mt-3">
          {name}
        </span>
        <p className="max-lg:text-sm">{children}</p>
      </div>
    </div>
  );
};

const Train = () => {
  const isMobile = useMediaQuery("(max-width: 1210px)");

  return (
    <div className="mt-[200px]">
      <Container>
        <img src={zigzag} alt="" />
        <Heading>Включим, настроим и научим работать</Heading>
      </Container>
      <div className="relative">
        <Container>
          <div className="flex flex-wrap items-center mt-[115px]">
            <div className="mr-16 lg:mr-40 xl:mr-60">
              <TrainCard name="Персональный менеджер" icon={profile}>
                Назначим персонального куратора, который поможет на всех этапах
                знакомства и во время первых сделок с клиентами
              </TrainCard>
              <TrainCard name="Поддержка в онлайн" icon={lifebuoy}>
                Получайте обратную связь в течение нескольких минут от нашей
                службы поддержки по всем вопросам работы платформы
              </TrainCard>
              <TrainCard name="Обучение и тестирование" icon={bachelor}>
                Проведем обучение команды, поможем разобраться в сервисе и
                покажем как быстро работать с клиентами на первых сделках
              </TrainCard>
            </div>
            <div className="flex-1 max-[842px]:hidden">
              <img
                src={mockup}
                alt=""
                className="relative z-[2] w-[197px] h-[397px]"
              />
            </div>
          </div>
        </Container>
        {!isMobile && (
          <img
            src={waves}
            alt=""
            className="absolute -z-10 right-0 top-[16%]"
          />
        )}
      </div>
    </div>
  );
};

export default Train;
