const GetRecipeCategoryService = async (request, model) => {
  try {
    let data = await model.aggregate([
      {
        $match: {},
      },
    ]);

    return { status: "Success", data: data };
  } catch (e) {
    return { status: "Fail", data: e };
  }
};
module.exports = GetRecipeCategoryService;
