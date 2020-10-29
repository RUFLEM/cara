const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/rupertfleming/Desktop/ProjectArea/sites/cara/.cache/dev-404-page.js"))),
  "component---node-modules-lekoarts-gatsby-theme-cara-src-templates-cara-tsx": hot(preferDefault(require("/Users/rupertfleming/Desktop/ProjectArea/sites/cara/node_modules/@lekoarts/gatsby-theme-cara/src/templates/cara.tsx"))),
  "component---src-pages-dice-game-js": hot(preferDefault(require("/Users/rupertfleming/Desktop/ProjectArea/sites/cara/src/pages/diceGame.js"))),
  "component---src-pages-hangmanpage-js": hot(preferDefault(require("/Users/rupertfleming/Desktop/ProjectArea/sites/cara/src/pages/hangmanpage.js"))),
  "component---src-pages-pokepage-js": hot(preferDefault(require("/Users/rupertfleming/Desktop/ProjectArea/sites/cara/src/pages/pokepage.js"))),
  "component---src-pages-project-js": hot(preferDefault(require("/Users/rupertfleming/Desktop/ProjectArea/sites/cara/src/pages/project.js")))
}

