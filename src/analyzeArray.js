function analyzeArray(arr) {
  const avg = getAvg(arr);
  const analyzedArray = {
    average: avg,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
  return analyzedArray;
}
module.exports = analyzeArray;

const getAvg = (arr) => {
  const avg = arr.reduce(() => {
    const sum = arr.reduce((prev, curr) => {
      return prev + curr;
    });
    return sum / arr.length;
  });
  return avg;
};
