const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

 mix.config.publicPath = 'public_html';
mix.js("resources/js/app.js", "public_html/dist/js")

    .js("resources/js/ckeditor-classic.js", "public_html/dist/js")
    .js("resources/js/ckeditor-inline.js", "public_html/dist/js")
    .js("resources/js/ckeditor-balloon.js", "public_html/dist/js")
    .js("resources/js/ckeditor-balloon-block.js", "public_html/dist/js")
    .js("resources/js/ckeditor-document.js", "public_html/dist/js")
    //.js("resources/js/product-show.js", "public_html/dist/js")
    //.js("resources/js/cart.vue.js", "public_html/dist/js")
    .js("resources/js/address.js","public_html/dist/js")
    .js("resources/js/chart.js","public_html/dist/js")
    //.css("public/dist/css/_app.css", "public_html/dist/css/app.css")
    .css("resources/css/_tailwind.css", "public_html/dist/css/build.css")
    .options({
        processCssUrls: false,
    })
    //.copyDirectory("resources/json", "public_html/dist/json")
    //.copyDirectory("resources/fonts", "public_html/dist/fonts")
    //.copyDirectory("resources/images", "public_html/dist/images")
    .vue()
