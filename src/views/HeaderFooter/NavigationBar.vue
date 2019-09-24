<template>
    <div>
        <div class="topnav" id="myTopnav">
            <a href="/#/" class="active">TimeManager</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="/#/about">About</a>
            <a href="/#/workingtimes" v-if="user">Mes Working Times</a>
            <a href="/#/users" v-if="user && user.role === 'Administrator' ">Users</a>
            <a href="/#/my_teams" v-if="user">Teams</a>
            <a href="/#/sign_in" class="right-nav" v-if="!user">Sign in</a>
            <a href="/#/sign_up" class="right-nav" v-if="!user">Sign up</a>
            <a href="" class="right-nav" v-if="user" @click="hello">Sign out</a>
            <a href="javascript:void(0);" class="icon" @click="hello">
                <i class="fa fa-bars"></i>
            </a>
        </div>
    </div>
</template>

<script>
    import Bus from '../../utils/Bus'

    export default {
        name: "NavigationBar",
        data() {
            return {
                user: JSON.parse(localStorage.getItem('user'))
            };
        },
        methods: {

            hello: function (e) {
                e.preventDefault();
                localStorage.removeItem('user');
                localStorage.removeItem('jwt');
                this.user = null;
                this.$router.push('/');
            },
        }
    }

    function warn() {
    }

</script>

<style scoped>
    body {
        margin: 0;
        font-family: Arial, Helvetica, sans-serif;
    }

    .topnav {
        overflow: hidden;
        background-color: #F9D342 !important;
    }

    .active {
        overflow: hidden;
        background-color: #292826 !important;
        color: #F9D342 !important;
    }

    .right-nav {
        float: right !important;
    }

    .topnav a {
        float: left;
        display: block;
        color: black;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 17px;
    }

    .topnav a:hover {
        background-color: #292826;
        color: #F9D342;
    }

    .topnav a.active {
        background-color: #4CAF50;
        color: #F9D342;
    }

    .topnav .icon {
        display: none;
    }

    @media screen and (max-width: 600px) {
        .topnav a:not(:first-child) {
            display: none;
        }

        .topnav a.icon {
            float: right;
            display: block;
        }
    }

    @media screen and (max-width: 600px) {
        .topnav.responsive {
            position: relative;
        }

        .topnav.responsive .icon {
            position: absolute;
            right: 0;
            top: 0;
        }

        .topnav.responsive a {
            float: none;
            display: block;
            text-align: left;
        }
    }
</style>
