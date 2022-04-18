const fs = require('fs');
const assetsFolder = `${__dirname}/src/assets/`;

const readResult = fs.readdirSync(assetsFolder);
// Used to extract images as static require in folder because pokedex doesn't have images.
const generateImageItems = () => {
  const result = readResult.reduce((accumulator, path) => {
    const name = path.split('.')[0];
    accumulator += `${name}: { name: ${name}, path: require('./src/assets/${path}') }, `;
    return accumulator;
  }, '');
  return result;
};

const saveImageItems = items => {
  const js = `import { ImageSourcePropType } from "react-native";
	export const imagePaths: Record<number | string, { name: string | number, path: ImageSourcePropType }> = { ${items} }`;
  fs.writeFileSync(`${__dirname}/images.ts`, js, 'utf8');
};

saveImageItems(generateImageItems());
