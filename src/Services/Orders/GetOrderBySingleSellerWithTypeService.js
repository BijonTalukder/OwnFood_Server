const { default: mongoose } = require("mongoose");

const GetOrderBySingleSellerWithTypeService = async (req, model) => {
  try {
    let id = mongoose.Types.ObjectId(req.params.id);
    let type = req.params.type;

    let data = await model.aggregate([
      {
        $match: {
          //   _id:sellerID,
          sellerID: id,
          OrderLabel: type,
        },
      },
    ]);
    console.log(id, type);
    return { status: "Success", data: data };
  } catch (e) {
    return { status: "Fail", data: e };
  }
};
module.exports = GetOrderBySingleSellerWithTypeService;
