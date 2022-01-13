const app = Vue.createApp({
  data() {
    return {
      num: 0,
    };
  },
  methods: {
    addFive() {
      this.num += 5;
    },
    addOne() {
      this.num += 1;
    },
  },
  computed: {
    result() {
      if (this.num < 37) {
        result = 'Not there yet';
      } else if (this.num > 37) {
        result = 'Too much!';
      } else {
        result = this.num;
      }
      return result;
    },
  },
  watch: {
    num(value) {
      const that = this;
      if (value !== 0) {
        setTimeout(function () {
          that.num = 0;
          console.log('reset');
        }, 5000);
      }
    },
  },
});

app.mount('#assignment');
