<template>
    <div>
        <button v-if="currentClock && !this.$props.userId" @click="updateClock">{{this.labelButton}}</button>
        <div v-else>
            <vue-ctk-date-time-picker v-if="currentClock" v-model="currentClock.time"/>
            <label>Status
                <select v-if="currentClock" v-model="currentClock.status">
                    <option value="true">True</option>
                    <option value="false">False</option>
                </select>
            </label>
            <input type="button" class="btn-default" v-if="currentClock" @click="updateClockAdmin">
        </div>

    </div>
</template>

<script>
    import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
    import ClockService from "../services/ClockService";
    import jwtDecoder from 'jwt-decode'


    export default {
        components :{VueCtkDateTimePicker},
        name: "Clocks",
        data() {
            return {
                labelButton: null,
                currentClock: null,
            }
        },

        props : {
            userId : String
        },

        created: function () {
            this.getCurrentClock();
        },

        methods: {
            getCurrentClock() {
                if (this.$props.userId) {
                    console.log('passe 1 ');
                    ClockService.getClockByUserId(this.$props.userId).then( resp => {
                        this.currentClock = resp.data;
                    })
                } else {
                    ClockService.getClockByUserId(jwtDecoder(localStorage.getItem('jwt')).id).then(resp => {
                        this.currentClock = resp.data;
                        this.setLabel();
                    });
                }
            },

            updateClock () {
                ClockService.updateClock(jwtDecoder(localStorage.getItem('jwt')).id).then( resp => {
                    this.getCurrentClock();
                    }
                )
            },

            updateClockAdmin() {
                ClockService.updateClockAdmin(this.currentClock, this.currentClock.id_user).then(resp => {
                    alert ('update ok');
                })
            },

            setLabel() {
                if (this.currentClock.status){
                    this.labelButton = 'Clock out';

                } else {
                    this.labelButton = 'Clock in';
                }
            }
        }
    }
</script>

<style scoped>

</style>
