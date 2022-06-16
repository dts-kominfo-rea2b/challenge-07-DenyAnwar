const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (responseViewer) => {
  try {
    const [responseTheaterIXX, responseTheaterVGC] = await Promise.all([promiseTheaterIXX(), promiseTheaterVGC()])
    
    const result = [...responseTheaterIXX, ...responseTheaterVGC]

    // filter result
    return result?.filter(item => item.hasil === responseViewer)?.length || 0
  } catch (error) {
    console.log("there was an error: " + error);
  }
};

module.exports = {
  promiseOutput,
};
