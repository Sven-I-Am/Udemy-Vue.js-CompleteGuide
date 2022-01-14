const app = Vue.createApp({
  data() {
    return {
      input: '',
      tasks: [],
      isVisible: true,
    };
  },
  computed: {
    setList() {
      return {
        visible: this.isVisible,
        hidden: !this.isVisible,
      };
    },
  },
  methods: {
    addTask() {
      this.tasks.push(this.input);
      this.input = '';
    },
    toggleList() {
      this.isVisible = !this.isVisible;
    },
    setButton() {
      return this.isVisible ? 'Hide' : 'Show';
    },
  },
});
app.mount('#assignment');
