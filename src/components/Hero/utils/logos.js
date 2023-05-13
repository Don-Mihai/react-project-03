const images = require.context('../img/logos', false, /\.png/);
const logos = [];

images.keys().map((key, index) => {
    const id = index + 1;
    const src = images(key);
    const alt = `logo ${id}`;
    logos.push({ id, src, alt });
});

export default logos;
