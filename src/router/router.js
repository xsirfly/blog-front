/**
 * Created by zhangcong on 2017/5/11.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import essay from '../components/essay/essay';
import timeline from '../components/timeline/timeline';
import message from '../components/message/message';

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
        path: '/archive',
        component: timeline
    },
    {
        path: '/message',
        component: message
    }
];

const router = new VueRouter({
    routes: routers
});

export default router;