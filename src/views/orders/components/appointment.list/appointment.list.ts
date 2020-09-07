import {Component} from 'vue-property-decorator';
import { mixins } from 'vue-class-component';
import VOrder from './components/appointment/appointment.vue';
import {Appointment} from '@/entities/isp/appointment';
import appointmentService, {AppointmentService} from '@/services/isp/appointment';
import ListMixin from '../../mixin/list.mixin';

/**
 * 预约列表
 */
@Component({name: 'AppointmentList', components: {Order: VOrder}})
export default class extends mixins<ListMixin<Appointment, AppointmentService>>(ListMixin) {
    public created() {
        this.service = appointmentService;
    }
}
