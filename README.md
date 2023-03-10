# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- BEM naming convention


### What I learned

1. I need to add blank lines before and after a heading on my README for compatibility. 

2. When I checked the design folder (on active states), I realized that hovering over the rating numbers should change the color of the element been hovered over AND the adjacent sibling element - in different ways. 

I was a little confused on how to achieve this, but found a resourceful way to do it on the CSS Tricks website. I needed to apply the color change to the list-items when the parent is hovered over. AND THEN, when the parent ul + individual list item is hovered, I change the color to reflect the desisgn provided. This is how I did it on CSS.

```css
.rating__list:hover > .list__item {
  background-color: var(--light-grey);
}

.rating__list:hover > .list__item:hover {
  background-color: var(--orange);
}
```

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

1. [Josh Comeau's CSS Reset](https://www.joshwcomeau.com/css/custom-css-reset/#our-finished-product-11) - This is an excellent resource for doing a CSS reset. This involves creating a custom baseline style that makes CSS  alot easier to style. I really loved how Josh took time to breakdown his approach, and I will be using his liked his style and tweaking it to suit my projects going forward.

2. I used [The Markdown Guide](https://www.markdownguide.org/basic-syntax/) to better style this README and for numbering some of the content. 

3. I used this [CSS Tricks](https://css-tricks.com/hover-on-everything-but/) resource to apply the hover state over everything but the element actually hovered on and change the styling. 






## Author

- Website - [Samoina Lives](https://samoinalives.wordpress.com/)
- Frontend Mentor - [@samoina](https://www.frontendmentor.io/profile/samoina)
- Twitter - [@samoina](https://www.twitter.com/samoina)

## Acknowledgments
Special thanks to the Space Ya Tech mentors for providing some insight and encouragement to getting this task done. 
