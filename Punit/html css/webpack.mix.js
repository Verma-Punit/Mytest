let mix = require('laravel-mix');

mix.postCss("src/app.css", "public/app.css", [
    require("tailwindcss"),
   ]);