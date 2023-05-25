import { useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";

import { RegContainer } from "../components/Containers/Containers";
import { ControlInput, Input, CalcSelect } from "../components/Form";

import { maskPhone } from "../utils/mask";
import { getReference } from "../api/get";
import { formatParseMapping } from "../utils/format";
import { createExpressApplication } from "../api/post";
import { LoaderRing } from "../components/Loader/Loader";
import ButtonBack from "../components/Buttons/ButtonBack";

const H3 = ({ children }) => {
  return <h3 className="text-lg font-semibold mb-6">{children}</h3>;
};

const Application = () => {
  const [initFormData, setInitFormData] = useState(null);
  const [options, setOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formChanged, setFormChanged] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isDirty },
    setValue,
    reset,
  } = useForm();

  useEffect(() => {
    getReference()
      .then((data) => {
        // 1. Set options for Select Fields
        setOptions(data);

        // 2. Set initial option values
        const initialFormData = {
          credit_purpose: data.products[1]?.code || "",
          realty_region: data.regions[76]?.code || "",
          realty_type: data.housing[0]?.code || "",
          realty_seller: data.seller_types[0]?.code || "",
          income_proof: data.income_proof[0]?.code || "",
        };
        setInitFormData(initialFormData);
      })
      .catch((error) => {
        console.log(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (initFormData) {
      Object.keys(initFormData).forEach((key) => {
        setValue(key, initFormData[key]);
      });
    }
  }, [initFormData, setValue]);

  const onSubmit = (formData) => {
    setIsLoading(true);
    createExpressApplication(formData)
      .then(() => {
        setIsLoading(false);
        setFormSent(true);
        setFormChanged(false);
        reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const inputValues = useRef({
    realty_value: "5000000",
    credit_initial_fee: "3500000",
    credit_term: "3",
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
    {
      name: "credit_term",
      label: "Срок кредита",
      rules: { required: "Срок кредита обязателен" },
      formatParse: "term",
    },
  ];

  const selectFields = [
    {
      name: "credit_purpose",
      label: "Цель кредита",
      options: options?.products,
    },
    {
      name: "realty_region",
      label: "Регион недвижимости",
      options: options?.regions,
    },
    {
      name: "realty_type",
      label: "Вид недвижимости",
      options: options?.housing,
    },
    {
      name: "realty_seller",
      label: "Продавец",
      options: options?.seller_types,
    },
    {
      name: "income_proof",
      label: "Тип программы",
      options: options?.income_proof,
    },
  ];

  useEffect(() => {
    if (isDirty) {
      setFormChanged(true);
    }
  }, [isDirty]);

  return (
    <RegContainer formSent={formSent}>
      <div className="pt-10">
        <div className="flex gap-4 pt-8 items-center">
          <ButtonBack />
          <h2 className="text-[36px] font-semibold">Экспресс заявка</h2>
        </div>
        <p className="text-sm leading-5 text-appGrey max-w-[344px]">
          Эспресс заявка для автоматической обработки в Инстатека-Бизнес. Заявка
          будет доступа в личном кабинете.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-[52px] sm:max-w-[344px]"
      >
        <H3>Параметры кредита</H3>
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
                        let newValue = inputValues.current[name].slice(0, -1);
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

        <div>
          <H3>Информация о заемщике</H3>
          <div className="mb-6">
            <Input
              name="name"
              label="Фамилия Имя и Отчество"
              register={register}
              errors={errors}
              rules={{
                required: "Имя обязательно",
              }}
              placeholder="Иванов Иван Сергеевич"
            />
          </div>
          <div className="mb-6">
            <Input
              name="tel_zaem"
              label="Мобильный телефон"
              placeholder="+7"
              type="phone"
              register={register}
              errors={errors}
              rules={{
                required: "Телефон обязателен",
              }}
              onChange={(e) => {
                const { value } = e.target;
                e.target.value = maskPhone(value);
              }}
              maxLength="18"
            />
          </div>
        </div>
        <div>
          <H3>Информация о партнере</H3>
          <div className="mb-6">
            <Input
              name="email_partner"
              label="Электронная почта"
              placeholder="ipoteka@instateka.ru"
              register={register}
              errors={errors}
              rules={{
                required: "Электронная почта обязательна",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Неправильный формат эл. почты",
                },
              }}
            />
          </div>
          <div className="mb-6">
            <Input
              name="tel_partner"
              label="Мобильный телефон"
              placeholder="+7"
              type="phone"
              register={register}
              errors={errors}
              rules={{
                required: "Телефон обязателен",
              }}
              onChange={(e) => {
                const { value } = e.target;
                e.target.value = maskPhone(value);
              }}
              maxLength="18"
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={formSent && !formChanged}
          className="bg-appOrange hover:bg-[#fd9e84] px-[6px] py-[15px] rounded-md text-white w-full transition-all duration-300 ease-in-out"
        >
          {isLoading ? (
            <LoaderRing />
          ) : formSent && !formChanged ? (
            "Заявка отправлена"
          ) : (
            "Отправить"
          )}
        </button>
        <span className="mt-6 pb-16 block text-appGrey text-sm font-light">
          Заявка будет автоматически добавлена в ваш личный кабинет на основе
          контактных данных
        </span>
      </form>
    </RegContainer>
  );
};

export default Application;
