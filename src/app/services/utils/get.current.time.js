export const generateCurrentDateTimeString = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  const day = currentDate.getDate().toString().padStart(2, "0");
  const hours = currentDate.getHours().toString().padStart(2, "0");
  const minutes = currentDate.getMinutes().toString().padStart(2, "0");
  const seconds = currentDate.getSeconds().toString().padStart(2, "0");
  const milliseconds = currentDate
    .getMilliseconds()
    .toString()
    .padStart(3, "0");
  const timezoneOffset = currentDate.getTimezoneOffset();
  const timezoneOffsetSign = timezoneOffset > 0 ? "-" : "+";
  const timezoneOffsetHours = Math.floor(Math.abs(timezoneOffset) / 60)
    .toString()
    .padStart(2, "0");
  const timezoneOffsetMinutes = (Math.abs(timezoneOffset) % 60)
    .toString()
    .padStart(2, "0");

  const formattedDateTime = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}Z${timezoneOffsetSign}${timezoneOffsetHours}:${timezoneOffsetMinutes}`;

  return formattedDateTime;
};

export const getCurrentTimestamp = () => {
  const date = new Date();
  return date.toISOString();
};

export const generateRandomIntervalPerSec = () => {
  // Generate a random decimal number between 0 and 1
  const randomDecimal = Math.random();

  // Scale the random decimal number to your desired range
  // For example, if you want the interval per second to be between 10 and 30
  const minInterval = 10;
  const maxInterval = 30;
  const randomInterval =
    minInterval + randomDecimal * (maxInterval - minInterval);
  // Round the random interval to an integer value if needed
  const intervalPerSec = Math.round(randomInterval);
  return intervalPerSec;
};

export const generateSHFTCODE = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = ("0" + (currentDate.getMonth() + 1)).slice(-2); // Adding 1 because month is zero-based
  const day = ("0" + currentDate.getDate()).slice(-2);
  const hour = ("0" + currentDate.getHours()).slice(-2);
  const second = ("0" + currentDate.getSeconds()).slice(-2);

  const randomLetter1 = String.fromCharCode(
    65 + Math.floor(Math.random() * 26)
  ); // Generate random uppercase letter
  const randomLetter2 = String.fromCharCode(
    65 + Math.floor(Math.random() * 26)
  ); // Generate random uppercase letter
  const randomLetter3 = String.fromCharCode(
    65 + Math.floor(Math.random() * 26)
  );
  const randomLetter4 = String.fromCharCode(
    65 + Math.floor(Math.random() * 26)
  ); // Generate random uppercase letter
  const randomLetter5 = String.fromCharCode(
    65 + Math.floor(Math.random() * 26)
  ); // Generate random uppercase letter
  const randomLetter6 = String.fromCharCode(
    65 + Math.floor(Math.random() * 26)
  );
  return `${randomLetter1}${randomLetter2}${randomLetter3}${year}${month}${day}${hour}${second}${randomLetter4}${randomLetter5}${randomLetter6}`;
};
