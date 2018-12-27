<template>
  <v-flex>
    <v-carousel>
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade"
        transition="fade"
        :delimiter-icon="delimiterIcon"
        :hide-delimiters="hideDelimiters"
      ></v-carousel-item>
    </v-carousel>
    <br>
  </v-flex>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from "vue-property-decorator";

  @Component
  export default class Carousels extends Vue {
    @Prop({
      default: () => [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg"
        }
      ]
    })
    private items!: any[];
    @Prop({default: "fade"})
    private reverseTransition!: string;
    @Prop({default: "fade"})
    private transition!: string;
    @Prop({default: "stop"})
    private delimiterIcon!: string;
    @Prop({default: false})
    private hideDelimiters!: boolean;
  }
</script>

<style scoped>

</style>
