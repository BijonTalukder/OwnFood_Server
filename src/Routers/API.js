const express = require("express");
const router = express.Router();
const AuthVerifyMiddleware = require("../Middlewares/AuthVerifyMiddleware");
const SuperAdminController = require("../Controllers/Admins/SuperAdminController");
const SubAdminController = require("../Controllers/Admins/SubAdminController");
const DesignationController = require("../Controllers/Designation/DesignationController");
const CategoryController = require("../Controllers/Category/CategoryController");
const SubCategoryController = require("../Controllers/SubCategory/SubCategoryController");
const FoodTypeController = require("../Controllers/FoodType/FoodTypeController");
const PortionSizeUnitController = require("../Controllers/PortionSizeUnit/PortionSizeUnitController");
const OrderStatusController = require("../Controllers/OrderStatus/OrderStatusController");
const CuisineController = require("../Controllers/Cuisine/CuisineController");
const IngrediantsController = require("../Controllers/Ingrediants/IngrediantsController");
const AdditionalTagsController = require("../Controllers/AdditionalTags/AdditionalTagsController");
const BonusFreeItemController = require("../Controllers/BonusFreeItem/BonusFreeItemController");
const FoodItemController = require("../Controllers/Food/FoodController");
const CountryController = require("../Controllers/Country/CountryController");
const Region_StateController = require("../Controllers/Region_State/Region_StateController");
const CityController = require("../Controllers/City/CityController");
const AddressBookController = require("../Controllers/AddressBook/AddressBookController");
const FoodReviewController = require("../Controllers/FoodReview/FoodReviewController");
const CartItemsController = require("../Controllers/CartItems/CartItemsController");
const OrdersController = require("../Controllers/Orders/OrdersController");
const OrderTackingController = require("../Controllers/OrderTacking/OrderTackingController");
const RiderReviewController = require("../Controllers/RiderReview/RiderReviewController");
const UsersController = require("../Controllers/Users/UsersController");
const RecipeController = require("../Controllers/Recipe/RecipeController");
const CouponController = require("../Controllers/Coupon/CouponController");
const FoodDiaryController = require("../Controllers/FoodDiary/FoodDiaryController");
const BecomeSellerController = require("../Controllers/BecomeSeller/BecomeSellerController");
const RiderController = require("../Controllers/Rider/RiderController");
const FoodPhotoController = require("../Controllers/FoodPhoto/FoodPhotoController");
const BannersAPIController = require("../Controllers/BannersAPI/BannersAPIController");
const HomePageSectionsController = require("../Controllers/HomePageSections/HomePageSectionsController");
const HowDoWeDoController = require("../Controllers/HowDoWeDo/HowDoWeDoController");
const CircleTypeFoodController = require("../Controllers/CircleTypeFood/CircleTypeFoodController");
const WithdrawalController = require("../Controllers/Withdrawal/WithdrawalController");
const BankListController = require("../Controllers/BankList/BankListController");
const RecipeCategoryController = require("../Controllers/RecipeCategory/RecipeCategoryController");
const BuyerQuestionsAndAnswearController = require("../Controllers/BuyerQuestionsAndAnswear/BuyerQuestionsAndAnswearController");

//!  ================== ****  Super Admin **** ==================
// Super Admin Registration Router
router.post("/registration-super-admin", SuperAdminController.Registration);
// Super Admin Login Router
router.post("/login-super-admin", SuperAdminController.Login);

//!  ================== ****  Sub Admin **** ==================
// Registration Sub-Admin Router
router.post("/registration-sub-admin", SubAdminController.Registration);

// Login Sub-Admin Router
router.post("/login-sub-admin", SubAdminController.Login);

// Get All Sub-Admin Router
router.get("/get-sub-admin", SubAdminController.GetSubAdmin);

// Delete Sub-Admin Router
router.delete("/delete-sub-admin/:id", SubAdminController.DeleteSubAdmin);

// Update Sub-Admin Router
router.post("/update-sub-admin/:id", SubAdminController.UpdateSubAdmin);

//!  ================== ****  Users  **** ==================

//create Users
router.post("/create-users", UsersController.CreateUsers);

// Super Admin Login Router
router.post("/login-users", UsersController.Login);

//get Users
router.get("/get-users", UsersController.GetUsers);

//get single Users
router.get(
  "/get-single-users/:id",

  UsersController.GetSingleUsers
);

//update single Users
router.post(
  "/update-users/:id",

  UsersController.UpdateUsers
);

//delete single Users
router.delete(
  "/delete-users/:id",

  UsersController.DeleteUsers
);

// verify Email Address For forget Password

router.post(
  "/forget-password-verify-email/:email",
  UsersController.ForgetPassVerifyEmail
);

// Verify OTP

router.post(
  "/verify-otp-service-forget-password/:email/:otp",
  UsersController.VerifyOTPService
);

// Reset password
router.post("/reset-password-service", UsersController.ResetPasswordService);

// get Food Diary by user
router.get(
  "/get-food-diary-by-user/:id",

  UsersController.GetFoodDiaryByUser
);

//get recipe by user
router.get(
  "/get-recipe-by-user/:id",

  UsersController.GetRecipeByUser
);

// get how do we do by user
router.get(
  "/get-how-do-we-do-by-user/:id",

  UsersController.GetHowDoWeDoByUser
);
router.get("/get-single-cart-by-user/:id", UsersController.GetCartByUser);
//!  ================== ****  Designation Service **** ==================
// Create Designation Router
router.post(
  "/create-designation",

  DesignationController.CreateDesignation
);
// Get Designation Router
router.get(
  "/get-designation",

  DesignationController.GetDesignation
);

// Get Single Designation Router
router.get(
  "/get-single-designation/:id",

  DesignationController.GetSingleDesignation
);

// Update Designation Router
router.post(
  "/update-designation/:id",

  DesignationController.UpdateDesignation
);
// Delete Designation Router
router.delete(
  "/delete-designation/:id",

  DesignationController.DeleteDesignation
);

//!  ================== ****  Category Service **** ==================

// Create Category Router
router.post(
  "/create-category",

  CategoryController.CreateCategory
);

// Get Category Router
router.get("/get-category", CategoryController.GetCategory);
// Get Single Category Router
router.get(
  "/get-single-category/:id",

  CategoryController.GetSingleCategory
);

// Update Category Router
router.post(
  "/update-category/:id",

  CategoryController.UpdateCategory
);

// Delete Category Router
router.delete(
  "/delete-category/:id",

  CategoryController.DeleteCategory
);

// Get Food By Category with Limit
router.get(
  "/get-food-by-category/:id/:limit",
  CategoryController.GetFoodByCategory
);

// Get Food By Category with filter by all
router.get(
  "/get-food-by-category-filter/:id/:limit",
  CategoryController.GetFoodByCategory
);

//!  ================== ****  Sub Category **** ==================
// Create subcategory Router
router.post(
  "/create-subcategory",

  SubCategoryController.CreateSubCategory
);

//get subcategory
router.get("/get-subcategory", SubCategoryController.GetSubCategory);

//single subcategory
router.get(
  "/get-single-subcategory/:id",

  SubCategoryController.GetSingleSubCategory
);

//update subcategory
router.post(
  "/update-subcategory/:id",

  SubCategoryController.UpdateSubCategory
);

//delete subcategory
router.delete(
  "/delete-subcategory/:id",

  SubCategoryController.DeleteSubCategory
);

//get food by subcategory
router.get(
  "/get-food-by-subcategory/:id",

  SubCategoryController.GetFoodBySubCategory
);

//!  ================== ****  FoodType **** ==================

// Create FoodType Router
router.post(
  "/create-foodType",

  FoodTypeController.CreateFoodType
);

// Get FoodType Router
router.get("/get-foodType", FoodTypeController.GetFoodType);
// Get Single FoodType Router
router.get(
  "/get-single-foodType/:id",

  FoodTypeController.GetSingleFoodType
);

// Update FoodType Router
router.post(
  "/update-foodType/:id",

  FoodTypeController.UpdateFoodType
);

// Delete FoodType Router
router.delete(
  "/delete-foodType/:id",

  FoodTypeController.DeleteFoodType
);

//!  ================== ****  CreatePortionSizeUnit **** ==================

// Create PortionSizeUnit Router
router.post(
  "/create-portionSizeUnit",

  PortionSizeUnitController.CreatePortionSizeUnit
);

// Get PortionSizeUnit Router
router.get(
  "/get-portionSizeUnit",

  PortionSizeUnitController.GetPortionSizeUnit
);
// Get Single PortionSizeUnit Router
router.get(
  "/get-single-portionSizeUnit/:id",

  PortionSizeUnitController.GetSinglePortionSizeUnit
);

// Update PortionSizeUnit Router
router.post(
  "/update-portionSizeUnit/:id",

  PortionSizeUnitController.UpdatePortionSizeUnit
);

// Delete PortionSizeUnit Router
router.delete(
  "/delete-portionSizeUnit/:id",

  PortionSizeUnitController.DeletePortionSizeUnit
);

//!  ================== ****  OrderStatus **** ==================

// Create OrderStatus Router
router.post(
  "/create-orderStatus",

  OrderStatusController.CreateOrderStatus
);

// Get OrderStatus Router
router.get(
  "/get-orderStatus",

  OrderStatusController.GetOrderStatus
);
// Get Single OrderStatus Router
router.get(
  "/get-single-orderStatus/:id",

  OrderStatusController.GetSingleOrderStatus
);

// Update OrderStatus Router
router.post(
  "/update-orderStatus/:id",

  OrderStatusController.UpdateOrderStatus
);

// Delete OrderStatus Router
router.delete(
  "/delete-orderStatus/:id",

  OrderStatusController.DeleteOrderStatus
);

//!  ================== ****  Cuisine **** ==================

// Create Cuisine Router
router.post(
  "/create-cuisine",

  CuisineController.CreateCuisine
);

// Get Cuisine Router
router.get("/get-cuisine", AuthVerifyMiddleware, CuisineController.GetCuisine);
// Get Single Cuisine Router
router.get(
  "/get-single-cuisine/:id",

  CuisineController.GetSingleCuisine
);

// Update Cuisine Router
router.post(
  "/update-cuisine/:id",

  CuisineController.UpdateCuisine
);

// Delete Cuisine Router
router.delete(
  "/delete-cuisine/:id",

  CuisineController.DeleteCuisine
);

//!  ================== ****  Ingrediants **** ==================

// Create Ingrediants Router
router.post(
  "/create-ingrediants",

  IngrediantsController.CreateIngrediants
);

// Get Ingrediants Router
router.get(
  "/get-ingrediants",

  IngrediantsController.GetIngrediants
);
// Get Single Ingrediants Router
router.get(
  "/get-single-ingrediants/:id",

  IngrediantsController.GetSingleIngrediants
);

// Update Ingrediants Router
router.post(
  "/update-ingrediants/:id",

  IngrediantsController.UpdateIngrediants
);

// Delete Ingrediants Router
router.delete(
  "/delete-ingrediants/:id",

  IngrediantsController.DeleteIngrediants
);

//!  ================== ****  Additional Tags  **** ==================

//create additional tag router
router.post(
  "/create-additionaltags",

  AdditionalTagsController.CreateAdditionalTag
);

//get additional tag router
router.get("/get-additionaltags", AdditionalTagsController.GetAdditionalTag);

//get single additional tag
router.get(
  "/get-singleadditionaltags/:id",

  AdditionalTagsController.GetSingleAdditionalTag
);

//update additional tag router
router.post(
  "/update-additionaltags/:id",

  AdditionalTagsController.UpdateAdditionalTag
);

//delete additional tag
router.delete(
  "/delete-additionaltags/:id",

  AdditionalTagsController.DeleteAdditionalTag
);

//!  ================== ****  Bonus Free Item  **** ==================

//create bonus free item
router.post(
  "/create-bonus-freeitem",

  BonusFreeItemController.CreateBonusFreeItem
);

//get bonus free item
router.get(
  "/get-bonus-freeitem",

  BonusFreeItemController.GetBonusFreeItem
);

//get single bonus free item
router.get(
  "/get-single-bonus-freeitem/:id",

  BonusFreeItemController.GetSingleBonusFreeItem
);

//update bonus free item
router.post(
  "/update-bonus-freeitem/:id",

  BonusFreeItemController.UpdateBonusFreeItem
);

//delete bonus free item
router.delete(
  "/delete-bonus-freeitem/:id",

  BonusFreeItemController.DeleteBonusFreeItem
);

//!  ================== ****  Food  **** ==================

//create Food item
router.post(
  "/create-food",

  FoodItemController.CreateFood
);

//get Food item
router.get("/get-food", AuthVerifyMiddleware, FoodItemController.GetFood);

//get single Food item
router.get("/get-single-food/:id", FoodItemController.GetSingleFood);

//update Food item
router.post(
  "/update-food/:id",

  FoodItemController.UpdateFood
);

//delete Food item
router.delete(
  "/delete-food/:id",

  FoodItemController.DeleteFood
);
//get all sub category by single category
router.get(
  "/get-sub-category-by-single-category/:id",
  CategoryController.GetSubCategoryBySingleCategory
);

// Search Food by single category ID by sub-category, tags, cusion, review, food-type, price near-me
router.post("/filter", FoodItemController.FilterFood),
  // all food sort by category
  router.get(
    "/get-food-sort-by-category/:id",
    FoodItemController.GetFoodSortByCategory
  );
//!  ================== ****  Country  **** ==================

//create Country
router.post(
  "/create-country",

  CountryController.CreateCountry
);

//get Country
router.get("/get-country", CountryController.GetCountry);

//get single Country
router.get(
  "/get-single-country/:id",

  CountryController.GetSingleCountry
);

//update Country
router.post(
  "/update-country/:id",

  CountryController.UpdateCountry
);

//delete Country
router.delete(
  "/delete-country/:id",

  CountryController.DeleteCountry
);

// Get Food Group By Country
router.get(
  "/get-food-group-by-country",

  CountryController.GetFoodGroupByCountry
);

//Get country by admin selected
router.post(
  "/get-country-by-admin-selected",
  CountryController.GetCountryByAdminSelected
);

//!  ================== ****  Region_State  **** ==================

//create Region_State
router.post(
  "/create-region-state",

  Region_StateController.CreateRegion_State
);

//get Region_State
router.get(
  "/get-region-state",

  Region_StateController.GetRegion_State
);

//get single Region_State
router.get(
  "/get-single-region-state/:id",

  Region_StateController.GetSingleRegion_State
);

//update Region_State
router.post(
  "/update-region-state/:id",

  Region_StateController.UpdateRegion_State
);

//delete Region_State
router.delete(
  "/delete-region-state/:id",

  Region_StateController.DeleteRegion_State
);

// get reigion by country
router.get(
  "/get-reigion-by-country/:id",
  Region_StateController.GetRegionByCountry
);

//!  ================== ****  City  **** ==================

//create City
router.post("/create-city", AuthVerifyMiddleware, CityController.CreateCity);

//get City
router.get("/get-city", AuthVerifyMiddleware, CityController.GetCity);

//get single City
router.get(
  "/get-single-city/:id",

  CityController.GetSingleCity
);

//update City
router.post(
  "/update-city/:id",

  CityController.UpdateCity
);

//delete City
router.delete(
  "/delete-city/:id",

  CityController.DeleteCity
);
router.get("/get-city-by-reigion/:id", CityController.GetCityByReigion);

//!  ================== ****  AddressBook  **** ==================

//create AddressBook
router.post(
  "/create-address-book",

  AddressBookController.CreateAddressBook
);

//get AddressBook
router.get(
  "/get-address-book",

  AddressBookController.GetAddressBook
);

//get single AddressBook
router.get(
  "/get-address-book/:id",

  AddressBookController.GetSingleAddressBook
);

//update AddressBook
router.post(
  "/update-address-book/:id",

  AddressBookController.UpdateAddressBook
);

//delete AddressBook
router.delete(
  "/delete-address-book/:id",

  AddressBookController.DeleteAddressBook
);

//!  ================== ****  Food Review  **** ==================

//create food review
router.post(
  "/create-food-review",

  FoodReviewController.CreateFoodReview
);

//get food review
router.get(
  "/get-food-review",

  FoodReviewController.GetFoodReview
);

//get single food review
router.get(
  "/get-single-food-review/:id",

  FoodReviewController.GetSingleFoodReview
);

//update single food review
router.post(
  "/update-food-review/:id",

  FoodReviewController.UpdateFoodReview
);

//delete single food review
router.delete(
  "/delete-food-review/:id",

  FoodReviewController.DeleteFoodReview
);

//!  ================== ****  CartItems API  **** ==================

//create CartItems
router.post(
  "/create-cart-items",

  CartItemsController.CreateCarItems
);

//get CartItems
router.get(
  "/get-cart-items",

  CartItemsController.GetCarItems
);

//get single CartItems
router.get(
  "/get-single-cart-items/:id",

  CartItemsController.GetSingleCarItems
);

//update single CartItems
router.post(
  "/update-cart-items/:id",

  CartItemsController.UpdateCarItems
);

//delete single CartItems
router.delete(
  "/delete-cart-items/:id",

  CartItemsController.DeleteCarItems
);

//!  ================== ****  Orders API  **** ==================

//create Orders
router.post(
  "/create-orders",

  OrdersController.CreateOrders
);

//get Orders
router.get("/get-orders", AuthVerifyMiddleware, OrdersController.GetOrders);

//get single Orders
router.get(
  "/get-single-orders/:id",

  OrdersController.GetSingleOrders
);

//update single Orders
router.post(
  "/update-orders/:id",

  OrdersController.UpdateOrders
);

//delete single Orders
router.delete(
  "/delete-orders/:id",

  OrdersController.DeleteOrders
);

// get-order-by-single-seller
router.get(
  "/get-order-by-single-seller/:id",

  OrdersController.GetOrderBySingleSeller
);

// get-order-by-single-buyer
router.get(
  "/get-order-by-single-buyer/:id",

  OrdersController.GetOrderBySingleBuyer
);

//get order by single seller with type
router.get(
  "/get-order-by-single-seller-with-type/:id/:type",

  OrdersController.GetOrderBySingleSellerWithType
);
//!get order tracking by order id
router.get(
  "/get-order-tracking-by-order/:id",

  OrdersController.GetOrderTrackingByOrder
);

//!  ================== ****  Order Tacking  **** ==================

//create OrderTacking
router.post(
  "/create-orders-tacking",

  OrderTackingController.CreateOrderTacking
);

//get OrderTacking
router.get(
  "/get-orders-tacking",

  OrderTackingController.GetOrderTacking
);

//get single OrderTacking
router.get(
  "/get-single-orders-tacking/:id",

  OrderTackingController.GetSingleOrderTacking
);

//update single OrderTacking
router.post(
  "/update-orders-tacking/:id",

  OrderTackingController.UpdateOrderTacking
);

//delete single OrderTacking
router.delete(
  "/delete-orders-tacking/:id",

  OrderTackingController.DeleteOrderTacking
);

//!  ================== ****  RiderReview  **** ==================

//create RiderReview
router.post(
  "/create-rider-review",

  RiderReviewController.CreateRiderReview
);

//get RiderReview
router.get(
  "/get-rider-review",

  RiderReviewController.GetRiderReview
);

//get single RiderReview
router.get(
  "/get-single-rider-review/:id",

  RiderReviewController.GetSingleRiderReview
);

//update single RiderReview
router.post(
  "/update-rider-review/:id",

  RiderReviewController.UpdateRiderReview
);

//delete single RiderReview
router.delete(
  "/delete-rider-review/:id",

  RiderReviewController.DeleteRiderReview
);

//!  ================== ****  Recipe  **** ==================

//create recipe
router.post(
  "/create-recipe",

  RecipeController.CreateRecipe
);

//get recipe
router.get("/get-recipe", RecipeController.GetRecipe);

//get single recipe
router.get(
  "/get-single-recipe/:id",

  RecipeController.GetSingleRecipe
);

//update recipe
router.post(
  "/update-recipe/:id",

  RecipeController.UpdateRecipe
);

//delete recipe
router.delete(
  "/delete-recipe/:id",

  RecipeController.DeleteRecipe
);

//!  ================== ****  Coupon  **** ==================

//create Coupon
router.post(
  "/create-coupon",

  CouponController.CreateCoupon
);

//get Coupon
router.get("/get-coupon", AuthVerifyMiddleware, CouponController.GetCoupon);

//get single Coupon
router.get(
  "/get-single-coupon/:id",

  CouponController.GetSingleCoupon
);

//update Coupon
router.post(
  "/update-coupon/:id",

  CouponController.UpdateCoupon
);

//delete Coupon
router.delete(
  "/delete-coupon/:id",

  CouponController.DeleteCoupon
);

//!  ================== ****  Food Diary  **** ==================

//create food diary
router.post(
  "/create-food-diary",

  FoodDiaryController.CreateFoodDiary
);

//get food diary
router.get("/get-food-diary", FoodDiaryController.GetFoodDiary);

//get single food diary
router.get(
  "/get-single-food-diary/:id",
  FoodDiaryController.GetSingleFoodDiary
);

//update food diary
router.post(
  "/update-food-diary/:id",

  FoodDiaryController.UpdateFoodDiary
);

//delete food diary
router.delete(
  "/delete-food-diary/:id",

  FoodDiaryController.DeleteFoodDiary
);

//!  ================== ****  Become a seller  **** ==================

//create become a seller
router.post(
  "/create-become-seller",

  BecomeSellerController.CreateBecomeSeller
);

//get become  a seller
router.get(
  "/get-become-seller",

  BecomeSellerController.GetBecomeSeller
);

//get single become a seller with foods
router.get(
  "/get-single-become-seller/:id",

  BecomeSellerController.GetSingleBecomeSeller
);

//get single public become a seller with foods
router.get(
  "/get-single-public-become-seller/:id",
  BecomeSellerController.GetSinglePublicBecomeSeller
);

//update become a seller
router.post(
  "/update-become-seller/:id",

  BecomeSellerController.UpdateBecomeSeller
);

//delete become a seller
router.delete(
  "/delete-become-seller/:id",

  BecomeSellerController.DeleteBecomeSeller
);

//Get Seller With FoodDetails
router.post(
  "/get-seller-with-food-details",
  BecomeSellerController.GetSellerWithFoodDetails
);

//get food limit by seller
router.get(
  "/get-food-by-seller/:id/:limit",

  BecomeSellerController.GetFoodBySeller
);

//get all order by single seller
router.get(
  "/get-order-by-single-seller/:id",

  BecomeSellerController.GetOrderBySingleSeller
);

//!  ================== ****  Rider  **** ==================

//create Rider
router.post("/create-rider", AuthVerifyMiddleware, RiderController.CreateRider);

//get Rider
router.get("/get-rider", AuthVerifyMiddleware, RiderController.GetRider);

//get single Rider
router.get(
  "/get-single-rider/:id",

  RiderController.GetSingleRider
);

//update Rider
router.post(
  "/update-rider/:id",

  RiderController.UpdateRider
);

//delete Rider
router.delete(
  "/delete-rider/:id",

  RiderController.DeleteRider
);

//!  ================== ****  Food Photo  **** ==================

//create food photo
router.post(
  "/create-food-photo",

  FoodPhotoController.CreateFoodPhoto
);

//get food photo
router.get(
  "/get-food-photo",

  FoodPhotoController.GetFoodPhoto
);

//get single food photo
router.get(
  "/get-single-food-photo/:id",

  FoodPhotoController.GetSingleFoodPhoto
);

//update food photo
router.post(
  "/update-food-photo/:id",

  FoodPhotoController.UpdateFoodPhoto
);

//delete food photo
router.delete(
  "/delete-food-photo/:id",

  FoodPhotoController.DeleteFoodPhoto
);

//!  ================== ****  Banners API  **** ==================

//create Banners API
router.post(
  "/create-banners",

  BannersAPIController.CreateBannersAPI
);

//get Banners API
router.get("/get-banners", BannersAPIController.GetBannersAPI);

//get single Banners API
router.get("/get-single-banners/:id", BannersAPIController.GetSingleBannersAPI);

//update Banners API
router.post(
  "/update-banners/:id",

  BannersAPIController.UpdateBannersAPI
);

//delete Banners API
router.delete(
  "/delete-banners/:id",

  BannersAPIController.DeleteBannersAPI
);

//!  ================== ****  Home page section   **** ==================

// create home page section
router.post(
  "/create-home-page-sections",

  HomePageSectionsController.CreateHomepageSections
);

//get Home page section
router.get(
  "/get-home-page-sections",
  HomePageSectionsController.GetHomePageSections
);

//get single home page section
router.get(
  "/get-single-home-page-sections/:id",

  HomePageSectionsController.GetSingleHomePageSections
);

//update home page section
router.post(
  "/update-home-page-sections/:id",

  HomePageSectionsController.UpdateHomePageSections
);

//delete home page section
router.delete(
  "/delete-home-page-sections/:id",

  HomePageSectionsController.DeleteHomePageSections
);

//!  ================== ****  How Do We DO   **** ==================

// create how do we do
router.post(
  "/create-how-do-we-do",

  HowDoWeDoController.CreateHowDoWeDo
);

//get how do we do
router.get("/get-how-do-we-do", HowDoWeDoController.GetHowDoWeDo);

//get single how do we do
router.get(
  "/get-single-how-do-we-do/:id",
  HowDoWeDoController.GetSingleHowDoWeDo
);

//update how do we do
router.post(
  "/update-how-do-we-do/:id",

  HowDoWeDoController.UpdateHowDoWeDo
);

//delete how do we do
router.delete(
  "/delete-how-do-we-do/:id",

  HowDoWeDoController.DeleteHowDoWeDo
);

//!  ================== ****  Circle Type Food   **** ==================

// create circle type food
router.post(
  "/create-circle-type-food",

  CircleTypeFoodController.CreateCircleTypeFood
);

//get circle type food
router.get("/get-circle-type-food", CircleTypeFoodController.GetCircleTypeFood);

//get single circle type food
router.get(
  "/get-single-circle-type-food/:id",

  CircleTypeFoodController.GetSingleCircleTypeFood
);

//update circle type food
router.post(
  "/update-circle-type-food/:id",

  CircleTypeFoodController.UpdateCircleTypeFood
);

//delete circle type food
router.delete(
  "/delete-circle-type-food/:id",

  CircleTypeFoodController.DeleteCircleTypeFood
);

//!  ================== ****  Buyer question and answear  **** ==================

// create buyer question and answear
router.post(
  "/create-buyer-question-answear",

  BuyerQuestionsAndAnswearController.CreateBuyerQuestionsAndAnswear
);

//get buyer question and answear
router.get(
  "/get-buyer-question-answear",

  BuyerQuestionsAndAnswearController.GetBuyerQuestionsAndAnswear
);

//get single buyer question and answear
router.get(
  "/get-single-buyer-question-answear/:id",

  BuyerQuestionsAndAnswearController.GetSingleBuyerQuestionsAndAnswear
);

//update  buyer question and answear
router.post(
  "/update-buyer-question-answear/:id",

  BuyerQuestionsAndAnswearController.UpdateBuyerQuestionsAndAnswear
);

//delete  buyer question and answear
router.delete(
  "/delete-buyer-question-answear/:id",

  BuyerQuestionsAndAnswearController.DeleteBuyerQuestionsAndAnswear
);

//!  ================== ****  With drawl  **** ==================

//create Withdrawal
router.post(
  "/create-withdrawal",

  WithdrawalController.CreateWithdrawal
);

//get Withdrawals
router.get("/get-withdrawals", WithdrawalController.GetWithdrawal);

//get single Withdrawal
router.get(
  "/get-single-withdrawal/:id",

  WithdrawalController.GetSingleWithdrawal
);

//update Withdrawal
router.post(
  "/update-withdrawal/:id",

  WithdrawalController.UpdateWithdrawal
);

//delete Withdrawal
router.delete(
  "/delete-withdrawal/:id",

  WithdrawalController.DeleteWithdrawal
);

//!  ================== ****  Bank List  **** ==================

//create Bank
router.post(
  "/create-bank",

  BankListController.CreateBank
);

//get banklist
router.get(
  "/get-banklist",

  BankListController.GetBankList
);

//get single Bank
router.get(
  "/get-single-bank/:id",

  BankListController.GetSingleBank
);

//update Bank Name
router.post(
  "/update-bank/:id",

  BankListController.UpdateBank
);

//delete bank
router.delete(
  "/delete-bank/:id",

  BankListController.DeleteBank
);

//!  ================== ****  Recipe Categories  **** ==================

// create Recipe Categories
router.post(
  "/create-recipe-category",

  RecipeCategoryController.CreateRecipeCategory
);

//get recipe-category
router.get(
  "/get-recipe-category",

  RecipeCategoryController.GetRecipeCategory
);

//get single recipe-category
router.get(
  "/get-single-recipe-category/:id",

  RecipeCategoryController.GetSingleRecipeCategory
);

//update  recipe-category
router.post(
  "/update-recipe-category/:id",

  RecipeCategoryController.UpdateRecipeCategory
);

//delete  recipe-category
router.delete(
  "/delete-recipe-category/:id",

  RecipeCategoryController.DeleteRecipeCategory
);

module.exports = router;
