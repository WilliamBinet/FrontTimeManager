<template>
    <div>
        <button v-if="currentClock" @click="updateClock">{{this.labelButton}}</button>
    </div>
</template>

<script>
    import ClockService from "../services/ClockService";
    export default {
        name: "Clocks",
        data() {
            return {
                labelButton: null,
                currentClock: null,
                options: []
            }
        },

        created: function () {
            this.getCurrentClock();
        },

        methods: {
            getCurrentClock() {
                ClockService.getClockByUserId(JSON.parse(localStorage.getItem('user')).id).then(resp => {
                    this.currentClock = resp.data;
                    this.setLabel();
                })
            },

            updateClock () {
                ClockService.updateClock(JSON.parse(localStorage.getItem('user')).id).then( resp => {
                    this.getCurrentClock();
                    }
                )
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
