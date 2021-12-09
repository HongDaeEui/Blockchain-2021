<template>
  <div>
    <div>
      <h1>Hello {{ title1 }}</h1>
    </div>
    <div>
      <h1>Hello {{ title2 }}</h1>
      <!-- 중괄호 두 개 써야함 -->
      <div v-html="htmlString"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      title1: 'World',
      title2: 'Day',
      htmlString: "<p style='color: red;'>빨간색 글자</p>"
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
