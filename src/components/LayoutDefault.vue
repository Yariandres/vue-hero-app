<script setup lang="ts">
import { reactive, ref } from 'vue';
import AppHero from './AppHero.vue';
import ProductCard from './ProductCard.vue';

import type { Product } from '../types';

const heading = ref('Welcome to the store');
const copy = ref(
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec justo rutrum, tristique nisl sit amet, fermentum nunc.'
);

const productData = reactive<Product[]>([
  {
    id: 1,
    name: 'Product name 1 - Special Edition',
    price: 299.0,
    isNew: true,
    isSale: false,
    rating: 4,
    img: 'https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/4/product-1.png',
  },
  {
    id: 2,
    name: 'Product name 2 - Valantines',
    price: 99.0,
    isNew: false,
    isSale: true,
    rating: 5,
    img: 'https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/4/product-3.png',
  },
  {
    id: 3,
    name: 'Product name 3 - Mothers day',
    price: 49.0,
    isNew: false,
    isSale: true,
    rating: 3,
    img: 'https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/4/product-4.png',
  },
  {
    id: 4,
    name: 'Product name 4 - Fathers Day',
    price: 79.0,
    isNew: true,
    isSale: false,
    rating: 4,
    img: 'https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/4/product-2.png',
  },
]);
</script>
<template>
  <app-hero>
    <template #default>
      <section class="py-12 bg-white sm:py-16 lg:py-20">
        <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div class="max-w-md mx-auto text-center">
            <h2 class="text-2xl font-bold text-blue-950 sm:text-3xl">
              {{ heading }}
            </h2>
            <p class="mt-4 text-base font-normal leading-7 text-gray-500">
              {{ copy }}
            </p>
          </div>

          <div
            class="grid grid-cols-2 gap-6 mt-10 lg:mt-16 lg:gap-4 lg:grid-cols-4"
          >
            <product-card
              v-for="product in productData"
              :key="product.id"
              :data="product"
            ></product-card>
          </div>
        </div>
      </section>
    </template>
  </app-hero>
</template>
