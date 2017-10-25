<template>
    <div class="labels">
        <div class="labels-inner">
            <header class="labels-header">
                <span class="meta">12 labels</span>
                <v-button background="" icon="" fontSize="16px">new babel</v-button>
            </header>
            <ul class="label-list">
                <li class="label-item" v-for="item in 3">
                    <div class="item-inner">
                        <div class="normal" v-if="false">
                            <v-button icon="el-icon-edit"></v-button>
                            <div class="babel-action">
                                <span class="count">2 blog</span>
                                <v-button background="#fff" fontSize="14px" icon="el-icon-edit">Edit</v-button>
                                <v-button background="#fff" fontSize="14px" icon="el-icon-close">Delete</v-button>
                            </div>
                        </div>
                        
                        <div class="edit">
                            <v-input v-model="username" width="400px"></v-input> 
                            <div class="changeColor">
                                <v-button></v-button>
                                <v-input v-model="username" width="180px"></v-input> 
                            </div>
                            
                            <div class="right">
                                <v-button 
                                    background="#f7f9fb" 
                                    border="1px solid rgba(27,31,35,0.2)"
                                >Cancel</v-button>
                                <v-button 
                                    border="1px solid rgba(27,31,35,0.2)"
                                >Save changes</v-button>
                            </div>
                            
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    import {mapMutations, mapGetters} from 'vuex'
    import vButton from '../../components/vButton'
    import vInput from '../../components/vInput'
    import config from '../../config'
    import axios from 'axios'
    export default {
        data() {
            return {
                username: 'dingjian',
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
        components: {
            vButton,
            vInput
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
                    .item-inner {
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
                        .edit {
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
                    }
                    
                }

            }
        }
    }
</style>
