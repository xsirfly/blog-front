<template>
	<div>
        <preloader :show="preloaderShow"></preloader>
		<navigation :menus="menus" :currentMenu="currentMenu"></navigation>
		<div class="container sub-page">
			<div class="eleven columns main-content">
				<!--<router-view></router-view>-->
				<essay :essays="essays"></essay>
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
export default {
	data() {
		return {
			preloaderShow: true,
			menus: [
				{
					link: '#',
					text: 'home'
				},
				{
					link: 'essay',
					text: 'blog'
				},
				{
					link: 'archive',
					text: 'archive'
				}
			],
			currentMenu: 1,
			categories: [
				{
					link: '#',
					text: 'Design'
				},
				{
					link: '#',
					text: 'Tutorials'
				},
				{
					link: '#',
					text: 'Photoshop'
				},
				{
					link: '#',
					text: 'Illustration'
				},
				{
					link: '#',
					text: 'Web'
				}
			],
			tags: [
				{
					link: '#',
					text: 'design'
				},
				{
					link: '#',
					text: 'clients'
				},
				{
					link: '#',
					text: 'photoshop'
				},
				{
					link: '#',
					text: 'web'
				},
				{
					link: '#',
					text: 'illustration'
				},
				{
					link: '#',
					text: 'tutorials'
				},
				{
					link: '#',
					text: 'html'
				}
			],
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
			]
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
		setTimeout(() => {
			this.preloaderShow = false;
		}, 2000);
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
			.sidebar {
				position: relative;
				right: 0px;
			}
		}
	}
</style>
