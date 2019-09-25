<template>
    <div>
    <NavigationBar/>
        <table class="table table-bordered table-responsive-md table-striped text-center">
            <thead>
            <tr>
                <th class="text-center">Début</th>
                <th class="text-center">Fin</th>
                <th class="text-center">Delete</th>
                <th class="text-center">Update</th>
            </tr>
            </thead>
            <tbody>
            <tr v-if="workingtimes" v-for="working in workingtimes">
                <td class="pt-3-half" contenteditable="false">
                    <VueCtkDateTimePicker v-model="working.start"/>
                </td>
                <td class="pt-3-half" contenteditable="false">
                    <VueCtkDateTimePicker v-model="working.end"/>
                </td>
                <td><span class="table-remove"><button type="button"
                                                       @click="deleteWT(working)"
                                                       class="btn btn-danger btn-rounded btn-sm my-0">Remove</button></span>
                </td>
                <td><span class="table-remove"><button type="button"
                                                       @click="updateWorkingTime(working)"
                                                       class="btn btn-danger btn-rounded btn-sm my-0">Update</button></span>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

    import WorkingTimeService from "../../services/WorkingTimeService";
    import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
    import NavigationBar from "../HeaderFooter/NavigationBar";
    export default {
        name: "WorkingTimeById",
        components: {NavigationBar, VueCtkDateTimePicker},

        data() {
            return {
                workingtimes: [],
                start: null,
                end: null,
                options: []
            }
        },

        created: function () {
            this.loadWorkingTime();
        },
        methods: {

            loadWorkingTime() {
                if (this.$route.params.workingTimeId !== undefined) {
                    WorkingTimeService.getWorkingTimeById(this.$route.params.workingTimeId).then(resp => {
                        console.log(resp.data);
                        this.workingtimes = resp.data;
                    }).catch(e => {
                        alert(e.response.statusText);
                    })
                }
            },

            updateWorkingTime(e) {
                WorkingTimeService.updateWorkingTime(e).then(resp => {
                    alert('Update ok');
                    this.loadWorkingTime();
                });
            },
            deleteWT(e) {
                WorkingTimeService.deleteWorkingTime(e.id).then(resp => {
                    if (resp.data === 'OK') {
                        alert('delete ok');
                    } else {
                        alert('delete not ok');
                    }
                    this.loadWorkingTime();
                });
            },
        }
    }
</script>

<style scoped>

</style>
