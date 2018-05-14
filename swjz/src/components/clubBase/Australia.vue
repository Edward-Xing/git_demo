<template>
    <div class="m-australia">
        <div class="club-header">CLUB BASE</div>
        <div class="order">
            <span style="white-space:pre;">  </span><span class="line"></span>
            <span style="white-space:pre;">  </span><span class="txt">澳大利亚基地</span>
            <span style="white-space:pre;">  </span><span class="line"></span>
        </div>
        <div class="flex-australia">
            <div class="flex-item" v-for="item in shangImgs">
                <div><img :src="item.src"></div>
            </div>
        </div>
        <div style="text-indent:2em; line-height:30px">上海市（Shanghai）,简称“卢”或“申”，有东方巴黎的美称。是中国四个中央直辖市之一，也是中国第一大城市。是中国大陆的经济、金融、贸易和航运中心。上海创造和打破了中国世界纪录协会多项世界之最、中国之最。</div>
        <div style="text-indent:2em; line-height:30px;margin-top: 20px;">金融岛.鬼手俱乐部上海俱乐部始建于2010年，位于上海黄浦区延安路500号海洋大厦18层，距离上海贸易中心只有190米，俱乐部与上海黄金交易所达成合作，专注于黄金，是一家专门为外汇爱好服务的一家安全、绿色、有趣的金融岛。</div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                shangImgs: [
                    {src: '../../static/images/shanghai.jpg'},
                    {src: '../../static/images/shanghai.jpg'},
                    {src: '../../static/images/shanghai.jpg'}
                ]
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
    .m-australia{width: 70%;margin: 0 auto;color: #f4bc88;}
    .m-australia .club-header{display: flex;justify-content: center;align-items: center;width:230px;height: 60px;border-left: 1px solid #f4bc88;border-right: 1px solid #f4bc88;border-top: 1px solid #f4bc88;font-size:2rem;margin-top: 40px;}
    .m-australia .order {margin-top: -14px;}
    .m-australia .order .line {  display: inline-block;  width:60px;  border-top: 1px solid #f4bc88;  }
    .m-australia .order .txt {  color: #f4bc88;  vertical-align: middle; padding: 0 10px; }
    .flex-australia {  display: flex;flex-wrap: wrap;}
    .flex-australia .flex-item{width: 33.3%;height: 200px; position: relative;margin-top: 30px;}
    .flex-australia .flex-item img{width: 90%;height: 180px;border-radius: 5px;}
    .flex-australia .flex-item div{text-align: center;color: #f4bc88;font-size:1.2rem;padding-top: 5px;}
</style>