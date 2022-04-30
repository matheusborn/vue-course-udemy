<template>
  <section>
    <h2>ActiveUser</h2>
    <strong>Name</strong>
    <h2>{{name}}</h2>
    <strong>Age</strong>
    <h3>{{age}}</h3>
  </section>
</template>

<script>
export default {
  name: "UserData",
  props: {
    name: {
      type: String,
      required: true
    },
    age: {
      type: String,
      required: true
    }
  }
};
</script>

<style>
section {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  border: 1px solid #ccc;
}
</style>