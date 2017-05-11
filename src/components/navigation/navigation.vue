<template>
    <div id="navigation">
        <div class="nav-container">
            <div class="site-logo">
                <a href="" class="scroll">
                    <img src="static/images/site-logo.png" alt="logo">
                </a>
            </div>
            <a class="mobile-nav-button" @click="slideToggle">
                <i class="fa fa-bars"></i>
            </a>
            <transition name="menu">
                <div class="nav-menu" :style="showNav" v-if="show">
                    <ul class="nav">
                        <li v-for="menu in menus"><router-link :to="menu.link">{{menu.text}}</router-link></li>
                    </ul>
                </div>
            </transition>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        props: ['menus', 'currentMenu'],
        data() {
            return {
                showNav: null
            };
        },
        methods: {
            slideToggle() {
                if (this.showNav === null || this.showNav.display === 'none') {
                    this.showNav = {display: 'block'};
                } else if (this.showNav.display === 'block') {
                    this.showNav = {display: 'none'};
                };
            }
        },
        computed: {
            show() {
                if (this.showNav === null) {
                    return true;
                }
                if (this.showNav.display === 'none') {
                    return false;
                } else {
                    return true;
                }
            }
        },
        created() {
            window.addEventListener('resize', () => {
                this.showNav = null;
                this.show = true;
            });
        }
    };
</script>

<style lang="scss" rel="stylesheet/scss">
    #navigation{
        position: fixed;
        height: 72px;
        width: 100%;
        background: #ecf0f1;
        z-index: 10000;
        .nav-container{
            margin: 0 auto;
            width: 100%;
            height: 100%;
            max-width: 1170px;
            .site-logo{
                float: left;
                position: relative;
                height: 100%;
                img{
                    position: absolute;
                    top: 50%;
                    left: 20px;
                    transform: translateY(-50%)
                }
            }
            .mobile-nav-button{
                display: none;
                color: #2f2f2f;
                text-align: center;
                font-size: 25px;
                position: absolute;
                right: 15px;
                top: 50%;
                cursor: pointer;
                transform: translateY(-50%);
                &:hover{
                    color: #e74c3c;
                }
            }
            .nav-menu{
                position: relative;
                float: right;
                height: 100%;
                line-height: 72px;
                .nav{
                    li{
                        float: left;
                        position: relative;
                        &:last-child{
                            a{
                                &:after{
                                    content: '';
                                    padding-right: 0;
                                }
                            }
                        }
                        a{
                            display: block;
                            text-transform: uppercase;
                            color: #2f2f2f;
                            font-size: 12px;
                            font-weight: 700;
                            &:hover{
                                color: #e74c3c;
                            }
                            &:after{
                                content: '\0399';
                                color: #6c6c6c;
                                font-weight: 300;
                                padding: 12px;
                                border-bottom: none;
                            }
                        }
                        .active {
                            color: #e74c3c;
                        }
                    }
                }
            }
        }
    }
    @media only screen and (max-width: 959px){
        #navigation{
            .nav-container{
                .mobile-nav-button{
                    display: inline-block;
                }
                .nav-menu{
                    display: none;
                    width: 100%;
                    height: 150px;
                    top: 100%;
                    background: #ecf0f1;
                    .nav{
                        li{
                            float: none;
                            a{
                                height: 50px;
                                padding-left: 10%;
                                line-height: 50px;
                                &:after{
                                    content: '';
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    .menu-enter-active, .menu-leave-active{
        transition: all 1s;
    }

    .menu-enter, .menu-leave-active{
        opacity: 0;
    }
</style>
