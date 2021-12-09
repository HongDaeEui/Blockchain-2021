<template>
    <div>
        <p>{{count}}</p>
        <p>{{cart.toString()}}</p>
        <button @click="addCart">장바구니 추가</button>
    </div>
</template>
<script>
export default {
    name: "",
    components: {},
    data() {
        return {
            sampleData: ""
        };
    },
    computed: {
          //count값이 바뀌면 자동으로 알게 해줌
        count() {
            return this.$store.state.count;
            /* mutation에서 값이 바뀌어도 변경사항 반영 */
        },
        cart() {
            return this.$store.state.cart;
        }
    },
    setup() {},
    created() {},
    updated() {
        console.table(this.cart);
    },
    mounted() {},
    unmounted() {},
    methods: {
               //store에 mutation에 접근해야 함, 접근할 때 commit을 써줘야함, 함수를 호출하고 두 번째 파라미터에 넣고싶은 값을 넣는다.
        addCart(){
            this.$store.commit("addCart",{productId:"1",productName:"마우스",price:22000,})
        }
    }
}
</script>