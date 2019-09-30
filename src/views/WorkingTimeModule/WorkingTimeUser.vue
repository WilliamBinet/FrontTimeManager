<template>

    <div>
        <NavigationBar/>
        <div class="card">
            <div class="card-body">
                <div id="table" class="table-editable">
                    <div>
                        <span>Select your working times</span>
                        <div class="d-flex">
                            <vue-ctk-date-time-picker v-model="start" class="m-2 w-50"/>
                            <vue-ctk-date-time-picker v-model="end" class="m-2 w-50"/>
                        </div>
                        <button @click="loadWorkingTime" class="btn border-success m-2">Search</button>
                    </div>

                    <table class="table table-bordered table-responsive-md table-striped text-center">
                        <thead>
                        <tr>
                            <th class="text-center">ID</th>
                            <th class="text-center">Début</th>
                            <th class="text-center">Fin</th>
                            <th class="text-center">Update</th>
                            <th class="text-center">Delete</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-if="workingtimes" v-for="working in workingtimes">
                            <td class="pt-3-half"><a @click="loadWorkingTimeById(working.id)"> {{working.id}} </a>
                            </td>
                            <td class="pt-3-half" contenteditable="false">
                                <VueCtkDateTimePicker v-model="working.start"/>
                            </td>
                            <td class="pt-3-half" contenteditable="false">
                                <VueCtkDateTimePicker v-model="working.end"/>
                            </td>

                            <td><span class="table-remove"><button type="button"
                                                                   @click="updateWorkingTime(working)"
                                                                   class="btn btn-danger btn-rounded btn-sm my-0">Update</button></span>
                            </td>
                            <td><span class="table-remove"><button type="button"
                                                                   @click="webcamSendRequestButton(working)"
                                                                   class="btn btn-danger btn-rounded btn-sm my-0">Remove</button></span>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <!-- Editable table -->

    <!-- Editable table -->
</template>

<script>
    import dateFormat from 'dateformat';
    import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
    import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';
    import WorkingTimeService from "../../services/WorkingTimeService";
    import NavigationBar from "../HeaderFooter/NavigationBar";
    import UserService from "../../services/UserService";
    import jwtDecoder from 'jwt-decode'

    export default {
        components: {NavigationBar, VueCtkDateTimePicker},

        name: "WorkingTimeUser",
        data() {
            return {
                workingtimes: [],
                start: null,
                end: null,
                currentUser : null,
                options: []
            }
        },
        created: function () {
            this.start = dateFormat(new Date().setFullYear(2019), 'yyyy-mm-dd hh:MM:ss');
            this.end = dateFormat(new Date().setFullYear(3000), 'yyyy-mm-dd hh:MM:ss');
            this.initUser();

        },

        props : {
           userId : String
        },

        methods: {
            customLabel(option) {
                return `${option.name}`
            },
            webcamSendRequestButton(e) {
                WorkingTimeService.deleteWorkingTime(e.id).then(resp => {
                    console.log(JSON.stringify(resp));
                    if (resp.data === 'OK') {
                        alert('delete ok');
                    } else {
                        alert('delete not ok');
                    }
                    this.loadWorkingTime();
                });
            },

            loadWorkingTimeById(id) {
                this.$router.push('/workingTime/' + id);
            },
            updateWorkingTime(e) {
                WorkingTimeService.updateWorkingTime(e).then(resp => {
                    alert('Update ok');
                    this.loadWorkingTime();
                });
            },
            loadWorkingTime() {
                console.log(this.currentUser);
                WorkingTimeService.getWorkingTimeFromUser(this.start, this.end, this.currentUser.id).then(resp => {
                    this.workingtimes = resp.data;
                })
            },

            initUser() {
                if (this.$props.userId === undefined) {
                    this.currentUser = jwtDecoder(localStorage.getItem('jwt'));
                    console.log( 'Mon user ' + this.currentUser);
                    this.loadWorkingTime();
                }
                else {
                    UserService.getUserById(this.$props.userId).then(resp => {
                        this.currentUser = resp.data;
                        console.log( 'Mon user by id' + this.currentUser);
                        this.loadWorkingTime();
                    })
                }
            },
        }
    }
</script>

<style scoped>

</style>
