import axios from 'axios'

export default  {

    getAllTeams() {
       return  axios.get( process.env.VUE_APP_URL + '/teams')
        .catch(e => {
            alert(e.response.data);
        })
    },

    getTeamById(id) {
        return axios.get(process.env.BASE_URL_API + id)
            .catch(e => {
                alert(e.response.data);
            })
    },

    deleteUserFromTeam(userId, teamId){
      return axios.delete(process.env.VUE_APP_URL + '/teams/' + teamId + '/remove/' + userId).catch(e => {
          alert(e.response);
      });
    },

    addUserToTeam(userId, teamId){
        let teamMember  = {
            teammember : {
                id_user : userId,
                id_team : teamId
            }
        };
        return axios.post(process.env.VUE_APP_URL + '/teams/' + teamId + '/add/' + userId, teamMember).catch(e => {
            alert(e.response);
        });
    },

    getUserFromTeam(idTeam) {
        console.log(process.env.VUE_APP_URL +'/teams/' + idTeam+ '/users');
        return axios.get(process.env.VUE_APP_URL +'/teams/' + idTeam+ '/users').catch(e => {
            alert(e.response.data);
        });
    },
    getUserNotFromTeam(idTeam) {
        console.log(process.env.VUE_APP_URL +'/teams/' + idTeam+ '/users/NotIn');
        return axios.get(process.env.VUE_APP_URL +'/teams/' + idTeam+ '/users/NotIn').catch(e => {
            alert(e.response.data);
        });
    },

    createATeam(teamName, managerId) {
        let team = {
            team : {
                name : teamName,
                id_manager : managerId
            }
        };
        return axios.post(process.env.VUE_APP_URL + '/teams', team).catch(e => alert(e.response.message));
    }



};
