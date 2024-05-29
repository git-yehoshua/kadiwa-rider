class Booking {
  constructor(owner, pickup, dropoff, details, status, rider, price) {
    this.owner = owner;
    this.pickup = pickup;
    this.dropoff = dropoff;
    this.details = details;
    this.status = status; // 'Pending', 'Accepted', 'Completed', 'Cancelled'
    this.rider = rider;
    this.price = price;
    this.createdAt = new Date().toISOString();
    this.updatedAt = null;
  }
}

export default Booking;
