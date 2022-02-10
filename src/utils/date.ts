export const formatDate = (date: string | number | Date, reverse: boolean) => {
  const formattedDate = date.toLocaleString("pt-BR").split(" ")[0];

  if (reverse) {
    return reverseDateString(formattedDate);
  }

  return formattedDate;
};

export const reverseDateString = (date: string) => {
  return date.split("/").reverse().join("/");
};
