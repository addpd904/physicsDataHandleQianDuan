function loadJs(src) {
    return new Promise((resolve,reject)=>{

      // // if there is script whose ID is addCalculate，we will not append the element
      // let scri=document.getElementById('addCalculate');
      // if(scri==null){
        let script = document.createElement('script');
        script.type = "text/javascript";
        script.src= src;
        script.id="addCalculate";
        document.body.appendChild(script);
        script.onload = ()=>{
          resolve();
        }
        script.onerror = ()=>{
          reject();
        }
      
        

    })
  }
   
  export default loadJs  