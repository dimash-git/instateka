export const formatParseMapping = {
  currency: {
    format: (value) =>
      value
        ? value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " руб."
        : "",
    parse: (value) => {
      value = value.replace(" руб.", ""); // Remove the " руб." part before parsing
      const parsed = Number(value.replace(/[^0-9]/g, ""));
      return isNaN(parsed) ? "" : parsed;
    },
  },
  term: {
    format: (value) => (value ? `${value} лет` : ""),
    parse: (value) => {
      const parsed = Number(value.replace(/[^0-9]/g, "")); // ^=! which means 'not'
      return isNaN(parsed) ? "" : parsed;
    },
  },
};
