# Udemy - Vue.js - The full guide

I'm currently following ["Vue - The complete guide (with Router, Vuex, Composition API)](https://www.udemy.com/course/vuejs-2-the-complete-guide/) on [Udemy](https://www.udemy.com/).The course has been fully updated to Vue3 and should give me a pretty decent understanding of the framework.  
This repository will hold all the follow along exercises as well as the assignments given throughout the course.

## Tools and languages

|                                     |                                     |                                             |                               |
| ----------------------------------- | ----------------------------------- | ------------------------------------------- | ----------------------------- |
| ![Ubuntu](./Assets/ubuntu-logo.png) | ![vscode](./Assets/vscode-logo.png) | ![javascript](./Assets/javascript-logo.png) | ![Vue](./Assets/vue-logo.png) |

## Summaries

### Section 2 - The basics - Dom interaction with Vue

![Methods vs Computed vs Watch](./Assets/Screenshots/s2MethodsVsComputedVsWatch.png)  
![Summary of section 2](./Assets/Screenshots/s2Summary.png)

### Section 3 - Conditional content and lists

![Summary of section 3](./Assets/Screenshots/s3Summary.png)

### Section 5 - Behind the scenes

![Vue and Dom](./Assets/Screenshots/s5BtSVueandDom.png)  
![lifecyclehooks](./Assets/Screenshots/s5BtSLifecycleHooks.png)

### Section 8 - Component cummunication

![Summary of section 8](./Assets/Screenshots/s8Summary.png)

### Section 9 - Component deep dive

![Summary of section 9](./Assets/Screenshots/S9Summary.png)

### Section 10 - Course project - Learning Resources app

when providing arrays to child components:

- use array methods that manipulate the original array (ex. `array.shift()`, `array.splice()`) to make sure the provided arrays get updated

### Section 11 - Forms

#### Linking input to Vue

v-model => two-way binding + automatically sets type to input type (type = number => this.value = type number)
@input => live update
ref=> using $refs.name for one-way binding => allways stores value as string

#### V-model modifiers
