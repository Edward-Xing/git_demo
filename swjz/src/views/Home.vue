<template>
	<el-row class="container">
		<div class="m-header">
			<ul>
				<li v-for="(item,index) in $t('footNav')" @click="selectMapNav(item)" :class="isSelect === item.title ? item.active : item.noActive">
					<p>{{item.title}}</p>
				</li>
			</ul>
			<p v-show="language==='zh'" class="language" @click="langueSubmit('en')">中文</p>
			<p v-show="language==='en'" class="language" @click="langueSubmit('zh')">English</p>
		</div>
		<el-dialog
				title="提示"
				:visible.sync="changeLanguage"
				width="15%"
				:before-close="handleClose">
						<span>确认切换语言吗？</span>
						<span slot="footer" class="dialog-footer">
				<el-button @click="changeLanguage = false">取 消</el-button>
				<el-button type="primary" @click="handleSetLanguage">确 定</el-button>
			  </span>
		</el-dialog>
	    <section class="content-container">
			<div class="grid-content bg-purple-light">
					<el-col :span="24" class="content-wrapper">
						<transition name="fade" mode="out-in">
							<router-view></router-view>
						</transition>
					</el-col>
				</div>
		</section>
		<div class="m-footer">
			<img src="../../static/images/footer_login.gif" /><span>{{$t('Title.footer')}}</span>
		</div>
	</el-row>
</template>

<script>
	export default {
		data() {
			return {
                title:'',
                lgu:'',
                changeLanguage: false,
                isSelect: '鬼首',
                footNav: [{title: '鬼首',active:'active',noActive:'noActive',url:'Ghosts'},
                    {title: '俱乐部基地 ',active:'active',noActive:'noActive',url:'ClubBase'},
                    {title: '鬼手军团 ',active:'active',noActive:'noActive',url:'LegionGhosts'},
                    {title: '鬼手动向 ',active:'active',noActive:'noActive',url:'GhostsHands'},
                    {title: '四驾马车 ',active:'active',noActive:'noActive',url:'FourCarriages'},
                    {title: '会盟天下 ',active:'active',noActive:'noActive',url:'AllianceWorld'},
                    {title: '简体中文'}
                ]
			}
		},
        computed: {
            language() {
                return this.$store.getters.language;
            }
        },
		methods: {
            selectMapNav (item) {
                if(item.title==='简体中文'){
                    this.changeLanguage=true;
				}else{
                    this.isSelect = item.title;
                    this.title=item.title;
                    let url = item.url;
                    this.$router.push(url);
				}
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
                this.$i18n.locale = lang;
                this.$store.dispatch('setLanguage', lang);
            }
		},
		mounted() {
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