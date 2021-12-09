<template>
  <div></div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      sampleData: ''
    }
  },
  setup() {},
  created() {},
  mounted() {
    console.log('this1', this) //컴포넌트 전체(자바스크립트는 윈도우 전체)
    var a = () => {
      console.log('this2', this) // Arrow함수 컴포넌트 전체
    }
    //this가 다 가져오니 this.함수, this.$refs ... 가져올 수 있음.
  },
  unmounted() {},
  methods: {}
}
</script>
