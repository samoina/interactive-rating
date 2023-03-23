# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Links

- Solution URL: [Github Link](https://github.com/samoina/interactive-rating)
- Live Site URL: [Netlify Live Link](https://samoina-interactive-rating.netlify.app/)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Vanilla Javascript
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

3. A refresher on event delegation. In my Javascript, I added two event listeners. One on the list containing the rating numbers to capture the rating selected, and the other on the submit button.

Event Delegation came with the first event listener. Here, I targeted the parent container (the ul) and used e.target.textContent to find the text inside of the ul. I put this in a variable.

In the second event listener on the Submit button, i:
- hide the Rating component by toggling the class set to hidden
- set the rating chosen onto the Thank You component
- displayed the Thank You component by toggling the class as below.

```javascript
/*set event listener on list and submit btn*/
ratingList.addEventListener('click', getListValue);
mainBtnRating.addEventListener('click', displayResponse)

/* when a list item is clicked, get its text content and place it in a variable*/
function getListValue(e){
  listValue = e.target.textContent;
  console.log(listValue);
}

/* When the submit button is clicked, hide the rating component, overwrite the value provided and display the Thank you component*/
function displayResponse(ev){
  console.log(`You selected ${listValue} out of 5`);
  mainRating.classList.toggle('main__hidden');
  rating.textContent = listValue;
  mainResponse.classList.toggle('main__hidden');
  
  ev.preventDefault();
}
```

4. I got some feedback after I submitted my solution on the ForntedMentor Challenge hub. It made me realize it is helpful to let the user know the button that they have presently selected by changing the backgroundcolor. The steps I followed included: 
- declaring a variable for the active button selected ( I noticed that declaring the variable outside of the event listener (as a global variable) works, but inside the event listener (As a local variable) it does not. I am not sure why.
)
- Within the ratings event listener, I used Events Delegation to get the present button selected, through using the target (e.target)
- if the targets contains 'Button' then change the background color and color, but first, check if there's an already exisiting active Button.
- If there is an exisiting active button, get rid of the bg color and color.
- Lastly, make the present target the active button

Here's the code that I edited within the event listener for the ratings click:

```javascript

```

### Useful resources

1. [Josh Comeau's CSS Reset](https://www.joshwcomeau.com/css/custom-css-reset/#our-finished-product-11) - This is an excellent resource for doing a CSS reset. This involves creating a custom baseline style that makes CSS  alot easier to style. I really loved how Josh took time to breakdown his approach, and I will be using his style and tweaking it to suit my projects going forward.

2. I used [The Markdown Guide](https://www.markdownguide.org/basic-syntax/) to better style this README and for numbering some of the content. 

3. I used this [CSS Tricks](https://css-tricks.com/hover-on-everything-but/) resource to apply the hover state over everything but the element actually hovered on and change the styling. 

## Author

- Website - [Samoina Lives](https://samoinalives.wordpress.com/)
- Frontend Mentor - [@samoina](https://www.frontendmentor.io/profile/samoina)
- Twitter - [@samoina](https://www.twitter.com/samoina)

## Acknowledgments
Special thanks to the Space Ya Tech mentors for providing some insight and encouragement to getting this task done. 
