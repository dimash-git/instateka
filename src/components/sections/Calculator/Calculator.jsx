import { useEffect, useRef, useState } from "react";
import { useForm, Controller } from "react-hook-form";

import { Heading } from "../../Headings/Headings";
import { ControlInput, CalcSelect } from "../../Form/";
import BankCard from "../../Cards/BankCard";

import { formatParseMapping } from "../../../utils/format";
import { getPrograms, getReference } from "../../../api/get";
import CreditTermInputs from "../../Form/CreditTermInputs";
import useDebounce from "../../../hooks/useDebounce";

const Calculator = () => {
  const [initFormData, setInitFormData] = useState(null);
  const [options, setOptions] = useState([]);
  const [programs, setPrograms] = useState([]);
  const [countShow, setCountShow] = useState(1);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
    getValues,
    control,
  } = useForm();

  const watchedFields = watch();
  const debouncedWatchedFields = useDebounce(watchedFields, 500); // Use the debounce hook with a 500ms delay

  const prevWatchedFields = useRef(debouncedWatchedFields);

  const onSubmit = (formData = {}) => {
    getPrograms(formData)
      .then((data) => {
        setPrograms(data?.programs);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchCalculatorData = async () => {
    const formValues = getValues();
    onSubmit(formValues);
  };

  useEffect(() => {
    getReference()
      .then((data) => {
        // 1. Set options for Select Fields
        setOptions(data);

        // 2. Set initial option values
        const initialFormData = {
          credit_purpose: data.products[1]?.code || "",
          realty_region: data.regions[76]?.code || "",
          realty_seller: data.seller_types[0]?.code || "",
          realty_type: data.housing[0]?.code || "",
          credit_options: data.product_options[0]?.code || "",
        };
        setInitFormData(initialFormData);
      })
      .catch((error) => {
        console.log(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (
      JSON.stringify(prevWatchedFields.current) !==
      JSON.stringify(debouncedWatchedFields)
    ) {
      fetchCalculatorData();
      prevWatchedFields.current = debouncedWatchedFields;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedWatchedFields]);

  useEffect(() => {
    if (initFormData) {
      Object.keys(initFormData).forEach((key) => {
        setValue(key, initFormData[key]);
      });
    }
  }, [initFormData, setValue]);

  const inputValues = useRef({
    realty_value: "5000000",
    credit_initial_fee: "3500000",
    // credit_term: "3",
  });

  const inputFields = [
    {
      name: "realty_value",
      label: "Стоимость",
      rules: { required: "Стоимость обязательна" },
      formatParse: "currency",
    },
    {
      name: "credit_initial_fee",
      label: "Первоначальный взнос",
      rules: { required: "Первоначальный взнос обязателен" },
      formatParse: "currency",
    },
    // {
    //   name: "credit_term",
    //   label: "Срок кредита",
    //   rules: { required: "Срок кредита обязателен" },
    //   formatParse: "term",
    // },
  ];

  const selectFields = [
    {
      name: "credit_purpose",
      label: "Цель кредита",
      options: options?.products,
    },
    {
      name: "realty_region",
      label: "Регион приобретения",
      options: options?.regions,
    },
    {
      name: "realty_seller",
      label: "Продавец недвижимости",
      options: options?.seller_types,
    },
    {
      name: "realty_type",
      label: "Тип жилья",
      options: options?.housing,
    },
    {
      name: "credit_options",
      label: "Тип программы",
      options: options?.product_options,
    },
  ];

  return (
    <div>
      <Heading>Калькулятор ипотеки</Heading>
      <p className="mt-6 text-xl ">
        Всегда актуальные программы банков с вознаграждением за каждую сделку
      </p>
      <div className="flex flex-wrap mt-16">
        {options && (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full min-[992px]:max-w-[344px] min-[992px]:mr-6 min-[1060px]:mr-24"
          >
            {selectFields.map((select, idx) => (
              <CalcSelect
                key={idx}
                name={select.name}
                label={select.label}
                register={register}
                errors={errors}
                options={select.options}
              />
            ))}
            {inputFields.map(({ name, label, rules, formatParse }, idx) => {
              const formatParseFuncs = formatParseMapping[formatParse];
              return (
                <div className="mb-6" key={idx}>
                  <Controller
                    name={name}
                    control={control}
                    defaultValue={inputValues.current[name]}
                    render={({ field: { onChange, value } }) => (
                      <ControlInput
                        label={label}
                        value={formatParseFuncs.format(value)}
                        onKeyDown={(e) => {
                          if (e.key === "Backspace" || e.key === "Delete") {
                            let newValue = inputValues.current[name].slice(
                              0,
                              -1
                            );
                            inputValues.current[name] = newValue;
                            onChange(newValue);
                            e.preventDefault(); // This prevents the normal delete action
                          }
                        }}
                        onChange={(e) => {
                          const parsedValue = formatParseFuncs.parse(
                            e.target.value
                          );
                          inputValues.current[name] = parsedValue.toString();
                          onChange(parsedValue);
                        }}
                      />
                    )}
                    rules={rules}
                  />
                </div>
              );
            })}
            <div className="mb-6">
              <CreditTermInputs label="Срок кредита" register={register} />
            </div>
          </form>
        )}
        <div className="min-[992px]:flex-1 w-full">
          {programs &&
            programs.slice(0, countShow * 6).map((program, idx) => (
              <div className="mb-5" key={idx}>
                <BankCard data={program} />
              </div>
            ))}
          <div className="w-full flex justify-center mt-1">
            <button
              type="button"
              className="text-appGrey text-md"
              onClick={() => {
                setCountShow(countShow + 1);
              }}
            >
              Показать еще предложения →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
