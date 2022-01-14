const app = Vue.createApp({
  data() {
    return {
      divASelected: false,
      divBSelected: false,
      divCSelected: false,
    };
  },
  methods: {
    divSelected(div) {
      if (div === 'A') {
        this.divASelected = !this.divASelected;
      } else if (div === 'B') {
        this.divBSelected = !this.divBSelected;
      } else if (div === 'C') {
        this.divCSelected = !this.divCSelected;
      }
    },
  },
});

app.mount('#styling');
