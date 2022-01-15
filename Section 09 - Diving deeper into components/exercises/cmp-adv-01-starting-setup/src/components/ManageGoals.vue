<template>
  <div>
    <h2>Manage Goals</h2>
    <input type="text" ref="goal" />
    <button @click="setGoal">Set Goal</button>
    <error-alert v-if="inputInvalid">
      <h2>Input is invalid</h2>
      <p>Please provide valid input</p>
      <button @click="confirmError">OK</button>
    </error-alert>
  </div>
</template>
<script >
import ErrorAlert from "./ErrorAlert.vue";
export default {
  components: {
    ErrorAlert,
  },
  data() {
    return {
      inputInvalid: false,
    };
  },
  methods: {
    setGoal() {
      const input = this.$refs.goal.value;
      if (input === "") {
        this.inputInvalid = true;
      }
    },
    confirmError() {
      this.inputInvalid = false;
    },
  },
};
</script>