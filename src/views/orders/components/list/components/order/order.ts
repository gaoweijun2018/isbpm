import {Vue, Component } from 'vue-property-decorator';

/**
 * 订单列表
 */
@Component({name: 'OrderList'})
export default class extends Vue {
    public created() {
        console.log('hello');
    }
}
