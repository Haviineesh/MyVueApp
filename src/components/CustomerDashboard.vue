<template>
    <div>
      <h1>Customer Dashboard</h1>
      <p>Welcome, Customer! Here you can view your orders and manage your account.</p>
      <div>
        <h2>My Orders</h2>
        <button @click="fetchMyOrders">Fetch My Orders</button>
        <ul>
          <li v-for="order in orders" :key="order.id">Order ID: {{ order.id }} - Total: ${{ order.total }}</li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CustomerDashboard',
    data() {
      return {
        orders: []
      };
    },
    methods: {
      async fetchMyOrders() {
        try {
          const userId = 1; // Replace with actual user ID from authentication context
          const response = await fetch(`http://localhost:3000/orders?user_id=${userId}`);
          this.orders = await response.json();
        } catch (error) {
          console.error('Error fetching orders:', error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  h1, h2 {
    color: #333;
  }
  </style>
  