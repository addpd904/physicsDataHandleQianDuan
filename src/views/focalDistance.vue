<template>
    <div class="Lab2 focalDistance center " >
      <div class="ziZhunFa">
        <h4>自准法测薄凸透镜焦距数据表格</h4>
        <div class="table center" >
            <table border="1" class="center ziZhunFa" >
                <thead>
                    <tr>
                        <td align="center">次数</td>
                        <td align="center">物位置</td>
                        <td align="center">透镜位置</td>
                        <td align="center">焦距f '</td>
                        <td align="center">|∆f '|</td>
                    </tr>
                </thead>
                <!--            row1-->
                <tr v-for="(items,i) in ZhiZhunFa" v-bind:key="i+timeKey" >
                    <td>
                        {{ i+1 }}
                    </td>
                    <td v-for="(item,i) in items" v-bind:key="i+timeKey">
                        <input v-model="item.val">
                    </td>
                    <td class="jiaojv"></td>
                    <td class="deltaf"></td>
                </tr>
                <!-- mean -->
                <tr class="mean">
                    <td colspan="3">
                        平均值
                    </td>
                    <td class="mean_fpie"></td>
                    <td class="mean_deltaf"></td>
                </tr>
            </table>
        </div>
        <ul>
            <li class="ziZhunFaspace1f">
                

            </li>
        </ul>
        <!--        button-->
        <div>
            <el-button class="ziZhunFa_btn_cal" type="success" >计算</el-button>
        </div>
    
    </div>
    <!-- newline -->
    <br/>
    <br/>

    <div class="gongErFa">
        <h4>共轭法测薄凸透镜焦距数据表格</h4>
        <div class="table center" >
            <table border="1" class="center gongErFa" >
                <thead>
                    <!-- D -->
                    <tr>
                    <td colspan="5">D=
                        <input v-model="D">
                        ±0.01cm
                    </td>
                </tr>
                    <tr>
                        <td align="center">次数</td>
                        <td align="center">放大像位置A</td>
                        <td align="center">|∆A|</td>
                        <td align="center">缩小像位置B</td>
                        <td align="center">|∆B|</td>
                    </tr>
                </thead>
                <!--            row1-->
                <tr v-for="(items,i) in gongErFa" v-bind:key="i+timeKey">
                    <td>
                        {{ i+1 }}
                    </td>
                    <!-- A -->
                    <td  v-bind:key="i+timeKey">
                        <input v-model="items[0].val">
                    </td>
                    <!-- ∆A  -->
                    <td class="deltaA"></td>
                    <!-- B -->
                    <td  v-bind:key="i+timeKey">
                        <input v-model="items[1].val">
                    </td>
                    <!-- ∆B -->
                    <td class="deltaB"></td>
                </tr>
                <!-- mean -->
                <tr >
                    <td colspan="1">
                        平均值
                    </td>
                    <td v-for="i of 4" v-bind:key="i+timeKey" class="mean"></td>
                 
                </tr>
            </table>
        </div>
        <br/>
        <ul class="gongErFa ">
            <li class="image_space" v-for="i of 3" :key="i+timeKey" v-bind:style="{backgroundImage:'url('+require('../assets/gongErFa/'+i+'.png')+')'}" >
  
            </li>

        </ul>
        <!--        button-->
        <div>
            <el-button class="gongErFa_btn_cal" type="success" >计算</el-button>
        </div>

    </div>
    <br/>
    <br/>
    <div class="wuXiangGongSiFa">
        <h4>物像公式法测薄凹透镜焦距数据表格</h4>
        <div class="table center" >
            <table border="1" class="center wuXiangGongSiFa" >
                <thead>
                                  <!-- L2 -->
                <tr>
                    <td colspan="5">L2=
                        <input v-model="L2">
                        ±0.01cm
                    </td>
                </tr>
                    <tr>
                        <td align="center">次数</td>
                        <td align="center">虚像位置P1</td>
                        <td align="center">|∆P1|</td>
                        <td align="center">虚像位置P2</td>
                        <td align="center">|∆P2|</td>
                    </tr>
                </thead>
  
                <!--            row1-->
                <tr v-for="(items,i) in wuXiangGongSiFa" v-bind:key="i+timeKey+items[0].id">
                    <td>
                        {{ i+1 }}
                    </td>
                    <!-- 虚像位置P1 -->
                    <td >
                        <input v-model="items[0].val">
                    </td>
                    <!-- |∆P1| -->
                    <td class="delta_P1"></td>
                    <!-- 虚像位置P2 -->
                    <td >
                        <input v-model="items[1].val">
                    </td>
                    <!-- |∆P2| -->
                    <td class="delta_P2"></td>
                </tr>
                <!-- mean -->
                <tr >
                    <td >
                        平均值
                    </td>
                   <td class="mean" v-for="i of 4" v-bind:key="i+timeKey"></td>
                </tr>
            </table>
        </div>
        <br/>
        <ul class="wuXiangGongSiFa center">
            <li class="image_space" v-for="i of 2" v-bind:key="i+timeKey" v-bind:style="{backgroundImage:'url('+require('../assets/wuXiangGongSiFa/'+i+'.png')+')'}">
                
            </li>
            <li class="image_space spec"  v-bind:style="{backgroundImage:'url('+require('../assets/wuXiangGongSiFa/3.png')+')'}">
                
            </li>
            <li class="image_space" v-bind:style="{backgroundImage:'url('+require('../assets/wuXiangGongSiFa/4.png')+')'}">
                
            </li>
        </ul>

        <!--        button-->
        <div>
            <el-button class="wuXiangGongSiFa_btn_cal" type="success" >计算</el-button>
        </div>

    </div>
    <br>
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
//add func for calculate_K_R button
export default ({
    data() {
        return {

            ZhiZhunFa:[
                [{id:'wuPos',val:108.1},{id:'touJingPos',val:96.2}],
                [{id:'wuPos',val:105.4},{id:'touJingPos',val:93.3}],
                [{id:'wuPos',val:106.42},{id:'touJingPos',val:94.42}],
                [{id:'wuPos',val:107.55},{id:'touJingPos',val:95.66}],
                [{id:'wuPos',val:106.45},{id:'touJingPos',val:94.42}]
            ],
            // 共轭法
            D:66.2,
           gongErFa:[   [{id:'fdxwzA',val:95.24},{id:'sxxwzB',val:60.24}],
                        [{id:'fdxwzA',val:95.52},{id:'sxxwzB',val:60.36}],
                        [{id:'fdxwzA',val:95.38},{id:'sxxwzB',val:60.32}],
                        [{id:'fdxwzA',val:95.26},{id:'sxxwzB',val:60.20}],
                        [{id:'fdxwzA',val:95.44},{id:'sxxwzB',val:60.38}]
                    ],
                    // 物象公式法
            L2:41.2,
            wuXiangGongSiFa:[
                        [{id:'xxwzP1',val:35.28},{id:'sxwzP2',val:30.87}],
                        [{id:'xxwzP1',val:35.32},{id:'sxwzP2',val:30.98}],
                        [{id:'xxwzP1',val:34.98},{id:'sxwzP2',val:31.10}],
                        [{id:'xxwzP1',val:35.20},{id:'sxwzP2',val:30.97}],
                        [{id:'xxwzP1',val:35.18},{id:'sxwzP2',val:31.20}]
            ],
            timeKey:new Date().getTime()

        }
    },
    methods:{
        submitData(){
            let sendMsg=encodeURI(JSON.stringify(this.ziZhunFa))
            sendMsg+=encodeURI(JSON.stringify(this.D))
            sendMsg+=encodeURI(JSON.stringify(this.gongErFa))
            sendMsg+=encodeURI(JSON.stringify(this.L2))
            sendMsg+=encodeURI(JSON.stringify(this.wuXiangGongSiFa))

            axios.post("http://124.71.157.88:80/submitFocalDistance",sendMsg)
        },
        getTimeKey(){
            return new Date().getTime()
        }
        ,
        cal_ziZhunFa(){
            flage1=1
            let sum_fpie=0;
            // calculate fpie
            let fpies=[];
            let i=0;
            this.ZhiZhunFa.forEach(element => {
                fpies[i]=element[0].val-element[1].val
                sum_fpie+=fpies[i];
                i++
            });
            // get tbs
            i=0
            let tbs_jiaojv=document.querySelectorAll('.ziZhunFa .jiaojv')
            tbs_jiaojv.forEach(ele => {
                ele.innerHTML=fpies[i].toFixed(5)
                i++
            })
            // calculate mean of fpie
            let mean_fpie=sum_fpie/fpies.length
            let mean_fpietb=document.querySelector('.ziZhunFa .mean_fpie')
            mean_fpietb.innerHTML=mean_fpie.toFixed(5)
            // calculate deltaf
            let deltafs=[];
            let sum_deltaf=0
            i=0
            fpies.forEach(ele =>{
                deltafs[i]=Math.abs(mean_fpie-ele)
                sum_deltaf+=deltafs[i]
                i++
            })
            let tbs_deltafs=document.querySelectorAll('.ziZhunFa .deltaf')
            i=0
            tbs_deltafs.forEach(ele => {
                ele.innerHTML=deltafs[i].toFixed(5)
                i++
            })
            // calculate mean of deltaf
            let mean_deltaf=sum_deltaf/deltafs.length
            let mean_deltaftb=document.querySelector('.ziZhunFa .mean_deltaf')
            mean_deltaftb.innerHTML=mean_deltaf.toFixed(5)
            // calculate the final fpie
            let final_fpieli=document.querySelector('.ziZhunFa ul .ziZhunFaspace1f')
            final_fpieli.innerHTML=mean_fpie.toFixed(2)+'±'+mean_deltaf.toFixed(3)
            if(flage1==1&&flage2==1&&flage3==1){
                    this.submitData()
                }

        }
        ,
        cal_gongErFa(){
            flage2=1
            // calculate mean_A
            let sum_A=0;
            let mean_A=0;
            this.gongErFa.forEach(ele=>{
                sum_A+=ele[0].val*1
            })
            mean_A=sum_A/this.gongErFa.length
            // calculate deltaA and mean_delataA
            let deltaAs=[];
            let sum_deltaA=0;
            let mean_deltaA=0;
            let i=0;
            this.gongErFa.forEach(ele=>{
                deltaAs[i]=Math.abs(ele[0].val*1-mean_A)
                sum_deltaA+=deltaAs[i]
                i++
            })
            mean_deltaA=sum_deltaA/deltaAs.length
             // calculate mean_B
             let sum_B=0;
            let mean_B=0;
            this.gongErFa.forEach(ele=>{
                // string to int
                sum_B+=ele[1].val*1
            })
            mean_B=sum_B/this.gongErFa.length
            // calculate deltaB and mean_deltaB
            let deltaBs=[];
            let sum_deltaB=0;
            let mean_deltaB=0;
            i=0;
            this.gongErFa.forEach(ele=>{
                deltaBs[i]=Math.abs(ele[1].val-mean_B)
                sum_deltaB+=deltaBs[i]
                i++
            })
            mean_deltaB=sum_deltaB/deltaBs.length
            // show these value in html
            let tbs_deltaA=document.querySelectorAll('.gongErFa .deltaA')
            i=0
            tbs_deltaA.forEach(ele=>{
                ele.innerHTML=deltaAs[i].toFixed(5)
                i++
            })
            let tbs_deltaB=document.querySelectorAll('.gongErFa .deltaB')
            i=0
            tbs_deltaB.forEach(ele=>{
                ele.innerHTML=deltaBs[i].toFixed(5)
                i++
            })
            let tbs_mean=document.querySelectorAll('.gongErFa .mean')
            tbs_mean[0].innerHTML=mean_A.toFixed(4)
            tbs_mean[1].innerHTML=mean_deltaA.toFixed(4)
            tbs_mean[2].innerHTML=mean_B.toFixed(4)
            tbs_mean[3].innerHTML=mean_deltaB.toFixed(4)

            // calcuate for space of image
            let d=Math.abs(mean_A-mean_B)
            let delta_d=Math.abs(mean_deltaA)+Math.abs(mean_deltaB)
            let mean_fpie=(this.D*this.D-d*d)/(4*this.D)
            let mean_delta_f=d*delta_d/(2*this.D)+(this.D*this.D+d*d)*0.05/(4*this.D)
            let fpie=mean_fpie+mean_delta_f

            // show these value in image
            let image_space_lis=document.querySelectorAll('.gongErFa .image_space')
                image_space_lis[0].innerHTML=d.toFixed(3)+'\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000'+delta_d.toFixed(3)
                image_space_lis[1].innerHTML=mean_fpie.toFixed(3)+'\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000'+mean_delta_f.toFixed(3)
                image_space_lis[2].innerHTML=fpie.toFixed(3)
                if(flage1==1&&flage2==1&&flage3==1){
                    this.submitData()
                }

        }
        ,
        cal_wlgsFa(){
            flage3=1
            // calculate mean_P1
            let sum_P1=0;
            let mean_P1=0;
            this.wuXiangGongSiFa.forEach(ele=>{
                sum_P1+=ele[0].val*1
            })
            mean_P1=sum_P1/this.wuXiangGongSiFa.length
            // calculate deltaP1 and mean_delataP1
            let deltaP1s=[];
            let sum_deltaP1=0;
            let mean_deltaP1=0;
            let i=0;
            this.wuXiangGongSiFa.forEach(ele=>{
                deltaP1s[i]=Math.abs(ele[0].val*1-mean_P1)
                sum_deltaP1+=deltaP1s[i]
                i++
            })
            mean_deltaP1=sum_deltaP1/deltaP1s.length
                       // calculate mean_P2
            let sum_P2=0;
            let mean_P2=0;
            this.wuXiangGongSiFa.forEach(ele=>{
                sum_P2+=ele[1].val*1
            })
            mean_P2=sum_P2/this.wuXiangGongSiFa.length
            // calculate deltaP2 and mean_delataP2
            let deltaP2s=[];
            let sum_deltaP2=0;
            let mean_deltaP2=0;
            i=0;
            this.wuXiangGongSiFa.forEach(ele=>{
                deltaP2s[i]=Math.abs(ele[1].val*1-mean_P2)
                sum_deltaP2+=deltaP2s[i]
                i++
            })
            mean_deltaP2=sum_deltaP2/deltaP2s.length
             // show these value in html
             let tbs_deltaP1=document.querySelectorAll('.wuXiangGongSiFa .delta_P1')
            i=0
            tbs_deltaP1.forEach(ele=>{
                ele.innerHTML=deltaP1s[i].toFixed(5)
                i++
            })
            let tbs_deltaP2=document.querySelectorAll('.wuXiangGongSiFa .delta_P2')
            i=0
            tbs_deltaP2.forEach(ele=>{
                ele.innerHTML=deltaP2s[i].toFixed(5)
                i++
            })
            let tbs_mean=document.querySelectorAll('.wuXiangGongSiFa .mean')
            tbs_mean[0].innerHTML=mean_P1.toFixed(4)
            tbs_mean[1].innerHTML=mean_deltaP1.toFixed(4)
            tbs_mean[2].innerHTML=mean_P2.toFixed(4)
            tbs_mean[3].innerHTML=mean_deltaP2.toFixed(4)
            // calcuate for space of image
            let u=Math.abs(mean_P1-this.L2)
            let v=Math.abs(mean_P2-this.L2)
            let mean_fpie=Math.abs(u*v/(v-u))
            let pingFangGen=Math.sqrt(Math.pow(mean_P2-this.L2,4)*Math.pow(mean_deltaP1,2)+Math.pow(mean_P1-this.L2,4)*Math.pow(mean_deltaP2,2))
            let mean_delta_fpie=pingFangGen/Math.pow(mean_P2-mean_P1,2)
            let final_fpie=mean_fpie+mean_delta_fpie
             // show these value in image
             let image_space_lis=document.querySelectorAll('.wuXiangGongSiFa .image_space')
                image_space_lis[0].innerHTML=u.toFixed(3)+'\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000'+v.toFixed(3)
                image_space_lis[1].innerHTML=mean_fpie.toFixed(3)
                image_space_lis[2].innerHTML=mean_delta_fpie.toFixed(3)
                image_space_lis[3].innerHTML=final_fpie.toFixed(3)
                // set padding for third li
                if(flage1==1&&flage2==1&&flage3==1){
                    this.submitData()
                }
        }
        ,
        init(){
           let ziZhunFa_btn_cal=document.querySelector('.ziZhunFa_btn_cal')
            ziZhunFa_btn_cal.addEventListener('click',this.cal_ziZhunFa)
            let gongErFa_btn_cal=document.querySelector('.gongErFa_btn_cal')
            gongErFa_btn_cal.addEventListener('click',this.cal_gongErFa)
            let wuXiangGongSiFa_btn_cal=document.querySelector('.wuXiangGongSiFa_btn_cal')
            wuXiangGongSiFa_btn_cal.addEventListener('click',this.cal_wlgsFa)

        }
    },

    mounted() {
        this.init()
    },

})

</script>

<style scoped>
*{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}

/*css*/
div table{
    text-align: center;
    border-collapse: collapse;
    border-width: 1px;
    padding: 8px;
}
table tr td{
    width: 100px;
}
div {
    text-align: center;
    margin: auto;
}
div label{
    width: 200px;
    font-size: 20px;
}
div table{
    width: 800px;
}

div input{
    width: 55px;
}


.center{
    margin: auto;
}
li  {
    background-repeat: no-repeat;
    display: inline-block;
}
/* fill img ,space */
.ziZhunFa .ziZhunFaspace1f{
    height: 50px;
    width: 300px;
    display:inline-block;
    background: url(../assets/ziZhunFa/1f.png);
    font-size: 20px;
    padding-top: 10px;
    padding-left: 100px;
}
.gongErFa .image_space{
    height: 70px;
    width: 900px;
    display:inline-block;
    font-size: 20px;
    padding-top: 20px;
    padding-left: 150px;
    text-align: left;
}
.wuXiangGongSiFa .image_space{
    height: 80px;
    width: 900px;
    display:inline-block;
    font-size: 20px;
    padding-top: 16px;
    padding-left: 150px;
    text-align: left;
}
.wuXiangGongSiFa ul .spec{
    height: 80px;
    width: 900px;
    display:inline-block;
    font-size: 20px;
    padding-top: 25px;
    padding-left: 540px;
    text-align: left;
}
button{
  font-size: 22px;
}
input{
    background: rgb(237, 240, 239);
}
div td{
    border: 1px solid;
    height: 30px;
}
</style>


  