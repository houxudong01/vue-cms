<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in lunbotuList" :key="item.url">
                <img v-bind:src="item.img">
            </mt-swipe-item>

        </mt-swipe>

        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/newslist">
                    <img src="../../images/menu1.png" alt="">
                    <div class="mui-media-body">新闻资讯</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/photolist">
                    <img src="../../images/menu2.png" alt="">
                    <div class="mui-media-body">图片分享</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/goodslist">
                    <img src="../../images/menu3.png" alt="">
                    <div class="mui-media-body">商品购买</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/menu4.png" alt="">
                    <div class="mui-media-body">留言反馈</div>
                </a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/menu5.png" alt="">
                    <div class="mui-media-body">视频专区</div>
                </a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/menu6.png" alt="">
                    <div class="mui-media-body">联系我们</div>
                </a></li>
        </ul>


        <!-- <h3>HomeContainer</h3> -->
    </div>

</template>

<script>
    import Toast from 'mint-ui'
    export default {
        data() {
            return {
                lunbotuList: []
            };
        },
        created() {
            this.getLunbotu();
        },
        methods: {
            getLunbotu() {
                this.lunbotuList.push({ url: "www.baidu.com", img: "https://i.loli.net/2020/05/09/NEYVc3tPGQjLxJW.png" })
                this.lunbotuList.push({ url: "www.aliyun.com", img: "https://i.loli.net/2020/05/09/gOmGQZiBtf68dcv.png" })
                this.lunbotuList.push({ url: "www.wahaha.com", img: "https://i.loli.net/2020/05/09/l7HVZ4zx9DGJ5Sm.png" })
            }

        }
    }

</script>

<style lang="scss" scoped>
    .mint-swipe {
        height: 200px;

        .mint-swipe-item {
            img {
                width: 100%;
                height: 100%;
            }
        }
    }

    .mui-grid-view.mui-grid-9{
        background-color: #fff;
        border: none;
        img {
            width: 60px;
            height: 60px;
        }
    }

    .mui-grid-view.mui-grid-9 .mui-table-view-cell {
        border: 0;
    }
</style>