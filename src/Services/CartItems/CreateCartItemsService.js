const FoodModel = require("../../Models/Food/FoodModel");

const CreateCartItemsService = async (request, Model) => {
  try {
    let totalSum = 0;
    let postBody = request.body;
    //console.log(postBody);
    const cardChecked = await Model.findOne({
      customerID: postBody.customerID,
    });
    for (let i = 0; i < postBody.cartItem.length; i++) {
      let food = await FoodModel.findOne({ _id: postBody.cartItem[i]._id });
      // console.log(food.foodPrice, "a", postBody.cartItem[i].foodPrice);
      if (food.foodPrice !== postBody.cartItem[i].foodPrice) {
        postBody.cartItem[i].foodPrice = food.foodPrice;
      }
      totalSum = totalSum + food.foodPrice * postBody.cartItem[i].foodQty;
    }
    //  console.log({ ...postBody, foodTotalPrice: totalSum });
    if (cardChecked) {
      const doc = await Model.findOneAndUpdate(
        { customerID: postBody.customerID },
        { ...postBody, foodTotalPrice: totalSum },
        {
          new: true,
        }
      );
      return { status: "Success", data: doc };
    } else {
      let data = await Model.create({ ...postBody, foodTotalPrice: totalSum });
      return { status: "Success", data: data || doc };
    }
  } catch (e) {
    return { status: "Fail", data: e };
  }
};

module.exports = CreateCartItemsService;
