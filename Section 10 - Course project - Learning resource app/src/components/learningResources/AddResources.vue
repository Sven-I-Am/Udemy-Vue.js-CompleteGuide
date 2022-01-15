<template>
  <section>
    <base-card>
      <form @submit.prevent="saveResource">
        <div>
          <label for="title">Title</label>
          <input type="text" v-model="resource.title" />
        </div>
        <div>
          <label for="description">Desciption</label>
          <textarea type="text" v-model="resource.description"></textarea>
        </div>
        <div>
          <label for="link">Link</label>
          <input type="text" v-model="resource.link" />
        </div>
      </form>
    </base-card>
  </section>
</template>

<script>
export default {
  data() {
    return {
      resource: {
        title: '',
        description: '',
        link: '',
      },
    };
  },
};
</script>
