# Random Color Changer

This project is a simple HTML and JavaScript project that randomly changes the color of the screen when you click a button.

## Getting Started

To run this project, you will need to:

1. Save the code as an HTML file.
2. Open the file in a web browser.
3. Click the "Change Color" button to change the background color of the screen.

## How it Works

The project uses the following code to randomly change the color of the screen:

```
let r = Math.floor(Math.random() * 256);
let g = Math.floor(Math.random() * 256);
let b = Math.floor(Math.random() * 256);
document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";

```
This code generates a random RGB color value and sets the background color of the body element to that value.

## To do

* Add a way to choose the number of colors that can be generated.
* Add a way to save the current color.
* Add a way to load a saved color.

***
Created by Vaidas Simkus  
Tools used:  
* Google
* Google AI
* Visual Studio Code text editor