import React, { useState } from "react";
import transactionService from "@/app/services/transaction.service";
import transactionData from "@/app/models/transaction.data.utils";

const generateRandomId = () => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }
  return result;
};

const generateRandomName = () => {
  const names = [
    "John",
    "Jane",
    "Alice",
    "Bob",
    "Tom",
    "Jerry",
    "Sara",
    "Paul",
    "Nina",
    "Mike",
  ];
  return names[Math.floor(Math.random() * names.length)];
};

const generateRandomPhone = () => {
  return "0123456789"
    .split("")
    .sort(() => 0.5 - Math.random())
    .join("")
    .substring(0, 10);
};

const generateRandomAddress = () => {
  const addresses = [
    "32 Madasalin St., Sikatuna Village, Quezon City, Philippines",
    "Jollibee, Katipunan Ave, Quezon City, Philippines",
    "McDonald's, EDSA, Makati City, Philippines",
    "43 Timog Ave, Quezon City, Philippines",
    "25 Tomas Morato Ave, Quezon City, Philippines",
    "30 Maginhawa St., Quezon City, Philippines",
    "FisherStore, Quezon City, Philippines",
    "12 Kadiwa Store, Quezon City, Philippines",
    "Jelai's Kadiwa Store, Quezon City, Philippines",
    "26 Kadiwa Store, Quezon City, Philippines",
  ];
  return addresses[Math.floor(Math.random() * addresses.length)];
};

const generateRandomProductName = () => {
  const products = [
    "Banana",
    "Alumahan",
    "Beef Rump",
    "Sayote",
    "Rice",
    "Egg",
    "Milk",
    "Bread",
    "Butter",
    "Cheese",
  ];
  return products[Math.floor(Math.random() * products.length)];
};

const generateRandomQuantity = () => {
  return Math.floor(Math.random() * 10) + 1;
};

const generateRandomPrice = () => {
  return (Math.random() * 100).toFixed(2);
};

const BookingForm = () => {
  const bookingId = generateRandomId();
  const merchantId = generateRandomId();
  const customerId = generateRandomId();

  const [bookingData, setBookingData] = useState({});
  const [merchantName, setMerchantName] = useState();
  const [merchantPhone, setMerchantPhone] = useState();
  const [merchantAddress, setMerchantAddress] = useState();
  const [customerName, setCustomerName] = useState();
  const [customerPhone, setCustomerPhone] = useState();
  const [customerAddress, setCustomerAddress] = useState();
  const [products, setProducts] = useState([]);

  const handleGenerateData = () => {
    const mockMerchantName = generateRandomName();
    const mockMerchantPhone = generateRandomPhone();
    const mockMerchantAddress = generateRandomAddress();
    const mockCustomerName = generateRandomName();
    const mockCustomerPhone = generateRandomPhone();
    const mockCustomerAddress = generateRandomAddress();
    const mockProducts = Array.from({ length: 10 }).map(() => ({
      id: generateRandomId(),
      name: generateRandomProductName(),
      quantity: generateRandomQuantity(),
      price: generateRandomPrice(),
    }));

    setMerchantName(mockMerchantName);
    setMerchantPhone(mockMerchantPhone);
    setMerchantAddress(mockMerchantAddress);
    setCustomerName(mockCustomerName);
    setCustomerPhone(mockCustomerPhone);
    setCustomerAddress(mockCustomerAddress);
    setProducts(mockProducts);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const merchant = transactionData.BOOKING.MERCHANT.CREATE(
      merchantId,
      merchantName,
      merchantAddress,
      merchantPhone
    );
    const customer = transactionData.BOOKING.CUSTOMER.CREATE(
      customerId,
      customerName,
      customerAddress,
      customerPhone
    );
    const items = products.map((product) =>
      transactionData.BOOKING.ITEMS.CREATE(
        product.id,
        product.name,
        product.quantity,
        product.price
      )
    );
    const bookingDetails = {
      merchant,
      customer,
      items,
    };
    const result = await transactionService.BOOKING.create(
      bookingId,
      bookingDetails
    );
    if (result === true) {
      console.log("Booking created successfully!");
    } else {
      console.log("Error creating booking.");
    }
  };

  return (
    <div className="flex flex-col h-screen items-center justify-center gap-2">
      <button
        onClick={handleGenerateData}
        className=" bg-blue-500 text-white p-2 rounded-xl"
      >
        GENERATE BOOKING DATA
      </button>
      {merchantName && (
        <div>
          <h3>Merchant Data</h3>
          <p>Name: {merchantName}</p>
          <p>Phone: {merchantPhone}</p>
          <p>Address: {merchantAddress}</p>
        </div>
      )}
      {customerName && (
        <div>
          <h3>Customer Data</h3>
          <p>Name: {customerName}</p>
          <p>Phone: {customerPhone}</p>
          <p>Address: {customerAddress}</p>
        </div>
      )}
      {products.length > 0 && (
        <div>
          <h3>Products</h3>
          <ul>
            {products.map((product, index) => (
              <li key={index}>
                {product.name} - Qty: {product.quantity} - Price: ₱
                {product.price}
              </li>
            ))}
          </ul>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <button
          type="submit"
          className=" bg-green-500 text-white  p-2 rounded-xl"
        >
          Submit Booking
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
