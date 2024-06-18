<template>
    <div>
      <h1>Admin Dashboard</h1>
      <p>Welcome, Admin! Here you can manage users, products, and orders.</p>
      <div>
        <h2>Users</h2>
        <button @click="fetchUsers">Fetch Users</button>
        <ul>
          <li v-for="user in users" :key="user.id">{{ user.name }} ({{ user.email }})</li>
        </ul>
      </div>
      <div>
        <h2>Products</h2>
        <button @click="fetchProducts">Fetch Products</button>
        <ul>
          <li v-for="product in products" :key="product.id">{{ product.name }} - ${{ product.price }}</li>
        </ul>
      </div>
      <div>
        <h2>Orders</h2>
        <button @click="fetchOrders">Fetch Orders</button>
        <ul>
          <li v-for="order in orders" :key="order.id">Order ID: {{ order.id }} - Total: ${{ order.total }}</li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AdminDashboard',
    data() {
      return {
        users: [],
        products: [],
        orders: []
      };
    },
    methods: {
      async fetchUsers() {
        try {
          const response = await fetch('http://localhost:3000/users');
          this.users = await response.json();
        } catch (error) {
          console.error('Error fetching users:', error);
        }
      },
      async fetchProducts() {
        try {
          const response = await fetch('http://localhost:3000/products');
          this.products = await response.json();
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      },
      async fetchOrders() {
        try {
          const response = await fetch('http://localhost:3000/orders');
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
  