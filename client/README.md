## instructions

- npm install
- npm run build
- npm start

### Webpack Config

- [x] Has a single javascript file as entry point
- [x] Handles Javascript/ES6/React code with both .js and .jsx and outputs single .js bundle (ie: Carousel.jsx, App.js, public)
- [x] Handles Scss code with .scss extension, output .css with unique hash added to fielname
- [x] Handles IMG with .jpeg.jpg.png.gif, return reference to file with link(tested jpg - pokeball)
- [x] Handle SVG with .svg extension, return base64 (pikachu, did not test svg files with 1 mb <)

### PhotoGallery

- [x] PhotoGallery takes in an array of images(used array of text but can switch out easily, fetches url from server)
- [x] Each image will have a url and caption (fetches url and caption from server)
- [x] Captions should be displayed over the image
- [x] Click or swipe through images(has next and prev buttons)
- [ ] Has animations (bonus)
- [ ] edge cases: handles array edges, but not responsive and did not add webkits,etc, can do postcss in those cases and media queries
