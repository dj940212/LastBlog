<template>
    <div id="list" class="articleList" ref="articleList">
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
        <div class="loading">Loading...</div>
    </div>
</template>
<script>
import axios from 'axios'
import Babel from '../../components/babel'
import {mapGetters, mapMutations} from 'vuex'
import config from '../../config'
export default {
    mounted(){
        if (!this.articleList.length) {
            this.getList()
        }
        this.scrollHandle()
    },
    data() {
        return {
            babelColor: ["#e99695","#f9d0c4","#fef2c0","#c2e0c6","#bfdadc","#c5def5","#bfd4f2","#d4c5f9"]
        }
    },
    components: {
        Babel
    },
    computed: {
        ...mapGetters([
            'articleList',
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
        async getList(skipNum = 0) {
          const res = await axios.get(config.api.articleListUrl, {params: {skipNum: skipNum}})
          this.setArticleList(res.data.data)
          console.log("文章列表",res.data.data.length)

          return res.data.data
        },
        toReadArticle(index) {
            this.setArticleMode('read')
            this.setCurrentIndex(index)
            this.setArticleId(this.articleList[index]._id)
            
            const _id = this.articleList[index]._id
            this.$router.push({path: '/article', query:{_id: _id}})

            console.log(index,this.articleList[index]._id)
        },
        scrollHandle() {
        	let list = document.getElementById('list')
            window.addEventListener('scroll', () => {
	           	const scrollTop = window.pageYOffset || document.documentElement.scrollTop 
	           	|| document.body.scrollTop

	           	const winHeight = window.innerHeight
	  			// console.log(scrollTop)
				
				if (winHeight+ scrollTop > 1440) {
					this.getList(10)
				}
            }, false)
        }
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
                padding: 20px 0;
                padding-right: 30%;
                h5 {
                    font-weight: 600;
                    cursor: pointer;
                    color: @title-color;
                }
                .desc {
                    font-size: 13px;
                    color: @desc-color;
                    margin: 20px 0;
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
        }
    }
</style>
