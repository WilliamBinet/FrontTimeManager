<template>
    <div>
        <NavigationBar/>
        <div class="card">
            <div class="card-body">
                <div id="table" class="table-editable">

                    <table class="table table-bordered table-responsive-md table-striped text-center">
                        <thead>
                        <tr>
                            <th class="text-center">ID</th>
                            <th class="text-center">Email</th>
                            <th class="text-center">First Name</th>
                            <th class="text-center">Last Name</th>
                            <th class="text-center">Role</th>
                            <th class="text-center">Remove</th>
                            <th class="text-center">Update</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-if="listUser" v-for="user in listUser">
                            <td class="pt-3-half">  <a v-bind:href="'/#/users/profile/'  + user.id"> {{user.id}} </a>
                            </td>
                            <td class="pt-3-half" contenteditable="true"><input type="text" v-model="user.email"/>
                            </td>
                            <td class="pt-3-half" contenteditable="false"><input type="text" v-model="user.firstname"/></td>
                            <td class="pt-3-half" contenteditable="false"><input type="text" v-model="user.lastname"/></td>
                            <td class="pt-3-half" contenteditable="false"><Multiselect
                                    v-model="user.role"
                                    :options="roles"
                                    :custom-label="labelRole"
                                    :placeholder ="`Please select a Role`">
                            </Multiselect></td>
                            <td><span class="table-remove"><button type="button"
                                                                   @click="deleteUser(user)"
                                                                   class="btn btn-danger btn-rounded btn-sm my-0">Remove</button></span>
                            </td><td><span class="table-remove"><button type="button"
                                                                        @click="updateUser(user)"
                                                                        class="btn btn-danger btn-rounded btn-sm my-0">Update</button></span>
                        </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import NavigationBar from "./HeaderFooter/NavigationBar";
    import UserService from "../services/UserService";
    import Multiselect from 'vue-multiselect'

    export default {
        name: "GestionUser",
        components: {NavigationBar, Multiselect},


        data() {
            return {
                currentUser : JSON.parse(localStorage.getItem('user')),
                listUser : null,
                roles: ['Administrator', 'Manager','Employee'],

            }
        },

        created: function () {
            this.getAllUsers();
        },

        methods: {
            getAllUsers() {
                return UserService.getAllUser().then(resp => {
                    this.listUser = resp.data
                }).catch(e => {
                    alert(e.response.data);
                })
            },
            labelRole(option) {
                return `${option}`
            },
            deleteUser(user){
                UserService.deleteUser(user.id).then(resp => {
                    this.getAllUsers();
                })
                    .catch(e => {
                    alert(e.response.statusText);
                })
            },
            updateUser(user){
                UserService.updateUser(user).then(resp => {
                    this.getAllUsers();
                    alert("ok");
                })
                    .catch(e => {
                    alert(e.reponse.statusText);
                })
            }
        }
    }
</script>

<style scoped>

</style>
