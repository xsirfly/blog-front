/**
 * Created by zhangcong on 2017/5/11.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import essay from '../components/essay/essay';
import timeline from '../components/timeline/timeline';
import message from '../components/message/message';
import varticle from '../components/varticle/varticle';
import searchResult from '../components/searchResult/searchResult';
import tagResult from '../components/tagResult/tagResult';
import categoryResult from '../components/categoryResult/categoryResult';

Vue.use(VueRouter);

const routers = [
    {
        path: '/',
        component: essay
    },
    {
        path: '/essay',
        component: essay
    },
    {
        path: '/search',
        component: searchResult
    },
    {
        path: '/tag',
        component: tagResult
    },
    {
        path: '/category',
        component: categoryResult
    },
    {
        path: '/archive',
        component: timeline
    },
    {
        path: '/message',
        component: message
    },
    {
        path: '/article/:id',
        component: varticle
    }
];

const router = new VueRouter({
    routes: routers,
    linkActiveClass: 'active'
});

export default router;