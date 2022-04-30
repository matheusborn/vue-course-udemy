<template>
  <form @submit.prevent="submitData">
    <div>
      <label for="Name">Name</label>
      <input type="text" v-model="name" />
    </div>
    <div>
      <label for="Phone">Phone</label>
      <input type="text" v-model="phone" />
    </div>
    <div>
      <label for="Email">E-Mail</label>
      <input type="text" v-model="email" />
    </div>
    <div>
      <button>Add Contact</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "NewFriend",
  emits: ["add-contact"],
  data() {
    return {
      name: "",
      phone: "",
      email: ""
    };
  },
  methods: {
    submitData() {
      this.$emit("add-contact", {
        name: this.name,
        phone: this.phone,
        email: this.email
      });
    }
  }
};
</script>