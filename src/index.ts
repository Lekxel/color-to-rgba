import colorsByName from './helpers/colorsByName.js';

/**
 * @name colorsToRGBA
 * @param color `string` The valid color to convert to rgba (e.g red or #ff0000)
 * @param alpha `Number` The opacity of the generated rgba (default 1)
 * @returns `String` It returns rgba with the alpha set the specified value
 */
const colorsToRGBA = (color: string, alpha: number) => {
  return /^#([A-Fa-f0-9]{3}){1,2}$/.test(color) ? convert(color, alpha) : convert(colorsByName[color], alpha);
};

const convert = (color: string, alpha: number = 1) => {
  let eachChar: string[];
  eachChar = color.substring(1).split('');
  if (eachChar.length === 3) {
    eachChar = [eachChar[0], eachChar[0], eachChar[1], eachChar[1], eachChar[2], eachChar[2]];
  }

  let colorOctal: number = Number('0x' + eachChar.join(''));

  return `rgba(${[(colorOctal >> 16) & 255, (colorOctal >> 8) & 255, colorOctal & 255].join(',')},${alpha})`;
};

export default colorsToRGBA;
