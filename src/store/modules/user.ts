import {VuexModule, Module, Action, Mutation, getModule} from 'vuex-module-decorators';
import {getToken, removeToken, removeUserType} from '@/commons/utils/cookies';
import store from '@/store';
import router, {resetRouter} from '@/router';
// import {UserAuth} from '@/entities/account/user';
// import userService from '@/services/am/user.service';
import {Notify} from 'vant';
import {USER_STATES} from '@/metas/user';


export interface IUserState {
  userToken: string;
    userAuth: any | null;
}

@Module({dynamic: true, store, name: 'user'})
class User extends VuexModule implements IUserState {
    public userToken = getToken() || '';
    public userAuth: any | null = null;

    // @Action({rawError: true})
    // public async Login(loginForm: LoginForm) {
    //     loginForm.phone.trim();
    //     // tslint:disable-next-line:variable-name
    //     const access_token = await loginService.login(loginForm);
    //     setToken(access_token);
    //     this.SET_USER_TOKEN(access_token);
    // }

    @Mutation
    public SET_USER_TOKEN(token: string) {
        this.userToken = token;
    }

    @Mutation
    public SET_USER_AUTH(userAuth: any) {
        this.userAuth = userAuth;
    }

    @Mutation
    public CLEAR_USER_AUTH() {
        this.userAuth = null;
    }

    @Action({rawError: true})
    public ResetToken() {
        removeToken();
        this.SET_USER_TOKEN('');
    }

    @Action({rawError: true})
    public async LogOut() {
        resetRouter();
        if (this.userToken === '') {
            throw Error('LogOut: token is undefined!');
        }
        removeToken();
        removeUserType();
        this.SET_USER_TOKEN('');
        await router.push({name: 'login'});
    }

    @Action({ rawError: true })
    public async GetUserInfo() {
        // if (this.userToken === '') {
        //     throw Error('登录已过期，请重新登录');
        // }
        // const userAuth: any = await userService.getUserAuth(this.userToken);
        //
        // const { authorities: permissions } = userAuth;
        // if (userAuth.state === USER_STATES.metaData.UN_ACTIVE[0]) {
        //     Notify({type: 'danger', message: '账号未激活，请到PC端修改密码激活'});
        //     this.SET_USER_TOKEN('');
        //     removeToken();
        //     throw Error('GetUserInfo: roles must be a non-null array!');
        // }
        //
        // if (!permissions.includes('ROLE_0030007W')) {
        //     Notify({type: 'danger', message: '无权限，请联系管理员'});
        //     this.SET_USER_TOKEN('');
        //     removeToken();
        //     throw Error('GetUserInfo: roles must be a non-null array!');
        // }
        // this.SET_USER_AUTH(userAuth);
    }
}

export const UserModule = getModule(User);
