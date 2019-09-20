<template>
    <div>
        <Multiselect
                v-model="selectedUser"
                :options="options"
                :multiple="false"
                track-by="id"
                :custom-label="customLabel"
        @input="refreshRole">
        </Multiselect>

        <Multiselect
                v-model="selectedRole"
                :options="roles"
                :custom-label="labelRole">
        </Multiselect>


        <button @click="changeRole"  > Change user role </button>
    </div>
</template>

<script>
    import Multiselect from 'vue-multiselect'

    import axios from 'axios'

    export default {
        components: {Multiselect},
        name: "Admin",
        data() {
            return {
                roles: [{name: 'Administrator'}, {name: 'Manager'}, {name: 'Employee'}],
                selectedRole: null,
                selectedUser: null,
                options: []
            }
        },
        created: function () {
            this.getAllUser();
        },

        methods: {
            customLabel(option) {
                return `${option.firstname} ${option.lastname}  | ${option.email}`
            },

            refreshRole(user) {
                console.log("User role "  +  user.role )
                this.selectedRole = this.getRoleByName(user.role);
            } ,
            labelRole(option) {
                return `${option.name}`
            },

            getRoleByName (name) {
                for (const argument of this.roles) {
                    if (argument.name === name) {
                        return argument;
                    }
                }
                return null;
            },

            getAllUser() {
                axios.get('http://localhost:3000/users').then(response => {
                    if (response.status === 200) {
                        this.options = response.data;
                    }
                }).catch( e => {
                    alert (e.response.statusText);
                })
            },

            changeRole() {
                this.selectedUser.role = this.selectedRole.name;
                let updates = {};
                updates.updates = this.selectedUser;
                axios.put('http://localhost:3000/users/' + this.selectedUser.id,  updates
                ).then(response => {
                    if (response.status === 200) {
                        alert(response.statusText);
                    }
                }).catch(e => {
                    alert(e.response.statusText);
                })
            }
        }

    }
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style scoped>

</style>
