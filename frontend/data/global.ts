interface Route {
   title: string;
   path: string;
}

export const routes: Route[] = [
   {
      title: "Home",
      path: "/",
   },
   {
      title: "Menu",
      path: "/menu",
   },
   {
      title: "Events",
      path: "/events",
   },
];

interface Hours {
   day: string;
   time: string;
}

export const hours: Hours[] = [
   {
      day: "Sunday",
      time: "8 AM - 11 PM",
   },
   {
      day: "Monday",
      time: "Closed",
   },
   {
      day: "Tuesday",
      time: "11 AM - 1 AM",
   },
   {
      day: "Wednesday",
      time: "11 AM - 1 AM",
   },
   {
      day: "Thursday",
      time: "11 AM - 1 AM",
   },
   {
      day: "Friday",
      time: "11 AM - 1 AM",
   },
   {
      day: "Saturday",
      time: "8 AM - 1 AM",
   },
];
