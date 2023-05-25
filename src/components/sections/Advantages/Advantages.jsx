import zigzag from "../../../assets/zigzag.svg";
import def from "../../../assets/icons/def.svg";
import tabPattern from "../../../assets/icons/tab-pattern.svg";
import statsWave from "../../../assets/stats-wave.png";

import { Heading } from "../../Headings/Headings";
import {
  RocketIcon,
  GridPlusIcon,
  TabIcon,
  CardIcon,
} from "../../../assets/icons";

const AdvCard = ({ addClass = "", children }) => {
  return (
    <div className={`bg-[#FAFAFA] p-8 rounded-md ${addClass}`}>{children}</div>
  );
};

const AdvTitle = ({ addClass = "", children }) => {
  return (
    <h3 className={`font-semibold text-lg mb-5 ${addClass}`}>{children}</h3>
  );
};

const AdvIcon = ({ addClass = "", children }) => {
  return (
    <div
      className={` ${addClass}`}
      style={{
        backgroundImage: `url(${statsWave})`,
        backgroundRepeat: "no-repeat",
        backgroundPositionY: "10px",
      }}
    >
      {children}
    </div>
  );
};

const Advantages = () => {
  return (
    <div className="mt-[200px]">
      <img src={zigzag} alt="" />
      <Heading>Плюс работы с нами</Heading>
      <div className="grid min-[732px]:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        <AdvCard addClass="min-[732px]:row-span-2">
          <AdvIcon addClass="h-[48px] mt-2">
            <TabIcon fill="#4268FB" />
          </AdvIcon>
          <AdvTitle addClass="mt-8">Единое окно</AdvTitle>
          <p>
            На платформе проходят все этапы сделки с недвижимостью - фиксация
            клиента, согласование заёмщика с банками, заказ отчёта об оценке,
            оформление страховки и назначение сделки.
          </p>
          <p className="mt-4">
            Больше не нужно переключаться между разными системами, следить за
            переписками и вести собственные таблички — всё для работы, есть в
            вашем личном кабинете.
          </p>
        </AdvCard>
        <AdvCard>
          <AdvIcon addClass="mt-1">
            <img src={def} alt="" />
          </AdvIcon>
          <AdvTitle addClass="mt-8">Единое окно</AdvTitle>
          <p>
            Личный кабинет участников сделки, в котором есть все необходимое для
            проведения ипотечной сделки
          </p>
        </AdvCard>

        <div className="bg-appOrange rounded-md p-8 pt-6 text-white relative">
          <div className="text-[26px]">
            до <span className="text-[72px] font-bold">0.50%</span>
          </div>
          <p>
            бонус партнера <br /> за ипотечную сделку
          </p>
          <div className="absolute w-[60px] h-[54px] bottom-8 right-8">
            <CardIcon fill="#fff" />
            <img
              src={tabPattern}
              alt=""
              className="absolute right-0 bottom-0"
            />
          </div>
        </div>

        <AdvCard addClass="min-[732px]:col-span-2">
          <div className="flex gap-10">
            <AdvIcon addClass="mt-1">
              <RocketIcon className="max-w-max" fill="#4268FB" />
            </AdvIcon>
            <div>
              <AdvTitle>Без рутины</AdvTitle>
              <p>
                Мы автоматизируем рутинную работу и организуем взаимодействие с
                партнерами через одно окно. Единую анкету принимают все наши
                банки-партнеры. Теперь можно больше времени уделять клиентам, а
                не рутине.
              </p>
            </div>
          </div>
        </AdvCard>
        <AdvCard addClass="min-[732px]:col-span-2 lg:col-span-3">
          <div className="flex justify-between items-center">
            <div>
              <AdvTitle>Аналитика</AdvTitle>
              <p className="max-w-[435px] w-full">
                Ежемесячная детальная отчетность по всем заявкам и
                взаиморасчетам по вознаграждению от банков.
              </p>
            </div>
            <div>
              <AdvIcon addClass="sm:w-[60px] -pt-2 pb-2">
                <GridPlusIcon fill="#26325E" />
              </AdvIcon>
            </div>
          </div>
        </AdvCard>
      </div>
    </div>
  );
};

export default Advantages;
