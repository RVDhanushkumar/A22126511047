const axios = require('axios');
require("dotenv").config();

let windowNumbers = [];

const API_URLS = {
  p: process.env.PRIME,
  f: process.env.FIB,
  e: process.env.EVEN, 
  r: process.env.RAND,  
};

const fetchNumbers = async (numberType) => {
  try {
    const data = await axios.get(API_URLS[numberType], {
        timeout: 500,
        headers: {
          'Authorization': `Bearer ${process.env.API_KEY}`, // Add if API needs a token
        },});
    return data.data.numbers || [];
  } catch (error) {
    console.error(`Error in ${numberType}:`, error.message);
    return [];
  }
};

const updateWindow = (newnum) => {
  newnum.forEach((num) => {
    if (!windowNumbers.includes(num)) {
      if (windowNumbers.length >= 10) {
        windowNumbers.shift(); 
      }
      windowNumbers.push(num);
    }
  });
};

const calculateAverage = (num) => {
  if (num.length === 0) return 0;
  const sum = num.reduce((acc, n) => acc + n, 0);
  return parseFloat((sum / num.length).toFixed(2));
};

const getNumbers = async (req, res) => {
  const { numberid } = req.params;

  if (!API_URLS[numberid]) {
    return res.status(400).json({ error: 'Invalid number type. Use p, f, e, or r.' });
  }

  const prevState = [...windowNumbers];

  const newNumbers = await fetchNumbers(numberid);
  updateWindow(newNumbers);

  const currState = [...windowNumbers];
  const avg = calculateAverage(currState);

  res.json({
    windowPrevState: prevState,
    windowCurrState: currState,
    numbers: newNumbers,
    avg: avg,
  });
};

module.exports = { getNumbers };
