# Lightning Intermediate code challenge

Welcome to the intermediate-level code challenge for Lightning!

[Try out a finished version of the app here](https://lightning-snake.vercel.app/#mainMenu)

> Remember that you can submit your code until 17:15!

## About this challenge

This app is made for two reasons:

- First one is to test your Lightning knowledge. Don't worry, this won't determine your paycheck! However, if you're struggling with this it might be worth revisiting the [workshop videos](https://www.notion.so/fxdigital/Intermediate-Lightning-Training-654b90ec60dc4da98a30a4c9503e594f).
- Second is to showcase some things Lightning can do. Our main goal at Fx is to use Lightning for smart-tv application development... but it can do more than that!

### Tasks

To finish this app you'll need to do a series of tasks that are listed below:

- Make this app a Router-based one, and add all the pages in the `pages/` folder to the routes.
- Add navigation between pages! You'll need to revisit two concepts for this: `Signals` and... well, `Navigation`.
- There's a Bug on how `Game.js` works. The game isn't running at all... Can you figure out why? Hint: You might need to use Lifecycle methods for this.

Extra challenge:

- Create and add your own widget and trigger a shader! You can copy what we did on the intermediate training for this. However, if you're feeling creative you can also create your own ones. Try playing around for this!

## Useful links

- [Intermediate training slides](https://docs.google.com/presentation/d/1oD5Z0spLmPjL0ytYFiky8SFyx3fKx3IlSoFqlxHd1vQ/edit?usp=sharing)
- [List of all the shaders Lightning includes](https://github.com/rdkcentral/Lightning/blob/master/src/lightning.mjs#L93)
- [Folder with all the Lightning shaders](https://docs.google.com/presentation/d/1oD5Z0spLmPjL0ytYFiky8SFyx3fKx3IlSoFqlxHd1vQ/edit?usp=sharing)
- https://lightningjs.io/docs/#/lightning-sdk-reference/plugins/router/index?id=router
- https://lightningjs.io/docs/#/lightning-core-reference/Communication/Signal?id=signal
- https://lightningjs.io/docs/#/lightning-core-reference/Components/LifecycleEvents?id=lifecycle-events

## Getting started

> Before you follow the steps below, make sure you have [Lightning-CLI](https://rdkcentral.github.io/Lightning-CLI/#/) installed _globally_ on your system

```
npm install -g @lightningjs/cli
```

## Running the App

1. Install the NPM dependencies by running `npm install`

2. Start the Lightning Dev Environment using `lng dev`
