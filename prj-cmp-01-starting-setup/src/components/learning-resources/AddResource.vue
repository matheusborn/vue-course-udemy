<template>
  <div>
    <base-dialog v-if="inputIsInvalid" title="Invalid Input" @close="confirmError">
      <template #default>
        <p>Unfortunately, at least one input value is invalid.</p>
        <p>Please make sure yuou enter at least a few characters into each input field.</p>
      </template>
      <template #actions>
        <base-button @click="confirmError">Okay</base-button>
      </template>
    </base-dialog>
    <base-card>
      <form @submit.prevent="submitData">
        <div class="form-control">
          <label for="title">Title</label>
          <input type="text" id="title" name="title" ref="titleInput" />
        </div>
        <div class="form-control">
          <label for="title">Description</label>
          <textarea name="description" id="description" rows="3" ref="descInput"></textarea>
        </div>
        <div class="form-control">
          <label for="link">Link</label>
          <input type="url" id="link" name="link" ref="linkInput" />
        </div>
        <div>
          <base-button type="submit">Add Resource</base-button>
        </div>
      </form>
    </base-card>
  </div>
</template>

<script>
export default {
  inject: ['addResource'],
  data() {
    return {
      inputIsInvalid: false
    };
  },
  methods: {
    confirmError() {
      this.inputIsInvalid = false;
    },
    submitData() {
      const enteredTitle = this.$refs.titleInput.value.trim();
      const enteredDesc = this.$refs.descInput.value.trim();
      const enteredLink = this.$refs.linkInput.value.trim();

      if (enteredTitle === '' || enteredDesc === '' || enteredLink === '') {
        this.inputIsInvalid = true;
        return;
      }

      this.addResource(enteredTitle, enteredDesc, enteredLink);
    }
  }
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>