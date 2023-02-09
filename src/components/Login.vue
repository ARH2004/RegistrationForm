<template>
  <div class="login">
    <div class="container">
      <div class="login__bacground">
        <my-input
        placeholder="Введите имя" 
        :text="name"
        >
    </my-input>
        <my-input 
        placeholder="Введите фамилию" 
        :text="surname"
        >
    </my-input>
        <my-input 
        placeholder="Введите email" 
        :text="email"
        >
    </my-input>
        <my-input 
        placeholder="Введите пароль" 
        :text="password"
        >
    </my-input>
        <my-input
          placeholder="Поддтвердите пароль"
          :text="confirmPassword"
          >
    </my-input>

    <div class="login__accept">
        <my-button class="login__btn">Регистрация</my-button>
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
    };
  },
};
</script>
<style lang="scss" scoped>
.login {
  background: #985ace;
  height: 100vh;
  overflow: hidden;
  &__bacground{
    background: white;
    padding: 165px 105px 0 85px;
    width: 500px;
    height: 700px;
    box-shadow: 0px 4px 17px rgba(0, 0, 0, 0.17);
    border-radius: 30px;
  }
  &__accept{
    margin-top: 40px;
  }
  &__btn{
    width: 320px;
    height: 55px;
    color: white;
  }
}

.container {
  width: 400px;
  margin-top: 70px;
}
</style>
