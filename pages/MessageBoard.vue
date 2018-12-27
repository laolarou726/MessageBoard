<template>
  <v-layout>
    <v-flex text-xs-center>
      <Dialog :isDialogOpen="true" dialogTitle="emmm" dialogContent="测试一下" dialogButtonContent="确定"></Dialog>
      <Alert message="欢迎来到留言板，您可以在这里发表您的看法。" type="info" :dismissible="false"></Alert>
      <Alert message="您目前处于开发模式" type="warning"></Alert>
      <Card title="这是一个测试卡片" author="老腊肉" date="2018-12-18" content="测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试"></Card>
      <Card title="这是一个测试卡片" author="老腊肉" date="2018-12-18"
            content="测试测试测试测试测试测试测试测试测试测试测试测试测0TMnuh6b测试测试测试测试测试测试测试测试"></Card>
      <Card title="这是一个测试卡片" author="老腊肉" date="2018-12-18"
            content="测试测试测试测试测试测试测试测试测试测试测试测试测试测1试测试测试测试测试测试测试测试"></Card>
      <Card title="这是一个测试卡片" author="老腊肉" date="2018-12-18" content="测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试"></Card>
      <Card title="这是一个测试卡片" author="老腊肉" date="2018-12-18" content="测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试"></Card>
      <Card title="这是一个测试卡片" author="老腊肉" date="2018-12-18" content="测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试"></Card>
      <Card title="这是一个测试卡片" author="老腊肉" date="2018-12-18" content="测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试"></Card>
      <Card title="这是一个测试卡片" author="老腊肉" date="2018-12-18" content="测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试"></Card>
      <Card title="这是一个测试卡片" author="老腊肉" date="2018-12-18" content="测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试"></Card>
      <Card title="这是一个测试卡片" author="老腊肉" date="2018-12-18" content="测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试"></Card>
      <Card title="这是一个测试卡片" author="老腊肉" date="2018-12-18" content="测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试"></Card>
      <Card title="这是一个测试卡片" author="老腊肉" date="2018-12-18" content="测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试"></Card>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
  import Alert from "~/components/Alert.vue";
  import Card from "~/components/Card.vue";
  import Dialog from "~/components/Dialog.vue";
  import { Component, Vue } from "vue-property-decorator";

  @Component({
    components: {
      Alert,
      Card,
      Dialog
    }
  })

  export default class MessageBoard extends Vue {
  }
</script>
