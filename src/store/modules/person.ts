import {VuexModule, Module, Action, Mutation, getModule} from 'vuex-module-decorators';
import {getPersonToken, setPersonToken, removePersonToken, removeUserType} from '@/commons/utils/cookies';
import store from '@/store';
import router, {resetRouter} from '@/router';


export interface IPersonState {
  personToken: string;

}

@Module({dynamic: true, store, name: 'person'})
class Person extends VuexModule implements IPersonState {
    public personToken = getPersonToken() || '';

    // @Action({rawError: true})
    // public async Login(loginForm: LoginForm) {
    //     loginForm.phone.trim();
    //     // tslint:disable-next-line:variable-name
    //     const access_token = await loginService.login(loginForm);
    //     setToken(access_token);
    //     this.SET_PERSON_TOKEN(access_token);
    // }

    @Mutation
    public SET_PERSON_TOKEN(token: string) {
        this.personToken = token;
    }

    @Action({rawError: true})
    public ResetToken() {
        removePersonToken();
        this.SET_PERSON_TOKEN('');
    }

    @Action({rawError: true})
    public async LogOut() {
        resetRouter();
        if (this.personToken === '') {
            throw Error('LogOut: token is undefined!');
        }
        removePersonToken();
        removeUserType();
        this.SET_PERSON_TOKEN('');
        await router.push({name: 'login'});
    }
}

export const PersonModule = getModule(Person);
