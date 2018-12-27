<template>
  <div class="text-xs-center">
    <v-dialog
      v-model="dialogState"
      width="500"
    >
      <v-card>
        <v-card-title
          class="headline light-blue lighten-2"
          primary-title
        >
          {{ dialogTitle }}
        </v-card-title>

        <v-card-text>
          {{ dialogContent }}
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            flat
            @click="closeDialog"
          >
            {{ dialogButtonContent }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from "vue-property-decorator";

  @Component
  export default class Dialog extends Vue {
    @Prop({default: "无内容"})
    private dialogTitle!: string;
    @Prop({default: "无内容"})
    private dialogContent!: string;
    @Prop({default: "确定"})
    private dialogButtonContent!: any;
    @Prop({default: false})
    private isDialogOpen!: boolean;

    private dialogState: boolean = this.isDialogOpen;

    public closeDialog (): void {
      this.dialogState = !this.dialogState;
    }
  }
</script>

<style scoped>

</style>
