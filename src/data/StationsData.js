const StationsData = [
  {
    id: "1",
    name: "Station Alpha",
    image:
      "https://voltgo.fra1.cdn.digitaloceanspaces.com/images/stock-station.jpg",
    distance: "3 km",
    status: "Active",
    location: "101 Main St, Springfield",
    mapLocation: "https://maps.google.com/?q=101+Main+St,+Springfield",
    price: "$0.15/kWh",
    power: "120 kW",
    sockets: [
      {type: "AC", status: "Available", price: "$0.15/kWh"},
      {type: "DC", status: "In Use", price: "$0.20/kWh"}
    ]
  },
  {
    id: "2",
    name: "Station Beta",
    image:
      "https://voltgo.fra1.cdn.digitaloceanspaces.com/images/stock-station.jpg",
    distance: "7 km",
    status: "Inactive",
    location: "202 Oak St, Springfield",
    mapLocation: "https://maps.google.com/?q=202+Oak+St,+Springfield",
    price: "$0.18/kWh",
    power: "150 kW",
    sockets: [
      {type: "DC", status: "Available", price: "$0.18/kWh"},
      {type: "AC", status: "In Use", price: "$0.22/kWh"}
    ]
  },
  {
    id: "3",
    name: "Station Gamma",
    image:
      "https://voltgo.fra1.cdn.digitaloceanspaces.com/images/stock-station.jpg",
    distance: "1 km",
    status: "Active",
    location: "303 Pine St, Springfield",
    mapLocation: "https://maps.google.com/?q=303+Pine+St,+Springfield",
    price: "$0.12/kWh",
    power: "100 kW",
    sockets: [{type: "AC", status: "Available", price: "$0.12/kWh"}]
  },
  {
    id: "4",
    name: "Station Delta",
    image:
      "https://voltgo.fra1.cdn.digitaloceanspaces.com/images/stock-station.jpg",
    distance: "5 km",
    status: "Active",
    location: "404 Elm St, Springfield",
    mapLocation: "https://maps.google.com/?q=404+Elm+St,+Springfield",
    price: "$0.10/kWh",
    power: "110 kW",
    sockets: [
      {type: "DC", status: "In Use", price: "$0.10/kWh"},
      {type: "AC", status: "Available", price: "$0.14/kWh"}
    ]
  },
  {
    id: "5",
    name: "Station Epsilon",
    image:
      "https://voltgo.fra1.cdn.digitaloceanspaces.com/images/stock-station.jpg",
    distance: "8 km",
    status: "Inactive",
    location: "505 Maple St, Springfield",
    mapLocation: "https://maps.google.com/?q=505+Maple+St,+Springfield",
    price: "$0.14/kWh",
    power: "140 kW",
    sockets: [{type: "AC", status: "In Use", price: "$0.14/kWh"}]
  },
  {
    id: "6",
    name: "Station Zeta",
    image:
      "https://voltgo.fra1.cdn.digitaloceanspaces.com/images/stock-station.jpg",
    distance: "4 km",
    status: "Active",
    location: "606 Cedar St, Springfield",
    mapLocation: "https://maps.google.com/?q=606+Cedar+St,+Springfield",
    price: "$0.16/kWh",
    power: "130 kW",
    sockets: [{type: "DC", status: "Available", price: "$0.16/kWh"}]
  },
  {
    id: "7",
    name: "Station Eta",
    image:
      "https://voltgo.fra1.cdn.digitaloceanspaces.com/images/stock-station.jpg",
    distance: "6 km",
    status: "Active",
    location: "707 Birch St, Springfield",
    mapLocation: "https://maps.google.com/?q=707+Birch+St,+Springfield",
    price: "$0.13/kWh",
    power: "115 kW",
    sockets: [
      {type: "AC", status: "In Use", price: "$0.13/kWh"},
      {type: "DC", status: "Available", price: "$0.17/kWh"}
    ]
  },
  {
    id: "8",
    name: "Station Theta",
    image:
      "https://voltgo.fra1.cdn.digitaloceanspaces.com/images/stock-station.jpg",
    distance: "9 km",
    status: "Inactive",
    location: "808 Ash St, Springfield",
    mapLocation: "https://maps.google.com/?q=808+Ash+St,+Springfield",
    price: "$0.17/kWh",
    power: "125 kW",
    sockets: [{type: "DC", status: "Available", price: "$0.17/kWh"}]
  },
  {
    id: "9",
    name: "Station Iota",
    image:
      "https://voltgo.fra1.cdn.digitaloceanspaces.com/images/stock-station.jpg",
    distance: "2 km",
    status: "Active",
    location: "909 Chestnut St, Springfield",
    mapLocation: "https://maps.google.com/?q=909+Chestnut+St,+Springfield",
    price: "$0.11/kWh",
    power: "135 kW",
    sockets: [
      {type: "AC", status: "Available", price: "$0.11/kWh"},
      {type: "DC", status: "In Use", price: "$0.15/kWh"}
    ]
  },
  {
    id: "10",
    name: "Station Kappa",
    image:
      "https://voltgo.fra1.cdn.digitaloceanspaces.com/images/stock-station.jpg",
    distance: "10 km",
    status: "Active",
    location: "1010 Hickory St, Springfield",
    mapLocation: "https://maps.google.com/?q=1010+Hickory+St,+Springfield",
    price: "$0.19/kWh",
    power: "150 kW",
    sockets: [{type: "DC", status: "Available", price: "$0.19/kWh"}]
  }
];

export default StationsData;
