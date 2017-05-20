<template>
	<div>
        <preloader :show="preloaderSho"></preloader>
		<navigation :menus="menus" :currentMenu="currentMenu"></navigation>
		<div class="container sub-page">
			<div class="eleven columns main-content">
				<router-view :essays="essays" :points="points" :comments="comments"></router-view>
			</div>
			<div class="five columns offset-by-one sidebar left-align">
				<div class="sidebar-content">
					<category :categories="categories"></category>
				</div>
				<div class="sidebar-content">
					<search></search>
				</div>
				<div class="sidebar-content">
                    <tags :tags="tags"></tags>
				</div>
			</div>
		</div>
		<vfooter></vfooter>
	</div>
</template>

<script>
import preloader from '../../components/preloader/preloader';
import navigation from '../../components/navigation/navigation';
import category from '../../components/category/category';
import search from '../../components/search/search';
import tags from '../../components/tags/tags';
import essay from '../../components/essay/essay';
import vfooter from '../../components/vfooter/vfooter';
import config from '../../common/js/config';

const categoryUrl = '/category';
const tagUrl = '/tag';
const commentUrl = '/comment';
const articleUrl = '/article/outline';
const separate = config.port === '' ? '' : ':';

export default {
	data() {
		return {
			preloaderShow: true,
			menus: [
				{
					link: '/essay',
					text: 'blog'
				},
				{
					link: '/archive',
					text: 'archive'
				},
				{
					link: '/message',
					text: 'foot'
				}
			],
			currentMenu: 1,
			categories: [],
			tags: [],
			completeTask: 0,
			tasks: 4,
			essays: [
				{
					title: 'A Day in The Life of a Designer Has Lots of Freedom',
					author: 'John Doe',
					date: '10/15/2015',
					comments: 3,
					intro: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, deserunt ut consequuntur est ea dolore accusantium illo consequatur quos laudantium eum doloribus reprehenderit at? Veniam, obcaecati, facilis, ad, nihil sit eaque minus fugiat magnam perspiciatis quia rem quae consequuntur sint cumque iste.'
				},
				{
					title: 'A Day in The Life of a Designer Has Lots of Freedom',
					author: 'John Doe',
					date: '10/15/2015',
					comments: 3,
					intro: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, deserunt ut consequuntur est ea dolore accusantium illo consequatur quos laudantium eum doloribus reprehenderit at? Veniam, obcaecati, facilis, ad, nihil sit eaque minus fugiat magnam perspiciatis quia rem quae consequuntur sint cumque iste.'
				},
				{
					title: 'A Day in The Life of a Designer Has Lots of Freedom',
					author: 'John Doe',
					date: '10/15/2015',
					comments: 3,
					intro: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, deserunt ut consequuntur est ea dolore accusantium illo consequatur quos laudantium eum doloribus reprehenderit at? Veniam, obcaecati, facilis, ad, nihil sit eaque minus fugiat magnam perspiciatis quia rem quae consequuntur sint cumque iste.'
				},
				{
					title: 'A Day in The Life of a Designer Has Lots of Freedom',
					author: 'John Doe',
					date: '10/15/2015',
					comments: 3,
					intro: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, deserunt ut consequuntur est ea dolore accusantium illo consequatur quos laudantium eum doloribus reprehenderit at? Veniam, obcaecati, facilis, ad, nihil sit eaque minus fugiat magnam perspiciatis quia rem quae consequuntur sint cumque iste.'
				},
				{
					title: 'A Day in The Life of a Designer Has Lots of Freedom',
					author: 'John Doe',
					date: '10/15/2015',
					comments: 3,
					intro: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, deserunt ut consequuntur est ea dolore accusantium illo consequatur quos laudantium eum doloribus reprehenderit at? Veniam, obcaecati, facilis, ad, nihil sit eaque minus fugiat magnam perspiciatis quia rem quae consequuntur sint cumque iste.'
				}
			],
			points: [
				{
					img: '1',
					content: [
						{
							text: '世界はそれを愛と呼ぶんだぜ',
							link: '#'
						},
						{
							text: '世界はそれを愛と呼ぶんだぜ',
							link: '#'
						},
						{
							text: '世界はそれを愛と呼ぶんだぜ',
							link: '#'
						}
					],
					date: '2017-1-1' // 时间点
				}, {
					img: '1', // 图片地址 可留空
					content: [
						{
							text: '世界はそれを愛と呼ぶんだぜ',
							link: '#'
						},
						{
							text: '世界はそれを愛と呼ぶんだぜ',
							link: '#'
						},
						{
							text: '世界はそれを愛と呼ぶんだぜ',
							link: '#'
						}
					],
					date: '2017-1-1'
				}, {
					content: [
						{
							text: '世界はそれを愛と呼ぶんだぜ',
							link: '#'
						},
						{
							text: '世界はそれを愛と呼ぶんだぜ',
							link: '#'
						},
						{
							text: '世界はそれを愛と呼ぶんだぜ',
							link: '#'
						}
					],
					date: '2017-1-1' // 时间点
				}
			],
			comments: []
		};
	},
	components: {
		preloader,
		navigation,
		category,
		search,
		tags,
		essay,
		vfooter
    },
	created() {
		this.$http.get(config.host + separate + config.port + categoryUrl).then((response) => {
			response = response.body;
			if (response.success) {
				this.categories = response.data.categories;
			}
			this.completeTask++;
		});

		this.$http.get(config.host + separate + config.port + tagUrl).then((response) => {
			response = response.body;
			if (response.success) {
				this.tags = response.data.tags;
			}
			this.completeTask++;
		});

		let commentParam = '?article_id=0';
		this.$http.get(config.host + separate + config.port + commentUrl + commentParam).then((response) => {
			response = response.body;
			if (response.success) {
				this.comments = response.data.comments;
			}
			this.completeTask++;
		});

		this.$http.get(config.host + separate + config.port + articleUrl).then((response) => {
			response = response.body;
			if (response.success) {
				this.essays = response.data.articles;
				this.completeTask++;
			}
		});
	},
	watch: {
		completeTask(val) {
			if (val === this.tasks) {
				this.preloaderShow = false;
			}
		}
	}
};

</script>

<style lang="scss" rel="stylesheet/scss">
	@import "../../common/css/base.css";
	@import "../../common/css/reset.css";
	@import "../../common/css/grid.css";
	.container{
		text-align: center;
		height: auto;
		margin: 0 auto;
		padding: 64px 0;
	}

	.sub-page {
		padding-top: 128px;
		.main-content {
			min-height: 500px;
		}
		.left-align {
			text-align: left;
			.sidebar-content{
				margin-bottom: 48px;
			}
		}
		.sidebar {
			position: fixed;
			right: 50px;
		}
	}

	@media only screen and (max-width: 767px) {
		.columns {
			margin-bottom: 24px !important;
		}
		.sub-page {
			.main-content {
				min-height: 0px;
			}
			.sidebar {
				position: relative;
				right: 0px;
			}
		}
	}
</style>
