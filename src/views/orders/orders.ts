import {Vue, Component} from 'vue-property-decorator';
import OrderList from './components/list/list.vue';
import AppointmentList from './components/appointment.list/appointment.list.vue';

/**
 * 订单列表
 */
@Component({name: 'Orders', components: { OrderList, AppointmentList }})
export default class extends Vue {

}
