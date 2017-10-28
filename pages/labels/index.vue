<template>
    <div class="labels">
        <div class="labels-inner">
            <header class="labels-header">
                <span class="meta">12 labels</span>
                <v-button fontSize="16px" @click.native="editShow = true">new babel</v-button>
            </header>
            <edit :show="editShow" @hidden="editShow = false"></edit>
            <ul class="label-list">
                <li class="label-item" v-for="(item, index) in 3">
                    <item :currentEdit="currentEdit" @click="currentEdit = index" :index="index"></item>
                    <edit :show="currentEdit===index" @hidden="currentEdit = -1"></edit>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    import {mapMutations, mapGetters} from 'vuex'
    import vButton from '../../components/vButton'
    import vInput from '../../components/vInput'
    import edit from './edit'
    import item from './item'
    import config from '../../config'
    import axios from 'axios'
    export default {
        data() {
            return {
                editShow: false,
                currentEdit: -1
            }
        },
        methods: {
            ...mapMutations({
                setIsLogin: 'SET_IS_LOGIN',
            }),
        },
        components: {
            vButton,
            vInput,
            edit,
            item
        }
    }
</script>
<style lang="less" scoped>
    @import '../../static/less/variable.less';
    .labels {
        .labels-inner {
            width: @content-width;
            margin: 0 auto;
            margin-top: 20px;
            .labels-header {
                height: 52px;
                background-color: #f6f8fa;
                border: 1px solid @border-color;
                padding-left: 16px;
                border-radius: 3px 3px 0 0;
                .meta {
                    display: inline-block;
                    padding-top: 13px;
                    padding-bottom: 13px;
                    line-height: 26px;
                    color: #586069;
                }
                .v-button {
                    float: right;
                    margin-top: 8px;
                    margin-right: 16px;
                    button{
                        background-image: linear-gradient(-180deg, #34d058 0%, #28a745 90%);
                        
                    }
                    
                }
            }
            .label-list {
                .label-item {
                    list-style: none;
                }

            }
        }
    }
</style>
