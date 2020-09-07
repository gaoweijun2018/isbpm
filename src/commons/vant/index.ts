import Vue from 'vue';
import VanFieldSelectPicker from '../components/VanFieldSelectPicker/index.vue';
import {
    Form,
    Field,
    Button,
    List,
    Search,
    DropdownMenu,
    DropdownItem,
    Popup,
    Uploader,
    Divider,
    Picker,
    Tabs,
    Tab,
    Cell,
    CellGroup,
    Checkbox,
    CheckboxGroup,
    PullRefresh
} from 'vant';

Vue.use(Form)
    .use(Field)
    .use(Button)
    .use(List)
    .use(Search)
    .use(DropdownMenu)
    .use(DropdownItem)
    .use(Popup)
    .use(Uploader)
    .use(Divider)
    .use(Picker)
    .use(Tabs)
    .use(Cell)
    .use(CellGroup)
    .use(Checkbox)
    .use(CheckboxGroup)
    .use(PullRefresh)
    .use(Tab);
Vue.component('VanFieldSelectPicker', VanFieldSelectPicker);
