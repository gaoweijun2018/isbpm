import {Component, Prop, Vue} from 'vue-property-decorator';

@Component({
    name: 'PopupFilter',
})
export default class extends Vue {
    /**
     * filter 选项
     */
    @Prop({
        required: true,
    })
    private options!: Array<[number, string]>;
}
