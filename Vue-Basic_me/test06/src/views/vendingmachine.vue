<template>
    <div>
        <div>
<label>자판기 잔고</label> <input type="text" v-model="vend">
<label >투입금액</label> <input type="text" v-model="input">
<label >지갑</label> <input type="text" v-model="customer">
</div>

<div>
<button @click="add(coin)" :key="coin" v-for="coin in coins">{{coin}}</button>
<br>
<button :class="{active:drink.price<=input}" @click="getDrink(drink.drinkId)" :key="drink" v-for="drink in drinkList">{{drink.drinkName}}({{drink.price}}원)({{drink.qty}}개)</button>

</div>

<div>



</div>


<div style="width:100%;height:150px;overflow-y: auto;border:2px solid #222;">

<p :key="i" v-for="(msg,i) in messageList">{{msg}}</p>
</div>


    </div>
</template>
<script>
export default {
    name: "",
    components: {},
    data() {
      return {
             vend : 1000,
            customer : 10000,
            input : 0,
          messageList:[],
          coins:[100, 500, 1000],
            drinkList: [            
        {
          drinkId: "1",
          drinkName: "코카콜라",
          price: 700,
          qty: 5,
        },
        {
          drinkId: "2",
          drinkName: "오렌지주스",
          price: 1200,
          qty: 5,
        },
        {
          drinkId: "3",
          drinkName: "커피",
          price: 500,
          qty: 5,
        },
        {
          drinkId: "4",
          drinkName: "물",
          price: 700,
          qty: 5,
        },
        {
          drinkId: "5",
          drinkName: "보리차",
          price: 1200,
          qty: 5,
        },
        {
          drinkId: "6",
          drinkName: "포카리",
          price: 1000,
          qty: 5,
        },
        {
          drinkId: "7",
          drinkName: "뽀로로",
          price: 1300,
          qty: 5,
        },

            ],
         
        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
        add(amount) {

if (amount <= this.customer) {
    this.vend += amount
    this.input += amount
    this.customer -= amount
    
    this.messageList.push(`${amount}이 투입됩니다.`);
    this.messageList.push(`총 투입 금액은 ${this.input}입니다.`);
    this.messageList.push(`지갑에 남은 금액은 ${this.customer}입니다.`);
    
                
            } else {
    this.messageList.push(`지갑에 남은 금액은 ${this.customer}입니다.`);
    this.messageList.push( `${amount}투입이 불가합니다.`);

                
            }


        },

        getDrink(drinkId){
        let drink = this.drinkList.filter((d) => d.drinkId == drinkId)[0];
    
            if (drink.qty > 0) {
                if (this.input >= drink.price) {
                    let changes = this.input - drink.price;
                    if(this.vend >= changes) {
                        this.customer += changes;
                        drink.qty -= 1;
                        this.input = 0;
                        this.vend -= changes;
                        this.messageList.push(`${drink.drinkName}음료가 나옵니다`);
                        this.messageList.push(`잔액이 ${this.customer} 남았습니다.`);

                    } else  {
                        this.messageList.push(`자판기 잔고가 ${this.vend} 남았습니다.`);
                        this.messageList.push(`음료를 구매하지 못합니다.`);
                       };
                
                }
                } else {
                        this.messageList.push(`${drink.drinkName}의 재고가 없습니다.`);
                        this.messageList.push(`음료를 구매하지 못합니다.`)
                        };
            }
        }

}
      
</script>
<style scoped>
button {
    padding: 10px;

}
.active {
background-color: yellow;
}

</style>