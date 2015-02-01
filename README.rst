Example of AngularJS project structure.
-----------------------------------------

When I started with AngularJS, one of the principal question for me was - "How should I structure my project?". So, after more tries I found the best project layout for me.

Set-up of environment.
=======================

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