import axios from 'axios'

const pathWorkingTimes = '/workingtimes';

export default  {
    getWorkingTimeFromUser(start, end, idUser) {
        return  axios.get( process.env.VUE_APP_URL + pathWorkingTimes +'/users/' + idUser + '?start=' + start +'&end=' + end)
            .catch(e => {
                alert(e.response.data);
            })
    },

    getWorkingTimeById(idWorkingTime) {
        return axios.get(process.env.VUE_APP_URL + pathWorkingTimes + '/' + idWorkingTime).catch(e => {
            throw e;
        });
    },

    deleteWorkingTime(idWorkingTime) {
        return axios.delete(process.env.VUE_APP_URL + '/workingtimes/' + idWorkingTime ).catch( e => {
            alert(e.response.statusText);
        })
    },

    updateWorkingTime(workingTime) {
        let update = {
            updates : workingTime
        };
        console.log('RRRR' + JSON.stringify(workingTime) );
        return axios.put(process.env.VUE_APP_URL + /workingtimes/ + workingTime.id, update).catch( e => {
            alert("Cannot update" + e.response.statusText) ;
        });

    }
}
