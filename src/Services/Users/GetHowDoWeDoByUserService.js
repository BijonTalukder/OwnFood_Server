const { default: mongoose } = require("mongoose");

const GetHowDoWeDoByUserService = async (req, model) => {
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
          from: "how-do-we-dos",
          localField: "_id",
          foreignField: "sellerID",
          as: "HowDoWeDoData",
        },
      },
      {
        $project: {
          HowDoWeDoData: 1,
          userFullName: 1,
        },
      },
    ]);

    return { status: "Success", data: data };
  } catch (e) {
    return { status: "Fail", data: e };
  }
};
module.exports = GetHowDoWeDoByUserService;
