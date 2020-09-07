<template>
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            :error.sync="error"
            error-text="请求失败，点击重新加载"
            @load="onLoad"
        >
            <order v-show="infos.length" v-for="order in infos" :key="order.id" />
            <div class="empty">
                <img src="" alt="">
            </div>
        </van-list>
    </van-pull-refresh>
</template>

<script lang="ts" src="./appointment.list.ts">

</script>

<style scoped lang="less" src="./style.less">

</style>
