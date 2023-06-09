const CityModel = require("../../Models/City/CityModel");
const CreateCityService = require("../../Services/City/CreateCityService");
const GetCityByReigionService = require("../../Services/City/GetCityByReigionService");
const GetCityService = require("../../Services/City/GetCityService");
const GetSingleCityService = require("../../Services/City/GetSingleCityService");
const UpdateCityService = require("../../Services/City/UpdateCityService");
const GetCountryService = require("../../Services/Country/GetCountryService");

//! Create City
exports.CreateCity = async (req, res) => {
  let result = await CreateCityService(req, CityModel);
  res.status(200).json(result);
};

//! Get City
exports.GetCity = async (req, res) => {
  let result = await GetCityService(req, CityModel);
  res.status(200).json(result);
};
//! Get single City
exports.GetSingleCity = async (req, res) => {
  let result = await GetSingleCityService(req, CityModel);
  res.status(200).json(result);
};

//! Update City
exports.UpdateCity = async (req, res) => {
  let result = await UpdateCityService(req, CityModel);
  res.status(200).json(result);
};

//! Delete City
exports.DeleteCity = async (req, res) => {
  let result = await DeleteCityService(req, CityModel);
  res.status(200).json(result);
};

exports.GetCityByReigion = async (req, res) => {
  let result = await GetCityByReigionService(req, CityModel);
  res.status(200).json(result);
};
