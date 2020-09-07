import { Component, Vue } from 'vue-property-decorator';

@Component({ name: 'OrderInfo'})
export default class extends Vue {
    /**
     * 表单数据
     */
    private formData: any = {
        phone: '',
        wire: '',
        wireless: '',
    };

    /**
     * 选中的业务
     */
    private result: string[] = [];
    /**
     * 提交表单
     * @param values
     */
    private onSubmit(values: { [key: string]: any }) {
        console.log(values);
    }
}
