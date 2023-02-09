<template>
    <div class="main">
        <div class="container">
            <Navbar />
        </div>
    </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue'
export default {
    name: 'v-main',
    components: {Navbar}
}
</script>
<style lang="scss" scoped>
.main {
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

.container {
    width: 1000px;
    margin: 0 auto;
}
</style>