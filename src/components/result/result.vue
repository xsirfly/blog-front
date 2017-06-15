<template>
    <div>
        <preloader :show="preloaderShow"></preloader>
        <div v-for="essay in essays" class="blog-post left-align">
            <router-link :to="'/article/' + essay.id" class="post-title">{{essay.title}}</router-link>
            <ul class="post-meta">
                <li><i class="fa fa-user"></i> <a href="#">{{essay.author}}</a></li>
                <li><i class="fa fa-calendar"></i>{{essay.date}}</li>
                <li><i class="fa fa-comments"></i> <a href="#">{{essay.comments}}</a> comments</li>
            </ul>
            <p>{{essay.outline}}</p>
            <router-link :to="'/article/' + essay.id">Read more &raquo;</router-link>
        </div>
        <div v-show="essays === null || essays.length === 0">
            未找到数据
        </div>
        <paginate @pageChange="pageChange"
                  :limit="limit"
                  :count="count"
                  :showNum="showNum"
                  :currentPage="currentPage">
        </paginate>
    </div>
</template>

<script type="text/ecmascript-6">
    import preloader from '../../components/preloader/preloader';
    import paginate from '../../components/paginate/paginate';
    import config from '../../common/js/config';

    export default {
        props: ['url', 'routeName'],
        data() {
            return {
                essays: null,
                preloaderShow: true,
                limit: 2,
                count: 0,
                showNum: 3,
                currentPage: 1
            };
        },
        components: {
            preloader,
            paginate
        },
        methods: {
            getData(offset, query) {
                this.preloaderShow = true;
                let paginate = '';
                let q = '';
                if (offset === undefined) {
                    offset = 1;
                }
                if (query !== undefined && query !== '') {
                    q = '/' + query;
                }
                paginate = 'offset=' + offset + '&limit=' + this.limit;
                this.$http.get(config.host + this.url + q + '/count').then((response) => {
                    response = response.body;
                    if (response.success) {
                        this.count = response.data.count;
                    }
                });
                this.$http.get(config.host + this.url + q + '?' + paginate).then((response) => {
                    response = response.body;
                    if (response.success) {
                        this.essays = response.data.articles || response.data.results;
                    }
                    this.preloaderShow = false;
                });
            },
            fillEssays() {
                let tmpPage = this.$route.query.offset;
                let query = this.$route.query.query;
                this.currentPage = tmpPage === undefined ? this.currentPage : parseInt(tmpPage);
                let offset = this.currentPage - 1;
                this.getData(offset, query);
            },
            pageChange(to) {
                let q = this.$route.query.query;
                this.$router.push({
                    path: this.routeName,
                    query: {
                        offset: to,
                        query: q
                    }
                });
            }
        },
        created() {
            this.fillEssays();
        },
        watch: {
            $route(to) {
                this.fillEssays();
            }
        }
    };
</script>

<style lang="scss" rel="stylesheet/scss">
    @import "../../common/css/font-awesome.css";
    .blog-post{
        padding-bottom: 32px;
        margin-bottom: 40px;
        border-bottom: 1px solid rgba(108, 108, 108, .2);
        font-family: 'Lato', sans-serif;
        font-weight: 300;
        &:last-child{
            border-bottom: none;
        }
        .post-title{
            font-size: 24px;
            line-height: 32px;
        }
        .post-meta{
            margin: 8px 0 16px 0;
            li{
                display: inline-block;
                font-size: 12px;
                font-weight: 400;
                color: #6c6c6c;
                margin-right: 8px;
                a{
                    color: #6c6c6c;
                }
                i{
                    margin-right: 4px;
                }
            }
        }
        p{
            margin-bottom: 16px;
        }
    }

    .left-align{
        text-align: left;
    }
</style>
