class User {
  constructor(
    type,
    validID,
    contactNo,
    firstName,
    lastName,
    email,
    password,
    address = "",
    vehicleInfo = {}
  ) {
    this.type = type; // 'Customer' or 'Rider'
    this.validID = validID;
    this.contactNo = contactNo;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.address = address;
    this.vehicleInfo = vehicleInfo; // Applicable only for riders
    this.onlineStatus = false; // Applicable only for riders
    this.bookings = [];
  }
}

export default User;
