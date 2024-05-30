const transactionData = {};
// ===========================
//  BOOKING  MODELS/REQUIREMENTS
// ===========================
transactionData.BOOKING = {
  CREATE: (
    bookingId,
    merchant,
    costumer,
    items,
    timeCreated,
    serviceFee,
    deliveryFee
  ) => {
    return {
      bookingId: bookingId ? bookingId : null,
      merchant: merchant ? merchant : {},
      costumer: costumer ? costumer : {},
      items: items ? items : [],
      rider: {
        riderId: null,
        details: {},
      },
      deliveryFee: deliveryFee ? deliveryFee : 0,
      serviceFee: serviceFee ? serviceFee : 0,
      timeCreated: timeCreated ? timeCreated : null,
      timeAccepted: null,
      timeRecieved: null,
      timeCompleted: null,
      isPickup: false,
      isDropoff: false,
    };
  },
  MERCHANT: {
    CREATE: (merchantId, name, address, phone) => {
      return {
        merchantId: merchantId ? merchantId : null,
        name: name ? name : null,
        address: address ? address : null,
        phone: phone ? phone : null,
      };
    },
  },
  CUSTOMER: {
    CREATE: (customerId, name, address, phone) => {
      return {
        customerId: customerId ? customerId : null,
        name: name ? name : null,
        address: address ? address : null,
        phone: phone ? phone : null,
      };
    },
  },
  ITEMS: {
    CREATE: (productId, name, qty, price) => {
      return {
        productId: productId ? productId : null,
        name: name ? name : null,
        qty: qty ? qty : 0,
        price: price ? price : null,
      };
    },
  },
};

export default transactionData;
