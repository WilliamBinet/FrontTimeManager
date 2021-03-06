import axios from './AxiosService'

var dateFormat = require('dateformat');

export default {

    getClockByUserId(userId) {
        let now = new Date();
        console.log(now);
        return axios.get(process.env.VUE_APP_URL + '/clocks/' + userId).catch(e => {
            alert(e.response.statusText)
        });
    },

    updateClock(userId) {
        let update = {
            update: {
                time: dateFormat(new Date().setHours(new Date().getHours() - 2) , 'yyyy-mm-dd HH:MM:ss')
            }
        };
        console.log(update);
        return axios.post(process.env.VUE_APP_URL + '/clocks/' + userId, update).catch(e => {
            alert(e.response.statusText);
        })
    },

    updateClockAdmin(clock, userId) {
        let updates = {
            updates: clock
        };
        return  axios.put(process.env.VUE_APP_URL + '/clocks/' + userId, updates).catch(e => {
                alert(e);
            }
        )
    }


}
