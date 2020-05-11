const imagemin = require("imagemin");
const imageminWebp = require("imagemin-webp");

(async () => {
  const files = await imagemin(['./img/*.{jpg,jpeg,png}'], {
    destination: 'converted',
    plugins: [imageminWebp({ quality: 85 })],
  });

  console.log(files);
})();
