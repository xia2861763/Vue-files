<template>
    <div>
        <ul>
                <li @click="choose(index)" :class="{active:index==current&&current!==''}" v-for="(item,index) in lists" :key="index">
                    {{item}}
                </li>
        </ul>
        <button type="button" @click="add()">添加</button>
        <li v-for="(item,index) in targets" :key="index">
            {{item}}
        </li>
    </div>
</template>
<script>
export default {
    name:'demo1',
    data(){
        return {
            lists:[1,2,3,4,5,6,7,8,9,10],
            targets:[],
            current:''
        }
    },
    methods:{
        choose(index){
            this.current=index;
            console.log(index+1);
        },
        add(){
            if(this.current===''){
                return;
            }
            this.targets.push(this.lists[this.current]);
            this.current='';
        }
    }
}
</script>
<style>
    li.active{
        background: green;
    }
</style>


