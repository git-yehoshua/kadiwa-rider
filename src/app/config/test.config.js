export const transactionData = {
  address: "32 Madasalin St., Sikatuna Village, Quezon City, Philippines",
  paymentOption: "Cash on Delivery",
  amount: "₱ 1,200.00",
};
export const sampleOrders = [
  {
    id: 1,
    itemName: "Pizza",
    quantity: 2,
    price: "$20",
    pickupAddress: "123 Pizza St, Food City",
    dropoffAddress: "456 Delivery Ave, Taste Town",
  },
  {
    id: 2,
    itemName: "Burger",
    quantity: 1,
    price: "$10",
    pickupAddress: "789 Burger Blvd, Snackville",
    dropoffAddress: "1011 Meal Ln, Noshburg",
  },
  {
    id: 3,
    itemName: "Sushi",
    quantity: 3,
    price: "$30",
    pickupAddress: "1213 Sushi Rd, Savor City",
    dropoffAddress: "1415 Munch St, Bite Town",
  },
  {
    id: 4,
    itemName: "Pasta",
    quantity: 2,
    price: "$25",
    pickupAddress: "1617 Pasta Ave, Noodleburg",
    dropoffAddress: "1819 Spaghetti St, Macaroni City",
  },
  {
    id: 5,
    itemName: "Fries",
    quantity: 1,
    price: "$5",
    pickupAddress: "2021 Fry St, Snack City",
    dropoffAddress: "2223 Potato Ave, Chip Town",
  },
];

export const sampleItem = {
  id: 1,
  name: "Sample Item",
  description: "This is a sample item for demonstration purposes.",
  type: "pickup", // or "dropoff"
  imgUrl: "https://via.placeholder.com/150",
  merchant: {
    name: "Merchant Name",
    address: "123 Merchant St, Anytown, USA",
    phone: "+1234567890",
  },
  customer: {
    name: "Customer Name",
    address: "456 Customer Ave, Anytown, USA",
    phone: "+0987654321",
  },
};
