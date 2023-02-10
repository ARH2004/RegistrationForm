<template>
<div class="login">
  <div class="container">
    <div class="login__bacground">
      <div class="login__items">
        <my-button @click="this.$router.push('/login')" class="login__enter log-btn">Войти</my-button>
        <my-button @click="this.$router.push('/registration')" class="login__reg log-btn">Регистрация</my-button>
      </div>
      <my-input placeholder="Введите email" :text="email" v-model="modelEmail"></my-input>
      <my-input placeholder="Введите пароль" v-model="testPaswdOne" :text="password" :type="paswd"></my-input>
      <div class="login__accept">
        <my-button class="login__btn" @click="registr">Войти</my-button>
        <div class="bb"></div>
        <my-button class="login__google">Продолжить с <strong>Google</strong></my-button>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'log',
  data() {
    return {
      name: "Имя",
      surname: "Фамилия",
      email: "E-mail",
      password: "Пароль",
      paswd: "password",
      testPaswdOne: "",
      modelEmail: "",
      userArray: []
    };
  },
  methods: {
    registr() {
      const userName = {
        name: this.modelName,
        surname: this.modelSurname,
      };
      this.userArray.push(userName);
      this.$router.push('/')
    },
  },
}
</script>
<style lang="scss" scoped>
.login {
      background: #985ace;
      height: 100vh;
      overflow-x: hidden;
  
      &__bacground {
        background: white;
        padding: 80px 105px 0 85px;
        width: 500px;
        height: 750px;
        box-shadow: 0px 4px 17px rgba(0, 0, 0, 0.17);
        border-radius: 30px;
      }
  
      &__accept {
        margin-top: 40px;
      }
  
      &__btn {
        width: 320px;
        height: 55px;
        color: white;
      }
  
      &__enter {
        margin: 0px 0 40px 5px;
      }
  
      &__reg {
        margin: 0px 0 40px 15px;
      }
  
      &__google {
        margin-top: 30px;
        width: 320px;
        height: 55px;
        background: white;
        border: 1px solid #985ace;
      }
  
      &__passNotpass {
        margin-left: 10px;
        text-transform: lowercase;
        color: red;
      }
    }
  
    .bb {
      border-bottom: 2px solid black;
      margin: 30px 0 0 12px;
    }
  
    .log-btn {
      background: none;
      text-transform: uppercase;
      font-weight: 700;
      font-size: 14px;
      line-height: 17px;
    }
  
    .container {
      width: 400px;
      margin-top: 70px;
    }
</style>