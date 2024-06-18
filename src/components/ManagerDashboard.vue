<template>
    <div>
      <h1>Manager Dashboard</h1>
      <p>Welcome, Manager! Here you can oversee the operations and manage your team.</p>
      <div>
        <h2>Manage Orders</h2>
        <button @click="fetchOrders">Fetch Orders</button>
        <ul>
          <li v-for="order in orders" :key="order.id">
            Order ID: {{ order.id }} - Total: ${{ order.total }}
            <button @click="deleteOrder(order.id)">Delete</button>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ManagerDashboard',
    data() {
      return {
        orders: []
      };
    },
    methods: {
      async fetchOrders() {
        try {
          const response = await fetch('http://localhost:3000/orders');
          this.orders = await response.json();
        } catch (error) {
          console.error('Error fetching orders:', error);
        }
      },
      async deleteOrder(id) {
        try {
          await fetch(`http://localhost:3000/orders/${id}`, { method: 'DELETE' });
          this.orders = this.orders.filter(order => order.id !== id);
        } catch (error) {
          console.error('Error deleting order:', error);
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
  