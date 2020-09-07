<template>
    <div class="order-info">
        <van-cell-group class="basic">
            <van-cell title="订单号" value="398393977394" />
            <van-cell title="姓名" value="张三" />
            <van-cell title="学号" value="293949499" />
            <van-cell title="手机号" value="1529494832" />
            <van-cell title="住址" value="高新区南大北门洪崖科技园创新3路188号1栋302" />
        </van-cell-group>

        <van-cell-group>
            <van-cell title="预约状态" value="预约中" />
            <van-cell title="办理业务" class="yw">
                <van-checkbox-group v-model="result" direction="horizontal">
                    <van-checkbox name="0" shape="square" icon-size="14px">手机号</van-checkbox>
                    <van-checkbox name="1" shape="square" icon-size="14px">有线宽带</van-checkbox>
                    <van-checkbox name="2" shape="square" icon-size="14px">无线宽带</van-checkbox>
                </van-checkbox-group>
            </van-cell>


            <van-form @submit="onSubmit">
                <van-field
                    v-model="formData.phone"
                    name="手机号"
                    label="手机号"
                    placeholder="手机号"
                    :rules="[{ required: true, message: '请填写手机号' }]"
                />
                <van-field
                    v-model="formData.wire"
                    name="有线宽带"
                    label="有线宽带"
                    placeholder="有线宽带"
                    :rules="[{ required: true, message: '请填写有线宽带' }]"
                />
                <van-field
                    v-model="formData.wire"
                    name="无线宽带"
                    label="无线宽带"
                    placeholder="无线宽带"
                    :rules="[{ required: true, message: '请填写无线宽带' }]"
                />
            </van-form>
        </van-cell-group>

        <van-button block type="info">办理业务</van-button>
        <van-button block>结束订单</van-button>
    </div>
</template>

<script lang="ts" src="./order.info.ts">

</script>

<style scoped lang="less" src="./style.less">

</style>
