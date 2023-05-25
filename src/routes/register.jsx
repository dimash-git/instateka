import { useForm } from "react-hook-form";
import { RegContainer } from "../components/Containers/Containers";
import { Input, Select } from "../components/Form";
import ButtonBack from "../components/Buttons/ButtonBack";

import { maskPhone } from "../utils/mask";
import policyPdf from "../assets/Policy.pdf";
import { createUser } from "../api/post";
import { useEffect, useState } from "react";
import { LoaderRing } from "../components/Loader/Loader";

const roles = ["Частный риэлтор", "Сотрудник компании партнера"];

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    watch,
    reset,
  } = useForm({
    defaultValues: {
      role: roles[0],
    },
  });

  const [isLoading, setIsLoading] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formChanged, setFormChanged] = useState(false);

  const onSubmit = (formData) => {
    setIsLoading(true);

    createUser(formData)
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

  const selectedRole = watch("role"); // watch rerenders when specific field changes

  useEffect(() => {
    if (isDirty) {
      setFormChanged(true);
    }
  }, [isDirty]);

  return (
    <RegContainer>
      <div className="flex flex-col justify-center">
        <div className="flex gap-4 pt-8 items-center">
          <ButtonBack />
          <h2 className="text-[36px] font-semibold">Регистрация</h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-12 max-w-[344px]">
          <div>
            <div className="mb-6">
              <Input
                name="name"
                label="Имя и Фамилия"
                placeholder="Иван Иванов"
                register={register}
                errors={errors}
                rules={{
                  required: "Имя обязательно",
                }}
              />
            </div>
            <div className="mb-6">
              <Input
                name="phone"
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
            <div className="mb-6">
              <Input
                name="email"
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
                name="password"
                label="Ваш пароль"
                type="password"
                register={register}
                errors={errors}
                rules={{
                  required: "Пароль обязателен",
                  minLength: {
                    value: 8,
                    message:
                      "Пароль должен быть как минимум 8 знаков и символов",
                  },
                  validate: {
                    lowercase: (value) =>
                      /[a-z]/.test(value) ||
                      "Пароль должен содержать хотя бы одну строчную букву.",
                    uppercase: (value) =>
                      /[A-Z]/.test(value) ||
                      "Пароль должен содержать хотя бы одну заглавную букву.",
                    digit: (value) =>
                      /\d/.test(value) ||
                      "Пароль должен содержать хотя бы одну цифру.",
                    // specialChar: (value) =>
                    //   /[!@#$%^&*]/.test(value) ||
                    //   "Password should contain at least one special character.",
                  },
                }}
              />
            </div>
            <div className="mb-6">
              <Select
                name="role"
                label="Ваша роль"
                register={register}
                errors={errors}
                options={roles}
              />
            </div>
            {selectedRole === roles[1] && (
              <div className="mb-6">
                <Input
                  name="partner_name"
                  label="Наименование компании"
                  placeholder="ООО Партнер"
                  register={register}
                  errors={errors}
                  rules={{
                    required: "Наименование компании обязательно",
                  }}
                />
              </div>
            )}
          </div>
          <div className="text-sm font-light text-appGrey mb-10">
            {selectedRole === roles[0]
              ? "Создать личный кабинет для самозанятого или индивидуально работающего агента"
              : "Создать личный кабинет для юридического лица - агенства недвижимости или застройщика"}
          </div>
          <button
            type="submit"
            className="bg-appOrange hover:bg-[#fd9e84] px-[6px] py-[15px] rounded-md text-white w-full app-transition"
            disabled={formSent && !formChanged}
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
            Нажимая кнопку, я даю согласие на обработку персональных данных и
            принимаю условия
            <a href={policyPdf} className="text-[#4268FB]">
              &nbsp;пользовательского соглашения
            </a>
          </span>
        </form>
      </div>
    </RegContainer>
  );
};

export default Register;
