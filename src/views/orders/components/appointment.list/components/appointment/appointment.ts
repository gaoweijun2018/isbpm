import {Vue, Component } from 'vue-property-decorator';

/**
 * 预约
 */
@Component({name: 'AppointmentList'})
export default class extends Vue {
    public created() {
        console.log('hello');
    }
}
