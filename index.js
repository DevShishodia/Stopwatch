const start_btn = document.getElementById('start');

const stop_btn = document.getElementById('stop');

const reset_btn = document.getElementById('reset'); 

const lap_btn = document.getElementById('lap');

const container = document.getElementById('container');
const ptens =document.getElementById('tens');
const pseconds = document.getElementById('seconds');
const pminutes = document.getElementById('minutes');

let intervalId =0;
let  i=0;
let tens = 0;
let seconds = 0;
let minutes = 0;


start_btn.addEventListener('click',function(){

  start_btn.innerText ="Resume";
  start_btn.classList.add('d-none');
  stop_btn.classList.remove('d-none');
  lap_btn.classList.remove('d-none');
  reset_btn.classList.add('d-none');
  
       intervalId = setInterval(() =>{
           ++tens;
          
           if(tens <= 9){
           ptens.innerText=`0${tens}`;
           }
           else if(tens <= 99){
           ptens.innerText = tens;
           }
           else if( seconds < 9){
           tens = 0;
           seconds++;
            pseconds.innerText =` 0${seconds}:`  ;
           }else if(seconds <=58){
             tens=0;
            seconds++;
            pseconds.innerText =`${seconds}:` ;
           }
           else if(minutes < 9){
             tens=0;
             seconds = 0;
             minutes++;
             pseconds.innerText = "00:"
            pminutes.innerText = `0${minutes}:`;
           }else if(minutes <= 59){
            tens=0;
            seconds = 0;
             minutes++;
             pseconds.innerText = "00:"
              pminutes.innerText = `${minutes}:`;
           }else{
             tens= 0;
             seconds =0;
             minutes =0;
             ptens.innerText=` 0${0}`;
             pseconds.innerText=`0${0}:`;
             pminutes.innerText=`0${0}:`;;
           }
           
         
          
        },0) ;
});




stop_btn.addEventListener('click',function(e){
  stop_btn.classList.add('d-none');
  lap_btn.classList.add('d-none');
  reset_btn.classList.remove('d-none');
  start_btn.classList.remove('d-none');
    clearInterval(intervalId);
});


reset_btn.addEventListener('click',function(){
  
  start_btn.innerText = "Start";
  stop_btn.classList.add('d-none');
  reset_btn.classList.add('d-none');
  lap_btn.classList.add('d-none');
  intervalId =  clearInterval(intervalId);
  tens=0;
  seconds=0;
  ptens.innerText= `${0}0`;
  pseconds.innerText=`0${0}:`;
  pminutes.innerText=`0${0}:`;
  container.innerText = "";

});

lap_btn.addEventListener('click',function(){
   const data =document.createElement('p');
   data.classList.add('showLap');
      
   if(tens <= 9 && seconds <=9 && minutes <=9){
    data.innerText =` ->  0${minutes}:0${seconds}:0${tens}`;
    }
    if(tens > 9 && seconds <=9 && minutes <=9){
      data.innerText =`->  0${minutes}:0${seconds}:${tens}`;
      }
      if(tens  <= 9 && seconds > 9 && minutes <=9){
        data.innerText =`->  0${minutes}:${seconds}:0${tens}`;
        }
        if(tens > 9 && seconds > 9 && minutes <=9){
          data.innerText =`->  0${minutes}:${seconds}:${tens}`;
          }
          if(tens <= 9 && seconds <=9 && minutes > 9){
            data.innerText =`->  ${minutes}:0${seconds}:0${tens}`;
            }
            if(tens > 9 && seconds <=9 && minutes > 9){
              data.innerText =`->  ${minutes}:0${seconds}:${tens}`;
              }
              if(tens <= 9 && seconds >9 && minutes > 9){
                data.innerText =`->  ${minutes}:${seconds}:0${tens}`;
                }
                if(tens > 9 && seconds >9 && minutes > 9){
                  data.innerText =`->  ${minutes}:${seconds}:${tens}`;
                  }
    container.appendChild(data) ;
});

