export function dateFormatter(date: string): string {
   return new Date(date).toLocaleDateString("us-en");
}

export function getMonth(date: string): string {
   const dateObj = new Date(date);
   const month = monthNames[dateObj.getMonth()];
   return month;
}

export function getDay(date: string): string {
   const dateObj = new Date(date);
   const day = dateObj.getDay();
   return `${day}`;
}

export function getDayText(date: string): string {
   const dateObj = new Date(date);
   const day = days[dateObj.getDay()];
   return day;
}

export const monthNames = [
   "January",
   "February",
   "March",
   "April",
   "May",
   "June",
   "July",
   "August",
   "September",
   "October",
   "November",
   "December",
];

export const days = [
   "Sunday",
   "Monday",
   "Tuesday",
   "Wednesday",
   "Thursday",
   "Friday",
   "Saturday",
];
