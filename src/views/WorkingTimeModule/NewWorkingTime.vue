<template>
    <div>
        <NavigationBar/>
        <div class="d-flex">
            <vue-ctk-date-time-picker v-model="start" class="m-2 w-50"/>
            <vue-ctk-date-time-picker v-model="end" class="m-2 w-50"/>
            <input type="button" class="btn" @click="insertWorkingTime" value="Insert"/>
        </div>
    </div>
</template>

<script>
    import NavigationBar from "../HeaderFooter/NavigationBar";
    import UserService from "../../services/UserService";
    import WorkingTimeService from "../../services/WorkingTimeService";
    import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
    import dateFormat from 'dateformat';

    export default {
        name: "NewWorkingTime",
        components: {NavigationBar, VueCtkDateTimePicker},
        data() {
            return {
                workingtime: [],
                start: null,
                end: null,
                user: null,
            }
        },
        created: function () {
            this.start = dateFormat(new Date(), 'yyyy-mm-dd hh:MM:ss');
            this.end = dateFormat(new Date(), 'yyyy-mm-dd hh:MM:ss');
        },

        props: {
            userId: String
        },

        methods: {
            customLabel(option) {
                return `${option.name}`
            },


            insertWorkingTime() {
                let workingTime = {
                    start: this.start,
                    end: this.end,
                };
                WorkingTimeService.insertWorkingTime(workingTime, this.$props.userId).then(resp => {
                    alert("Insert OK");
                    this.start = dateFormat(new Date(), 'yyyy-mm-dd hh:MM:ss');
                    this.end = dateFormat(new Date(), 'yyyy-mm-dd hh:MM:ss');
                })
            }
        },
    }
</script>

<style scoped>

</style>
