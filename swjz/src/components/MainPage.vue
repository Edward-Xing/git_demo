<template>
    <p class="page-container" @click="mianSubmit">我是主页面</p>
</template>
<script>
    export default {
        data() {
            return {
            }
        },
        methods: {
            mianSubmit:function () {
                this.$router.push('ghosts');
            }
        }
    }

</script>
<style lang="scss" scoped>
    .page-container {
        font-size: 20px;
        text-align: center;
        color: rgb(192, 204, 218);
    }
</style>