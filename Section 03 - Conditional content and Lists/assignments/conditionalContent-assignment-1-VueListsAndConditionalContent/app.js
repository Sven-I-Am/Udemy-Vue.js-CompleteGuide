const app = Vue.createApp({
  data() {
    return {
      input: '',
      tasks: [],
      isVisible: true,
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.input);
      this.input = '';
    },
    toggleList() {
      this.isVisible = !this.isVisible;
    },
  },
});
app.mount('#assignment');
