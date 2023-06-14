const { default: mongoose } = require("mongoose");

const GetRecipeBySingleSellerService = async (req, model) => {
  try {
    let ID = mongoose.Types.ObjectId(req.params.id);

    let limit = req.params.limit;
    if (limit==undefined) {
      limit = 10;
    }
    console.log(ID, limit);
    let data = await model.aggregate([
      {
        $match: {
          _id: ID,
        },
      },
      {
        $lookup: {
          from: "recipes",
          localField: "_id",
          foreignField: "sellerID",
          as: "recipeData",
          pipeline: [{ $limit: Number(limit) }],
        },
      },
      {
        $project: {
          recipeData: 1,
        },
      },
    ]);
    return { status: "Success", data: data };
  } catch (e) {
    return { status: "Fail", data: e };
  }
};
module.exports = GetRecipeBySingleSellerService;
