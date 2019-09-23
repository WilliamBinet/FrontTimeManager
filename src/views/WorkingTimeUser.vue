<template>


    <!-- Editable table -->
    <div class="card">
        <h3 class="card-header text-center font-weight-bold text-uppercase py-4">Editable table</h3>
        <div class="card-body">
            <div id="table" class="table-editable">
                <div ><span>Select your working times</span>
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
                        <th class="text-center">Delete</th>
                        <th class="text-center">Update</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-if="workingtimes" v-for="working in workingtimes">
                        <td class="pt-3-half"><input v-model="working.id" placeholder="modifiez-moi" disabled>
                        </td>
                        <td class="pt-3-half" contenteditable="false"> <VueCtkDateTimePicker v-model="working.start" />
                        </td>
                        <td class="pt-3-half" contenteditable="false"><VueCtkDateTimePicker v-model="working.end" /></td>
                        <td><span class="table-remove"><button type="button"
                                                               @click="webcamSendRequestButton(working)"
                                                               class="btn btn-danger btn-rounded btn-sm my-0">Remove</button></span>
                        </td><td><span class="table-remove"><button type="button"
                                                               @click="updateWorkingTime(working)"
                                                               class="btn btn-danger btn-rounded btn-sm my-0">Update</button></span>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <!-- Editable table -->
</template>

<script>
    import dateFormat from 'dateformat';
    import Datepicker from 'vuejs-datepicker';
    import Datetime from 'vue-datetime';
    import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
    import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';
    import WorkingTimeService from "../services/WorkingTimeService";

    export default {
        components: {VueCtkDateTimePicker},

        name: "WorkingTimeUser",
        data() {
            return {
                workingtimes: [],
                start: null,
                end: null,
                options: []
            }
        },
        created: function () {
            this.start = dateFormat(new Date().setFullYear(1900), 'yyyy-mm-dd hh:MM:ss');
            this.end = dateFormat(new Date().setFullYear(3000), 'yyyy-mm-dd hh:MM:ss');
            this.loadWorkingTime();
        },

        methods: {
            customLabel(option) {
                return `${option.name}`
            },
            webcamSendRequestButton(e) {
                WorkingTimeService.deleteWorkingTime(e.id).then(resp => {
                    console.log( JSON.stringify(resp));
                    if (resp.data === 'OK' ){
                        alert('delete ok');
                    } else {
                        alert('delete not ok');
                    }
                    this.loadWorkingTime();

                });
            },

            updateWorkingTime(e) {
                WorkingTimeService.updateWorkingTime(e).then(resp => {
                    this.loadWorkingTime();
                });
            },
            loadWorkingTime() {
                WorkingTimeService.getWorkingTimeFromUser(this.start, this.end, JSON.parse(localStorage.getItem('user')).id).then(resp => {
                    console.log(resp.data);
                    this.workingtimes = resp.data;
                })
            }
        }
    }
</script>

<style scoped>

</style>
