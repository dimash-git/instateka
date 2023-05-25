import { Container } from "../../Containers/Containers";
import { Heading } from "../../Headings/Headings";

import { TabIcon, GridPlusIcon, CardIcon } from "../../../assets/icons";
import zigzag from "../../../assets/zigzag.svg";
import desktop from "../../../assets/desktop.png";
import statsWave from "../../../assets/stats-wave.png";
import Button from "../../Buttons/Button";

const DemoCard = ({
  addClass = "",
  Icon,
  iconClass = "",
  iconColor = "",
  children,
}) => {
  return (
    <div className="mb-14 flex items-center gap-6">
      <div
        className={`w-full max-w-[60px]${addClass}`}
        style={{
          backgroundImage: `url(${statsWave})`,
          backgroundRepeat: "no-repeat",
          backgroundPositionY: "10px",
        }}
      >
        <Icon className={`max-w-max pb-1 pr-1 ${iconClass}`} fill={iconColor} />
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
};

const Demo = () => {
  return (
    <div className="mt-[200px]">
      <Container>
        <img src={zigzag} alt="" />
        <Heading>Запишитесь на демо</Heading>
      </Container>
      <div className="mt-12 lg:mt-[122px] flex flex-wrap items-center justify-between min-[1440px]:max-w-[80%] max-[1440px]:pr-4 max-sm:pr-0">
        <img
          src={desktop}
          alt=""
          className="max-sm:hidden mr-12 xl:mr-24 max-xl:max-w-[80%] max-sm:max-w-full"
        />
        <div className="flex-1 max-w-[345px] xl:max-w-[545px] max-[1022px]:px-12 max-[1022px]:mt-12 max-sm:px-4">
          <DemoCard Icon={TabIcon} iconColor="#26325E">
            <p>
              Покажем как наш сервис работает на практике от подачи заявки до
              сделки
            </p>
          </DemoCard>
          <DemoCard Icon={GridPlusIcon} iconColor="#4268FB">
            <p>
              Расскажем про банки, их особенностии дополнительные ипотечные
              продукты
            </p>
          </DemoCard>
          <DemoCard
            Icon={CardIcon}
            iconColor="#FF7853"
            iconClass="w-[46px] h-[41px]"
          >
            <p>
              Обсудим как формируется бонус партнера по сделке и сколько можно
              заработать
            </p>
          </DemoCard>
          <Button to="/register">Записаться</Button>
        </div>
      </div>
    </div>
  );
};

export default Demo;
