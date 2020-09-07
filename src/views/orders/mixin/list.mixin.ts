import {Component, Vue} from 'vue-property-decorator';
import {Pager} from '@/entities/paging';
import BaseService from '@/services/base.service';

@Component({name: 'ListMixin'})
export default class ListMixin<I, S extends BaseService<any, any, I, Pager>> extends Vue {
    /**
     * 服务/需要初始话
     */
    public service: S | null = null;

    /**
     * 请求参数
     */
    public pagingParams = new Pager();

    /**
     * 订单数据
     */
    public infos: I[] = [];

    /**
     * 是否加载中
     */
    public loading: boolean = false;

    /**
     * 是否更新中
     */
    public refreshing: boolean = false;

    /**
     * 上拉加载完成
     */
    public finished: boolean = false;
    /**
     * 调用接口是否报错
     */
    public error: boolean = false;

    public onLoad() {
        this.finished || (this.pagingParams.page += 1);
        this.paging();
    }

    /**
     * 下拉刷新
     */
    public onRefresh() {
        this.finished = false;
        this.loading = true;
        this.onLoad();
    }

    public async paging() {
        try {
            this.refreshing || (this.loading = true);
            const {list, currentPage, totalPage} = await this.service!.paging(this.pagingParams);
            this.infos.push(...list);
            this.finished = currentPage === totalPage;
            this.loading = false;
            this.pagingParams.page = currentPage;
        } catch (e) {
            this.refreshing = false;
            this.loading = false;
            this.error = true;
            this.pagingParams.page -= 1;
        }
    }
}
