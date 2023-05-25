import offerPdf from "../../assets/Offer.pdf";
import policyPdf from "../../assets/Policy.pdf";

const Footer = () => {
  return (
    <div className="flex max-xs:flex-wrap items-end justify-between font-light text-sm text-appGrey mt-40 mb-16">
      <div>
        <p>Инстатека - ООО &quot;САКУРА&quot; ИНН 7701377985</p>
        <p>+7-495-118-20-72 hello@instateka.ru </p>
        <div className="flex gap-2 xs:gap-4 mt-2">
          <a className="text-[#4268FB]" href={offerPdf}>
            Публичная оферта
          </a>
          <a className="text-[#4268FB]" href={policyPdf}>
            Соглашение об использовании сервиса
          </a>
        </div>
      </div>
      <div className="max-xs:mt-2">Все права защищены © 2018-2023</div>
    </div>
  );
};

export default Footer;
