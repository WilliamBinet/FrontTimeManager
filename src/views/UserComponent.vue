<template>

</template>

<script>
    export default {
        name: "UserComponent",
        mounted () {
            console.log('Component mounted.')
        },
        data () {
            return {
                username: '',
                email: '',
                password: '',
                firstname: '',
                lastname: '',
                id_role: ''
            }
        },
        methods: {
            getuser: function (userid) {
                this.axios.get(`http://localhost:3000/users/` + userid)
                    .then(response => {
                        // JSON responses are automatically parsed.
                        this.username = response.data.username
                        this.email = response.data.email
                        console.log(response)
                        console.log(response.data.username)
                        console.log(this.email + '------' + this.username)
                    })
                    .catch(e => {
                        this.errors.push(e)
                    })
            },
            createuser (e) {
                e.preventDefault()
                let currentObj = this;
                this.axios.post('http://localhost:3000/users/', {
                    username: currentObj.username,
                    email: currentObj.email,
                    password: currentObj.password,
                    firstname: currentObj.firstname,
                    lastname: currentObj.lastname,
                    id_role: currentObj.id_role

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
