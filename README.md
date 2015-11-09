# gulp-talk2me

[![NPM](https://nodei.co/npm/gulp-talk2me.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/gulp-talk2me/)

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)[![Build Status](https://travis-ci.org/belgac/gulp-talk2me.svg?branch=master)](https://travis-ci.org/belgac/gulp-talk2me)

A little package to generate help texts for gulp tasks

## What is Gulp-talk2me

Gulp talk to me is a package giving you auto-generated message to let you users understand what your gulp build and test system can, is or will be doing.

## Install

```
$ npm install --save gulp-talk2me
```

If you want to use it as a dev dependency use --save-dev instead of --save

## Usage

Create a new instance of the gulp-talk2me lib at the start of your Gulpfile.js and pass your package.json and your tasks list

```js
//require the gulp-talk2me module
var gulpTalk2me = require('gulp-talk2me');
//require your package.json
var packageInfo = require('./package.json');
//Give a list of your tasks, replace the task names by your task names
var taskList = [{name:'firstTaskName'},{name:'secondTaskName'},{name:'...'}];
//Create your talk2me instance
var talk2me = new gulpTalk2me(packageInfo,taskList)
```

you can now use the functions from the module:
* Greeting 

##Functions

### Greeting

Use this function to greet users and give a list of available tasks.

Call the greeting function before any task in your Gulpfile.js

```js
console.log(talk2me.greeting);
```
