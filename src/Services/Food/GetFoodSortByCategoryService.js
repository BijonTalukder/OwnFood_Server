const { default: mongoose } = require("mongoose");

const GetFoodSortByCategoryService = async (request, Model) => {
  try {
    let ID = mongoose.Types.ObjectId(request.params.id);

    let data = await Model.aggregate([
      {
        $match: {
          sellerID: ID,
        },
      },
      {
        $lookup: {
          from: "categorys",
          localField: "categoryID",
          foreignField: "_id",
          as: "categoryData",
        },
      },

      {
        $sort: {
          categoryID: 1,
        },
      },
      {
        $unwind: "$categoryData",
      },
      {
        $group: {
          _id: "$categoryData.categoryName",
          foods: {
            $push: "$$ROOT",
          },
        },
      },
    ]);
    return { status: "Success", data: data };
  } catch (e) {
    return { status: "Fail", data: e.toString() };
  }
};

module.exports = GetFoodSortByCategoryService;
