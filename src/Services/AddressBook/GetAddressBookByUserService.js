const { default: mongoose } = require("mongoose");

const GetAddressBookByUserService = async (request, Model) => {
  try {
    let ID = mongoose.Types.ObjectId(request.params.id);
    let data = await Model.aggregate([
      {
        $match: { customerID: ID },
      },
      {
        $lookup: {
          from: "countries",
          localField: "countryID",
          foreignField: "_id",
          as: "CountryData",
        },
      },
      {
        $lookup: {
          from: "citys",
          localField: "cityID",
          foreignField: "_id",
          as: "CityData",
        },
      },
      {
        $lookup: {
          from: "regionstates",
          localField: "regionID",
          foreignField: "_id",
          as: "RegionData",
        },
      },
    ]);
    return { status: "Success", data: data };
  } catch (e) {
    return { status: "Fail", data: e };
  }
};

module.exports = GetAddressBookByUserService;
