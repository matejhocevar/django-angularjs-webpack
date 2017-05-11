# django-angularjs-webpack
A boilerplate for Django Framework and Angular 1.x application packed with Webpack 2.x.

![Django + AngularJs + Webpack](https://raw.githubusercontent.com/matoxxx/django-angularjs-webpack/cdf9c68f/frontend/static/assets/logo.png)

* ES6, and ES7 support with babel.
* Development server with hot reload.
* Production builds with cache busting.
* ESLint supported.
* Source maps included in all builds.
* Testing environment using karma to run tests and jasmine as the framework.
* Code coverage when tests are run.
* Analytics of production build
* No gulp and no grunt, just npm scripts.

### To be done:
* Proper loading of assets.

>Warning: Make sure you're using the latest version of Node.js and NPM

## Installation
#### Clone the repository
```git clone git@github.com:matoxxx/django-angularjs-webpack.git```

#### Run django
```python manage.py runserver 0.0.0.0:8000```

#### Install npm packages
```npm install```

#### Run client
```npm run dev```

#### Build production
```npm run build```

#### Build production with report
```npm run build --report```


Here you go.

#### Enjoy coding
  * Frontend: http://localhost:8080/
  * Backend: http://localhost:8000/


## Inspiration
Heavily inspired by projects:

  * [AngularJs Webpack boilerplate](https://github.com/preboot/angularjs-webpack)
  * [Django Vue Webpack boilerplate](https://github.com/longtranista/django-vue-webpack)

Thank you guys for your awesome work!

## Authors
  * Matej Hočevar (matoxxx)
