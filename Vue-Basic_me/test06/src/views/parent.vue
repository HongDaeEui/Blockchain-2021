<template>
  <div>
    <child ref="child_component" />
  </div>
</template>
<script>
import child from "../components/child.vue";
export default {
  name: "",
  components: { child },
  data() {
    return {
      sampleData: "",
    };
  },
  setup() {},
  created() {},
  mounted() {
    //document.getElementById
    this.$refs.child_component.$refs.btn.click();
    //$refs로 컴포넌트의 요소뿐 아니라 html, 함수까지도 접근 가능
  },
  unmounted() {},
  methods: {},
};
</script>
