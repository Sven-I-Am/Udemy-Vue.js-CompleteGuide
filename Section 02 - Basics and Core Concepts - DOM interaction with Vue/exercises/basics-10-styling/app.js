const app = Vue.createApp({
  data() {
    return {
      divASelected: false,
      divBSelected: false,
      divCSelected: false,
    };
  },
  computed: {
    divAClasses() {
      return { active: this.divASelected };
    },
    divBClasses() {
      return { active: this.divBSelected };
    },
    divCClasses() {
      return { active: this.divCSelected };
    },
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
