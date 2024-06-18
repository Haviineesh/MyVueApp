<template>
    <div>
      <h1>Supplier Dashboard</h1>
      <p>Welcome, Supplier! Here you can manage your products and view orders.</p>
      <div>
        <h2>My Products</h2>
        <button @click="fetchProducts">Fetch Products</button>
        <ul>
          <li v-for="product in products" :key="product.id">{{ product.name }} - ${{ product.price }}</li>
        </ul>
      </div>
      <div>
        <h2>My Orders</h2>
        <button @click="fetchOrders">Fetch Orders</button>
        <ul>
          <li v-for="order in orders" :key="order.id">Order ID: {{ order.id }} - Total: ${{ order.total }}</li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SupplierDashboard',
    data() {
      return {
        products: [],
        orders: []
      };
    },
    methods: {
      async fetchProducts() {
        try {
          const supplierId = 1; // Replace with actual supplier ID from authentication context
          const response = await fetch(`http://localhost:3000/products?supplier_id=${supplierId}`);
          this.products = await response.json();
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      },
      async fetchOrders() {
        try {
          const supplierId = 1; // Replace with actual supplier ID from authentication context
          const response = await fetch(`http://localhost:3000/orders?supplier_id=${supplierId}`);
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
  