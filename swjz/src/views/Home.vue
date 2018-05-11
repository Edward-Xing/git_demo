<template>
	<el-row class="container">
		<div class="m-header"></div>
	    <section class="content-container">
			<div class="grid-content bg-purple-light">
					<el-col :span="24" class="content-wrapper">
						<transition name="fade" mode="out-in">
							<router-view></router-view>
						</transition>
					</el-col>
				</div>
		</section>
		<div class="m-footer"></div>
	</el-row>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		methods: {
		},
		mounted() {
		}
	}

</script>

<style scoped lang="scss">
	.m-header{
		width: 100%;height: 60px;background-color: #000000;
	}
	.m-footer{
		width: 100%;height: 120px; position: fixed;bottom: 0px;background-color: #000000;
	}
</style>