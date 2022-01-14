const app = Vue.createApp({
  data() {
    return {
      classInput: '',
      isVisible: true,
      bgInput: '',
    };
  },
  computed: {
    setClasses() {
      return {
        user1: this.classInput === 'user1',
        user2: this.classInput === 'user2',
        visible: this.isVisible,
        hidden: !this.isVisible,
      };
    },
  },
  methods: {
    toggleVisible() {
      this.isVisible = !this.isVisible;
    },
  },
});

app.mount('#assignment');
