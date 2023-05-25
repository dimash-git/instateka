import arrowDown from "../../assets/icons/arrow-down.svg";

const Select = ({ register, name = "", label = "", options = [] }) => {
  return (
    <div className="relative">
      <label
        className="text-sm text-appGrey absolute top-[10px] left-[18px]"
        htmlFor={name}
      >
        {label}
      </label>
      <div>
        <select
          className="w-full border-[2px] px-4 pt-8 pb-2 border-appLightGrey rounded-md text-md appearance-none outline-none"
          name={name}
          {...register(name)}
        >
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <img
          src={arrowDown}
          alt="Arrow Down"
          className="absolute top-8 right-4"
        />
      </div>
    </div>
  );
};

export default Select;
