const handler = async (event) => {
  try {
    const drinks = ["coffee", "tea", "beer", "wine", "water", "juice"];
    const drink = drinks[Math.floor(Math.random() * drinks.length)];

    return {
      statusCode: 200,
      body: JSON.stringify({ message: `You should drink some ${drink}` }),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
