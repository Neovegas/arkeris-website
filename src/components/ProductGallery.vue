
<template>

    <v-card flat class="p-5" >


        
      <v-card-title class="d-flex">
        Nos Produits

      </v-card-title>
  
      <v-divider></v-divider>
      <v-data-table v-model:search="search" :items="items">
        <template v-slot:header.stock>
          <div class="text-end">Stock</div>
        </template>

        <template v-slot:header.image>
          <div class="text-center">Image</div>
        </template>
  
        <template v-slot:item.image="{ item }">
          <v-card class="my-2 " elevation="0" rounded>
            <v-img
              :src="`${item.image}`"
              cover
            ></v-img>
          </v-card>
        </template>

        <template v-slot:header.price>
          <div class="text-center">Price</div>
        </template>
        <template v-slot:item.price="{ item }">
          {{ item.price }} €
        </template>
  
        <template v-slot:item.stock="{ item }">
          <div class="text-end">
            <v-chip

              :color="item.stock ? '#00FF00' : '#FF0000'"
              :text="item.stock ? 'In stock' : 'Out of stock'"
              class="text-uppercase"
              size="small"
              label
            ></v-chip>
          </div>
        </template>


        <template v-slot:bottom>

        </template>
      </v-data-table>
    </v-card>

  </template>
<script>
export default {
  data () {
    return {
      search: '',

      items: [
        {
          name: 'Prototype 0',
          image: './src/assets/kb0.png',
          price: 199.99,
          stock: true,
        },

      ],
    }
  },
}
</script>

<style scoped>

</style>


