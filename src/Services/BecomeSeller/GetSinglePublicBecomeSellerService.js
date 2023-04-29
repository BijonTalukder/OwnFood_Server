const { default: mongoose } = require("mongoose");

const GetSinglePublicBecomeSellerService = async (req, model) => {
  try {
    let ID = mongoose.Types.ObjectId(req.params.id);
    let data = await model.aggregate([
      {
        $match: { _id: ID },
      },
      {
        $lookup: {
          from: "foods",
          localField: "_id",
          foreignField: "sellerID",
          as: "foodData",
        },
      },
      {
        $lookup: {
          from: "food-reviwes",
          localField: "_id",
          foreignField: "sellerID",
          as: "foodReview",
        },
      },
      {
        $project: {
          bankDetails: 0,
        },
      },
    ]);

    return { status: "Success", data: data };
  } catch (e) {
    return { status: "Fail", data: e };
  }
};
module.exports = GetSinglePublicBecomeSellerService;
