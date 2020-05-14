<template>
    <div class="photoinfo-container">
        <h3>{{photoinfo.title}}</h3>
        <p class="subtitle">
            <span>发表时间：{{photoinfo.add_time | dateFormat}}</span>
            <span>点击：{{photoinfo.click}} 次</span>
        </p>

        <hr>
        <!-- 缩略图 -->
        <div class="thumbs">
            <vue-preview :slides="list"></vue-preview>
        </div>

        <!-- 内容区域 -->
        <div class="content" v-html="photoinfo.content"></div>

        <!-- 评论子组件 -->
        <cmt-box :id="id"></cmt-box>

    </div>

</template>

<script>
    import comment from '../subcomponents/comment.vue'

    export default {
        data() {
            return {
                id: this.$route.params.id,
                photoinfo: {},
                list: []
            }
        },
        created() {
            this.getPathInfo()
            this.getThumbs()
        },
        methods: {
            getPathInfo() {
                // 获取图片的详情
                this.$http.get('api/getimageInfo/' + this.id).then(result => {
                    if (result.body.status === 0) {
                        this.photoinfo = result.body.message[0]
                        console.log(this.photoinfo)
                    }
                })
            },
            getThumbs() {
                // 获取缩略图
                this.$http.get('api/getthumimages/' + this.id).then(result => {
                    if (result.body.status === 0) {
                        // 循环每个图片数据，补全图片的宽和高
                        result.body.message.forEach(item => {
                            item.w = 600
                            item.h = 600
                            item.msrc = item.src
                        })
                        // 把完整的数据保存到 list 中
                        this.list = result.body.message
                        console.log(this.list)
                    }
                })
            }
        },
        components: {
            'cmt-box': comment
        }
    }

</script>

<style lang="scss" scoped>
    .photoinfo-container {
        padding: 3px;

        h3 {
            color: #26a2ff;
            font-size: 15px;
            text-align: center;
            margin: 15px 0;
        }

        .subtitle {
            display: flex;
            justify-content: space-between;
            font-size: 13px;
        }

        .content {
            font-size: 13px;
            line-height: 30px;
        }
    }
</style>

<style lang="scss">
    .thumbs {
        .my-gallery {
            display: flex;
            flex-wrap: wrap;
        }

        figure {
            width: 100px;
            height: 100px;
            margin: 10px;
            box-shadow: 0 0 8px #999;

            img {
                width: 100%;
                height: 100%;
            }
        }
    }
</style>