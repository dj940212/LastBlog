<template>
	<div class="item" v-if="curEdit !== index">
        <div class="normal">
            <v-button :background="label.color" icon="el-icon-edit">{{label.name}}</v-button>
            <div class="babel-action">
                <span class="count">{{label.article.length}} blog</span>
                <v-button
                    background="#fff"
                    fontSize="14px"
                    icon="el-icon-edit"
                    @click.native = "$emit('click')"
                >Edit</v-button>
                <v-button
                    background="#fff"
                    fontSize="14px"
                    icon="el-icon-close"
                    @click.native="delLabel"
                >Delete</v-button>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
import {mapMutations, mapGetters} from 'vuex'
import vButton from '../../components/vButton'
import axios from 'axios'
import config from '../../config'
export default {
    mounted() {
        console.log(this.label)
    },
	props: ['index', 'label'],
	components: {
		vButton,
	},
    methods: {
        ...mapMutations({
            'setLabels': 'SET_LABELS'
        }),
        async delLabel() {
            const res = await axios({
                url: config.api.deleteLabelUrl,
                method: 'POST',
                data: {_id: this.label._id}
            })
            if (res.data.success === true) {
				const newLabels = this.labels.slice()
	            newLabels.splice(this.index, 1)
	            this.setLabels(newLabels)
            }
        }
    },
    computed: {
        ...mapGetters([
            'labels',
			'curEdit'
        ])
    }
}
</script>
<style lang="less" scoped>
.item {
    padding: 8px 10px;
    font-size: 12px;
    border-left: 1px solid #eaecef;
    border-right: 1px solid #eaecef;
    border-bottom: 1px solid #eaecef;
    .normal {
        .babel-action {
            float: right;
            .count {
                margin-right: 60px;
                font-size: 14px;
            }
            button {
                background: #fff !important;
            }
        }
    }
}
</style>
