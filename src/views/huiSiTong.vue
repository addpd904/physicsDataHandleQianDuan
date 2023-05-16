<template>
    <div>
        <!-- 自组电桥 -->
        <div class="zzdq">
            <!-- table -->
            <div >
                <h4>用自组法测量电阻</h4>

                <table class="center">
                  
                    <thead>
                        <tr >
                        <td colspan="7">电阻箱准确度等级 f =<input type="text" v-model="f"></td>
                    </tr>
                      <tr>
                        <td>
                            比例臂N
                        </td>
                        <td colspan="6">
                                R1:R2 = 500Ω ： 500Ω
                        </td>
                      </tr>
                      <tr>
                        <!-- <td>
                            标称值Rx(Ω)
                        </td>
                        <td>
                            Rx（实测值）（Ω）
                        </td> -->
                        <td>
                            R0（Ω）
                        </td>
                        <td>
                            R0‘ （Ω）
                        </td>
                        <td>
                            Rx（Ω）
                        </td>
                        <td>
                            △Rx（Ω）
                        </td>
                        <td>
                            Rx±△Rx（Ω）
                        </td>
                      </tr>
                    </thead>
                    <tr v-for="(items,i) in zzdqdata" v-bind:key="i+timeKey">
                    <td v-for="(item) in items" v-bind:key="item.id+timeKey">
                        <input v-model="item.val">
                    </td>
                    <td class="Rx"></td>
                    <td class="delta_Rx">

                    </td>
                    <td class="Rx_delta_Rx">

                    </td>
                </tr>

                </table>
        
            </div>
            <!-- button -->
        <div>
            <br/>
            <el-button type="success" class="zzdq_btn_cal">
                计算
            </el-button>
        </div>
        </div>
        <br/>
        <br/>

<!-- 箱式电桥 -->
        <div class="xsdq">
 <!-- table -->
            <div >
                <h4>箱式电桥测电阻</h4>
                <table class="center">
               
                    <!-- body -->
               
                <tr v-for="i in 2" v-bind:key="i+timeKey">
                        
                        <td>{{ xsdqdata[i].title }}</td>
                        <td >
                            <input v-model="xsdqdata[i].val1">
                        </td>
                        <td >
                            <input v-model="xsdqdata[i].val2">
                        </td>
                        <td >
                            <input v-model="xsdqdata[i].val3">
                        </td>
                </tr>
                <tr>
                    <td>Rx</td>
                    <td class="Rx" v-for="i in 3" v-bind:key="i+timeKey"></td>
                </tr>
                <tr >
                        <td>{{ xsdqdata[3].title }}</td>
                        <td >
                            <input v-model="xsdqdata[3].val1">
                        </td>
                        <td >
                            <input v-model="xsdqdata[3].val2">
                        </td>
                        <td >
                            <input v-model="xsdqdata[3].val3">
                        </td>
                </tr>
                <tr>
                    <td >△Rx</td>
                    <td class="delta_Rx" v-for="i of 3" v-bind:key="i+timeKey" ></td>
                </tr>
                <tr>
                    <td >Rx±△Rx（Ω）</td>

                    <td class="Rx_delta_Rx" v-for="i of 3" v-bind:key="i+timeKey" ></td>
                </tr>
                </table>
        
            </div>
            <!-- button -->
        <div>
            <br/>
            <el-button type="success" class="xsdq_btn_cal">
                计算
            </el-button>
        </div>
        </div>
        <br/>
        <br/>


        <!-- 灵敏度 -->
        <div class="lmd">
            <!-- table -->
            <div>
                <h4>测量箱式电桥灵敏度</h4>
                <table class="center">
                    <thead>
                        <tr>
                            <td>
                            Rx（标称值）(Ω)
                        </td>
                        <td>
                            N
                        </td>
                        <td>
                            R0
                        </td>
                        <td>
                            △n
                        </td>
                        <td>
                            △R'0（左） （Ω）
                        </td>
                        <td>
                            △R''0（右）（Ω）
                        </td>
                        <td>
                            △R'x（左） （Ω）
                        </td>
                        <td>
                            △R''x（右）（Ω）
                        </td>
                        <td>
                            △Rx_bar
                        </td>
                        <td>
                            S
                        </td>
                        </tr>
                    </thead>
                    <!-- <tr v-for="(items,i) in lmddata" :key="i+timeKey">
                        <td v-if="i==2">510</td>
                        <td v-else>{{ 5.1*Math.pow(10,i)}}</td>
                        <td class="Rxscz"><input v-model="items[0].val"></td>
                        <td>5</td>
                        <td v-for="j of 2" v-bind:key="j+timeKey">
                        <input  type="text" v-model="items[j].val">
                        </td>
                        <td class="delta_Rx_bar"></td>
                        <td class="S"></td>

                    </tr> -->
                    <tr v-for="(items,i) in lmddata" :key="i+timeKey">
                        <td v-if="i==2">510</td>
                        <td v-else>{{ 5.1*Math.pow(10,i)}}</td>

                        <td class="N"><input v-model="items[0].val"></td>
                        <td class="R0"><input v-model="items[1].val"></td>
                        <td>5</td>
                        <td v-for="j of 2" v-bind:key="j+timeKey" >
                        <input  type="text" v-model="items[j+1].val">
                        </td>
                        <td class="delta_Rx_zuo"></td>
                        <td class="delta_Rx_you"></td>
                        <td class="delta_Rx_bar"></td>
                        <td class="S"></td>

                    </tr>
                </table>
            </div>
            <br/>
    <!-- button -->
    <div>
        <el-button type="success" class="lmd_btn_cal">
                计算
        </el-button>
    </div>
        </div>

<br>
<br><br>
<br>
    </div>

</template>

<script lang="ts">
function Data(id,val){
    this.id=id
    this.val=val
}
let flage1=0
let flage2=0
let flage3=0
import axios from 'axios'
export default {
    data:function(){
        return{
            // 准确度等级f
            f:1,
            zzdqdata:[
            [new Data("R0",1),new Data("R0pie",2)],
            [new Data("R0",1),new Data("R0pie",2)],
            [new Data("R0",1),new Data("R0pie",2)]
        ],
        xsdqdata:[{'biaochenzhi':'bcz',val1:0,val2:0,val3:0,'title':'电阻标称值'},
        {'id':'bilibi',val1:0.01,val2:0.1,val3:1,'title':'比例臂N'},
        {'id':'R0',val1:30,val2:30,val3:30,'title':'R0（Ω）'},
        {'id':'zhunquedu',val1:0.2,val2:0.1,val3:0.1,'title':'准确度等级'}
        ],
        lmddata:[
            [new Data("N",0.001),new Data("R0",5),new Data("R0zuo",1),new Data("R0you",0)],
            [new Data("N",0.01),new Data("R0",5),new Data("R0zuo",1),new Data("R0you",0)],
            [new Data("N",0.1),new Data("R0",5),new Data("R0zuo",1),new Data("R0you",0)],
            [new Data("N",1),new Data("R0",2),new Data("R0zuo",1),new Data("R0you",0)],
            [new Data("N",10),new Data("R0",2),new Data("R0zuo",1),new Data("R0you",0)],
           
            // [new Data("N",0.001),new Data("R0",5194),new Data("R0zuo",5198),new Data("R0you",5186)],
            // [new Data("N",0.01),new Data("R0",5206),new Data("R0zuo",5216),new Data("R0you",5198)],
            // [new Data("N",0.1),new Data("R0",5104),new Data("R0zuo",5113),new Data("R0you",5100)],
            // [new Data("N",1),new Data("R0",5102),new Data("R0zuo",5108),new Data("R0you",5080)],
            // [new Data("N",10),new Data("R0",5108),new Data("R0zuo",5130),new Data("R0you",5092)],
           
        ],
        timeKey:new Date().getTime()
        }
     
    },
    methods:{
        submitData(){
            let sendMsg=encodeURI(JSON.stringify(this.f))
            sendMsg+=encodeURI(JSON.stringify(this.zzdqdata))
            sendMsg+=encodeURI(JSON.stringify(this.xsdqdata))
            sendMsg+=encodeURI(JSON.stringify(this.lmddata))
            axios.post("http://124.71.157.88:80/submitHuiSiTong",sendMsg)
        },
        init(){
            let zzdq_btn_cal=document.querySelector('.zzdq .zzdq_btn_cal')
            zzdq_btn_cal.addEventListener('click',this.zzdq_btn_cal)
            let xsdq_btn_cal=document.querySelector('.xsdq .xsdq_btn_cal')
            xsdq_btn_cal.addEventListener('click',this.xsdq_btn_cal)
            let lmd_btn_cal=document.querySelector('.lmd .lmd_btn_cal')
            lmd_btn_cal.addEventListener('click',this.lmd_btn_cal)
        },
        zzdq_btn_cal(){
            flage1=1
            let Rxs=[]
            let delta_Rxs=[]
            let i=0
            this.zzdqdata.forEach(element => {
                Rxs[i]=Math.sqrt(element[0].val*element[1].val)
                i++
            })
            i=0
            Rxs.forEach(element => {
                delta_Rxs[i]=element*this.f*0.01
                i++
            })
            // show these result in table
            let tds_zzdq_Rx=document.querySelectorAll('.zzdq .Rx')
            i=0
            tds_zzdq_Rx.forEach(ele=>{
                ele.innerHTML=Rxs[i].toFixed(3)
                i++
            })
            let tds_zzdq_delta_Rx=document.querySelectorAll('.zzdq .delta_Rx')
            i=0
            tds_zzdq_delta_Rx.forEach(ele=>{
                ele.innerHTML=delta_Rxs[i].toFixed(3)
                i++
            })
            let tds_zzdq_Rx_delta_Rx=document.querySelectorAll('.zzdq .Rx_delta_Rx')
            i=0
            tds_zzdq_Rx_delta_Rx.forEach(ele=>{
                ele.innerHTML=Rxs[i].toFixed(3)+'±'+delta_Rxs[i].toFixed(3)
                i++
            })
            if(flage1==1&&flage2==1&&flage3==1){
                    this.submitData()
                }

        },
        xsdq_btn_cal(){
            flage2=1
            let Rxs=[]
            let delta_Rxs=[]
            let i=0
            Rxs[0]=this.xsdqdata[2].val1*this.xsdqdata[1].val1
            Rxs[1]=this.xsdqdata[2].val2*this.xsdqdata[1].val2
            Rxs[2]=this.xsdqdata[2].val3*this.xsdqdata[1].val3
            delta_Rxs[0]=Rxs[0]*this.xsdqdata[3].val1*0.01
            delta_Rxs[1]=Rxs[1]*this.xsdqdata[3].val2*0.01
            delta_Rxs[2]=Rxs[2]*this.xsdqdata[3].val3*0.01
            // show these result in table
            let tds_xsdq_Rx=document.querySelectorAll('.xsdq .Rx')
            i=0
            tds_xsdq_Rx.forEach(ele=>{
                ele.innerHTML=Rxs[i].toFixed(3)
                i++
            })
            let tds_xsdq_delta_Rx=document.querySelectorAll('.xsdq .delta_Rx')
            i=0
            tds_xsdq_delta_Rx.forEach(ele=>{
                ele.innerHTML=delta_Rxs[i].toFixed(5)
                i++
            })
            let tds_xsdq_Rx_delta_Rx=document.querySelectorAll('.xsdq .Rx_delta_Rx')
            i=0
            tds_xsdq_Rx_delta_Rx.forEach(ele=>{
                ele.innerHTML=Rxs[i].toFixed(3)+'±'+delta_Rxs[i].toFixed(5)
                i++
            })
            if(flage1==1&&flage2==1&&flage3==1){
                    this.submitData()
                }
        },
        lmd_btn_cal(){
            flage3=1
            let delta_Rx_yous=[]
            let delta_Rx_zuos=[]
            let delta_Rx_bars=[]
            let Ss=[]
            
            let i=0
            this.lmddata.forEach(ele=>{
                delta_Rx_zuos[i]=ele[0].val*1*Math.abs(ele[2].val*1-ele[1].val*1)
                i++
            })
            i=0
            this.lmddata.forEach(ele=>{
                delta_Rx_yous[i]=ele[0].val*1*Math.abs(ele[3].val*1-ele[1].val*1)
                i++
            })
            for(let i=0;i<delta_Rx_yous.length;i++){
                delta_Rx_bars[i]=(delta_Rx_yous[i]+delta_Rx_zuos[i])/2
            }
        
            i=0
            delta_Rx_bars.forEach(ele=>{
                Ss[i]=5*this.lmddata[i][0].val*this.lmddata[i][1].val/ele
                i++  
            })
            // show these result in table
            let tbs_lmd_delta_Rx_zuo=document.querySelectorAll('.lmd .delta_Rx_zuo')
            i=0
            tbs_lmd_delta_Rx_zuo.forEach(ele=>{
                ele.innerHTML=delta_Rx_zuos[i].toFixed(3)
                i++
            })
            let tbs_lmd_delta_Rx_you=document.querySelectorAll('.lmd .delta_Rx_you')
            i=0
            tbs_lmd_delta_Rx_you.forEach(ele=>{
                ele.innerHTML=delta_Rx_yous[i].toFixed(3)
                i++
            })
            let tbs_lmd_delta_Rx_bar=document.querySelectorAll('.lmd .delta_Rx_bar')
            i=0
            tbs_lmd_delta_Rx_bar.forEach(ele=>{
                ele.innerHTML=delta_Rx_bars[i].toFixed(3)
                i++
            })
            let tbs_lmd_S=document.querySelectorAll('.lmd .S')
            i=0
            tbs_lmd_S.forEach(ele=>{
                ele.innerHTML=Ss[i].toFixed(3)
                i++
            })
            if(flage1==1&&flage2==1&&flage3==1){
                    this.submitData()
                }
        }

      
    },
    mounted:function() {
        this.init()
        // this.zzdq_btn_cal()
        // this.xsdq_btn_cal()
        // this.lmd_btn_cal()
    },
}
</script>

<style scoped>

div table{
    text-align: center;
    border-collapse: collapse;
    width: 800px;
} 
div td{
    border: 1px solid;
    height: 30px;
}
.zzdq td,.lmd td{
    width: 10%;
}
.center{
    margin: auto;
}
input{
    width: 50px;
}
button{
  font-size: 22px;
}
input{
    background: rgb(237, 240, 239);
}
</style>