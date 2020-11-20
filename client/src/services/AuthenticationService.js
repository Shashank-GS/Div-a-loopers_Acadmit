import Api from '@/services/api'

export default{
    register(credentials){
        return Api().post('register',credentials)
    }
}

AuthenticationService.register({
    name:'Tejasi',
    password: 'tejasi125'
})