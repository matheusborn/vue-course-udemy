<template>
  <div>
    <active-user :name="user.name" :age="user.age"></active-user>
    <user-data @add-user="addUser"></user-data>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "",
        age: ""
      }
    };
  },
  methods: {
    addUser(user) {
      this.user = user;
    }
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}

section {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  border: 1px solid #ccc;
  padding: 1rem;
}
</style>