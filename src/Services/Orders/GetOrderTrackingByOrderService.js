const { default: mongoose } = require("mongoose");

const GetOrderTrackingByOrderService = async (req, Model) => {
  try {
    let id = mongoose.Types.ObjectId(req.params.id);
    console.log(id);
    let data = await Model.aggregate([
      {
        $match: {
          _id: id,
        },
      },
      {
        $lookup: {
          from: "ordertackings",
          localField: "_id",
          foreignField: "orderID",
          as: "OrderTrackingInfo",
        },
      },
    ]);
    return { status: "Success", data: data };
  } catch (e) {
    return { status: "Fail", data: e };
  }
};

module.exports = GetOrderTrackingByOrderService;
