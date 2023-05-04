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
          // pipeline: [
          //   {
          //     $project: {
          //       foodName: 1,
          //     },
          //   },
          // ],
        },
      },
      {
        $project: {
          cartData: 1,
        },
      },
      // {
      //   $unwind: "$cartData",
      // },
      // {
      //   $project: {
      //     cartData: 1,
      //     total: {
      //       $sum: "$cartData.cartItem.foodPrice",
      //     },
      //   },
      // },
      // {
      //   $unwind: {
      //     path: "$cartData",
      //   },
      // },
      // {
      //   $project: {
      // cartData: 1,
      //     total: {
      //       $sum: {
      //         $multiply: [
      //           "$cartData.cartItem.foodPrice",
      //           "$cartData.cartItem.foodQty",
      //         ],
      //       },
      //     },
      //   },
      // },
    ]);

    return { status: "Success", data: data };
  } catch (e) {
    return { status: "Fail", data: e };
  }
};
module.exports = GetCartByUserService;
