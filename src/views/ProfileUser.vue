<template>
    <div>
        <NavigationBar/>
        <div class="d-block">

            <label class="m-2 d-block">
                First name
                <input type="text" v-if="user" v-model="user.firstname">
            </label>
            <label class="m-2 d-block">
                Last name
                <input type="text" v-if="user" v-model="user.lastname">
            </label>
            <label class="m-2 d-block">
                Email
                <input type="text" v-if="user" v-model="user.email">
            </label>
            <label class="m-2 d-block">
                Role
                <input type="text" v-if="user" v-model="user.role">
            </label>
            <button v-if="user" @click="update" >Update</button>
            <button v-if="user" @click="deleteUser" >Delete Account</button>
        </div>
    <Footer/>
    </div>

</template>

<script>
    import UserService from "../services/UserService";
    import jwtDecoder from 'jwt-decode'
    import NavigationBar from "./HeaderFooter/NavigationBar";
    import Footer from "./HeaderFooter/Footer";

    export default {
        components: {Footer, NavigationBar},
        data() {
            return {
                user: null,
                roles: ['Administrator','Manager','Employee'],

            }
        },

        methods: {
            update() {
                UserService.updateUser(this.user).then(resp => {
                    this.user = resp.data;
                })
            },

            deleteUser(){
                UserService.deleteUser(this.user.id).then(resp => {
                   this.user = null;
                    this.$router.push('/');
                });
            }
        },

        mounted :function () {

            if ( undefined !== this.$route.params.id){
                UserService.getUserById(this.$route.params.id).then(resp => {
                   this.user = resp.data;
                });
            } else {
                this.user = jwtDecoder(localStorage.getItem('jwt'));
            }
        },
        name: "ProfileUser",


    }
</script>

<style scoped>

    body {
        background: -webkit-linear-gradient(left, #3931af, #00c6ff);
    }

    .emp-profile {
        padding: 3%;
        margin-top: 3%;
        margin-bottom: 3%;
        border-radius: 0.5rem;
        background: #fff;
    }

    .profile-img {
        text-align: center;
    }

    .profile-img img {
        width: 70%;
        height: 100%;
    }

    .profile-img .file {
        position: relative;
        overflow: hidden;
        margin-top: -20%;
        width: 70%;
        border: none;
        border-radius: 0;
        font-size: 15px;
        background: #212529b8;
    }

    .profile-img .file input {
        position: absolute;
        opacity: 0;
        right: 0;
        top: 0;
    }

    .profile-head h5 {
        color: #333;
    }

    .profile-head h6 {
        color: #0062cc;
    }

    .profile-edit-btn {
        border: none;
        border-radius: 1.5rem;
        width: 70%;
        padding: 2%;
        font-weight: 600;
        color: #6c757d;
        cursor: pointer;
    }

    .proile-rating {
        font-size: 12px;
        color: #818182;
        margin-top: 5%;
    }

    .proile-rating span {
        color: #495057;
        font-size: 15px;
        font-weight: 600;
    }

    .profile-head .nav-tabs {
        margin-bottom: 5%;
    }

    .profile-head .nav-tabs .nav-link {
        font-weight: 600;
        border: none;
    }

    .profile-head .nav-tabs .nav-link.active {
        border: none;
        border-bottom: 2px solid #0062cc;
    }

    .profile-work {
        padding: 14%;
        margin-top: -15%;
    }

    .profile-work p {
        font-size: 12px;
        color: #818182;
        font-weight: 600;
        margin-top: 10%;
    }

    .profile-work a {
        text-decoration: none;
        color: #495057;
        font-weight: 600;
        font-size: 14px;
    }

    .profile-work ul {
        list-style: none;
    }

    .profile-tab label {
        font-weight: 600;
    }

    .profile-tab p {
        font-weight: 600;
        color: #0062cc;
    }
</style>
