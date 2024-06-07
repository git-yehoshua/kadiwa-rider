export const generateKDWID = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = ("0" + (currentDate.getMonth() + 1)).slice(-2); // Adding 1 because month is zero-based
  const day = ("0" + currentDate.getDate()).slice(-2);
  const hour = ("0" + currentDate.getHours()).slice(-2);
  const second = ("0" + currentDate.getSeconds()).slice(-2);

  const randomNum = Math.floor(1000 + Math.random() * 9000); // Generate random 4-digit number

  return `${year}-${month}${day}-${hour}${second}-${randomNum}`;
};

export const generateSHFTSTOREID = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = ("0" + (currentDate.getMonth() + 1)).slice(-2); // Adding 1 because month is zero-based
  const day = ("0" + currentDate.getDate()).slice(-2);
  const hour = ("0" + currentDate.getHours()).slice(-2);
  const second = ("0" + currentDate.getSeconds()).slice(-2);

  const randomNum = Math.floor(1000 + Math.random() * 9000); // Generate random 4-digit number

  return `KDWSTORE-${year}${month}${day}-${hour}${second}-${randomNum}`;
};

export const generateProductID = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = ("0" + (currentDate.getMonth() + 1)).slice(-2); // Adding 1 because month is zero-based
  const day = ("0" + currentDate.getDate()).slice(-2);
  const hour = ("0" + currentDate.getHours()).slice(-2);
  const second = ("0" + currentDate.getSeconds()).slice(-2);

  const randomNum = Math.floor(1000 + Math.random() * 9000); // Generate random 4-digit number

  return `KDW-${year}${month}${day}-${hour}${second}-PRODUCT-${randomNum}`;
};

export const generateCustomID = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = ("0" + (currentDate.getMonth() + 1)).slice(-2); // Adding 1 because month is zero-based
  const day = ("0" + currentDate.getDate()).slice(-2);
  const hour = ("0" + currentDate.getHours()).slice(-2);
  const second = ("0" + currentDate.getSeconds()).slice(-2);

  const randomNum = Math.floor(1000 + Math.random() * 9000); // Generate random 4-digit number

  return `${year}${month}${day}-${hour}${second}-${randomNum}`;
};
