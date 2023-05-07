# Front End Development with Vue.js - IT Academy

## **Sprint 7 - Vue II**

The second part of my Vue learning journey. This sprint will introduce routing, forms, and using Bootstrap with Vue. The project brief is the following:

> We will develop an application with the aim of facilitating the calculations for the budget of a webpage, adding more interactions with the user compared to the previous practice (checkboxes, inputs, buttons).
>
> The webpage should react and modify the total price based on the options chosen by the user.

---

### ⭐ **Level 1** ⭐

**— Exercise 1**

- Make `HomeView` view component, which contains three checkboxes, each offering a different service with varying prices. The sum of the total price is displayed below.

##### ✅ Finished: 05/05/2023

**— Exercise 2**

- Make `Panell` component, which shows up when the users selects "webpage" as their desired service. This component lets the user specify how many pages and languages they want, which affects the total price. Emits had to be used in order to pass to the parent element the number of pages and languages chosen. Also, this `Panell` component is inside a [`<Transition>`](https://vuejs.org/guide/built-ins/transition.html#css-based-transitions) component, which is a built-in Vue feature that lets you apply animations to elements that enter and leave the DOM.

##### ✅ Finished: 05/05/2023

**— Exercise 3**

- Replace the input in `Panell` with a new component, `Botons`.

##### ✅ Finished: 06/05/2023

**— Exercise 4**

- Add `BenvingudaView`, which shows a welcome page and a button that takes the user to `HomeView` when clicked on. Also `HomeView` now has a go back button (`$router.go(-1)`).

##### ✅ Finished: 07/05/2023

---
