<template>
  <v-hover>
    <v-card
      slot-scope="{ hover }"
      :class="`elevation-${hover ? 12 : 2}`"
      class="mx-auto"
      :width="width"
    >
      <v-img
        :aspect-ratio="aspectRatio"
        :src="imgLink"
      ></v-img>
      <v-card-title>
        <div>
          <span class="headline">{{ title }}</span>
          <div class="d-flex">
            <v-rating
              :value="starValue"
              :color="starColor"
              dense
              half-increments
              readonly
              size="14"
            ></v-rating>
            <div class="ml-2 grey--text text--darken-2">
              <span>{{ starValue }}</span>
              <span>({{ reviews }})</span>
            </div>
          </div>
        </div>
        <v-spacer></v-spacer>
        <v-btn icon class="mr-0">
          <v-icon>{{ buttonIcon }}</v-icon>
        </v-btn>
      </v-card-title>
    </v-card>
  </v-hover>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from "vue-property-decorator";

  @Component
  export default class Hover extends Vue {
    @Prop({default: 344})
    private width!: number;
    @Prop({default: 16 / 9})
    private aspectRatio!: number;
    @Prop({default: "https://cdn.vuetifyjs.com/images/cards/cooking.png"})
    private imgLink!: string;
    @Prop({default: "无内容"})
    private title!: string;
    @Prop({default: 0})
    private starValue!: number;
    @Prop({default: "amber"})
    private starColor!: string;
    @Prop({default: 0})
    private reviews!: number;
    @Prop({default: "mdi-chevron-right"})
    private buttonIcon!: string;
  }
</script>

<style scoped>

</style>
