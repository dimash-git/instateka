import { useForm } from "react-hook-form";
import { RegContainer } from "../components/Containers/Containers";
import { Input } from "../components/Form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <RegContainer>
      <div className="h-screen flex flex-col justify-center">
        <h2 className="text-[36px] font-semibold">Авторизация</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-12 max-w-[344px]">
          <div className="mb-12">
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
                label="Пароль"
                type="password"
                register={register}
                errors={errors}
                rules={{
                  required: "Пароль обязателен",
                }}
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-appOrange hover:bg-[#fd9e84] px-[6px] py-[15px] rounded-md text-white w-full transition-all duration-300 ease-in-out"
          >
            Войти в личный кабинет
          </button>
          {/* <span className="mt-6 pb-16 block text-appGrey text-sm font-light">
            Нажимая кнопку, я даю согласие на обработку&nbsp;
            <a href="#" className="text-[#4268FB]">
              персональных данных
            </a>
            &nbsp; и принимаю условия &nbsp;
            <a href="#" className="text-[#4268FB]">
              пользовательского соглашения
            </a>
          </span> */}
        </form>
      </div>
    </RegContainer>
  );
};

export default Login;
