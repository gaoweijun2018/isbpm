<template>
    <div>
        <van-field
            v-model="selectedValue"
            v-bind="$attrs"
            readonly
            is-link
            @click="!$attrs.disabled && (show = !show)"
        />
        <van-popup v-model="show" position="bottom">
            <van-picker
                :columns="columns"
                show-toolbar
                :title="$attrs.label"
                @cancel="show = !show"
                @confirm="onConfirm"
            />
        </van-popup>
    </div>
</template>

<script lang="ts" src="./index.ts">
</script>

<style scoped>

</style>
