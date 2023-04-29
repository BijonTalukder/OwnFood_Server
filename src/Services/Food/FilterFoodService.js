const mongoose = require("mongoose");
const FilterFoodService = async (request, Model) => {
  try {
    let categoryID;
    let subCategoryID;
    let foodTypeID;
    let foodAdditionalTags;
    let foodPrice;
    let foodRating;

    if (request.body.categoryID !== undefined) {
      categoryID = mongoose.Types.ObjectId(request.body.categoryID);
    } else {
      categoryID = undefined;
    }
    if (request.body.subCategoryID !== undefined) {
      subCategoryID = mongoose.Types.ObjectId(request.body.subCategoryID);
    } else {
      subCategoryID = undefined;
    }
    if (request.body.foodTypeID !== undefined) {
      foodTypeID = mongoose.Types.ObjectId(request.body.foodTypeID);
    } else {
      foodTypeID = undefined;
    }
    if (request.body.foodAdditionalTags !== undefined) {
      foodAdditionalTags = request.body.foodAdditionalTags;
    } else {
      foodAdditionalTags = undefined;
    }
    if (request.body.foodPrice !== undefined) {
      foodPrice = request.body.foodPrice;
    } else {
      foodPrice = undefined;
    }
    if (request.body.foodRating !== undefined) {
      foodRating = request.body.foodRating;
    } else {
      foodRating = undefined;
    }
    console.log(
      categoryID,
      subCategoryID,
      foodTypeID,
      foodAdditionalTags,
      foodPrice,
      foodRating
    );

    // let subCategoryID = mongoose.Types.ObjectId(request.body.subCategoryID);
    // let foodTypeID = mongoose.Types.ObjectId(request.body.foodTypeID);
    // let foodAdditionalTags = request.body.foodAdditionalTags;
    // let foodPrice = request.body.foodPrice;
    // let foodRating = request.body.foodRating;

    let postBody = {};
    let innerData = {};
    if (foodAdditionalTags !== undefined) {
      postBody.foodAdditionalTags = foodAdditionalTags;
      innerData.foodAdditionalTags = { $in: postBody.foodAdditionalTags };
    }
    if (subCategoryID !== undefined) {
      postBody.subCategoryID = subCategoryID;
      innerData.subCategoryID = subCategoryID;
    }
    if (foodTypeID !== undefined) {
      postBody.foodTypeID = foodTypeID;
      innerData.foodTypeID = foodTypeID;
    }
    if (foodPrice !== undefined) {
      postBody.foodPrice = foodPrice;
      innerData.foodPrice = { $lt: postBody.foodPrice };
    }
    if (foodRating !== undefined) {
      postBody.foodRating = foodRating;
      innerData.foodRating = { $eq: postBody.foodRating };
    }

    let data = await Model.aggregate([
      {
        $match: {
          categoryID: categoryID,
        },
      },

      {
        $match: {
          $and: [innerData],
          // $and: [{ foodAdditionalTags: { $in: ["A"] } }],
        },
      },
    ]);
    return { status: "Success", data: data };
  } catch (e) {
    return { status: "Fail", data: e };
  }
};

module.exports = FilterFoodService;
