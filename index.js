const imagemin = require("imagemin");
const imageminWebp = require("imagemin-webp");

(async () => {
  const files = await imagemin(['./img/*.{jpg,jpeg,png}'], {
    destination: 'converted',
    plugins: [imageminWebp({ quality: 65 })],
  });

  console.log(files);
})();
