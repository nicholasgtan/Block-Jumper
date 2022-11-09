# Developing a block jumping game, aka Block Jumper!

## Technical Requirements
- Display a game in the browser
- Be interactive
- Include separate HTML / CSS / JavaScript files
- Use JavaScript for DOM manipulation that is triggered by a browser event

## Timeframe
1 week

## Technologies & tools used
- HTML
- CSS
- JavaScript (jQuery, Canvas)
- Git/Github
- Vite
- Vercel
- Lucidchart
<br />

## Introduction
This is my own rendition of the Google dinosaur game with a retro-neon theme. As the first programming project for the Software Engineering Immersive (SEI) course at General Assembly, this game was designed and implemented using HTML, CSS, and JavaScript.

The [Google dinosaur game](https://en.wikipedia.org/wiki/Dinosaur_Game) is a browser game developed by Google developers, Sebastien Gabriel, Alan Bettes, and Edward Jung, and built into the Google Chrome web browser in 2014. The game is an [Easter Egg](https://en.wikipedia.org/wiki/Easter_egg_(media)#:~:text=The%20use%20of%20the%20term,programmed%20by%20employee%20Warren%20Robinett.), which could be found when users tried to access a webpage on Google Chrome while having no internet connection. As someone that frequently encountered lapses in internet connection in the past, imagine my surprise (and delight) discovering this Easter Egg, which also aided in passing time while waiting to come back online! This is the main reason why the game left such a lasting impression on me, and why I chose to recreate this game to improve my programming skills and knowledge.

## Game concept
Player will control a jumping block which can only jump vertically on the game screen. When the game starts, obstacles of randomly generated size (height and widths) will approach the player horizontally. Player will attempt to time their block jump such that they will jump over the incoming obstacles and gain 1 point for each successful jump. A successful jump will allow the game to continue and another obstacle will be generated and move towards the player block to repeat the cycle. If the player block collides with an incoming obstacle, the game stops and it's Game Over.

## Deployment
The game is deployed on both GitHub pages and Vercel, and it is highly recommended to play on a desktop or tablet browser due to game's screen size. You can access either link below:
- [Github pages](https://nicholasgtan.github.io/Block-Jumper/)
- [Vercel](https://block-jumper.vercel.app/)

## Player controls:
Tap space or mouse click to jump! (This will also work on touch screens if you touch any part of the web browser content!)
Jumping will start the game on load and will also reload the game when Game Over.
Pro tip: Don't spam jump!
<br />

## Initial visualization
Utilizing [Lucidchart](https://www.lucidchart.com/pages/), I sketched the wireframe depicting the 3 different stages that players would experience from the webpage loadout. This was helpful in helping me list the different elements required for each stage of the game. (Start phase > Game phase > End phase > loopback)

## Coding approach
Created game repository on Github and implemented regular commits with comments.
1. Generate the Game Screen
2. Generate the Player block
3. Make the Player block jump vertically on keydown
4. Make the Player block fall back to origin after reaching a peak
5. Generate the obstacle and randomize function to alter height and width upon each generation.
6. Make obstacle move towards the Player block
7. Make obstacle reset to initial position after reaching end of screen and go again
8. Make game stop when obstacle collides with Player block
9. Generate Score tag and added +1 score condition when obstacle reaches end of screen (meaning Player block succeeded in jumping over)
10. Generate "Game Over" and "Try again" text when game stops due to collision
11. Create function to allow player to reset game on keydown and play again.
12. Improve webpage visual effects via CSS.

## Key Lessons
- Learning [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) and [CanvasRenderingContext2D](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D) which would be the backbone of the game, allowing me to create a 2D (x-y axis) drawing surface (canvas) where I could create and position shapes and text on. I used DOM manipulation to add this canvas element to the DOM.
- Learning the concept of rendering and re-rendering game screens to create 'motion'. Utilizing data variables and functions that change the value of the variables over each frame and rendering each frame to update the screen each time. Due to the speed at which the frames are re-rendered each time, it creates the illusion of movement on the game screen.
- Utilizing boolean conditions and if statements to add control to functions and control element and player input behaviors.

## Further developments/improvements
Given that this game is created as a project for submission, there will likely be no further updates post-submission. Some improvements to the game would be as below:
- Improve game visuals, e.g. Player block to animated character, obstacles with various forms, backgrounds that give a better sense of movement within a plane.
- Improve the jumping keydown function to allow better player control. Currently, jumping function is linear and controlled by a setTimeout method. This means that jumping height is always fixed. A better jumping keydown function would ideally allow the player to long press jump to jump higher, or short press to jump lower.
- Adding a High Score tag which could record a user's progression and allow them to aim for a better score on future attempts.

## Summary
As my first programming project created from a blank slate, initial planning was key to identifying the elements required to make the game work. This included defining the Model (Data), View (HTML + CSS) and Controller (Logic) early and working to link HTML, CSS and JavaScript together to produce the intended output.

Another key skill that I utilized was to source the web for coding examples/resources on how to achieve a desired outcome, breakdown and decipher these codes and eventually assimilate into my own program. It never ceases to amaze me how everyone has a different but valid approach to achieve the same outcome, and you can really learn and experiment with the different approaches to see what fits you best! Continuous learning for the win!

## References
- [CanvasRenderingContext2D](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D)
- [Web game creation using HTML5 and Canvas](https://web.dev/canvas-notearsgame/)
