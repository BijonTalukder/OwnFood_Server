const mongoose = require("mongoose");
const GetRegionByCountryService = async (request, Model) => {
  try {
    let id = mongoose.Types.ObjectId(request.params.id);
    let data = await Model.aggregate([
      {
        $lookup: {
          from: "country",
          localField: "countryID",
          foreignField: "_id",
          pipeline: [
            {
              $project: {},
            },
          ],
          as: "Data",
        },
      },
    ]);
    return { status: "Success", data: data };
  } catch (e) {
    return { status: "Fail", data: e };
  }
};

module.exports = GetRegionByCountryService;
