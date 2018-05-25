<template>
    <!--选项-->
    <div class="music-btn">
        <router-link to="/playlist" tag="span">正在播放</router-link>
        <router-link to="/toplist" tag="span">推荐</router-link>
        <router-link to="/hotlist" tag="span">热门歌单</router-link>
        <router-link to="/search" tag="span">搜索</router-link>
        <router-link to="/userlist" tag="span" class="none-414">我的歌单</router-link>
        <router-link to="/historylist" tag="span">我听过的</router-link>
    </div>
</template>

<script>
    export default {}
</script>

<style lang="less" scoped>
    @import "~assets/css/var";
    
    .music-btn {
        width: 100%;
        height: 60px;
        font-size: 0;
        span {
            display: inline-block;
            height: 40px;
            box-sizing: border-box;
            margin-right: 8px;
            padding: 0 23px;
            border: 1px solid @btn_color;
            color: @btn_color;
            border-radius: 2px;
            font-size: 14px;
            line-height: 40px;
            overflow: hidden;
            cursor: pointer;
            &:hover, &.active {
                border-color: @btn_color_active;
                color: @btn_color_active;
            }
        }
        @media (max-width: 768px) {
            height: 50px;
            span {
                height: 35px;
                padding: 0 10px;
                margin-right: 6px;
                line-height: 35px;
                &:nth-last-of-type(1) {
                    margin: 0;
                }
                @media (max-width: 413px) {
                    &.none-414 {
                        display: none;
                    }
                }
            }
        }
    }
</style>
