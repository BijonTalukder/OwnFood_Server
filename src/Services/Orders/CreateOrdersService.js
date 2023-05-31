const { base64encode } = require('nodejs-base64');

const CreateOrdersService = async (request, Model) => {
  try {
    let postBody = request.body;
    let data = await Model.create(postBody);

    const data1 = {
      wmx_id: process.env.Merchant_ID,
      merchant_order_id: "123ownfood",
      merchant_ref_id: "df",
      app_name: "www.ownfood.com",
      cart_info: "WMX5443344555,www.ownfood.com",
      customer_name: "bijon",
      customer_email: "bijontalukder1247@gmail.com",
      customer_add: "chittagong,bangladesh",
      customer_phone: "01632354922",
      product_desc: "add cart",
      amount: 100,
      currency: "BDT",
      options: base64encode("s=www.ownfood.com,i=103.200.95.105"),
      callback_url: 'localhos:2345/sdf',
      access_app_key: process.env.Access_App_Key,
      authorization: "Basic "+base64encode(`${process.env.Access_Username}:${process.env.Access_Password}`)
    };
  
    console.log(data1);
    return { status: "Success", data: data };
  } catch (e) {
    return { status: "Fail", data: e };
  }
};

module.exports = CreateOrdersService;
