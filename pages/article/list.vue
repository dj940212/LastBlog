<template>
    <div id="list" class="articleList" ref="articleList">
        <label-menu @getLabelArts="" :artLength="articleList.length"></label-menu>
        <ul class="articleUl">
            <li v-for="(article, index) in articleList">
                <h5 @click="toReadArticle(index)">{{article.title}}</h5>
                <p class="desc">{{article.description}}</p>
                <div class="footer">
                    <Babel v-for="babel in article.babel" :key="babel.id" :title="babel" :color="getColor"></Babel>
                    <span class="createTime">{{article.meta.createAt}}</span>
                </div>
            </li>
        </ul>
        <div class="loading" @click="getList">more...</div>
    </div>
</template>
<script>
import axios from 'axios'
import Babel from '../../components/babel'
import labelMenu from '../../components/labelMenu'
import {mapGetters, mapMutations} from 'vuex'
import config from '../../config'
export default {
    mounted(){
        this.getList()
    },
    data() {
        return {
            babelColor: ["#e99695","#f9d0c4","#fef2c0","#c2e0c6","#bfdadc","#c5def5","#bfd4f2","#d4c5f9"],
            // articleList: []
        }
    },
    components: {
        Babel,
        labelMenu
    },
    computed: {
        ...mapGetters([
            'articleList',
            'labels'
        ]),
        getColor() {
            let index = Math.round(Math.random()*7)
            return this.babelColor[index]
        }
    },
    methods: {
        ...mapMutations({
            setArticleList: 'SET_ARTICLE_LIST',
            setArticleMode: 'SET_ARTICLE_MODE',
            setCurrentIndex: 'SET_CURRENT_INDEX',
            setArticleId: 'SET_ARTICLE_ID'
        }),
        async getList() {
            // const skipNum = this.articleList.length
            const res = await axios.get(config.api.articleListUrl)
            // let articles = this.articleList.slice()
            // articles = articles.concat(res.data.data)
            this.setArticleList(res.data.data)
            console.log("文章列表",this.articleList)
        },
        toReadArticle(index) {
            this.setArticleMode('read')
            this.setCurrentIndex(index)
            this.setArticleId(this.articleList[index]._id)

            const _id = this.articleList[index]._id
            this.$router.push({path: '/article', query:{_id: _id}})

            console.log(index,this.articleList[index]._id)
        },

    }
}
</script>

<style lang="less">
    @import '../../static/less/variable.less';
    .articleList {
        width: @content-width;
        margin: 0 auto;
        ul {
            padding-left: 0px;
            li {
                list-style: none;
                border-bottom: 1px solid @border-color;
                padding: 15px 0;
                padding-right: 30%;
                h5 {
                    font-weight: 600;
                    cursor: pointer;
                    color: @title-color;
                }
                .desc {
                    font-size: 13px;
                    color: @desc-color;
                    margin: 15px 0;
                }
                .footer {
                    font-size: 12px;
                    color: #222;
                    .createTime{
                        margin-left: 10px;
                        font-size: 14px;
                    }
                }
            }
        }
        .loading {
            height: 50px;
            line-height: 50px;
            text-align: center;
            cursor: pointer;
        }
    }
</style>
