<template>
    <div>
      
    <select v-model="selectedGender" >
        <option value="">전체</option>
        <option value="male">남자</option>
        <option value="female">여자</option>
    </select>
<input type="search" v-model="searchName" placeholder="Enter the Name" />
        <button @click="getUserList">조회</button>
        <table>
        <thead>
        <tr>
            <th>성별</th>
            <th>이름</th>
            <th>나이</th>
            <th>눈동자 색</th>
            <th>직장</th>
        </tr>
        </thead>
        <tbody>
            <tr :key="user._id" v-for="user in userList">
                <td>{{user.gender}}</td>
                <td>{{user.name}}</td>
                <td>{{user.age}}</td>
                <td>{{user.eyeColor}}</td>
                <td>{{user.company}}</td>
                
            </tr>
        </tbody>
        </table>

    </div>
</template>
<script>
import axios from 'axios';

export default {
    name: "",
    components: {},
    data() {
        return {
            url: "https://1cbca165-77e0-49c8-9093-a9bb044003e5.mock.pstmn.io/getUserList",
            userList: [],
        };
    },
    setup() {},
    created() {},
    mounted() {
        // this.getUserList();
    },
    unmounted() {},
    methods: {
        async getUserList() {
// 성별, 이름 조회
var userList = (await axios.get(this.url)).data.data;

if(this.selectedGender == "") {
    if (this.searchName == "") {
        this.userList = userList;
        } else {
            this.userList = userList.filter((u) => u.name.toLowerCase().indexOf(this.searchName.toLowerCase()) > -1);
            }
}else {
    if(this.searchName == ""){
        this.userList = userList.filter(u => u.gender == this.selectedGender);
        } else {
            this.userList = userList.filter(
                (u) => u.gender == this.selectedGender &&
                u.name.toLowerCase().indexOf(this.searchName.toLowerCase()) >-1);
            
        }
}

        }     
       
    }
}
</script>
<style scoped>
table {
    width:100%;
}
table,th,td{
    border-collapse: collapse;
}

th,
td{
    border: 1px solid #222;
    padding: 10px;
}
</style>