const Attr = ({ children }) => {
  return <span className="text-[#8C8C8C]">{children}</span>;
};

const BankCard = ({ data }) => {
  return (
    <div className="flex max-xs:flex-wrap max-xs:gap-4 justify-between bg-[#FAFAFA] rounded-md w-full p-6 font-segoe">
      <div className="flex items-center gap-4">
        <img
          src={`https://backend.instateka.ru/img/${data?.logo}`}
          alt=""
          className="w-[42px] h-[42px]"
        />
        <div className="flex flex-col">
          <span className="text-[#262626] text-md font-semibold">
            {data?.bank}
          </span>
          <Attr>
            {data?.program_name.length > 28
              ? data?.program_name.substring(0, 28) + " ..."
              : data?.program_name}
          </Attr>
        </div>
      </div>
      <div className="grid grid-cols-3 max-xs:w-full xs:flex">
        <div className="flex flex-col w-full xs:w-18 px-2 md:px-6 relative">
          <div className="flex font-light">
            <span className="inline">{data?.program_rate}&nbsp;</span> %
          </div>
          <span className="absolute h-full w-[1px] bg-[#F0F0F0] right-0"></span>
          <Attr>Ставка</Attr>
        </div>
        <div className="flex flex-col w-full xs:w-18 px-2 md:px-6 relative">
          <div className="flex font-light">
            <span className="inline">
              {Math.round(data?.program_credit_payment, 10)}&nbsp;
            </span>
            Р
          </div>
          <span className="absolute h-full w-[1px] bg-[#F0F0F0] right-0"></span>
          <Attr>Платеж</Attr>
        </div>
        <div className="flex flex-col w-full xs:w-18 px-2 md:px-6 relative">
          <div className="font-light">
            {data.bonus ? `${data?.bonus} Р` : "-"}
          </div>
          <Attr>Бонус</Attr>
        </div>
      </div>
    </div>
  );
};

export default BankCard;
