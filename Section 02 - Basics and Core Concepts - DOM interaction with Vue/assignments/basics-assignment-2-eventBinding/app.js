const app = Vue.createApp({
  data() {
    return {
      name: '',
      confirmedName: '',
    };
  },
  methods: {
    showAlert() {
      alert('You clicked the button!');
    },
    setName(event) {
      this.name = event.target.value;
    },
    updateName(event) {
      this.confirmedName = event.target.value;
    },
  },
});

app.mount('#assignment');
