<template lang="html">
    <div class="overview">
        <div class="popular">
            <p class="name">Popular articles</p>
            <div class="article-box">
                <li class="article" v-for="(item, index) in popularArticle">
                    <h5 class="title" @click="toReadArticle(index)">{{item.title}}</h5>
                    <div class="description">{{item.description}}</div>
                    <div class="marker">
                        <span class="time">{{item.meta.updateAt}}</span>
                    </div>
                </li>
            </div>
            <activityMap></activityMap>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import {mapGetters, mapMutations} from 'vuex'
import activityMap from '../components/activityMap'
import {formatTimeAll} from '../static/js/utils'
import config from '../config'
export default {
    mounted() {
        if (!this.articleList.length) {
            return  this.getList()
        }

        this.popularArticle = this.articleList.slice(0,6)
    },
    data() {
        return {
            popularArticle: [],
        }
    },
    computed: {
        ...mapGetters([
            'articleList',
            'mode',
            'currentIndex'
        ])
    },
    methods: {
        ...mapMutations({
            setArticleList: 'SET_ARTICLE_LIST',
            setArticleMode: 'SET_ARTICLE_MODE',
            setCurrentIndex: 'SET_CURRENT_INDEX',
            setArticleId: 'SET_ARTICLE_ID'
        }),
        toReadArticle(index) {
            this.setArticleMode('read')
            this.setCurrentIndex(index)
            this.setArticleId(this.popularArticle[index]._id)
            const _id = this.popularArticle[index]._id
            this.$router.push({path: '/article',query:{_id:_id}})

            console.log(index,this._id)
        },
        async getList() {
          const res = await axios.get(config.api.articleListUrl)
          this.setArticleList(res.data.data)
          this.popularArticle = this.articleList.slice(0,6)
          console.log("文章列表",res.data.data)
        },
        format(time) {
           return formatTimeAll(time)
        }
    },
    components: {
        activityMap
    }
}
</script>

<style lang="less" scoped>
    @import '../static/less/variable.less';
    .overview {
        width: @content-width;
        margin: 0 auto;
        .popular {
            .name{
                font-size: 16px;
                padding-top: 20px;
                margin: 0;
            }
            .article-box {
                display: flex;
                flex-direction: row;
                width: @content-width;
                justify-content: space-between;
                flex-wrap: wrap;
                padding: 0;
                li.article {
                    box-sizing: border-box;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    list-style: none;
                    width: 480px;
                    border: 1px solid @border-color;
                    border-radius: 3px;
                    margin: 10px 0;
                    padding: 16px;
                    h5 {
                        font-weight: 600;
                        cursor: pointer;
                        color: @title-color;
                        font-size: 16px;
                    }
                    .description {
                        font-size: 12px;
                        color: @desc-color;
                        margin: 10px 0;
                    }
                    .marker {
                        font-size: 12px;
                        margin-bottom: 0;
                        .time {
                            color: #333;
                        }
                    }
                }
            }
        }
    }
</style>
