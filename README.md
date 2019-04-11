# Mlb

## Notes
- First and foremost what a developer using this will notice is it's Angular! It was mentioned the preference was it be in React, but with the intention of putting my best foot forward I decided to put it together in what I'm most comfortable with. This isn't what a complete Angular project would look like per se (missing modules, some PWA elements, and environments), but it has the essentials to render our schedule. Can refer to another one of my projects for a look how I might set things up for a full blown app https://github.com/bclynch/edm
  - The above said I remain confident in being able to pick up and start contributing with React qiuckly, but didn't want to spend the entire few hours of my take home project looking up paradigms / syntax resuting in a rudimentary product.
- **I noticed the dates were sometimes off by a day.** I would assume that the dates coming back from the API are maybe GMT? Would need to normalize them using something like moment.js (which I am already using in the project actually) to transform them to their local time. Since I don't know what the time coming from the API is, I didn't make that change for now.
- The other thing one probably notices right off the bat is I kept the design to pretty much a clone of the PDF. I generally like to keep pretty close to spec with these things without taking too much artistic license. Why mess up a good formula.
- Took the svgs images off mlb.com.
- Came up on the end of my time working on the bracket and didn't quite finish it. I commented out the component, but you can see a bit of the work I did on it here in the repo. Would need some further css + data adjustments to get it right!
- Schedule is generally responsive using media queries and relative units.

## Installing / running the application
- Clone the project `$ git@github.com:bclynch/mlb.git`
-Install Angular CLI (sorry, just the way it is since I'm not hosting this somewhere)
  - `$ npm install -g @angular/cli`
- Run an npm install
- Run `$ ng serve`
- Open up a browser window to http://localhost:4200/ to see the project

## Things one could do to improve this repo (with reasonable time)
- Create typings for the data coming in with TS
- Create tests for the components
- Make 'game row' more dynamic if it's live or upcoming (in this case it's all in the past so no use building out fully)
