<template>
  <nav>
    <h4>Welcome : {{ userRole }} </h4>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li v-if="userRole === 'admin'"><router-link to="/admin">Admin Dashboard</router-link></li>
      <!-- <li v-if="userRole === 'manager'"><router-link to="/manager">Manager Dashboard</router-link></li> -->
      <li v-if="userRole === 'manager' || userRole === 'admin'"><router-link to="/manager">Manager Dashboard</router-link></li>
      <li v-if="userRole === 'customer'"><router-link to="/customer">Customer Dashboard</router-link></li>
      <li v-if="userRole === 'supplier'"><router-link to="/supplier">Supplier Dashboard</router-link></li>
      <li v-if="userRole === 'anonymous'"><router-link to="/login">Login</router-link></li>
      
      <li v-else><a href="#" @click.prevent="logout">Logout</a></li>
      <li><router-link to="/etcetc">public guest</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'my-nav-bar',
  props: {
    userRole: {
      type: String,
      required: true
    }
  },
  methods: {
    logout() {
      this.$emit('logout');
    }
  }
};
</script>

<style scoped>
nav {
  background-color: #333;
  color: white;
  padding: 1rem;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline;
  margin-right: 1rem;
}

a {
  color: white;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
