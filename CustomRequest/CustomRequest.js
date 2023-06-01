const { default: axios } = require("axios");
const { base64encode } = require("nodejs-base64");

const CustomRequest = async (data, Token) => {
    let respon;
    await axios
      .post("https://sandbox.walletmix.com/init-payment-process", data, {
        headers: {
          token: Token,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then(async (res) => {
        if (res.data.statusMsg === "Success") {
          let waletToken = res.data.token;

          await axios
            .get(
              `https://sandbox.walletmix.com/bank-payment-process/${waletToken}`,
              {
                headers: {
                  wmx_id: process.env.Merchant_ID,
                  authorization:
                    "Basic " +
                    base64encode(
                      `${process.env.Access_Username}:${process.env.Access_Password}`
                    ),
                  access_app_key: process.env.Access_App_Key,
                  token: Token,
                  "Content-Type": "application/x-www-form-urlencoded",
                },
              }
            )
            .then((res) => {
                // console.log(res);
              respon = res.config.url; // Extract the 'data' property from the response
            });
        }
      });
    return respon;
  };

  module.exports = CustomRequest;