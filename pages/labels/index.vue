<template>
    <div class="labels">
        <div class="labels-inner">
            <header class="labels-header">
                <span class="meta">12 labels</span>
                <button class="new">new label</button>
            </header>
            <ul class="label-list">
                <li class="label-item">
                    <div class="item-inner">
                        <!-- <div class="label-delete"></div> -->
                        <div class="label-action">
                            <button class="edit-label">edit</button>
                            <button class="delete-label">delete</button>
                            <el-button>默认按钮</el-button>
                        </div>
                        <span class="label-desc">2 blogs</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    import {mapMutations, mapGetters} from 'vuex'
    import config from '../../config'
    import axios from 'axios'
    export default {
        data() {
            return {
                username: '',
                password: ''
            }
        },
        methods: {
            ...mapMutations({
                setIsLogin: 'SET_IS_LOGIN',
            }),
            async signIn() {
                try {
                    const res = await axios.post(config.api.loginUrl,{username: this.username, password: this.password,withCredentials: true})
                    console.log(res.data.message)
                    if (res.data.message === "success") {
                        this.$router.push('/')
                        this.setIsLogin(true)
                    }
                }catch(e) {
                    console.log(e)
                }

                // this.$router.push('/')
            },

        },
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
                height: 49px;
                background-color: #f6f8fa;
                border: 1px solid @border-color;
                padding-left: 16px;
                border-radius: 3px 3px 0 0;
                .meta {
                    display: inline-block;
                    padding-top: 13px;
                    padding-bottom: 13px;
                    color: #586069;
                }
                .new {
                    float: right;
                    color: #fff;
                    background-color: #28a745;
                    background-image: linear-gradient(-180deg, #34d058 0%, #28a745 90%);
                    padding: 4px 12px;
                    font-size: 14px;
                    line-height: 20px;
                    font-weight: 600;
                    border-radius: 4px;
                    border: 1px solid rgba(27,31,35,0.2);
                    margin-top: 9px;
                    margin-right: 16px;
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
