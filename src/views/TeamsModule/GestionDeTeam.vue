<template>
    <div>
        <p>Gestion des equipes administrateur</p>


        <div class="card">
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
            <div class="card w-50" v-if="usersInTeam">
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

            <div class="card w-50" v-if="usersInTeam">
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


        </div>
        <CreateATeam/>
    </div>
</template>

<script>

    import Multiselect from 'vue-multiselect'
    import TeamService from '../../services/TeamService'
    import UserService from "../../services/UserService";
    import axios from 'axios'
    import NavigationBar from "../HeaderFooter/NavigationBar";
    import CreateATeam from "./CreateATeam";

    export default {
        name: "GestionDeTeam",
        components: {CreateATeam, NavigationBar, Multiselect},
        data() {
            return {
                teams: [],
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
        },

        methods: {
            customLabel(option) {
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
        }
    }
</script>

<style scoped>

    button {
        text-align: left;
    }

    .overflow {
        max-height: 400px;
        overflow: auto;
    }
</style>
