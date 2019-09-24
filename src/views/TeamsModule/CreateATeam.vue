<template>
    <div>
        <div>
            <div class="card m-2">
                <h5 class="card-header">Create a team</h5>
                <div class="card-body">
                    <input v-model="name" type="text" class="form-control" placeholder="Username" aria-label="Username"
                           aria-describedby="basic-addon1">
                    <Multiselect v-if="listManager && currentUser.role !== 'Manager'"
                                 v-model="selectedManager"
                                 :options="listManager"
                                 :custom-label="customLabel"
                                 :placeholder="`Please select a User to add to the team`">
                    </Multiselect>
                    <button :disabled="!selectedManager || !name" @click="createTeam">Add to team</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import TeamService from '../../services/TeamService'
    import UserService from '../../services/UserService';
    import Multiselect from 'vue-multiselect'
    import NavigationBar from "../HeaderFooter/NavigationBar";

    export default {
        name: "CreateATeam",
        components: {NavigationBar, Multiselect},

        data() {
            return {
                name: null,
                listManager: null,
                selectedManager: null,
                currentUser: JSON.parse(localStorage.getItem('user'))
            };
        },

        created: function () {
            this.loadManager();
        },

        methods: {
            customLabel(option) {
                return `${option.firstname} ${option.lastname}`;
            },

            createTeam() {
                return TeamService.createATeam(this.name, this.selectedManager.id)
            },
            loadManager() {
                return UserService.getUsersByRole('Manager').then(resp => {
                    this.listManager = resp.data;
                });
            }
        }
    }
</script>

<style scoped>

</style>
