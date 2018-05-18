<template>
    <div class="m-carriages">
        <div class="carr-header">FOUR CARR ACGRS</div>
        <div class="order">
            <span style="white-space:pre;">  </span><span class="line" :style="lineWidth"></span>
            <span style="white-space:pre;">  </span><span class="txt">{{$t("Title.carr")}}</span>
            <span style="white-space:pre;">  </span><span class="line" :style="lineWidth"></span>
        </div>
        <div class="flex-carr">
            <div class="flex-item" v-for="item in $t('carrData')" @click="crrSubmit(item)">
                <div style="width: 60%;background-color: #cd9e70;height: 300px;">
                    <h4 class="fa fa-address-card" aria-hidden="true"></h4>
                    <h5>{{item.firname}}</h5>
                    <p class="carr-name">{{item.secname}}</p>
                    <hr style="height:1px;border:none;border-top:1px solid #555555;width: 70%;" />
                    <h6>{{item.tirname}}</h6>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            lineWidth:function () {
                let lang = this.$store.getters.language;
                if(lang==='en'){
                    return 'width: 122px;';
                }else {
                    return 'width: 132px;';
                }
                console.log(lang);

            },
            language() {
                return this.$store.getters.language;
            }
        },
        watch:{
            //获取语言
            language:function () {
                let language=this.$store.getters.language;
                console.log(language);
            }
        },
        methods:{
            crrSubmit:function (item) {
                let url = item.tirname;
                console.log(url);
                this.$router.push(url);
            }
        }
    }

</script>

<style lang="scss" scoped>
    .m-carriages{width: 70%;margin: 0 auto;}
    .m-carriages .carr-header{display: flex;justify-content: center;align-items: center;width:360px;height: 60px;border-left: 1px solid #f4bc88;border-right: 1px solid #f4bc88;border-top: 1px solid #f4bc88;color: #f4bc88;font-size:2rem;margin: 40px auto;}
    .m-carriages .order {margin: -53px;text-align: center;}
    .m-carriages .order .line {  display: inline-block;border-top: 1px solid #f4bc88;  }
    .m-carriages .order .txt {  color: #f4bc88;  vertical-align: middle; padding: 0 10px; }
    .flex-carr {  display: flex;flex-wrap: wrap;margin-top: 100px;}
    .flex-carr .flex-item{width: 25%;height: 200px; position: relative;margin-top: 30px;}
    .flex-carr .flex-item img{width: 90%;height: 180px;border-radius: 5px;}
    .flex-carr .flex-item div{text-align: center;color: #f4bc88;font-size:1.2rem;padding-top: 5px;}
    .flex-carr h5{margin: 0 auto 5px;padding: 0;font-size: 14px;}
    .flex-carr .carr-name{margin: 0 auto 100px;padding: 0;}
    .flex-carr h6{margin: 0;padding: 0;}
    .fa{font-size: 30px;margin-bottom: 50px;}
</style>