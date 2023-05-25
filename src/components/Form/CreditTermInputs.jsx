const Span = ({ children }) => {
  return (
    <span className="inline-flex items-center text-sm bg-[#e6e5e5] px-2 py-0.5 mt-2 rounded-tr-md rounded-br-md">
      {children}
    </span>
  );
};

const CreditTermInputs = ({ label = "", register, ...props }) => {
  return (
    <>
      <div className="relative">
        <label
          htmlFor={label}
          className="text-sm text-appGrey absolute top-[10px] left-[18px]"
        >
          {label}
        </label>
        <div className="flex gap-4 w-full border-2 px-4 pt-8 pb-2 border-appLightGrey rounded-md text-md appearance-none outline-none">
          <div className="flex">
            <input
              className="border-2 border-r-0 rounded-md rounded-tr-none rounded-br-none border-appLightGrey 
              appearance-none outline-none px-2 py-0.5 mt-2
              max-w-[100px] w-full"
              type="number"
              name="year"
              defaultValue={3}
              {...register("year")}
              {...props}
            />
            <Span>лет</Span>
          </div>
          <div className="flex">
            <input
              className="border-2 border-r-0 rounded-md rounded-tr-none rounded-br-none border-appLightGrey 
              appearance-none outline-none px-2 py-0.5 mt-2
              max-w-[100px] w-full"
              type="number"
              name="months"
              defaultValue={1}
              {...register("months")}
              {...props}
            />
            <Span>мес.</Span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreditTermInputs;
