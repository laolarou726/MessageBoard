<template>
  <v-layout>
    <v-timeline>
      <v-timeline-item
        color="purple lighten-2"
        fill-dot
        right
      >
        <v-card>
          <v-card-title class="purple lighten-2">
            <v-icon
              dark
              size="42"
              class="mr-3"
            >
              mdi-code-tags-check
            </v-icon>
            <h2 class="display-1 white--text font-weight-light">编译完成啦！！！！！</h2>
          </v-card-title>
          <v-container>
            <v-layout>
              <v-flex xs10>
                在2018-11-23 18点37分，程序猿们终于完成了核心代码的编写，并且成功地通过了所有测试。目前已经可以上线了！
              </v-flex>
              <v-flex xs2>
                <v-icon size="32">mdi-calendar-text</v-icon>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-timeline-item>

      <v-timeline-item
        color="amber lighten-1"
        fill-dot
        left
        small
      >
        <v-card>
          <v-card-title class="amber lighten-1 justify-end">
            <h2 class="display-1 mr-3 white--text font-weight-light">BUG都被清除啦！</h2>
            <v-icon
              dark
              size="42"
            >mdi-bug-check
            </v-icon>
          </v-card-title>
          <v-container>
            <v-layout>
              <v-flex xs8>
                我们又在程序代码里面发现了一些错误，但是我们已经修复了它们。
              </v-flex>
              <v-flex xs2>
                <v-icon size="32">mdi-clipboard-check</v-icon>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-timeline-item>

      <v-timeline-item
        color="cyan lighten-1"
        fill-dot
        right
      >
        <v-card>
          <v-card-title class="cyan lighten-1">
            <v-icon
              class="mr-3"
              dark
              size="42"
            >
              mdi-email-outline
            </v-icon>
            <h2 class="display-1 white--text font-weight-light">Title 3</h2>
          </v-card-title>
          <v-container>
            <v-layout>
              <v-flex
                v-for="n in 3"
                :key="n"
                xs4
              >
                Lorem ipsum dolor sit amet, no nam oblique veritus no nam oblique.
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-timeline-item>

      <v-timeline-item
        color="red lighten-1"
        fill-dot
        left
        small
      >
        <v-card>
          <v-card-title class="red lighten-1 justify-end">
            <h2 class="display-1 mr-3 white--text font-weight-light">Title 4</h2>
            <v-icon
              dark
              size="42"
            >
              mdi-account-multiple-outline
            </v-icon>
          </v-card-title>
          <v-container>
            <v-layout>
              <v-flex xs2>
                <v-icon size="64">mdi-server-network</v-icon>
              </v-flex>
              <v-flex xs10>
                Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod
                convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus.
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-timeline-item>

      <v-timeline-item
        color="green lighten-1"
        fill-dot
        right
      >
        <v-card>
          <v-card-title class="green lighten-1">
            <v-icon
              class="mr-3"
              dark
              size="42"
            >
              mdi-phone-in-talk
            </v-icon>
            <h2 class="display-1 white--text font-weight-light">Title 5</h2>
          </v-card-title>
          <v-container>
            <v-layout>
              <v-flex>
                Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod
                convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an
                salutandi sententiae.
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-layout>
</template>

<script lang="ts">
  import { Vue } from "vue-property-decorator";

  export default class About extends Vue {

  }
</script>

<style scoped>

</style>
