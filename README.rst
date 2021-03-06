==========================================
Example of AngularJS project structure.
==========================================

When I started with AngularJS, one of the principal question for me was - "How should I structure my project?". So, after more tries I found the best project layout for me.

How to use?
++++++++++++

This project is just a skeleton for your application. So, just follow the next steps:

1. Clone this project.
   
   `git clone git@github.com:Alexx-G/angular-project-sample.git`

2. Open the project folder and install dependencies.
   
   `npm install`
   `bower install`

3. Build the project with *gulp*.
   
    `gulp build`

You will obtain something like this:

::

    .
    ├── bower_components
    │   └── angular
    ├── bower.json
    ├── dist
    │   ├── css
    │   ├── js
    │   └── views
    ├── gulpfile.js
    ├── LICENSE
    ├── node_modules
    │   ├── gulp
    │   ├── gulp-concat
    │   ├── gulp-minify-css
    │   ├── gulp-minify-html
    │   ├── gulp-ng-annotate
    │   ├── gulp-sourcemaps
    │   └── gulp-uglify
    ├── package.json
    ├── README.rst
    └── src
        ├── app
        └── css


Set-up the environment.
+++++++++++++++++++++++

0. You'll need `node <http://nodejs.org/>`_ and `npm <https://www.npmjs.com/>`_.
   Install globally gulp and bower via npm.

   `npm install -g gulp bower`
1. Let's create the project folder.

   `mkdir projectName && cd projectName`
2. Create a nodeJS package. You'll be asked for some details about the project (title, description, version etc).
   Also you have to install gulp as devDependency into your project.

   `npm init`

   `npm install --save-dev gulp`
3. Initialize bower package in your project and provide some details about the package.
   
   `bower init`

Creating the structure of project.
+++++++++++++++++++++++++++++++++++

1. Create folder which will hold sources of your project.
   `mkdir src`

2. It this folder we have our app (script files and html views), style files (css, scss or anything else) and images.
   Summary here we place all files that will be built (concatenated, minified and optimized).

   `mkdir src/app src/css/ src/images/`

3. By default bower will create a folder in your project named bower_components for installed packages.
   But you can create a **.bowerrc** file and specify another folder.

   {"directory": "bower_components/"}


Installing required components.
++++++++++++++++++++++++++++++++

For installation of components that we needed, we'll use bower.

    1. Just execute next command.
    
       `bower install --save angular`

       *--save* option will add this component as dependency to the bower.json file.

    2. Now you can include files from the installed component into your project. E.g.
       
       <script type="text/javascript" src="../../bower_components/angular/angular.min.js"></script>

       Bower allows to easily manage dependencies of your project.

Automating the build of project sources.
+++++++++++++++++++++++++++++++++++++++++

Why do we need to use `gulp <http://gulpjs.com/>`_ (or grunt)?

Well, because it's awesome. We can once configure what files we want to minify (concatenate, optimize) and use them in production. I use gulp for:

1. Concatenation, minification of js files.
2. Same as above for css files.
3. Collecting of html files from app (preserving the project structure), and copying them to the release directory.

After running a single *gulp* task I obtain release folder with my views, scripts and styles.
You can find gulpfile in this repository (it's very simple) or check the documentation.

Project structure
++++++++++++++++++

In AngularJS mostly are used 2 approaches structuring files:

1. By features - grouping the files related to one feature in one module (which can contains also other submodules).
2. By functions - grouping the files by their type (all controllers goes to the module `controllers` etc.)

Well, I prefer to use mixed approach - mostly per features, but if module is quite big, then I can group files by functions (controllers, services, routes etc.).

TODO:
++++++

1. *Add some features to the angular application.* [Done]
2. Add tests.
