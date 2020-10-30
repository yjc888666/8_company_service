<template>
  
<div class="center">
  <!-- <canvas id="canvas" class="canvas">     </canvas> -->
  <div class="main">
      <a-spin tip="正在登陆中..."  :spinning="spinning">
      <div class="spin-content">

      </div>
    </a-spin>
      <!-- <div :class="reg" id="a-container" v-show="flag">
        <form class="form" id="a-form" method="" action="">
          <h2 class="form_title title">会员注册</h2>
          <div class="form__icons"><img class="form__icon" src="../assets/img/1.svg" alt=""><img class="form__icon" src="../assets/img/2.svg"></div><span class="form__span">or use email for registration</span>
          <input class="form__input" type="text" placeholder="Name">
          <input class="form__input" type="text" placeholder="Email">
          <input class="form__input" type="password" placeholder="Password">
          <button class="form__button button submit switch-btn" @click="getButtons" >注册</button>
        </form>
      </div>   -->
      <div :class="login" id="b-container" >
        <div class="form" id="b-form">
          <h2 class="form_title title">8号企服管理系统</h2>
          <div class="form__icons"><img class="form__icon" src="../assets/img/3.svg"></div><span class="form__span">or use your email account</span>
          <input class="form__input" type="text" placeholder="Email" v-model="info.name">
          <input class="form__input" type="password" placeholder="Password" v-model="info.password"><a class="form__link">忘记密码?</a>
          <button class="switch__button button switch-btn" @click="getButtons">登录</button>
        </div>
      </div>
      
<!--      
      <div :class="switchStyle" id="switch-cnt"  >
        <div class="switch__circle"></div>
        <div class="switch__circle switch__circle--t"></div>
        <div :class="switch__container" id="switch-c1" v-show="flag">
          <h2 class="switch__title title">Welcome Back !</h2>
          <p class="switch__description description">To keep connected with us please login with your personal info</p>
          <button class="switch__button button switch-btn" @click="changeForm">登录</button>
        </div>
        <div :class="switch__container2" id="switch-c2" v-show="!flag">
          <h2 class="switch__title title">Hello Friend !</h2>
          <p class="switch__description description">Enter your personal details and start journey with us</p>
          <button class="switch__button button switch-btn" @click="changeForm">注册</button>
        </div>
      </div> -->
      
    </div>
   
   
</div>
  
</template>



<script>
  import { getCurrentInstance } from 'vue'
 import Login from '../services'
 import {useRouter} from 'vue-router'
 import {useStore} from 'vuex';
  import {ref,onMounted, reactive, computed,watch} from 'vue'
   import Stars from '../assets/js/Star'
    import Moon from '../assets/js/Moon'
    import Meteor   from '../assets/js/Meteor'
   
     export default {
   name:'login',
   setup(props,context){
    //获取vue实例对象
     const { ctx } = getCurrentInstance();

     let spinning=ref(false);
     //初始化登录的信息
     let info=reactive({
       name:'',
       password:'',
     })
   
     const store=useStore();

     
            //  state=store.state;
      // if(store.state.status){
       
      // }
      // else {
      
      // }


     let flag=ref(false);
     let switchStyle=ref('switch');
    //  let switch__container=ref('switch__container')
    //  let switch__container2=ref('switch__container is-hidden')
     let reg=ref('container a-container')
     let login=ref('container b-container')
    const router=useRouter();


    let  getButtons = async () => {
      spinning.value=true;
       console.log(info)
       console.log(store) 
        if(await Login(store,info)==true){
           ctx.$notification.success({
           style:'border-radius:20px',
           message: '登陆成功!',
           duration:2
           })
          setTimeout(()=>{
             spinning.value=false;
          },1000)
         router.push('/homePage')
          // console.dir(router)
        }
        else {
           ctx.$notification.error({
            style:'border-radius:20px',
            // top:20,
            message: '登陆失败!',
            description:'用户名或者密码错误!',
            duration:2
       })
         setTimeout(()=>{
             spinning.value=false;
          },1000)
         
          console.log('用户名或者密码错误')
           console.dir(router)
        }

    }
    let changeForm=(e)=>{
        flag.value=!flag.value
        if(flag.value){
        // switch__container2='switch__container is-hidden'
          reg='container a-container is-txl'
        }
        else{
        //  switch__container="switch__container is-hidden"
         login='container b-container is-txl is-z200'
        }
         console.log(flag)
        console.log(e)
         console.log('denglu')
        switchStyle='is-gx'
        console.log(switchStyle);
        setTimeout(()=>{
          switchStyle='switch'
        },1500)
         switchStyle='is-txr'
       
    }
    let mianf=(e)=>{
      // getButtons(e);
      changeForm(e);
    }
    window.addEventListener('load',mianf)
    onMounted(()=>{
      //  let canvas = document.getElementById('canvas'),
      //           ctx = canvas.getContext('2d'),
      //           width = window.innerWidth,
      //           height = window.innerHeight,
      //       //实例化月亮和星星。流星是随机时间生成，所以只初始化数组
      //           moon = new Moon(ctx, width, height),
      //           stars = new Stars(ctx, width, height, 200),
      //           meteors = [],
      //           count = 0
      //       canvas.width = width;
      //       canvas.height = height;
      //       const meteorGenerator = ()=> {
      //           //x位置偏移，以免经过月亮
      //           let x = Math.random() * width + 800
      //           meteors.push(new Meteor(ctx, x, height))
      //           //每隔随机时间，生成新流星
      //           setTimeout(()=> {
      //               meteorGenerator()

      //           }, Math.random() * 2000)
      //       }
      //       const frame = ()=>{
      //           count++
      //           count % 10 == 0 && stars.blink()
      //           moon.draw()
      //           stars.draw()
      //           meteors.forEach((meteor, index, arr)=> {
      //               //如果流星离开视野之内，销毁流星实例，回收内存
      //               if (meteor.flow()) {
      //               meteor.draw()
      //           } else {
      //               arr.splice(index, 1)
      //           }
      //       })
      //           requestAnimationFrame(frame)
      //       }
      //       meteorGenerator()
      //       frame()
    })

        


    return {
      info,
      // userData:computed(()=>state.userData),
      flag,
      switchStyle,
      getButtons,
      changeForm,
      mianf,
      reg,
      login,
      spinning
      // switch__container,
      // switch__container2
    }
   }

}
</script>

<style scoped>
@import '../style/login.css';
 .center {
  
   
 }
 .main{
     margin: 8% auto;
     /* z-index: 99;
     position: absolute;
     left: 50%; */
     /* padding-top: 20%; */
 }
 .spin-content {
  border: 1px solid #91d5ff;
  background-color: #e6f7ff;
  padding: 30px;
 
}


 /* .canvas {
 
        position: relative;
        z-index: 0;
        height: 100vh;
        width:100vw;
    } */

 /* .slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(0.2, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
 {
  transform: translateY(50px);
  opacity: 0;
} */


/* .slide-fade2-enter-active {
  transition: all .3s ease;
}
.slide-fade2-leave-active {
  transition: all .8s cubic-bezier(0.2, 0.5, 0.8, 1.0);
}
.slide-fade2-enter, .slide-fade-leave-to
 {
  transform: translateX(-20px);
  opacity: 0;
} */
</style>