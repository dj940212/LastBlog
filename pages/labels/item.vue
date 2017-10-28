<template>
	<div class="item" v-if="currentEdit !== index">
        <div class="normal">
            <v-button icon="el-icon-edit"></v-button>
            <div class="babel-action">
                <span class="count">2 blog</span>
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
                >Delete</v-button>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
import vButton from '../../components/vButton'
export default {
	props: ['currentEdit', 'index'],
	components: {
		vButton,
	}
}
</script>
<style lang="less" scoped>
.item {
    padding: 8px 10px;
    font-size: 12px;
    // border-top: 1px solid #eaecef;
    // border-left: 1px solid #eaecef;
    // border-right: 1px solid #eaecef;
    border: 1px solid #eaecef;
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