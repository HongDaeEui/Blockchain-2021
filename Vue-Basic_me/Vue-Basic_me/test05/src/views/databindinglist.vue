<template>
    <div>
        <select>
            <!-- <option value="1" v-for="drink in drinkList">코카콜라</option> -->
            <!-- <option value="1" :key="i" v-for="(drink,i) in drinkList">{{drink.drinkName}}</option> -->
            <!-- v-for이라 하면 배열 안에 있는 한 요소가 들어 간다. (drink, i)라고 할시 drink의 요소와 인덱스를 가져온다. -->
            <!-- key값에 반복하는 변수(i)를 넣어준다. key값은 ID같은 역할을 한다. -->
            <!-- {{drink.drinkName}} 중괄호 안, drink(요소).drink(요소)의 키로 오브젝트의 값에 접근 -->
            <option value="drink.drinkId" :key="drink.drinkId" v-for="drink in drinkList">{{drink.drinkName}}</option>
            <!-- key는 요소를 만들 때 알 수 있는 고유한 값이다, key값과 value값을 drinkId로 가져옴 -->
        </select>
        <table>
            <thead>
                <tr>
                    <td>제품코드</td>
                    <td>제품명</td>
                    <td>가격</td>
                    <td>주문수</td>
                    <td>합계</td>
                </tr>
            </thead>
            <tbody>
                <tr :key="drink.drinkId" v-for="drink in drinkList">
                    <!-- 행의 key값과 행의 각 컬럼들의 값들을 정해주고, for문을 돌린다. -->
                    <td>{{drink.drinkId}}</td>
                    <td>{{drink.drinkName}}</td>
                    <td>{{drink.price}}</td>
                    <td><input type="number" v-model="drink.qty"></td>
                    <td>{{drink.price * drink.qty}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    name: "",
    components: {},
    data() {
        return {
            drinkList: [{
        drinkId: "1",
        drinkName: "코카콜라",
        price: 700,
        qty: 1
      },
      {
        drinkId: "2",
        drinkName: "오렌지주스",
        price: 1200,
        qty: 1
      },
      {
        drinkId: "3",
        drinkName: "커피",
        price: 500,
        qty: 1
      },
      {
        drinkId: "4",
        drinkName: "물",
        price: 700,
        qty: 1
      },
      {
        drinkId: "5",
        drinkName: "보리차",
        price: 1200,
        qty: 1
      },
      {
        drinkId: "6",
        drinkName: "포카리",
        price: 1000,
        qty: 1
      },
      {
        drinkId: "7",
        drinkName: "뽀로로",
        price: 1300,
        qty: 1
      }
    ]
        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {}
}
</script>
<style scoped>
table {
    width: 100%;
}

table,
th,
td {
    border-collapse: collapse;
}

th,
td {
    border: 1px solid black;
}
</style>

