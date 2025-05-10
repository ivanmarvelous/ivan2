const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    serviceType: String,
    appointmentDate: Date,
    status: { type: String, enum: ["pending", "completed", "canceled"], default: "pending" }
});

module.exports = mongoose.model("Booking", BookingSchema);
