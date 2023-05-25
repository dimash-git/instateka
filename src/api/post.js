import { deMaskPhone } from "../utils/mask";

const BASE_URL = "https://backend-prod.instateka.ru/v1";

export const createExpressApplication = async (formData = {}) => {
  const url = `${BASE_URL}/public/landing`;
  const processedformData = {
    product: formData?.credit_purpose,
    credit_sum:
      parseInt(formData?.realty_value) - parseInt(formData?.credit_initial_fee),
    credit_term: parseInt(formData?.credit_term) * 12,
    credit_initial_fee: formData?.credit_initial_fee,
    application_realty: {
      realty_type: formData?.realty_type,
      realty_cost: formData?.realty_value,
      seller_type: formData?.realty_seller,
    },
    profile: {
      fio: formData?.name,
      phone: deMaskPhone(formData?.tel_zaem),
      // email: "test@test.ru",
    },
    partner_data: {
      email: formData?.email_partner,
      phone: deMaskPhone(formData?.tel_partner),
    },
  };
  const response = await fetch(url, {
    method: "post",
    headers: {
      accept: "application/json",
      "X-TOKEN": import.meta.env.VITE_INSTATEKA_EXPRESS_TOKEN,
    },
    body: JSON.stringify(processedformData),
  });
  if (!response.ok) {
    const errorBody = await response.text();
    const message = `An error has occurred: ${response.status} ${response.statusText} - ${errorBody}`;
    throw new Error(message);
  }
  const json = await response.json();
  return json;
};

export const createUser = async (formData = {}) => {
  const url = `${BASE_URL}/public/landing/registration`;
  let data = {
    fio: formData?.name,
    phone: deMaskPhone(formData?.phone),
    email: formData?.email,
    password: formData?.password,
  };

  if (formData.partner_name) data.partner_name = formData.partner_name;

  const response = await fetch(url, {
    method: "post",
    headers: {
      accept: "application/json",
      "X-TOKEN": import.meta.env.VITE_INSTATEKA_EXPRESS_TOKEN,
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  const json = await response.json();
  return json;
};
