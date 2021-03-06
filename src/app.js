import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history }  from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import {firebase} from './firebase/firebase';
import LoadingPage from './components/LoadingPage';

const store = configureStore();

const jsx = (
  <Provider  store={store} >
    <AppRouter/>
  </Provider>
)

store.dispatch(addExpense({description:'Water Bill',amount:4500}))
//NEXT STEPS: figure out the issues with store.
//ReactDOM.render(jsx, document.getElementById('app'));
ReactDOM.render(<LoadingPage/>,document.getElementById('app')); 

firebase.auth().onAuthStateChanged((user) => {
  if(user){
    console.log('User Logged in')
  } else {
    history.push('/');
    console.log('User Logged out')
  }
});

//It's logging out but now I'm not switching pages.


/*
Motivation app:
People that doubted me.

1. The first file that starts an app from scratch is the index.html file
2. Next install live server
3. Create a public folder place index.html inside
3. once installed run live-server public
//
Now you load int all of the dependeccies into the <body> tag of the index.html file.
How?
Via Script tag
1. Note => This is where we will load in our app.js file
Within the public folder create a scripts folder
inside place app.js
Errors:
1. Incorrect spelling.
//Now you step up babel.

1.yarn add babel-cli
--Remember the babel command
2. Install the presets
3. Yarn init create a new package.json file
4. Create the source folder src
Note: App.js in scripts folder is now an autogenerated file

//Conditional Rendering: How do you conditional render?
1. Function
2. Ternary operator (Do two things) e.g. True and false ({visibilty ? 'true': 'false'})
  Written logic: check to see if this condition exists via question mark test.
  If the condition is "true" in the first position: condition you want it to do:
    e.g. ({cup size >= F? 'Let me Know':'Don't let Moose know})
    e.g. ({ass_Measurements >= 40? 'Let Moose Know': 'Don't let Moose know})
    e.g ({cake? "Damn! let Moose know": 'Eh'})
  If the condition is "false" in the second position: do the thing you want it to do
3. Logical && operator (1 thing or nothing at all) Just true
  Written logic: if this {condition} is true do => (The thing you want the user to do)
    e.g. ({CupSize = F && <p> Moose check this out </p>})
//Graph Database App
For the graph database app you will need a form with text input
<form>
<input type="text"/>
</form>

//Arrays in JSX
How do you make an array in JSX?
-Note: JSX renders an array side-by-side. e.g. [99,98,97] = 999897
How do you dynamically render an array
a: using a jsx expression and map e.g. {app.options.map((option)=>{
return <p key={option}> Option: {option}</p>
}
})
b: Set a key prop
-Note: Each child in an array needs a unique key prop. e.g. <p key ="1"></p>
Why? Optimization of the array.
-Note: Map lets us take an array and convert each item some way.
Map takes a function the argument for that function is an individual component
from the array and then you return whatever you want to server

//How to pick an option
- You are picking out of the array using a random number
-How you get there is using the functions:
a) Math.floor (which rounds the decimal point)
b) Math.randomNum()
c) Multiply the random number by the length of the options array.
d) You then pick your option

//How to stop a user from clicking a button in certain situations.
a: Use the disabled prop.
-disabled prop on a button. Then you can use jsx to set those conditions.
// Understanding Component props
Components are reusable => but they are only as good as the data you put in.
The data you put into components
For example: The SIAB marvel app prototype, I already have the boxes, I
just want to change the title.
That title will be a Prop or a piece of data I pass in.
You pass props in as key-value pairs.
Note: This is a reference ot the current instance of a component.
You reference the data on the props object e.g. this.props

//The benefit of components
They are boxes, structure where you don't have to rewrite the code over and
over again.

//How do you render a component to the screen from changing data.
Map.
Reference where you are getting the data from.

Close on the second try => Rember this.props.options
E.g.
<Option key={option} optionText={option}/>

//Method Binding
How?
constructor(props){
super(props);
this.handleRemoveAll = this.handleRemoveAll.bind(this);
}

//How do you pass props upstream?
a: You pass functions in as props

//How to add to an array without changing the original array?
a: Concat method

//How do you validate something?
//IndexOf
>-1 means it exists in the array
-1 means does not exist in the array.

//Props vs. State
-Props flow in one drection for us to pass things between components.
-Props is an object
-State is an object
 State is defined in the component itself.

 -review the map function more

{
almost like:
for "each" option in options:
print <option key={option} optionText = {option}/>
input = data (i.e. props)
output = jsx component you want. always...

          this.props.options.map((option) => <Option key={option} optionText={option}/>
          )
        }
9:10

9:12 started -10:45

//
1. You are injecting jsx in
2. this.props indicates that you have passed down data (props) from a parent component to a child component the data being the options array
3. you select the data by using dot notation. options.
4. theny ou call the function map() to MAP OVER EACH PIECE OF THE DATA
5. Map takes a function where you place in a single piece of data within the array of data (like a for loop) and then you provide the output you would like.
6. For example, for every OPTION in the OPTIONS array you would like an OPTION to render to the screen (another example, for every DRILL in the DRILLs array you want the data to show) each instance has to have a seperate key attritube for reference and then the {option text is placed in}

Perfect...

How do you pass down from Options to option?
You can call a prop in the parent componet into the child via the attribute.

//Stateless Functional Components
-When you have just presentational components stateless functional components
are the best
-They do not have access to this instead you pass in props as an arguem
Faster than

just like the render function inside a class based component
-if you need state => use class

//Why is debugging important?
Faster code

//How do you implicitly return an object?
you wrap the curly brackets in ()

e.g.

const num = () => ({});

example
this.setState(() => ({options:[]}));

//What are lifecyle methods?
fire at various times during a components life
e.g. When app gets first rendered to the screen.
eg.2 When the component first mounts to the screen populate with data from
database.
Did mount = fetching data
DidUpdate = saving data


//
Value of local storage
-persists between page loads
-only works with string data

//how to uninstall global dependencies
yarn global remove babel-cli live-server or
npm uninstall -g babel-cli live-server

//How to install dependencies locally
-Go inside of the project folder from the terminal
then just npm install or yarn install

// Why create scripts in package.json,
-you don't have to fucking create the long ass script over-and-over again
How does it work?
Key value pair
Key = name of the script
Pair = script itself

//Webpack
-Needs to be in the root of the folder
What are the critical pieces of information for webpack
- entry point
-output: {
path: '', => this needs to be an absolute path.
filename:'',
}

//Exports
Two types:
1. Named
2. Default

With components your usally just trying to export one thing.
Thus, default export.

// Source Maps
-what is a source map?
A source map provides a way of mapping code within a compressed
file back to it’s original position in a source file
-why is it valuable?
Debugging.
SOURCE maps lead back to the SOURCE of the PROBLEM.

//Why webpack dev server?
-Fast functionality

es6
-this binding no longer manual
-

//How to pass JSX in for a specific page
Why?
1. props
2. Create a seperate closing tag via the children prop


//Reps
-ES6 Class properties
-Implicit returning


//SCSS
avoid complex nesting
BEM (block element modifier) naming convention
header__title
Base files: You have a base file (ie. base.scss) where you define big picture stuff
like fonts for the entire application and brand color
Partial files: then you have which help you get into the weeds
SCSS architecture: just like all files get imported into app.js
-Important: all the partial files get imported into styles.scss

//CSS Reset
-Making sure all browsers are starting from the same place.
WHY: all browsers are different. Thus, you want standarization. CSS Reset is how you standarize.

//Theming
WHY: pull out hex codes and background colors
ROT: Stuff that gets used alot pull out into variables. One-off write it into the file.
WHY: to have one place to edit font sizes instead in multiple files.
WHERE: do you define the theme for the app => The partial _settings file
HOW TO: define a variable? Using $ at the front of the variable then key-pair value

//SCSS Centering
HOW: 1. Pick a max-width. WHY? space on the left and right to distribute evenly.

//SCSS CXNS
HOW: Are the different files connected?

//SCSS Button
HOW: do you get a button to be light when its not clicked.
USE: 1) call the selector with the :disabled property
2) set the opacity: .5;

//SCSS bem modifier
WHAT: is a modifier? It helps us tweak a small button
WHY: So we don't need to change an entire button just a few properities/ "tweaks"
HOW: do we recognize a modifier vs an element? modifier is two hypens --, element is two underscores. __
HOW: does the naming convention work? The original block your changing i.e. button followed by two hypens + name of whatever your changing

//SCSS: Mobile Devices
HOW: to get things to "STACK VERTICAL" in a mobile device?
STEP 1: Use MEDIA QUERIES

//SCSS: FAVICON
HOW: Do you create a FAVICON?
S1: Open you project folder >> public >> new folder called "images"
S2: Go into the public folder
S3: Create a new folder called "images"
S4: Place the logo png file inside of the "images" folder
S5: Go to index.html
S6: Set up a <link/> tag in the <head></head>
S7: The attributes that go inside of <link/> are: 1) rel="icon" 2) type="image/png" 3) href="The path to fetch the image"


//CLIENT SIDE VS. SERVER SIDE
1. The very first time. you go to the server
//REACT ROUTER
WHAT: is React Router?
HOW: do you create a router
S1: get the named exports from react-router-dom for the web-app
S2: the named export {BrowserRouter} Creates the router
S3: the named export {Route} links to every single page.

HOW: do you set it up?
-historyApiFallback in dev server.

WHAT: are the two main props that "route" takes?
a) path
b) component : This is where you reference a component you want to show.

//REACT ROUTER -404
HOW: Do you set up a 404?
A: conditionally rendering via the component <Switch>

//REACT ROUTER LINK
WHAT: is the attribute that allows you to go between pages in <Link>
A: to
WHEN: Do you use <Navlink> vs. <Link>
A: Navlink better when multiple links are side by side.

//REACT ROUTER DYNAMIC URLS
WHY: do we need them?
-to get user ids and unique elements from a database.
HOW: we adjust the path attribute by adding a : followed by the variable
path="/edit/:id"

//TESTING
WHAT: Two things go into a test case
1) The name of the TEST ('Name of the test', () => ())
2) The test itself
THEN: after you've created the beginning of the test. Now comes the assertion.
expect(state).toEqual(blank...)

//TESTING: How to create a new test
/*
a) Drag and drop a new test function => test()
b) Inside the functinon (name of test, the arrow function that does the test)
c) Inside that arrow function your test has a result that you are expecting = () => {}
d) Create an assertion => EXPECT().toBe();

so simply you are taking an action when CREATING the test
then you have to NAME the test, then you have to TEST something.
when you TEST something you EXPECT() it .toBe() something.
Sometimes you have to set that something inside of STATE.

//TESTING: What is a fixture?
WHAT: The Test/ dummy data that your reducers are using

//SNAPSHOT TESTING: What is snapshot testing?
What are snapshots? Definition
Snapshots allow us to track changes to data over time to components
Snapshots make it easy to assert things about our components]



//REACT-test-renderer
Allows us to render our components inside of simple javascript code
Shallow rendering only renders the given component

//ENZYME
What is REACT? A full featured rendered.
note you need adapters for the enzyme file
Full-featured user friendly API for testing.
note: When testing react components you want to test the unconnected version
WHY: do we use "shallow()"? Shallow is for Shallow rendering thus you want to use
the rendering to create something cool.

//SNAPSHOT testing
WHY is dynamic testing with snapshot components a big deal?
Track changes to the components over time.
WHAT is the structure/architecture for how to do snapshot testing?
1. Create a const holding the thing youre testing
2. Create an assumption to test the const and what you expect it to be.
What I know so far?

test('this component should render something', () => {
 inside of this =>
 Create a co

})

HOW do you create  a SNAPSHOT?
.toMatchSnapshot() function

SYNTAX
expect().toMatchSnapshot()

HOW do you test a new piece?
//1. Create a test file
//2. Grab new imports
//3. Render component

//MOCKING LIBRARIES
WHY would you mock a library?
a) to deal with complex testing by creating data that it can consistently call
HOW do you do this?
- "Manual Mocks"
HOW do you do a manual mock?
a) Create a folder in the tests folder
b) Name it __mock__
c) create a new file inside of the folder with the name of the library you Are
mocking example: moment.js


WHAT is mocking a library?
HOW does it help?

HOW do you do this?
- "Manual Mocks"
HOW do you do a manual mock?
a) Create a folder in the tests folder
b) Name it __mock__
c) create a new file inside of the folder with the name of the library you Are
mocking example: moment.js
How do you stop an function from calling itself?
- use the original version of moment

//DEPLOYING APPS
EXCITEMENT=> this is the goal. To have a URL to give to others.
WHY do we want to deploy apps?
a) So users can use theme
HOW do we deploy apps?
a) Using Git/ GitHub/ Heroku/ Webpack
b) Plus creating a production webpack vs. a development webpack
DIFFERENCE: Production webpack vs. Deployment webpack

//GIT: How do you install git
1- Go to Git-scm.com
To check if you have git already installed git --version

//GIT Basics
WHAT is a REPOSITORY?
a) Where git stores our code so we can go in and out like video game checkpoints
WHAT is a COMMIT?
a) COMMIT = SAVE POINT
WHAT is a STAGED CHANGE? i.e. Progress from one commit to another before saving
a) everything that is going to make up the next commit- think all the progress you made
in a video game... the STAGE CHANGEd therefore you have a STAGED CHANGE before you hit
save i.e. COMMIT.
HOW do you take untracked to STAGED?
git add

//GIT How-tos
HOW do you add git to your project? GIT INIT
a) Go into the root folder of the project and
GIT status 101
What does it do? High level print out of what is going on at a certain time.
WHAT files do we want git to track?
A- Only the files that we wrote
WHAT files do we not want to track?
A- Node Modules
How do we tell GIT to ignore files?
a)create a file .gitignore in the root of our project

Github account information
chocolatemoose21@gmail

HOW do you link your project code to github? SSH secure shell using the documentation
HOW to check if you have an SSH?
ls -a ~./ssh
WHAT is an rsa pub file?
  id_rsa.pub is the public key file
  id_rsa is like a password
//PRODUCTION WEBPACK
WHAT is production webpack?
HOW is it different than Production different than development webpack?
Simple production is optimized for size. Smaller the better.
HOW do you set up production Webpack?
1. Create a script in the package.json file.
2. The script is "build:prod":"webpack -p --env production"
3. Change Webpack config file using module.exports = () => {} function
4. devTool: isProduction ? 'source-map':'cheap-module-eval-source-map';

HOW do you run webpack in production mode?
//SOURCE MAPS
WHAT are source maps??
//SCSS files
WHAT are the steps?
remove the SCSS files why? Pulling them out into a seperate file allows for
faster loading
HOW? using a Webpack plugin the webpack.config file.
1. CSS extractor
2. Make sure to add it to the webpack plugins array.
WHAT if any are the common pitfalls?
//EXPRESS SERVER
WHY do we need to create an express server?
a) Less resource usage
HOW?
Create a file named server in the root of the directory.
META youre always creating a new file.

//HEROKU
You have to teach heroku how to start-up your app.
You need to teach heroku how to run webpack- how? package.json script
The script is heroku-postbuild yarn run postbuild

//REGULAR VS. DEV dependencies
WHAT is the difference?
  REGULAR = Local installation and Heroku => Goes to in production
  DEV = Only Locally => Runs just on local machine
HOW do you create a dev dependency?
--dev
HOW do you add/delete dev dependecies?
-copy and paste/ cut and paste

*/
