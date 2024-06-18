<template>
  <div>
    <form @submit.prevent="login">
      <div>
        <label for="username">Username:</label>
        <input type="text" v-model="username" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    async login() {
      try {
        const response = await fetch('http://localhost:3000/users');
        const users = await response.json();

        const user = users.find(u => u.username === this.username && u.password === this.password);

        if (user) {
          this.$emit('login', user.role); // Emit the role to the parent component
        } else {
          alert('Invalid username or password');
        }
      } catch (error) {
        console.error('Login error:', error);
      }
    }
  }
};
</script>
