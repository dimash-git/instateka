import zigzag from "../../../assets/zigzag.svg";
import { Heading } from "../../Headings/Headings";
import romb from "../../../assets/figures/romb.svg";
import square from "../../../assets/figures/square.svg";
import circle from "../../../assets/figures/circle.svg";

// Logos
import zenit from "../../../assets/logos/zenit.svg";
import alpha from "../../../assets/logos/alpha.svg";
import metib from "../../../assets/logos/metib.svg";
import rb from "../../../assets/logos/rb.svg";
import uralsib from "../../../assets/logos/uralsib.svg";
import deltacredit from "../../../assets/logos/deltacredit.svg";
import mkb from "../../../assets/logos/mkb.svg";
import raif from "../../../assets/logos/raif.svg";
import gpb from "../../../assets/logos/gpb.svg";
import abs from "../../../assets/logos/abs.svg";
import sovkom from "../../../assets/logos/sovkom.svg";

const AccCard = ({ figure, children }) => {
  return (
    <div className="flex gap-6 items-center mb-12">
      <img src={figure} alt="" />
      <p className="md:max-w-[338px]">{children}</p>
    </div>
  );
};

const LogoWrap = ({ bgColor, logo, gridClass = "" }) => {
  return (
    <div
      className={`rounded-md h-16 flex justify-center items-center ${gridClass}`}
      style={{
        backgroundColor: bgColor,
      }}
    >
      {logo && <img src={logo} alt="" />}
    </div>
  );
};

const Accreditation = () => {
  return (
    <div className="mt-[128px]">
      <img src={zigzag} alt="" />
      <Heading>Аккредитация в основных банках</Heading>
      <div className="flex max-[1100px]:flex-col mt-24">
        <div className="mr-16 lg:mr-32 xl:mr-[188px]">
          <AccCard figure={romb}>
            Уникальные условия работы и скидки от ипотечных банков за счет
            объема сделок
          </AccCard>
          <AccCard figure={square}>
            Двусторонняя интеграция с ипотечным конвейером банков
          </AccCard>
          <AccCard figure={circle}>
            Выделенные сотрудники на стороне банка для поддержки операционного
            процесса
          </AccCard>
        </div>
        <div>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 sm:gap-8">
            <LogoWrap bgColor="#0FC2CB" logo={zenit} gridClass="col-span-3" />
            <LogoWrap bgColor="#EE3124" logo={alpha} gridClass="col-span-3" />
            <LogoWrap bgColor="#003082" logo={metib} />
            <LogoWrap
              bgColor="#EEEEEC"
              logo={rb}
              gridClass="col-span-2 row-span-2 !h-full"
            />
            <LogoWrap bgColor="#003082" logo={uralsib} />
            <LogoWrap bgColor="#F7F7F7" logo={deltacredit} />
            <LogoWrap bgColor="transparent" />
            <LogoWrap bgColor="#EFEFEF" logo={mkb} />
            <LogoWrap
              bgColor="#FFF200"
              logo={raif}
              gridClass="col-span-3 row-span-2 !h-full"
            />
            <LogoWrap bgColor="#1E3764" logo={gpb} />
            <LogoWrap bgColor="#FF9B31" logo={abs} />
            <LogoWrap bgColor="#F7F7F7" logo={sovkom} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accreditation;
