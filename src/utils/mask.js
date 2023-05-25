export const maskPhone = (value, areaCode = "+7") => {
  // Only allow digits to be entered
  const regex = /\d/g;
  const digitsOnly = value.match(regex)?.join("") || "";

  // Format the phone number
  let phone = "";
  for (let i = 0; i < digitsOnly.length; i++) {
    switch (i) {
      case 0:
        phone += areaCode;
        break;
      case 1:
        phone += ` (${digitsOnly[i]}`;
        break;
      case 4:
        phone += `) ${digitsOnly[i]}`;
        break;
      case 7:
      case 9:
        phone += `-${digitsOnly[i]}`;
        break;
      default:
        phone += digitsOnly[i];
    }
  }
  return phone;
};

export const deMaskPhone = (phone) => {
  const charsToRemove = /[+\s()-]/g; // \s whitespace char
  return phone.replace(charsToRemove, "");
};
