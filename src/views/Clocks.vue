<template>
    <div>
        <div>
            <div id="clock">
                <p class="date">{{ date }}</p>
                <p  class="time">{{ time }}</p>
                <p class="count">{{ count }}</p>
            </div>
            <div>
                <button v-if="currentClock" @click="updateClock">ouss+{{this.labelButton}}</button>
                <button v-if="currentClock.status" @click="updateClock">ouss</button>
                <button v-else-if="!currentClock.status" @click="updateClock">ouzz</button>
            </div>
        </div>
    </div>
</template>



<script>
    const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    import jwtDecoder from 'jwt-decode'
    import ClockService from "../services/ClockService";
    export default {
        name: "Clocks",
        data() {
            return {
                time: "",
                date: "",
                start: "", // Remplacer par l'heure fetchée de l'api
                mode: "counter", // "count": compteur: "countdown": compteur inversé
                count: "00:00:00", // Date initiale
                clock:null,
                labelButton: null,
                currentClock: null,
                options: []
            }
        },



        created: function () {
            this.getCurrentClock();
            this.runClock();
        },



        methods: {
            getCurrentClock() {
                ClockService.getClockByUserId(jwtDecoder(localStorage.getItem('jwt')).id).then(resp => {
                    this.currentClock = resp.data;
                    this.setLabel();
                    this.start=this.currentClock.time;
                    this.setMode();
                })
            },
            setMode() {
                if(this.currentClock.status){
                    this.mode="counter";
                }else{
                    this.mode="none";
                }
            },



            updateClock() {
                this.setMode();
                ClockService.updateClock(JSON.parse(localStorage.getItem('user')).id).then(resp => {
                        this.getCurrentClock();
                    }
                )
            },



            getCurrentClock2 () {
                ClockService.getClockByUserId(1).then(resp => {
                    this.currentClock = resp.data;
                }).catch(e => {
                    console.log(e.message);
                })

            },

            setLabel() {
                if (this.currentClock.status) {
                    this.labelButton = 'Clock out';
                } else {
                    this.labelButton = 'Clock in';
                }
            },
            runClock() {
                this.clock = setInterval(this.updateTime, 1000);
            },
            updateTime() {
                var cd = new Date();
                this.time =
                    zeroPadding(cd.getHours(), 2) +
                    ":" +
                    zeroPadding(cd.getMinutes(), 2) +
                    ":" +
                    zeroPadding(cd.getSeconds(), 2);
                this.date =
                    zeroPadding(cd.getFullYear(), 4) +
                    "-" +
                    zeroPadding(cd.getMonth() + 1, 2) +
                    "-" +
                    zeroPadding(cd.getDate(), 2) +
                    " " +
                    week[cd.getDay()];
                const ouss = Math.floor((cd.getTime() - new Date(this.start).getTime())/1000);
                console.log(ouss);



                if (this.start !== "") {
                    //console.log(cd.getSeconds())
                    const hour=Math.floor(ouss/3600);
                    const min =Math.floor((ouss%3600)/60);
                    const second= (ouss%3600)%60;
                    /*switch (this.mode) {
                        case "counter":
                            this.count =
                                adjust({
                                    clock: cd.getHours(),
                                    start: startDate.getHours(),
                                    span: 24
                                }) +
                                ":" +
                                adjust({
                                    clock: cd.getMinutes(),
                                    start: startDate.getMinutes(),
                                    span: 60
                                }) +
                                ":" +
                                adjust({
                                    clock: cd.getSeconds(),
                                    start: startDate.getSeconds(),
                                    span: 60
                                });
                            break;
                        case "countdown":
                            this.count =
                                adjust({
                                    clock: cd.getHours(),
                                    start: startDate.getHours(),
                                    span: 24,
                                    shift: 7
                                }) +
                                ":" +
                                adjust({
                                    clock: cd.getMinutes(),
                                    start: startDate.getMinutes(),
                                    span: 60,
                                    shift: 60
                                }) +
                                ":" +
                                adjust({
                                    clock: cd.getSeconds(),
                                    start: startDate.getSeconds(),
                                    span: 60,
                                    shift: 60
                                });
                            break;
                        case "none":
                                this.count="00:00:00";
                            break;
                    }*/
                    this.count =
                        zeroPadding(hour, 2) +
                        ":" +
                        zeroPadding(min, 2) +
                        ":" +
                        zeroPadding(second, 2);
                }
            }



        },beforeDestroy() {
            clearInterval(this.clock);
        }
    };
    const adjust = ({ clock, start, span, shift }) => {
        const result = shift ? shift - clock - start : clock - start + (clock - start < 0 ? span : 0);
        return result >= 0
            ? zeroPadding(result, 2)
            : zeroPadding((result + span) % shift, 2);
    };
    const zeroPadding = (num, digit) => {
        var zero = "";
        for (var i = 0; i < digit; i++) {
            zero += "0";
        }
        return (zero + num).slice(-digit);
    };
</script>



<style scoped>



</style>
