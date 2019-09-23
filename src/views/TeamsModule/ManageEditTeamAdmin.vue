<template>
    <div>
        <div class="card m-2">
            <h5 class="card-header">Select the team to manage</h5>
            <div class="card-body">
                <Multiselect
                        v-model="selectedTeam"
                        :options="teams"
                        :custom-label="customLabel"
                        :placeholder="`Please select a Team`"
                        @input="getUserFromTeam()" class="text-center" style="margin-bottom: 10px">
                </Multiselect>
            </div>
        </div>


        <div class="d-flex">
            <div class="card w-50 m-2" v-if="usersInTeam">
                <h5 class="card-header">Remove user from {{selectedTeam.name}}</h5>
                <div class="card-body">
                    <Multiselect v-if="usersInTeam"
                                 v-model="selectedUserToDelete"
                                 :options="usersInTeam"
                                 :custom-label="labelUser"
                                 :placeholder="`Please select a User from the team`">
                    </Multiselect>
                    <button v-if="selectedUserToDelete" @click="deleteUserFromTeam"> Remove from team</button>
                </div>
            </div>

            <div class="card w-50 m-2" v-if="usersInTeam">
                <h5 class="card-header">Add user to {{selectedTeam.name}}</h5>
                <div class="card-body">
                    <Multiselect v-if="usersNotInTeam"
                                 v-model="selectedUserToAdd"
                                 :options="usersNotInTeam"
                                 :custom-label="labelUser"
                                 :placeholder="`Please select a User to add to the team`">
                    </Multiselect>
                    <button v-if="selectedUserToAdd" @click="addUserToTeam"> Add to team</button>
                </div>
            </div>
            <div class="card w-50" v-if="selectedTeam">
                <h5 class="card-header">Edit  {{selectedTeam.name}}</h5>
                <div class="card-body">
                    <input v-model="newName" type="text" class="form-control" placeholder="Username" aria-label="Username"
                           aria-describedby="basic-addon1">
                    <Multiselect v-if="listManager"
                                 v-model="newManager"
                                 :options="listManager"
                                 :custom-label="labelUser"
                                 :placeholder ="`Select the new manager`">
                    </Multiselect>
                    <button v-if="newName || newManager" @click="editTeam"> Edit the team</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Multiselect from 'vue-multiselect'
    import TeamService from '../../services/TeamService'
    import UserService from "../../services/UserService";
    import NavigationBar from "../HeaderFooter/NavigationBar";
    import CreateATeam from "./CreateATeam";
    export default {
        name: "ManageEditTeamAdmin",
        components: {CreateATeam, NavigationBar, Multiselect},
        data() {
            return {
                teams: [],
                newName: null,
                newManager: null,
                listManager: null,
                allUser: null,
                usersInTeam: null,
                usersNotInTeam: null,
                selectedTeam: null,
                selectedUserToDelete: null,
                selectedUserToAdd: null,
                options: []
            }
        },
        created: function () {
            this.getAllTeams();
            this.getAllUsers();
            this.loadManager();
        },
        methods: {
            customLabel(option) {
                return `${option.name}`
            },

            managerLabel(option) {
                return `${option.name}`
            },


            getAllTeams() {
                TeamService.getAllTeams().then(resp => {
                    this.teams = resp.data;
                });
            },

            getUserNotInTeam() {
                TeamService.getUserNotFromTeam(this.selectedTeam.id).then(resp => {
                    this.usersNotInTeam = resp.data;
                })
            },

            labelUser(option) {
                return `${option.firstname} ${option.lastname} | ${option.email}  `
            },

            getRoleByName(name) {
                for (const argument of this.roles) {
                    if (argument.name === name) {
                        return argument;
                    }
                }
                return null;
            },

            deleteUserFromTeam() {
                return TeamService.deleteUserFromTeam(this.selectedUserToDelete.id, this.selectedTeam.id).then(resp => {
                    this.usersInTeam = null;
                    this.selectedUserToDelete = null;
                    this.getUserFromTeam();
                })
            },

            getUserFromTeam() {
                if (this.selectedTeam === null) {
                    this.usersInTeam = null;
                    this.usersNotInTeam = null;
                } else {
                    TeamService.getUserFromTeam(this.selectedTeam.id).then(resp => {
                        this.usersInTeam = resp.data;
                    }).then(
                        this.getUserNotInTeam()
                    )
                }
            },

            addUserToTeam() {
                TeamService.addUserToTeam(this.selectedUserToAdd.id, this.selectedTeam.id).then(resp => {
                    this.selectedUserToAdd = null;
                    this.getUserFromTeam();
                    this.getUserNotInTeam();
                });
            },

            getAllUsers() {
                return UserService.getAllUser().then(resp => {
                    this.allUser = resp.data
                }).catch(e => {
                    alert(e.response.data);
                })
            },
            loadManager() {
                return  UserService.getUsersByRole('Manager').then(resp => {
                    this.listManager = resp.data;
                });
            },

            editTeam() {
                let team = {
                    name : this.newName,
                    id_manager: this.newManager.id
                };
                console.log('mon id ' + this.selectedTeam.id);
                return TeamService.editTeam(this.selectedTeam.id, team).then(resp => {
                    alert(resp.statusText);
                })
            }
        }
    }
</script>

<style scoped>

</style>
