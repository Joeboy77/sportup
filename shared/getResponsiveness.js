const { width: deviceWidth, height: deviceHeight } = require("react-native").Dimensions.get("window");
const BaseWidth = 375;

const scale = (size) => (deviceWidth / BaseWidth) * size;

const moderateScale = (size, factor = 0.5) => 
  size + (scale(size) - size) * factor;

const responsive = {
  fontSize: (size) => moderateScale(size, 1),
  number: (n) => moderateScale(n, 1),
  deviceWidth: deviceWidth,
  deviceHeight: deviceHeight,
};

module.exports = { responsive };