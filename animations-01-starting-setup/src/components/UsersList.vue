<template>
  <div>
    <ul>
      <li v-for="user in users" :key="user" @click="removeUser(user)">{{user}}</li>
    </ul>
    <div>
      <input v-model="newUser" type="text" />
      <button @click="addUser">Add User</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: ['Max', 'Manu', 'Julie', 'Angela', 'Michael'],
      newUser: ''
    };
  },
  methods: {
    addUser() {
      this.users.unshift(this.newUser);
      this.newUser = '';
    },
    removeUser(user) {
      this.users.splice(this.users.indexOf(user), 1);
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 1rem 0;
}

li {
  border: 1px solid #ccc;
  padding: 1rem;
  text-align: center;
}
</style>