import sampleModel from "../schema/sampleSchema.js";

export const getBMWOrMercedesOwnersWithLowIncome = async (req, res) => {
  try {
    const users = await sampleModel.find({
      $and: [
        { income: { $lt: "$5" } },
        {
          car: { $in: ["BMW", "Mercedes"] },
        },
      ],
    });
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const getMaleUsersWithExpensivePhones = async (req, res) => {
  try {
    const users = await sampleModel.find({
      gender: "Male",
      phone_price: { $gte: 10000 },
    });
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getUsersWithLastNameAndQuoteRequirements = async (req, res) => {
  try {
    const result = await sampleModel.find({
      $and: [
        { last_name: /^M/ },
        { $expr: { $gt: [{ $strLenCP: "$quote" }, 15] } },
        {
          $expr: {
            $regexMatch: { input: "$email", regex: "$last_name", options: "i" },
          },
        },
      ],
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getLuxuryCarOwnersWithNoDigitsInEmail = async (req, res) => {
  try {
    const result = await sampleModel.find({
      $and: [
        { car: { $in: ["BMW", "Mercedes", "Audi"] } },
        { email: { $not: /\d/ } },
      ],
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getTopCitiesByUserCountAndIncome = async (req, res) => {
  try {
    const result = await sampleModel.aggregate([
      {
        $group: {
          _id: "$city",
          count: { $sum: 1 },
          avgIncome: { $avg: { $toDouble: { $substr: ["$income", 1, -1] } } },
        },
      },
      { $sort: { count: -1 } },
      { $limit: 10 },
    ]);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
