<template>
    <div class="m-club">
        <div class="club-header">CLUB BASE</div>
        <div class="order">
            <span style="white-space:pre;">  </span><span class="line"></span>
            <span style="white-space:pre;">  </span><span class="txt">{{$t("Title.base")}}</span>
            <span style="white-space:pre;">  </span><span class="line"></span>
        </div>
        <div class="flex-club">
            <div class="flex-item" v-for="item in $t('clubImgs')" @click="clubSubmit(item)">
                <div><img :src="item.src"></div>
                <div>{{item.name}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            }
        },
        methods: {
            clubSubmit:function (item) {
               let url = item.url;
               this.$router.push(url);
            }
        },
        mounted() {
        }
    }

</script>

<style lang="scss" scoped>
    .m-club{width: 70%;margin: 0 auto;}
    .m-club .club-header{display: flex;justify-content: center;align-items: center;width:230px;height: 60px;border-left: 1px solid #f4bc88;border-right: 1px solid #f4bc88;border-top: 1px solid #f4bc88;color: #f4bc88;font-size:2rem;margin-top: 40px;}
    .m-club .order {margin-top: -14px;}
    .m-club .order .line {  display: inline-block;  width: 67px;  border-top: 1px solid #f4bc88;  }
    .m-club .order .txt {  color: #f4bc88;  vertical-align: middle; padding: 0 10px; }
    .flex-club {  display: flex;flex-wrap: wrap;}
    .flex-item{width: 33.3%;height: 200px; position: relative;margin-top: 30px;}
    .flex-item img{width: 90%;height: 180px;border-radius: 5px;}
    .flex-item div{text-align: center;color: #f4bc88;font-size:1.2rem;padding-top: 5px;}
</style>