<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card
        :hover="hover"
      >
        <v-img
          :src="imgLink"
          height="200px"
        >
        </v-img>

        <v-card-title primary-title>
          <div>
            <div class="headline">{{ title }}</div>
            <span class="grey--text">{{ author }} | {{ date }}</span>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat>Share</v-btn>
          <v-btn flat color="purple">Explore</v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click="showContent">
            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-slide-y-transition>
          <v-card-text v-show="show">
            {{ content }}
          </v-card-text>
        </v-slide-y-transition>
      </v-card>
      <br>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from "vue-property-decorator";

  @Component
  export default class Card extends Vue {
    @Prop({default: "无内容"})
    private title!: string;
    @Prop({default: "未知的时间"})
    private date!: string;
    @Prop({default: "无"})
    private author!: string;
    @Prop({default: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"})
    private imgLink!: string;
    @Prop({default: "无内容"})
    private content!: string;
    @Prop({default: true})
    private hover!: boolean;

    private show: boolean = false;

    public showContent (): void {
      this.show = !this.show;
    }
  }
</script>

<style scoped>

</style>
