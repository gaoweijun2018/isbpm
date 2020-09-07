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
} from 'vant';

Vue.use(Form);
Vue.use(Field);
Vue.use(Button);
Vue.use(List);
Vue.use(Search);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Popup);
Vue.use(Uploader);
Vue.use(Divider);
Vue.use(Picker);
Vue.component('VanFieldSelectPicker', VanFieldSelectPicker);
