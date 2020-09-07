<template>
    <div class="order">
        <div class="order-header">
            <span class="order-header__code">{{ info.code}}</span>
            <span class="order-header__view">详情</span>
        </div>
        <van-divider  />
        <div class="order-info">
            <div class="info-left">
                <img class="info-left__avatar" src="" alt="">
            </div>
            <div class="info-right">
                <div class="line1">
                    <span class="name">{{ info.stuName }}</span>
                    <span class="phone">{{ info.stuPhone }}</span>
                </div>
                <div class="address">
                    {{ info.stuAddress }}
                </div>
                <div class="business">
                    手机号、无线宽带
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./order.ts">

</script>

<style scoped lang="less" src="./style.less">

</style>
