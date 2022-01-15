<template>
  <div
    class="
      col
      shadow-sm
      rounded
      bg-light
      m-4
      d-flex
      flex-column
      justify-content-center
      align-items-center
    "
  >
    <h2 class="w-75 rounded-pill py-3 bg-info">{{ name }}</h2>
    <h3 class="w-75 rounded-pill py-3 bg-info">{{ age }}</h3>
  </div>
</template>
<script>
export default {
  props: ["name", "age"],
};
</script>