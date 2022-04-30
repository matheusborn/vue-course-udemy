<template>
  <section>
    <form @submit.prevent="addUser">
      <h2>UserData</h2>
      <strong>Name:</strong>
      <input type="text" v-model="name" placeholder="Your name" />
      <strong>Age:</strong>
      <input type="text" v-model="age" placeholder="Your age" />
      <button>Add User</button>
    </form>
  </section>
</template>

<script>
export default {
  name: "UserData",
  emit: ["add-user"],
  data() {
    return {
      name: "",
      age: ""
    };
  },
  methods: {
    addUser() {
      this.$emit("add-user", {
        name: this.name,
        age: this.age
      });
    }
  }
};
</script>