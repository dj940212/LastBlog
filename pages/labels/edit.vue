<template>
	<div v-if="show" class="edit">
        <v-input width="400px"></v-input>
        <div class="changeColor">
            <v-button>123</v-button>
            <v-input width="180px"></v-input> 
        </div>
        
        <div class="right">
            <v-button 
                background="#f7f9fb" 
                border="1px solid rgba(27,31,35,0.2)"
                @click.native="clickHandle"
            >Cancel</v-button>
            <v-button 
                border="1px solid rgba(27,31,35,0.2)"
            >Save</v-button>
        </div>
    </div>
</template>
<script type="text/javascript">
import vButton from '../../components/vButton'
import vInput from '../../components/vInput'
export default {
	props: {
		show: {
			type: Boolean,
			default: false
		}
	},
	components: {
		vButton,
		vInput
	},
	methods: {
		clickHandle() {
			this.$emit('hidden')
		}
	}
}
</script>
<style lang="less" scoped>
	.edit {
		padding: 8px 10px;
        font-size: 12px;
        // border-top: 1px solid #eaecef;
        // border-left: 1px solid #eaecef;
        // border-right: 1px solid #eaecef;
        border: 1px solid #eaecef;
        .changeColor {
            display: inline-block;
            margin-left: 30px;
        }
        .right{
            float: right;
            .v-button {
                margin-left: 5px;
            }
        }
    }
</style>