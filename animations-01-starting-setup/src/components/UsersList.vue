<template>
  <div>
    <transition-group tag="ul" name="user-list">
      <li v-for="user in users" :key="user" @click="removeUser(user)">{{user}}</li>
    </transition-group>
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

.user-list-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}
.user-list-enter-active {
  transition: all 1s ease-out;
}
.user-list-enter-to,
.user-list-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.user-list-leave-active {
  transition: all 1s ease-in;
}
.user-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>