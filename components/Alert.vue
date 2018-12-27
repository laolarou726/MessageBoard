<template>
  <div>
    <v-alert
      :value="value"
      :dismissible="dismissible"
      :type="type"
      :transition="transition"
    >
      {{ message }}
    </v-alert>
    <br>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from "vue-property-decorator";

  @Component
  export default class Alert extends Vue {
    @Prop({default: true})
    private dismissible!: boolean;
    @Prop({default: "success"})
    private type!: string;
    @Prop({default: false})
    private outline!: boolean;
    @Prop({default: "new_releases"})
    private icon!: string;
    @Prop({default: "无消息"})
    public message!: string;
    @Prop({default: "scale-transition"})
    private transition!: string;
    @Prop({default: true})
    private value!: boolean;
  }
</script>

<style scoped>

</style>
