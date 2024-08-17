const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  shippingInfo: {
    hNo: {
      type: String,
      required: [true, "house no. required"],
    },
    city: {
      type: String,
      required: [true, "city required"],
    },
    state: {
      type: String,
      required: [true, "state required"],
    },
    country: {
      type: String,
      required: [true, "country required"],
    },
    pincode: {
      type: Number,
      required: [true, "pincode required"],
    },
  },

  orderItems: {
    cheeseBurger: {
      price: {
        type: Number,
        required: [true, "price required"],
      },
      quantity: {
        type: Number,
        required: [true, "quantity required"],
      },
    },
    vegCheeseBurger: {
      price: {
        type: Number,
        required: [true, "price required"],
      },
      quantity: {
        type: Number,
        required: [true, "quantity required"],
      },
    },
    cheeseBurgerWithFries: {
      price: {
        type: Number,
        required: [true, "price required"],
      },
      quantity: {
        type: Number,
        required: [true, "quantity required"],
      },
    },
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  paymentMethod: {
    type: String,
    enum: ["COD", "ONLINE"],
    default: "COD",
  },

  payMentInfo: {
    type: mongoose.Schema.ObjectId,
    ref: "Payment",
  },

  paidAt: Date,

  itemsPrice: {
    type: Number,
    default: 0,
  },
  taxPrice: {
    type: Number,
    default: 0,
  },
  shippingPrice: {
    type: Number,
    default: 0,
  },
  totalPrice: {
    type: Number,
    default: 0,
  },
  orderStatus: {
    type: String,
    enum: ["preparing", "shipped", "delivered"],
    default: "preparing",
  },
  deliveredAt: Date,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


module.exports = mongoose.model('Order', orderSchema);
