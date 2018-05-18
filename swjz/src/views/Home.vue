<template>
	<el-row class="container">
		<!--头部-->
		<div class="m-header">
			<ul>
				<li v-for="(item,index) in $t('footNav')" @click="selectMapNav(item)" :class="select === item.url ? item.active : item.noActive">
					<p>{{item.title}}</p>
				</li>
			</ul>
			<p v-show="language==='zh'" class="language" @click="langueSubmit('en')">中文</p>
			<p v-show="language==='en'" class="language" @click="langueSubmit('zh')">English</p>
		</div>
		<!--显示内容-->
	    <section class="content-container">
			<div class="grid-content bg-purple-light">
					<el-col :span="24" class="content-wrapper">
						<transition name="fade" mode="out-in">
							<router-view></router-view>
						</transition>
					</el-col>
				</div>
		</section>
		<!--底部-->
		<div class="m-footer">
			<img :src="$t('Title.footer_img')" />
			<span>{{$t('Title.footer')}}</span>
		</div>
	</el-row>
</template>

<script>
	export default {
		data() {
			return {
                title:'',
                lgu:'',
                isSelect:''
			}
		},
        computed: {
            select(){
                let isSelect = this.isSelect;
                return isSelect;
			},
            language() {
                return this.$store.getters.language;
            }
        },
		methods: {
            selectMapNav (item) {
                    this.isSelect = item.url;
                    this.title=item.title;
                    let url = item.url;
                    this.$router.push(url);
            },
            handleClose(done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        done();
                    })
                    .catch(_ => {});
            },
            handleSetLanguage() {
                this.changeLanguage=false;
                this.$i18n.locale = lang;
                this.$store.dispatch('setLanguage', lang);
            },
            langueSubmit:function (lang) {
                console.log(this.isSelect);
                this.$i18n.locale = lang;
                this.$store.dispatch('setLanguage', lang);
            }
		},
        created: function () {
		    //获取当前路由显示
            var str = this.$route.path;
            this.isSelect = str.substr(1,str.length);
        }
	}

</script>

<style scoped lang="scss">
	.m-header{  width: 100%;height: 60px;background-color: #000000;color: #b58d66;}
	.m-header ul{  width:60%;  height:60px;  margin:0 auto;  z-index:1;  display:flex;  list-style-type:none;
		li{  text-align:center;  flex:1;  display: flex;justify-content: center;align-items: center;  }
	}
	.el-icon-warning{color:#f4bc88;padding-right: 15px;font-size:2rem;}
	.m-header .active{border-bottom: 4px solid #cd9e70;}
	.m-footer{display: flex;justify-content: center;align-items: flex-end;position: fixed;bottom: 0px;width: 100%;height: 100px;background-color: #000000;color: #ffffff;text-align: center;padding-bottom: 20px;  }
	.m-footer span{padding-bottom: 15px;padding-left: 20px;}
	.language{width: 250px;}
</style>