const mongoose = require("mongoose");

const demo = new mongoose.Schema(
  {
    userId: {
      type: mongoose.SchemaTypes.ObjectId,
      required: true,
    },
    astrologerId: {
      type: mongoose.SchemaTypes.ObjectId,
      required: true,
    },
    channelName: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const demoModel = mongoose.model("demo", demo);
module.exports = demoModel;
