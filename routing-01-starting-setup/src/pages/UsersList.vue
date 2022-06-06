<template>
  <div>
    <button @click="confirmInput">Confirm</button>
    <ul>
      <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
    </ul>
  </div>
</template>

<script>
import UserItem from '../components/users/UserItem.vue';

export default {
  components: {
    UserItem
  },
  inject: ['users'],
  methods: {
    confirmInput() {
      // do something
      this.$router.push('/teams');
    }
  },
  beforeRouteEnter(to, from, next) {
    // ...
    console.log('UserList beforeRouteEnter', to, from);
    next();
  },
  beforeRouteLeave(to, from, next) {
    // ...
    console.log('UserList beforeRouteLeave', to, from);
    next(confirm('Are you sure you want to leave? You got unsaved changes'));
  },
  unmounted() {
    console.log('UserList unmounted');
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>