# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Screenshot](images/screenshot.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Javascript

### What I learned

This time i strengthened my CSS Grid skills, i learned a little bit more about using background-images, i used the property position to hide content, which is something that i wasn't used to do. I also use some JS code but it wasn't a big deal.I have to admit that i struggle to add animation to the window that pops up when user click (touches) the hamburguer menu on mobile screens, so i gave up on it.

This time i also tried to write clean code, but i still struggle too much to come up with css classes names and variables names. I tried to avoid as much code repetition as posibble.


```css
.trends {
    display: grid;
    gap: 2em;
    grid-template-columns: repeat(auto-fit, minmax(324px, 1fr));
    justify-content: center;
}
.main-header__backgroundImg {
    background-image: url("../assets/images/image-web-3-mobile.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
```

### Continued development

My goal is to keep working on my frontend skills in general. I would like to start learning a css framework to simplify the process of writing css. I would like to learn react too, but first i want to make sure that i understand JS really well, not only as a tool for web development, but also as a programming language.


## Author

- Frontend Mentor - [@dialejo24](https://www.frontendmentor.io/profile/dialejo24)
- github - [@dialejo24](https://www.github.com/dialejo24)

## Acknowledgments

As always, a big shout out to all the wonderful people who upload content to the web for free.