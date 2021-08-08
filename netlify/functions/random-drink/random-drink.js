// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const handler = async (event) => {
  try {
    const drinks = ["coffee", "tea", "beer", "wine", "water", "juice"];
    const randomIndex = Math.floor(Math.random() * drinks.length);
    const drink = drinks[randomIndex];

    return {
      statusCode: 200,
      body: JSON.stringify({ message: `You should drink some ${drink}` }),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
