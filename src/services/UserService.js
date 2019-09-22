import axios from 'axios'

export default {

    getAllUser() {
        return axios.get(process.env.VUE_APP_URL + '/users').catch(e => {
            alert(e.response.statusText);
        })
    },

    getUsersByRole(role) {
        return axios.get(process.env.VUE_APP_URL + '/users?role=' + role).catch( e => alert(e.reponse.statusText));
    }
}
