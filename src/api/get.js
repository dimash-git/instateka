const BASE_URL = "https://backend-ft.instateka.ru/v1";

export const getReference = async () => {
  const url = `${BASE_URL}/reference/general`;
  const response = await fetch(url, {
    method: "get",
    headers: {
      accept: "application/json",
      "X-AUTH-TOKEN": import.meta.env.VITE_INSTATEKA_TOKEN,
    },
  });
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
  const json = await response.json();
  return json.data;
};

export const getPrograms = async (formData = {}) => {
  const url = new URL(`${BASE_URL}/calculator`);
  const { year, months, ...restParams } = formData;
  const params = {
    ...restParams,
    partner: "1",
    credit_term: parseInt(year) * 12 + parseInt(months),
    credit_maternity_capital_value: "0",
    fill_type: "BEFORE_DEAL",
  };
  url.search = new URLSearchParams(params).toString();

  const response = await fetch(url, {
    method: "GET",
    headers: {
      accept: "application/json",
      "X-AUTH-TOKEN": import.meta.env.VITE_INSTATEKA_TOKEN,
    },
  });

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  const json = await response.json();
  // console.log(json);
  return json.data;
};
