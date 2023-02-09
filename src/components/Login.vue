<template>
  <div class="login">
    <div class="container">
      <div class="login__bacground">
        <div class="login__items">
          <my-button class="login__enter log-btn">Войти</my-button>
          <my-button class="login__reg log-btn">Регистрация</my-button>
        </div>
        <my-input placeholder="Введите имя" :text="name"> </my-input>
        <my-input placeholder="Введите фамилию" :text="surname"> </my-input>
        <my-input placeholder="Введите email" :text="email"> </my-input>
        <my-input placeholder="Введите пароль" :text="password" :type="paswd">
        </my-input>
        <my-input
          placeholder="Поддтвердите пароль"
          :text="confirmPassword"
          :type="paswd"
        >
        </my-input>

        <div class="login__accept">
          <my-button class="login__btn">Регистрация</my-button>
          <div class="bb"></div>
          <my-button class="login__google"
            >Продолжить с <strong>Google</strong></my-button
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      name: "Имя",
      surname: "Фамилия",
      email: "E-mail",
      password: "Пароль",
      confirmPassword: "Поддтвердите пароль",
      paswd: "password",
    };
  },
};
</script>
<style lang="scss" scoped>
.login {
  background: #985ace;
  height: 100vh;
  overflow: hidden;
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
  &__items {
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
