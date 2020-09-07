import {Component, Prop, Vue, Watch} from 'vue-property-decorator';

@Component({
    name: 'VanFieldSelectPicker',
})
export default class extends Vue {
    @Prop({
        required: true,
    })
    private value!: any;
    @Prop({
        required: true,
    })
    private columns!: any[];
    private show: boolean = false;

    private selectedValue: any = '';

    private created() {
        this.selectedValue = this.value;
    }

    private onConfirm(value: any) {
        this.selectedValue = value;
        this.show = !this.show;
    }

    @Watch('value')
    private setSelectedValue(value: any) {
        this.selectedValue = value;
    }

    @Watch('selectedValue')
    private emitInput(value: any) {
        this.$emit('input', value);
    }
}
