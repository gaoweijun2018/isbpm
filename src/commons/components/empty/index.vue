<template>
    <div class="empty">
        <img src="../../../assets/images/empty/empty.png" alt="" width="210px" height="120px">
        <span class="empty-text">暂无盘点任务</span>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    @Component({
        name: 'Empty',
    })
    export default class extends Vue {
    }
</script>

<style lang="less" scoped>
.empty {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;

    align-items: center;

    img {
        margin-top: 72px;
    }

    .empty-text {
        height:22px;
        font-size:14px;
        font-weight:400;
        color:rgba(0,0,0,0.85);
        line-height:22px;
    }
}
</style>
