const Input = ({
  name = "",
  label = "",
  register,
  rules,
  errors = {},
  ...props
}) => {
  return (
    <>
      <div className="relative">
        <label
          htmlFor={name}
          className="text-sm text-appGrey absolute top-[10px] left-[18px]"
        >
          {label}
        </label>
        <input
          className="w-full border-[2px] px-4 pt-8 pb-2 border-appLightGrey rounded-md text-md appearance-none outline-none"
          name={name}
          {...register(name, { ...rules })}
          {...props}
        />
      </div>
      {errors[name] && (
        <p className="text-red-500 text-sm mt-1 ml-[18px]">
          {errors[name]?.message}
        </p>
      )}
    </>
  );
};

export default Input;
