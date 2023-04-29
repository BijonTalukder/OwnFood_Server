const { default: mongoose } = require("mongoose");

const GetCartByUserService = async (req, model) => {
  try {
    let id = mongoose.Types.ObjectId(req.params.id);
    let data = await model.aggregate([
      {
        $match: {
          _id: id,
        },
      },
      {
        $lookup: {
          from: "cartitems",
          localField: "_id",
          foreignField: "customerID",
          as: "cartData",
        },
      },
      {
        $project: {
          cartData: 1,
          userFullName: 1,
        },
      },
    ]);

    return { status: "Success", data: data };
  } catch (e) {
    return { status: "Fail", data: e };
  }
};
module.exports = GetCartByUserService;
