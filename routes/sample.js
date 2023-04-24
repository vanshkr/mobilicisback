import express from "express";
import {
  getBMWOrMercedesOwnersWithLowIncome,
  getMaleUsersWithExpensivePhones,
  getLuxuryCarOwnersWithNoDigitsInEmail,
  getTopCitiesByUserCountAndIncome,
  getUsersWithLastNameAndQuoteRequirements,
} from "../controllers/sample.js";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("this is a test");
});
router.get("/low_income", getBMWOrMercedesOwnersWithLowIncome);
router.get("/expensive_phones", getMaleUsersWithExpensivePhones);
router.get("/quote_requirements", getUsersWithLastNameAndQuoteRequirements);
router.get("/luxury_cars", getLuxuryCarOwnersWithNoDigitsInEmail);
router.get("/top_cities", getTopCitiesByUserCountAndIncome);

export default router;
