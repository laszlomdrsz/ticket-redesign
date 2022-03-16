export const parseTime = (date: string) => {
  const time = new Date(date).toLocaleTimeString("en-UK", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return time;
};

export const parseDate = (date: string) => {
  const parsedDate = new Date(date).toLocaleDateString("en-UK", {
    weekday: 'short', month: 'long', day: 'numeric',
  });
  return parsedDate;
};

export const parsePrice = (price: number) => "€" + Math.round(price);