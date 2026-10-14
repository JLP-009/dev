# Frontend Mentor - Product Preview Card Component

This is my solution to the [Product Preview Card Component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa).

## Table of Contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My Process](#my-process)
  - [Built With](#built-with)
  - [What I Learned](#what-i-learned)
  - [Continued Development](#continued-development)
- [Author](#author)

## Overview

### The Challenge

Users should be able to:

- View the product card layout on different screen sizes.
- See the product image, description, and pricing information.
- Interact with the Add to Cart button and its hover effect.

### Screenshot

![Product Preview Card Component Screenshot](./screenshot.png)

> Add your project screenshot to the root folder and name it `screenshot.jpg`. If your screenshot has a different filename, update the image path above.

### Links
- **Live Site URL:**[ Add your deployed project link here.](https://product-preview-card1234.netlify.app/)

## My Process

### Built With

- Semantic HTML5
- CSS3
- Flexbox
- CSS Media Queries
- Responsive Images using the HTML `<picture>` element
- Google Fonts: Fraunces and Montserrat

### What I Learned

While building this project, I practiced:

- Structuring a webpage using semantic HTML.
- Using Flexbox to create a two-column desktop layout.
- Creating responsive layouts with CSS media queries.
- Loading and applying custom fonts from Google Fonts.
- Styling prices, buttons, colors, spacing, and rounded corners.
- Using CSS pseudo-classes to create button hover effects.
- Displaying different images depending on the screen size.

One useful technique I learned was using a media query to change the card layout on smaller screens:

```css
@media (max-width: 600px) {
    article {
        flex-direction: column;
    }
}
```

This allows the image and product information to stack vertically on mobile screens.

### Continued Development

In future projects, I want to improve my understanding of:

- CSS Flexbox and Grid.
- Responsive design and mobile-first development.
- CSS spacing, sizing, and typography.
- Writing clean, reusable CSS.
- Building frontend projects independently with less guidance.

## Author

- Frontend Mentor: [Add your profile link here](https://www.frontendmentor.io/)

## Acknowledgments

Thanks to Frontend Mentor for providing this challenge and design resources to practice frontend development.
