<template>
	<div class="card">
		<div class="item-filter">
			<v-input height="30px" width="92%"></v-input>
		</div>
		<ul class="item-list">
			<ul>
				<li class="item" v-for="(item,index) in labels" @click="addLabel(index)">
					<i class="el-icon-check"></i>
					<div class="label">
						<div class="color-box" :style="{background: item.color}"></div>
						<span class="label-name">{{item.name}}</span>
					</div>
					<i class="el-icon-close"></i>
				</li>
			</ul>
		</ul>
	</div>
</template>
<script type="text/javascript">
import vInput from './vInput'
import axios from 'axios'
import config from '../config'

export default {
	props: ['article'],
	mounted() {
		this.getLabels()
	},
	data() {
		return {
			labels: []
		}
	},
	components: {
		vInput
	},
	methods: {
		async getLabels() {
			const res = await axios.get(config.api.getLabelsUrl)
			this.labels = res.data.data
			console.log(this.labels);
		},
		async addLabel(index) {
			const res = await axios({
				url: config.api.addLabelUrl,
				method: 'POST',
				data: {article_id: this.article._id, label_id: this.labels[index]._id}
			})
			console.log(res.data)
		}
	}
}
</script>

<style lang="less" scoped>
@import "../static/less/variable.less";
.card {
	width: 300px;
	border: 1px solid @border-color;
	.item-filter {
		width: 100%;
		padding: 10px;
		border-bottom: 1px solid @border-color;
		background-color: #f6f8fa;
		.v-input {
			width: 100%;
		}
	}
	.item-list {
		background: #fff;
		width: 100%;
		max-height: 400px;
		overflow: auto;
		li.item{
			height: 35px;
			list-style: none;
			padding:0 15px;
			line-height: 34px;
			border-bottom: 1px solid @border-color;
			&:hover {
				background: #f4f4f5;
			}
			i {
				font-size: 12px;
				font-weight: 800;
				color: #c5c0ae;
			}
			.label {
				display: inline-block;
				width: 220px;
				.color-box {
					display: inline-block;
					height: 14px;
					width: 14px;
					margin-left: 10px;
					line-height: 34px;
					vertical-align: middle;
					border-radius: 2px;
				}
				.label-name {
					line-height: 34px;
					margin-left: 10px;
					font-size: 14px;
				}
			}
		}
	}
}
</style>
