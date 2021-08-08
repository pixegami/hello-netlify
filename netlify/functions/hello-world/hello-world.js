const handler = async (event) => {
  try {
    const message = "Hello world!";

    return {
      statusCode: 200,
      body: JSON.stringify({ message: message }),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
