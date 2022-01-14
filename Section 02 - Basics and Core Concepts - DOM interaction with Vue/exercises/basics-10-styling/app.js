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
        if (this.divASelected) {
          this.divASelected = false;
        } else {
          this.divASelected = true;
        }
      } else if (div === 'B') {
        if (this.divBSelected) {
          this.divBSelected = false;
        } else {
          this.divBSelected = true;
        }
      } else if (div === 'C') {
        if (this.divCSelected) {
          this.divCSelected = false;
        } else {
          this.divCSelected = true;
        }
      }
    },
  },
});

app.mount('#styling');
