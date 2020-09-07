<template>
    <div class="bottom-tab">
        <component class="content" :is="currentTabName"/>
        <div class="tab">
            <div
                v-for="tab in tabs"
                :key="tab.name"
                :class="['tab-item', tab.name === currentTabName && 'active']"
                @click="switchTab(tab.name)"
            >
                <svg-icon :name="tab.icon"/>
                {{ tab.label}}
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import Setting from '@/views/setting/index.vue';
    import AssetsManagement from '@/views/asset.management/index.vue';

    @Component({
        name: 'BottomTab',
        components: {
            Setting,
            AssetsManagement,
        },
    })
    export default class extends Vue {
        /**
         * tabs
         */
        private tabs = [
            {name: 'assets-management', label: '资产管理', icon: 'icon_folder-open'},
            {name: 'setting', label: '功能设置', icon: 'setting'},
        ];
        /**
         * 当前tab name
         */
        private currentTabName: string = 'assets-management';

        /**
         * 切换tab
         */
        private switchTab(tabName: string) {
            this.currentTabName = tabName;
        }


    }
</script>

<style lang="less" scoped>
    .bottom-tab {
        height: 100vh;
        display: flex;
        flex-direction: column;
    }

    .content {
        flex: 1;
    }

    .tab {
        height: 56px;
        display: flex;
        justify-content: center;

        .tab-item {
            width: 126px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: @textColor4;

            .svg-icon {
                margin-bottom: 4px;
                font-size: 20px;
            }
        }

        .active {
            color: @activeColor;
        }
    }
</style>
