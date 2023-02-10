<template>
    <div class="navbar">
        <div class="container">
            <div class="navbar__wrapper">
                <ul class="navbar__list">
                    <li>About</li>
                    <li>Сatalog</li>
                    <li>Shipping and payment</li>
                </ul>
                <div class="navbar__btn">
                    <my-button @click="ToComeIn" class="navbar__btn">Войти</my-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'navbar',
    methods: {
        ToComeIn(){
            return this.$router.push('/login')
        }
    },
}
</script>
<style lang="scss">
.container{
    width: 1000px;
    margin: 0 auto;
}

.navbar{
    margin-top: 40px;

    &__wrapper{
        display: flex;
        justify-content: space-between;
    }

    &__list{
        display: flex;
    }

    &__list li{
        margin-left: 40px;
        font-weight: 400;
        font-size: 17px;
        line-height: 20px;
        text-transform: uppercase;
    }

    &__btn{
        width: 120px;
        height: 30px;
        font-weight: 600;
    }

.navbar__btn:hover{
    transition: 0.1s ease;
    background: black;
    color: white;
    border-radius: 7px;
    font-weight: 600;
}
}
</style>