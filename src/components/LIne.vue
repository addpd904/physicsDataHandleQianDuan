<template>
    <div  style="width:100%; height:300px;" ref="diyLine"></div>
</template>

<script lang="ts">
    import * as echarts from 'echarts';
    export default{
        name:'diyLine',
        props: {
            option: {
                type: Object,
                default: () => {}
                }
        },
        data(){
            return{
                chart:null,
                data:[1,2,3]
            }
        },
        watch:{
            option:{
                handler (newValue,oldValue){
                    this.chart.setOption(newValue)
                    console.log(oldValue)
                },
                deep : true
            }
        },
        mounted(){
            this.chart=echarts.init(this.$refs.diyLine)
            this.chart.setOption(this.option)
        },
        methods:{
            // changeOption(option){
            //     this.chart.setOption(option)
            // }

        }
    }
</script>