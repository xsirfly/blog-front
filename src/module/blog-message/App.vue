<template>
	<div>
        <preloader :show="preloaderShow"></preloader>
		<navigation :menus="menus" :currentMenu="currentMenu"></navigation>
		<div class="container sub-page">
			<div class="eleven columns main-content">
				<h2 class="title">大家的脚印</h2>
				<comment :comments="comments"></comment>
				<replyBox :show="true"></replyBox>
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
import vfooter from '../../components/vfooter/vfooter';
import comment from '../../components/comment/comment';
import replyBox from '../../components/replyBox/replyBox';
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
					link: '#',
					text: 'blog'
				},
				{
					link: '#',
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
			comments: [
				{
					username: 'xsir',
					email: 'xmanzc@163.com',
					content: '夜空中最亮的星',
					time: '2017-05-06',
					level: 0,
					replys: [
						{
							username: 'xsir',
							email: 'xmanzc@163.com',
							content: '夜空中最亮的星',
							time: '2017-05-06',
							level: 1,
							replys: [
								{
									username: 'xsir',
									email: 'xmanzc@163.com',
									content: '夜空中最亮的星',
									time: '2017-05-06',
									level: 2
								}
							]
						}
					]
				},
				{
					username: 'xsir',
					email: 'xmanzc@163.com',
					content: '夜空中最亮的星',
					time: '2017-05-06',
					level: 0,
					replys: [
						{
							username: 'xsir',
							email: 'xmanzc@163.com',
							content: '夜空中最亮的星',
							time: '2017-05-06',
							level: 1
						}
					]
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
		comment,
		replyBox,
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
		.title {
			margin: 0 0 10px 0;
			padding: 0px;
			text-align: left;
			color: #000;
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
