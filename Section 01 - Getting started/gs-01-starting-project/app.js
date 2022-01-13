/*--------*/
/* Vue.js */
/*--------*/

Vue.createApp({
  data() {
    return {
      goals: [],
      userInput: '',
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.userInput);
      this.userInput = '';
    },
  },
}).mount('#app');

/*------------*/
/* Vanilla JS */
/*------------*/

// const button = document.querySelector('button');
// const input = document.querySelector('input');
// const list = document.querySelector('ul');

// button.addEventListener('click', addGoal);

// function addGoal() {
//   const userInput = input.value;
//   const listItem = document.createElement('li');
//   listItem.textContent = userInput;
//   list.appendChild(listItem);
//   input.value = '';
// }
