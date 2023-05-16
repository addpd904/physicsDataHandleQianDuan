<template>
    <div>
        <div class="tchn">
            <!-- table -->
            <div>
                <h4>陶瓷换能器系统最佳工作频率</h4>
                <br>
                <table class="center">
                    <tr><td colspan="7">室温t=<input type="text" v-model="t">°C</td></tr>
                    <thead>
                        <tr>
                            <td>次数</td>
                            <td v-for="i of 5" :key="i+timeKey">
                                {{ i }}
                            </td>
                            <td>平均</td>
                        </tr>
                    </thead>
                    <tr>
                        <td>f（KHz）</td>
                        <td v-for="i of 5" :key="i+timeKey">

                            <input type="text" v-model="tchndata.vals[i-1]">
                        </td>
                        <td class="mean"></td> 
                    </tr>
                    <tr>
                        <td>△f（KHz）</td>
                        <td class="deltaf" v-for="i of 5" :key="i+timeKey"></td>
                        <td class="mean"></td> 
                    </tr>
                </table>
                <!-- warn -->
                <el-tag type="warning" class="warn">
                    注意，此处的 △f 我取了绝对值
                </el-tag>
            </div>
            <br>
<!-- button -->
            <div>
                <el-button class="tchn_button_cal" type="success">
                        计算
                </el-button>
            </div>
        </div>
<br>
<br>

        <div class="gzgsf">
        <!-- table -->
            <div>
                <h4>共振干涉法测量声速</h4>
                <table class="center">
                    <thead>
                        <tr>
                            <td colspan="2">标尺读数 （mm）</td>
                            <td>相距6个λ/2的距离（mm）</td>
                            <td>△（△L）（mm）</td>
                        </tr>
                    </thead>
                    <tr v-for="(item,i) in gzgsfdata" :key="i+timeKey">
                        <td v-for="j in 2" :key="j+timeKey">
                            <input type="text" v-model="item.vals[j-1]">
                        </td>
                        <td class="delta_L">△L{{ i+1 }}=</td>
                        <td class="delta_delta_L"></td>
                    </tr>
                    <tr>
                        <td colspan="2"></td>
                        <td  class="mean">
                            △Lbar=
                        </td>
                        <td  class="mean">
                            △（△L）bar=
                        </td>
                    </tr>
                </table>
            </div>
            <br>
            <!-- img -->
            <div>
                <ul >
                    <li class="image_space center" v-for="i in 2" :key="timeKey+i" v-bind:style="{backgroundImage:'url('+require('../assets/shengShuCeLiang/gzgsf/'+i+'.png')+')'}" ></li>
                    <li class="image_space center spec"  v-bind:style="{backgroundImage:'url('+require('../assets/shengShuCeLiang/gzgsf/3.png')+')'}" ></li>
                    <li class="image_space center" v-for="i in [4,5]" :key="timeKey+i" v-bind:style="{backgroundImage:'url('+require('../assets/shengShuCeLiang/gzgsf/'+i+'.png')+')'}" ></li>

                </ul>

            </div>
<!-- button -->
            <div>
                <el-button class="gzgsf_button_cal" type="success">
                        计算
                </el-button>
            </div>
        </div>
        <br>
        <br>
        <div class="xwbjf">
            <h4>相位比较法法测量声速</h4>
            <!-- table -->
            <div>
                <table class="center">
                    <thead>
                        <tr>
                            <td colspan="2">标尺读数 （mm）</td>
                            <td>相距6个λ/2的距离（mm）</td>
                            <td>△（△L）（mm）</td>
                        </tr>
                    </thead>
                    <tr v-for="(item,i) in xwbjfdata" :key="i+timeKey">
                        <td v-for="j in 2" :key="j+timeKey">
                            <input type="text" v-model="item.vals[j-1]">
                        </td>
                        <td class="delta_L">△L{{ i+1 }}=</td>
                        <td class="delta_delta_L"></td>
                    </tr>
                    <tr>
                        <td colspan="2"></td>
                        <td  class="mean">
                            △Lbar=
                        </td>
                        <td  class="mean">
                            △（△L）bar=
                        </td>
                    </tr>
                </table>
            </div>
            <br>
               <!-- img -->
               <div>
                <ul >
                    <li class="image_space center" v-for="i in 2" :key="timeKey+i" v-bind:style="{backgroundImage:'url('+require('../assets/shengShuCeLiang/xwbjf/'+i+'.png')+')'}" ></li>
                    <li class="image_space center spec"  v-bind:style="{backgroundImage:'url('+require('../assets/shengShuCeLiang/xwbjf/3.png')+')'}" ></li>
                    <li class="image_space center" v-for="i in [4,5]" :key="timeKey+i" v-bind:style="{backgroundImage:'url('+require('../assets/shengShuCeLiang/xwbjf/'+i+'.png')+')'}" ></li>

                </ul>

            </div>
            <br>
<!-- button -->
            <div>
                <el-button class="xwbjf_button_cal" type="success">
                        计算
                </el-button>
            </div>

        </div>


<br>
<br>
<br>
    </div>
</template>

<script lang="ts">

import axios from 'axios'
let flage1=0
let flage2=0
let flage3=0
export default {
    data:function(){
        return {
            tchndata:{'id':'f',vals:[35.311,35.335,35.317,35.351,35.313]},
            timeKey: new Date().getTime(),
            gzgsfdata:[
                {'id':'row1','vals':[0.702,30.775]},
                {'id':'row2','vals':[5.692,35.583]},
                {'id':'row3','vals':[10.675,40.602]},
                {'id':'row4','vals':[15.783,45.347]},
                {'id':'row5','vals':[20.572,50.583]},
                {'id':'row6','vals':[25.608,55.762]},
            ],
            xwbjfdata:[
                {'id':'row1','vals':[0.713,61.25]},
                {'id':'row2','vals':[10.826,71.243]},
                {'id':'row3','vals':[20.8,81.375]},
                {'id':'row4','vals':[31.1,91.3]},
                {'id':'row5','vals':[41.135,101.315]},
                {'id':'row6','vals':[51.168,111.2]},
            ],
            t:26.6
        }
    },
    methods:{
        submitData(){
            let sendMsg=encodeURI(JSON.stringify(this.tchndata))
            sendMsg+=encodeURI(JSON.stringify(this.gzgsfdata))
            sendMsg+=encodeURI(JSON.stringify(this.xwbjfdata))
            axios.post("http://124.71.157.88:80/submitShengSuCeLiang",sendMsg)
            console.log(sendMsg)
        },
        init(){
            let tchn_button_cal=document.querySelector('.tchn_button_cal')
            tchn_button_cal.addEventListener('click',this.tchn_cal)
            let gzgs_button_cal=document.querySelector('.gzgsf_button_cal')
            gzgs_button_cal.addEventListener('click',this.gzgsf_cal)
            let xwbjf_button_cal=document.querySelector('.xwbjf_button_cal')
            xwbjf_button_cal.addEventListener('click',this.xwbjf_cal)
        },
        tchn_cal(){
            flage1=1
            let sum_f=0
            let delta_f=[]
            let mean_f=0
            let mean_delta_f=0
            let sum_delta_f=0
            this.tchndata.vals.forEach(ele=>{
                sum_f+=ele*1
            })
            mean_f=sum_f/ this.tchndata.vals.length
            let i=0
            this.tchndata.vals.forEach(ele=>{
                delta_f[i]=Math.abs(ele*1-mean_f)
                sum_delta_f+=delta_f[i]
                i++
            })
            mean_delta_f=sum_delta_f/delta_f.length
            let delta_fs=document.querySelectorAll('.tchn .deltaf')
            i=0
            delta_fs.forEach(ele =>{
                ele.innerHTML=delta_f[i].toFixed(3)
                i++
            })
            let means=document.querySelectorAll('.tchn .mean')
            means[0].innerHTML=mean_f.toFixed(3)
            means[1].innerHTML=mean_delta_f.toFixed(3)
            if(flage1==1&&flage2==1&&flage3==1){
                    this.submitData()
                }
        },
        gzgsf_cal(){
            flage2=1
            // calculate the table
            let delta_fs=[]
            let delta_delta_Ls=[]
            let sum_delta_L=0
            let sum_delta_delta_L=0
            let mean_delta_L=0
            let mean_delta_delta_L=0
            let i=0
            // calculate delta_f and mean_delta_f
            this.gzgsfdata.forEach(ele =>{
                delta_fs[i]=ele.vals[1]*1-ele.vals[0]*1
                sum_delta_L+= delta_fs[i]
                i++
            })
            mean_delta_L=sum_delta_L/delta_fs.length
            // calculate delta_delta_L and  delta_delta_Ls[i]
            i=0
            delta_fs.forEach(ele =>{
                delta_delta_Ls[i]=Math.abs(ele-mean_delta_L)
                sum_delta_delta_L+=delta_delta_Ls[i]
                i++
            })
            mean_delta_delta_L=sum_delta_delta_L/delta_delta_Ls.length
            // show these result in table
            let tbs_delta_L=document.querySelectorAll('.gzgsf .delta_L')
            i=0
            tbs_delta_L.forEach(ele=>{
                ele.innerHTML=delta_fs[i].toFixed(3)
                i++
            })
            i=0
            let tbs_delta_delta_L=document.querySelectorAll('.gzgsf .delta_delta_L')
            tbs_delta_delta_L.forEach(ele =>{
                ele.innerHTML=delta_delta_Ls[i].toFixed(3)
                i++
            })
            let tbs_mean=document.querySelectorAll('.gzgsf .mean')
                tbs_mean[0].innerHTML=mean_delta_L.toFixed(3)
                tbs_mean[1].innerHTML=mean_delta_delta_L.toFixed(3)
// calculate the space of image
// get mean of f
            let tchn_tbs_mean=document.querySelectorAll('.tchn .mean')
            let mean_f=parseInt(tchn_tbs_mean[0].innerHTML)
            let mean_delta_f=parseInt(tchn_tbs_mean[1].innerHTML)
            let lameda_bar=2*mean_delta_L/6.0
            let delta_lameda_bar=2*mean_delta_delta_L/6.0
            let V_bar=lameda_bar*mean_f
            let Ev=delta_lameda_bar/lameda_bar+mean_delta_f/mean_f
            let delta_V=V_bar*Ev
            let Vs=(331.45+0.59*this.t)
            let delta_V_bar=Math.abs(V_bar-Vs)
            let E=100*delta_V_bar/Vs
            // show these result in space of image
            let lis=document.querySelectorAll('.gzgsf .image_space')
            lis[0].innerHTML=lameda_bar.toFixed(3)+"\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000"+delta_lameda_bar.toFixed(3)
            lis[1].innerHTML=V_bar.toFixed(3)+"\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000"+Ev.toFixed(3)
            lis[2].innerHTML=V_bar.toFixed(3)+'±'+delta_V.toFixed(3)+"\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000"+delta_V.toFixed(3)
            lis[3].innerHTML='\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000'+Vs.toFixed(3)
            lis[4].innerHTML='\u3000\u3000'+delta_V_bar.toFixed(3)+"\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000"+E.toFixed(3)
            if(flage1==1&&flage2==1&&flage3==1){
                    this.submitData()
                }
        },
        xwbjf_cal(){
            flage3=1
                        // calculate the table
            let delta_fs=[]
            let delta_delta_Ls=[]
            let sum_delta_L=0
            let sum_delta_delta_L=0
            let mean_delta_L=0
            let mean_delta_delta_L=0
            let i=0
            // calculate delta_f and mean_delta_f
            this.xwbjfdata.forEach(ele =>{
                delta_fs[i]=ele.vals[1]*1-ele.vals[0]*1
                sum_delta_L+= delta_fs[i]
                i++
            })
            mean_delta_L=sum_delta_L/delta_fs.length
            // calculate delta_delta_L and  delta_delta_Ls[i]
            i=0
            delta_fs.forEach(ele =>{
                delta_delta_Ls[i]=Math.abs(ele-mean_delta_L)
                sum_delta_delta_L+=delta_delta_Ls[i]
                i++
            })
            mean_delta_delta_L=sum_delta_delta_L/delta_delta_Ls.length
            // show these result in table
            let tbs_delta_L=document.querySelectorAll('.xwbjf .delta_L')
            i=0
            tbs_delta_L.forEach(ele=>{
                ele.innerHTML=delta_fs[i].toFixed(3)
                i++
            })
            i=0
            let tbs_delta_delta_L=document.querySelectorAll('.xwbjf .delta_delta_L')
            tbs_delta_delta_L.forEach(ele =>{
                ele.innerHTML=delta_delta_Ls[i].toFixed(3)
                i++
            })
            let tbs_mean=document.querySelectorAll('.xwbjf .mean')
                tbs_mean[0].innerHTML=mean_delta_L.toFixed(3)
                tbs_mean[1].innerHTML=mean_delta_delta_L.toFixed(3)
// calculate the space of image
// get mean of f
            let tchn_tbs_mean=document.querySelectorAll('.tchn .mean')
            let mean_f=parseInt(tchn_tbs_mean[0].innerHTML)
            let mean_delta_f=parseInt(tchn_tbs_mean[1].innerHTML)
            let lameda_bar=mean_delta_L/6.0
            let delta_lameda_bar=mean_delta_delta_L/6.0
            let V_bar=lameda_bar*mean_f
            let Ev=delta_lameda_bar/lameda_bar+mean_delta_f/mean_f
            let delta_V=V_bar*Ev
            let Vs=(331.45+0.59*this.t)
            let delta_V_bar=Math.abs(V_bar-Vs)
            let E=100*delta_V_bar/Vs
            // show these result in space of image
            let lis=document.querySelectorAll('.xwbjf .image_space')
            lis[0].innerHTML=lameda_bar.toFixed(3)+"\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000"+delta_lameda_bar.toFixed(3)
            lis[1].innerHTML=V_bar.toFixed(3)+"\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000"+Ev.toFixed(3)
            lis[2].innerHTML=V_bar.toFixed(3)+'±'+delta_V.toFixed(3)+"\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000"+delta_V.toFixed(3)
            lis[3].innerHTML='\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000'+Vs.toFixed(3)
            lis[4].innerHTML='\u3000\u3000'+delta_V_bar.toFixed(3)+"\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000"+E.toFixed(3)
            if(flage1==1&&flage2==1&&flage3==1){
                    this.submitData()
                }
        }
    },
    mounted:function(){
        this.init()
        // this.tchn_cal()
        // this.gzgsf_cal()
        // this.xwbjf_cal()
    }
}
</script>

<style scoped>
*{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}
.center{
    margin: auto;

}
table td{
    border: 1px solid;
    height: 30px;
}
div table{
    width: 800px;
    border-collapse: collapse;
}
.tchn td{
    width: 14%;
}
input{
    width: 50px;
}
li{
    display: inline-block;
    height: 80px;
    background-repeat: no-repeat;
    width: 800px;
    text-align: left;
    padding-left: 127px;
    padding-top: 20px;
}
li.spec{
    padding-top: 5px;
}
.tchn .warn{
    font-size: 20px;
}
button{
  font-size: 22px;
}
input{
    background: rgb(237, 240, 239);
}

</style>