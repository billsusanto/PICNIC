export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "search",
    title: "Search",
  },
  {
    id: "account",
    title: "Account",
  },
];

import {
  mc,
  me,
  acc,

  djp,
  utc,
  msp,

  cci,
  bcd,
  ppl,
  db,

  pts,
  bts,
  sts,
  bsr,
  bb,
  bbb
} from "../assets";

const picnic = [
  {
    title: "MESA Court",
    icon: mc,
    address: "4053 Mesa Rd, Irvine, CA 92697",
    pickup: "Pickup: 10:00AM",
    distance: "0.2 miles"
  },
  {
    title: "Middle Earth",
    icon: me,
    address: "529 E Peltason Dr, Irvine, CA 92617",
    pickup: "Pickup: 12:00AM",
    distance: "0.4 miles"
  },
  {
    title: "ACC",
    icon: acc,
    address: "15000 Arroyo Dr, Irvine, CA 92617",
    pickup: "Pickup: 01:00PM",
    distance: "1.1 miles"
  }
];

const plazas = [
  {
    title: "Diamond Jamboree Plaza",
    icon: djp,
    address: "2750 Alton Pkwy, Irvine, CA 92606",
    pickup: "Pickup: 3:30PM",
    distance: "3.2 miles"
  },
  {
    title: "University Town Center",
    icon: utc,
    address: "4255 Campus Drive. Irvine, CA 92612",
    pickup: "Pickup: 11:00AM",
    distance: "0.2 miles"
  },
  {
    title: "Main Street Plaza",
    icon: msp,
    address: "2540 Main St, Irvine, CA 92614",
    pickup: "Pickup: 12:00PM",
    distance: "3.4 miles"
  }
];

const restaurants = [
  {
    title: "Coco Ichibanya",
    icon: cci,
    address: "2710 Alton Pkwy, Irvine, CA 92606",
    pickup: "Pickup: 3:30PM",
    distance: "3.8 miles"
  },
  {
    title: "BCD Tofu House",
    icon: bcd,
    address: "2700 Alton Pkwy, Irvine, CA 92606",
    pickup: "Pickup: 3:30PM",
    distance: "3.8 miles"
  },
  {
    title: "Pepper Lunch",
    icon: ppl,
    address: "2750 Alton Pkwy, Irvine, CA 92606",
    pickup: "Pickup: 3:30PM",
    distance: "3.8 miles"
  },
  {
    title: "85 Degree Bakery",
    icon: db,
    address: "2700 Alton Pkwy, Irvine, CA 92606",
    pickup: "Pickup: 3:30PM",
    distance: "3.8 miles"
  },
];

const menus = [
  {
    name: "Pork Tofu Soup",
    icon: pts,
    price: "$18.49",
    description: "Pork, Tofu"
  },
  {
    name: "Beef Tofu Soup",
    icon: bts,
    price: "$18.49",
    description: "Beef, Tofu"
  },
  {
    name: "Seafood Tofu Soup",
    icon: sts,
    price: "$18.49",
    description: "Oyster, Shrimp, Clam"
  },
  {
    name: "Galbi",
    icon: bsr,
    price: "$31.99",
    description: "BBQ Short Rib"
  },
  {
    name: "Bulgogi Beef",
    icon: bb,
    price: "$29.49",
    description: "Sliced Rib Eye"
  },
  {
    name: "Bibimbap",
    icon: bbb,
    price: "$22.49",
    description: "Mixed rice with vegetables"
  },
]

export { picnic, plazas, restaurants, menus };