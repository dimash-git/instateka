import { Heading } from "../../Headings/Headings";
import statsWave from "../../../assets/stats-wave.png";
import lantern from "../../../assets/icons/lantern.svg";
import bar from "../../../assets/icons/bar.svg";

import smile from "../../../assets/icons/smile.svg";
import { RocketIcon } from "../../../assets/icons";

const StatsCard = ({ name, icon, iconType = "", color = "", children }) => {
  const renderIcon = () => {
    if (iconType === "component") {
      const IconComponent = icon;
      return <IconComponent className="max-w-max" fill={color} />;
    }
    return <img src={icon} alt="" className="max-w-max" />;
  };
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
        {renderIcon()}
      </div>
      <div className="sm:max-w-[435px]">
        <span className="block text-xl max-lg:text-lg font-semibold mb-4">
          {name}
        </span>
        <p className="max-lg:text-sm">{children}</p>
      </div>
    </div>
  );
};

const Stats = () => {
  return (
    <div className="mt-[200px] mb-20">
      <Heading>Коротко в цифрах</Heading>
      <div className="grid sm:grid-cols-2 mt-20 max-lg:gap-4">
        <StatsCard name="Увеличьте конверсию +40%" icon={lantern}>
          Мы подбираем оптимальные программы под участников сделки и предмет
          ипотеки, тем самым получаем одобрение в 92% случаев.
        </StatsCard>
        <StatsCard name="Проводите 2х сделок" icon={bar}>
          Объем сделок растет, а ваши ресурсы нет. Избавьте себя от работы по
          оформлению ипотечных сделок и сфокусируйтесь на конвертации новых
          клиентов.
        </StatsCard>
        <StatsCard
          name="Сократите цикл сделки х3"
          icon={RocketIcon}
          color="#FF7853"
          iconType="component"
        >
          Договорились с ипотечными банками работать быстро и точно, поэтому с
          нами сделка занимает 10 дней, а не месяцы переписки и уточнений.
        </StatsCard>
        <StatsCard name="Сделайте клиентов счастливее" icon={smile}>
          Единая заявка и комплект документов, плюс электронная подпись сделает
          процесс прозрачным и понятным для ваших клиентов.
        </StatsCard>
      </div>
    </div>
  );
};

export default Stats;
