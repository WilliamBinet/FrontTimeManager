<template>

</template>

<script>
    export default {
        name: "ClockComponent",
        mounted () {
            console.log('Component mounted.')
        },
        data () {
            return {
                status: '',
                time: ''
            }
        },
        methods: {
            getclock: function (userid) {
                this.axios.get(`http://localhost:3000/clocks/` + userid)
                    .then(response => {
                        // JSON responses are automatically parsed.
                        this.status = response.data.status
                        this.time = response.data.time
                        console.log(response)
                        console.log(response.data.status)
                        console.log(this.status + '------' + this.time)
                    })
                    .catch(e => {
                        this.errors.push(e)
                    })
            },
            ChangeClock (userid) {
                let currentObj = this
                this.axios.post('http://localhost:3000/clocks/' + userid, {
                    time: moment().locale('fr').format('YYYY-MM-DD HH:mm:ss')

                })
                    .then(function (response) {
                        console.log(response.user)
                        currentObj.output = response.user
                    })
                    .catch(function (error) {
                        console.log(currentObj.username)
                        console.log(error)
                        currentObj.output = error
                    })
            }
        }
    }
</script>

<style scoped>

</style>
