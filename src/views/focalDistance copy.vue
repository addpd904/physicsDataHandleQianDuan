<template>
    <div class="Lab2 focalDistance center " >
      <div class="ziZhunFa">
        <h4>自准法测薄凸透镜焦距数据表格</h4>
        <div class="table center" >
            <table border="1" class="center" >
                <thead>
                    <tr>
                        <td align="center">次数</td>
                        <td align="center">物位置</td>
                        <td align="center">透镜位置</td>
                        <td align="center">焦距f '</td>
                        <td align="center">|delta_f '|</td>
                    </tr>
                </thead>
                <!--            row1-->
                <tr v-for="(items,i) in ZhiZhunFa" v-bind:key="i+timeKey">
                    <td>
                        {{ i+1 }}
                    </td>
                    <td v-for="(item,i) in items" v-bind:key="i+timeKey">
                        <input v-model="item.val">
                    </td>
                    <td></td>
                </tr>
                <!-- mean -->
                <tr class="mean">
                    <td colspan="3">
                        平均值
                    </td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
        </div>
        <div class="result">
            <label>K=</label>
            <label>{{"\u3000\u3000\u3000\u3000"}}</label>
            <label>
                R=
            </label>
        </div>
        <div>
            <el-button class="calculate_K_R" type="success" plain>计算</el-button>
        </div>
        <div><label>
            -----------------------------
        </label></div>
    </div>
    <div class="water center">
        <h4>水的表面张力系数</h4>
        <div class="table center">
            <!--        D1 D2-->
            <!-- <table border="1px" class="D1D2" >
                    <tr >
                        <td :key="timeKey+i" v-for="(item,i) in D1D2" >
                            <span v-if="i==0">D1 </span>
                            <span v-else>D2 </span>
                            <input v-model="item.val">
                        </td>

                    </tr>
            </table> -->
            
            <table border="1px" class="center">
  
                <tr >
                    <td>
                        测量次数
                    </td>
                    <td>
                        U1
                    </td>
                    <td>
                        U2
                    </td>
                    <td>
                        delta_U
                    </td>
                    <td>
                        F
                    </td>
                    <td>
                        a
                    </td>
                </tr>
                <!--            row2-->
                <tr  v-for="(items,i) in water" :key="i+timeKey">
                    <td>
                        {{ i+1 }}
                    </td>
                    <td v-for="(item,j) in items" :key="j+timeKey">
                        <input v-model="item.val">
                    </td>

                    <td>

                    </td>
                    <td>

                    </td>
                    <td>
<!--  -->
                    </td>
                </tr>
            </table>
        </div>


<!--     result   -->
        <label class="a">
            a=
        </label>
<!--        button-->
        <div>
            <el-button class="calculate" type="success" plain>计算</el-button>
        </div>

    </div>

    <div class="JiuJin center">
        <h4>酒精的表面张力系数</h4>
        <div class="table center">
            <!--        table-->
            <table border="1px" class="center">
                <!--            row1-->
                <tr>
                    <td>
                        测量次数
                    </td>
                    <td>
                        U1
                    </td>
                    <td>
                        U2
                    </td>
                    <td>
                        delta_U
                    </td>
                    <td>
                        F
                    </td>
                    <td>
                        a
                    </td>
                </tr>
                <!--            row2-->
                <tr v-for="(items,i) in alcohol" :key="i+timeKey">
                    <td>
                        {{ i+1 }}
                    </td>
                    <td v-for="(item,j) in items" :key="j+timeKey" >
                        <input v-model="item.val">
                    </td>

                    <td>

                    </td>
                    <td>

                    </td>
                    <td>

                    </td>
                </tr>
            </table>
        </div>


        <!--     result   -->
        <label class="a">
            a=
        </label>
        <!--        button-->
        <div>
            <el-button class="calculate" type="success" plain>计算</el-button>
        </div>

    </div>
    
    </div>
</template>
  
<script lang="ts">
import axios from 'axios'
//add func for calculate_K_R button
let btn_K_R=document.querySelector('.calculate_K_R')
let x=[1,1,1,1,1];
let y=[1,1,1,1,1];
let g=9.783;
let K=2489.44
//water
let btn=document.querySelector('.water .calculate')
let rows=document.querySelectorAll('.water div table tr')
//酒精
let btn_jiu=document.querySelector('.JiuJin .calculate')
let rows_jiu=document.querySelectorAll('.JiuJin div table tr')

let D1=3.5
let D2=3.292
let vueAddress=null
export default ({
    data() {
        return {
            ZhiZhunFa:[
                [{id:'wuPos',val:0.5},{id:'touJingPos',val:1.0},{id:'jiaoJv',val:1.5}],
                [{id:'wuPos',val:12.5},{id:'touJingPos',val:23.4},{id:'jiaoJv',val:36.0}],
                [{id:'wuPos',val:0.5},{id:'touJingPos',val:1.0},{id:'jiaoJv',val:1.5}],
                [{id:'wuPos',val:0.5},{id:'touJingPos',val:1.0},{id:'jiaoJv',val:1.5}],
                [{id:'wuPos',val:0.5},{id:'touJingPos',val:1.0},{id:'jiaoJv',val:1.5}]
            ],
            water:[
                // U1           U2
                [{id:0,val:46},{id:1,val:10}],
                [{id:0,val:46},{id:1,val:10}],
                [{id:0,val:46},{id:1,val:10}],
                [{id:0,val:46},{id:1,val:10}],
                [{id:0,val:46},{id:1,val:10}],
            ],
            alcohol:[
                // U1           U2
                [{id:0,val:26},{id:1,val:10}],
                [{id:0,val:26},{id:1,val:10}],
                [{id:0,val:26},{id:1,val:10}],
                [{id:0,val:26},{id:1,val:10}],
                [{id:0,val:26},{id:1,val:10}],
            ],
            timeKey:new Date().getTime()

        }
    },
    methods:{
        submitData(){
            let sendMsg=encodeURI(JSON.stringify(vueAddress.water))
            console.log(JSON.stringify(vueAddress.water))
            axios.post("http://5badc89c.r2.cpolar.top/submitZhangLiXiShu",sendMsg)
            console.log(sendMsg)
        },
        cal(){
            for (let i=1;i<5;i++){
                    x[i-1]=g*this.arr1[0][i].val;
                }
                for (let i=1;i<5;i++){
                    y[i-1]=this.arr1[1][i];
                }
            vueAddress=this;
            //calculate K and R
            // let arr=this.arr1;
            btn_K_R=document.querySelector('.calculate_K_R')
            let cal_K_R=function (){
                for (let i=0;i<vueAddress.arr1[0].length;i++){
                x[i]=g*parseFloat(vueAddress.arr1[0][i].val);
                }
                for (let i=0;i<vueAddress.arr1[1].length;i++){
                    y[i]=parseFloat(vueAddress.arr1[1][i].val);
                }
// html js css vue
                let sum_xi_x_yi_y=0;
                let sum_xi_x_2=0;
                let sum_yi_y_2=0;
                let mean_x=0;
                let mean_y=0;
                let sum_x=0,sum_y=0;
                for (let i = 0; i < x.length; i++) {
                    sum_x+=x[i];
                    sum_y+=y[i];
                }
                mean_x=sum_x/x.length;
                mean_y=sum_y/y.length;
                for (let i = 0; i < x.length; i++) {
                    sum_xi_x_yi_y+=(x[i]-mean_x)*(y[i]-mean_y);
                }
                for (let i = 0; i < x.length; i++) {
                    sum_xi_x_2+=(x[i]-mean_x)*(x[i]-mean_x);
                }
                for (let i = 0; i < y.length; i++) {
                    sum_yi_y_2+=(y[i]-mean_y)*(y[i]-mean_y);
                }
                let b=sum_xi_x_yi_y/sum_xi_x_2;
                K=b*1000;
                let r=sum_xi_x_yi_y/Math.sqrt(sum_xi_x_2*sum_yi_y_2);
            //    modify the label
                let labels=document.querySelectorAll('.sensor .result label')
                labels[0].innerHTML='K='+K.toFixed(6);
                // labels[1].innerText=
                labels[2].innerHTML='R='+r.toFixed(6);

            }

            btn_K_R.addEventListener('click',cal_K_R)

            //water
            btn=document.querySelector('.water .calculate')
            rows=document.querySelectorAll('.water div table tr')
           
            let cal=function (){
                D1=parseFloat(vueAddress.D1D2[0].val)
                D2=parseFloat(vueAddress.D1D2[1].val)
                let sum=0
                for (let i=0;i<vueAddress.water.length;i++){
                    let tds=rows[i+2].querySelectorAll('td');
                    //get the value of input
                    let values=vueAddress.water[i];
                    
                    let value1=parseFloat(values[0].val);
                    let value2=parseFloat(values[1].val);
                    //calculate delta_U
                    let delta_U=value1-value2
                    //assign the value to table
                    tds[3].innerText=delta_U.toFixed(6)
                //    calculate the F
                    let F=delta_U/K
                    tds[4].innerText=F.toFixed(6)
                    let a=F/(3.1415926*(D1+D2))*100
                    tds[5].innerText=a.toFixed(6)
                    sum+=a
                }
            //    calculate the mean of a
                let mean_a=sum/(vueAddress.water.length);
                let result=document.querySelector('.water .a')
                result.innerHTML='a='+mean_a.toFixed(6)
            }
            btn.addEventListener('click',cal)

            //酒精
            btn_jiu=document.querySelector('.JiuJin .calculate')
            rows_jiu=document.querySelectorAll('.JiuJin div table tr')

            let cal_jiu=function (){
                D1=parseFloat(vueAddress.D1D2[0].val)
                D2=parseFloat(vueAddress.D1D2[1].val)
                let sum=0
                for (let i=0;i<vueAddress.alcohol.length;i++){
                    let tds=rows_jiu[i+1].querySelectorAll('td')
                    //get the value of input
                    let values=vueAddress.alcohol[i];
                    let value1=parseFloat(values[0].val);
                    let value2=parseFloat(values[1].val);
                    //calculate delta_U
                    let delta_U=value1-value2
                    //assign the value to table
                    tds[3].innerText=delta_U.toFixed(6)
                    //    calculate the F
                    let F=delta_U/K
                    tds[4].innerText=F.toFixed(6)
                    let a=F/(3.1415926*(D1+D2))*100
                    tds[5].innerText=a.toFixed(6)
                    sum+=a
                    console.log("testjiujing")
                }
            //    calculate the mean of a
                let mean_a=sum/(vueAddress.alcohol.length);
                let result=document.querySelector('.JiuJin .a')
                result.innerHTML='a='+mean_a.toFixed(6)
                vueAddress.submitData()
            }
            btn_jiu.addEventListener('click',cal_jiu)
        }
    },

    mounted() {
        this.cal()
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
div .table{
    width: 60%;
}

div .calculate,.calculate_K_R{
    font-size: 20px;
}
div input{
    width: 55px;
}
.sensor label{
    background-color:rgba(0,0,0,0);
}
/* water */
.center{
    margin: auto;
}
</style>


  