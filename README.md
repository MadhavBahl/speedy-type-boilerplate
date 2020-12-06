# Speedy Type Boilerplate

This repository contains the boilerplate code for my ReactJS workshop with Let's Hack hackathon.

See the full code: [https://github.com/MadhavBahl/speedy-type](https://github.com/MadhavBahl/speedy-type)

See the webinar: [https://www.youtube.com/watch?v=iOycaFe53k4](https://www.youtube.com/watch?v=iOycaFe53k4)

## Set up a new CRA

1. `npx create-react-app playground`
2. `cd playground`
3. `npm start`


## Things to discuss during webinar

1. Why React?
2. React Components
3. Sample Component Architechture
4. One Way Data Flow In React
5. JSX
6. State
7. Props
8. Lifecycle Methods
9. React Hooks
10. lifecycle methods vs useEffect

## Why React?

1. Fast Learning Curve
2. Reusable components
3. Fast Render with Virtual DOM
4. Great Dev Tools
5. Great Dev Community
6. Proper Modularization
7. Clean Abstraction
8. React Native, React Desktop

## React Components

![image](https://user-images.githubusercontent.com/26179770/101241324-fc823080-371a-11eb-9fce-1a89e69c0350.png)

## React Sample Component Architecture for Pokedex App

See the app in action here: [http://madhavbahl.tech/react-pokedex](http://madhavbahl.tech/react-pokedex)

![image](https://user-images.githubusercontent.com/26179770/101241351-3eab7200-371b-11eb-840f-642df0a502fb.png)

## React Component Hierarchy and One Way Data Flow

![image](https://user-images.githubusercontent.com/26179770/101241386-87fbc180-371b-11eb-94ad-3e62bf23b6b0.png)

## React Lifecycle Methods

![image](https://user-images.githubusercontent.com/26179770/101241411-c1343180-371b-11eb-84dc-31d65d43922a.png)

## Deploying the app

Check out the steps at : [https://medium.com/javascript-in-plain-english/how-to-deploy-your-react-app-on-github-pages-in-2-minutes-8040f0df1543](https://medium.com/javascript-in-plain-english/how-to-deploy-your-react-app-on-github-pages-in-2-minutes-8040f0df1543)

Summary -

1. `npm install gh-pages`
2. Add `homepage` in `package.json
   - `"homepage": "https://MadhavBahl.github.io/speedy-type",`
3. Add pre-deploy and deploy scripts
4. `npm run deploy`

## Deploy and Pre-deploy scripts

```json
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```

## Screenshots

![image](https://user-images.githubusercontent.com/26179770/101239386-2e8c9600-370d-11eb-9bea-047178806fda.png)

![image](https://user-images.githubusercontent.com/26179770/101239390-36e4d100-370d-11eb-916e-3b940ce8d6d4.png)

## Things to do after the webinar/Ideas

1. Improve the details calculator algorithm to take into account the past mistakes as well.
2. Add colors in the type test (Mark the letters that are typed correct with green and wrong ones with red).
3. Learn about SCSS and replace the CSS files with SCSS.
4. Learn about Redux and use redux in this project.

## Special Thanks

Special thanks to [https://thepracticetest.com/typing/tests/practice-paragraphs/](https://thepracticetest.com/typing/tests/practice-paragraphs/) for the typing speed test paragraphs and overall inspiration.
