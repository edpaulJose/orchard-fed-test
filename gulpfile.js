const { src, dest, watch, series, parallel } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");
const terser = require("gulp-terser");
const browserSync = require("browser-sync").create();
const ghPages = require("gulp-gh-pages"); // Add this for deploying to GitHub Pages

// Path configuration
const paths = {
  images: "public/images/**/*", // Path to all images in the public folder
  css: "src/scss/**/*.scss", // Path to your SCSS files
  js: "src/scripts/**/*.js", // Path to your JS files
  dist: "dist/", // Output directory
};

// Compile SCSS into CSS
function compileSass() {
  return src("src/scss/**/*.scss")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(dest("dist/css"))
    .pipe(browserSync.stream());
}

// Minify and bundle JavaScript
function minifyJs() {
  return src("src/scripts/**/*.js")
    .pipe(concat("main.min.js"))
    .pipe(terser())
    .pipe(dest("dist/scripts"))
    .pipe(browserSync.stream());
}

// Copy images from public to dist
function copyImages() {
  return src("public/images/**/*", { encoding: false }).pipe(
    dest("dist/images")
  );
}

// Copy index.html to dist folder
function copyHtml() {
  return src("src/index.html").pipe(dest("dist/")); // Copy index.html to dist
}

// Watch for changes and reload browser
function watchFiles() {
  browserSync.init({
    server: {
      baseDir: "./dist/", // Change this to dist since we're serving from there
    },
  });

  watch(paths.css, compileSass);
  watch(paths.js, minifyJs);
  watch(paths.images, copyImages); // Watch for image changes and copy
  watch("src/index.html", copyHtml); // Watch index.html and copy it to dist
  watch("dist/*.html").on("change", browserSync.reload); // Watch HTML changes
}

// Deploy to GitHub Pages (new task)
function deploy() {
  return src("dist/**/*")
    .pipe(ghPages());
}

// Default Gulp Task
exports.default = series(
  parallel(compileSass, minifyJs, copyImages, copyHtml),
  watchFiles
);

// Deploy Task
exports.deploy = deploy;
