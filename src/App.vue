<template>
  <div>
    <my-nav-bar :userRole="userRole" @logout="logout" />
    <router-view @login="setUserRole" />
    <my-footer />
  </div>
</template>

<script>

export default {
  data() {
    return {
      userRole: localStorage.getItem('userRole') || 'anonymous'
    };
  },
  methods: {
    setUserRole(role) {
      this.userRole = role;
      localStorage.setItem('userRole', role);
      if (role === 'admin') this.$router.push('/admin');
      if (role === 'manager') this.$router.push('/manager');
      if (role === 'customer') this.$router.push('/customer');
      if (role === 'supplier') this.$router.push('/supplier');
    },
    logout() {
      this.userRole = 'anonymous';
      localStorage.removeItem('userRole');
      this.$router.push('/');
    }
  }
};
</script>
