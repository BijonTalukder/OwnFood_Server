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
          qty: "$cartData.cartItem.foodQty",
          price: "$cartData.cartItem.foodPrice",
          mul: {
            $multiply: ["cartData.cartItem.foodPrice", 1],
          },
        },
      },
      // {
      //   $unwind: "$cartData",
      // },

      // {
      //   $project: {
      //     cartData: 1,
      //     total: {
      //       // $sum: {
      //       $multiply: [
      //         "$data.cartData.cartItem.foodPrice",
      //         "$data.cartData.cartItem.foodQty",
      //       ],
      //       // },
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
