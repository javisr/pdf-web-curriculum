# A responsive and multilingual web c.v.

This is my c.v. written as a responsive and multilingual web page using [AngularJS](https://angularjs.org/), [bootstrap](http://getbootstrap.com/) and the [paper](http://bootswatch.com/paper/) theme. It uses scss and includes a [gulp](http://gulpjs.com/) build to generate the stylesheets. Also included is a gulp task to generate a PDF using [wkhtmltopdf](https://code.google.com/hosting/moved?project=wkhtmltopdf). Extra formatting is applied using a pdf stylesheet to remove unnecessary web components such as navigation and to adjust the layout.

An example website can be found at [javisr.eu](http://javisr.eu) and sample PDF [here](http://localhost:8080/curriculum-javisantos-en.pdf).

The webpage is developed locally using [http-server (node)](https://www.npmjs.com/package/http-server) and mapped to a .dev domain using [invoker](http://invoker.codemancers.com/).

Check out the following blog entry for more details about the concept: [sharpfellows.com](http://sharpfellows.com/post/publishing-your-c-v-on-the-web-and-exporting-pdf-with-added-gulp-and-bootstrap).

## Getting started

You will need a working [bower](http://bower.io/) and [npm](https://www.npmjs.com/) installation. The run

    npm install -g http-server gulp node-sass
    npm install 
    bower install 

## Running the local site site.

There is a .dev.ini file included in the root which you can rename to the name of your site if you would prefer. 

    invoker start curriculum.dev.ini #Add -d to run as a daemon in the background

You should now be able to access the site at http://curriculum.dev:8080.

This step is necessary to generate the pdf files.

## Compiling the stylesheets

Before you can run the site you will need to generate main.css. This can be done using gulp as follows:

    gulp sass

If you would like it to regenerate as you update the styles use:

    gulp watch

## Generating the PDF

Make sure you have [wkhtmltopdf](http://wkhtmltopdf.org/) installed with at least version 0.12. Open gulpfile.js and in the gulpsass task command line you can change both the location of your .dev site and the name of the exported pdf.

Then you can run the following to generate both main.css with the pdf override styles and the pdf itself.

    gulp build

