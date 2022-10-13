enum ItemBorderColor {
  BLUE = 'blue',
  RED = 'red',
  YELLOW = 'yellow',
  GREEN = 'green',
}

const compareDatesByDays = (firstTime: number, secondTime: number) => {
  const week = 7;
  const hoursInDay = 24;
  const minutesInHour = 60;
  const secondsInMinute = 60;
  const milliSecondsInSeconds = 1000;

  const oneDay = milliSecondsInSeconds * secondsInMinute * minutesInHour * hoursInDay;
  const diffInDays = Math.round((firstTime - secondTime) / oneDay);

  if (diffInDays <= week) {
    return ItemBorderColor.BLUE;
  }

  return ItemBorderColor.GREEN;
};

const compareDatesByMonth = (firstDate: Date, secondDate: Date) => {
  const halfAYear = 6;

  const firstDateMonth = firstDate.getFullYear() * 12 + firstDate.getMonth();
  const secondDateMonth = secondDate.getFullYear() * 12 + secondDate.getMonth();

  if (firstDateMonth - secondDateMonth <= halfAYear) {
    return ItemBorderColor.YELLOW;
  }

  return ItemBorderColor.RED;
};

export const compareDates = (itemDate: string) => {
  const todayDate = new Date();
  const comparedDate = new Date(itemDate);

  if (
    todayDate.getFullYear() === comparedDate.getFullYear() &&
    todayDate.getMonth() === comparedDate.getMonth()
  ) {
    return compareDatesByDays(todayDate.getTime(), comparedDate.getTime());
  }

  return compareDatesByMonth(todayDate, comparedDate);
};
