<template>
  <div>
    <provideinjectchild />
  </div>
</template>
<script>
//한번에 데이터를 보내줄 수 있지만 데이터를 추적하기 어려운 단점이 있다.
import provideinjectchild from "../components/provideinjectchild";
export default {
  name: "",
  components: { provideinjectchild },
  data() {
    return {
      items: ["A", "B"],
    };
  },
  provide() {
    return {
      itemLength: this.items.length,
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>
