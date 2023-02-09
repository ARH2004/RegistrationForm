<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>
<script>
export default {
    name: 'my-button'
}
</script>
<style lang="scss">
.btn{
    text-align: center;
    text-transform: uppercase;
    background: #985ACE;
    border-radius: 7px;
}
</style>