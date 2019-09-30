<template>
    <div>
        <NavigationBar/>
        <div>
            <div class="container centered">
                <div class="d-flex justify-content-center">
                    <div class="user_card">
                        <div class="d-flex justify-content-center">
                            <div class="brand_logo_container">
                                <img src="../assets/logotham.png"
                                     class="brand_logo" alt="Logo">
                            </div>
                        </div>
                        <div class="connexion">Registration</div>
                        <div class="d-flex justify-content-center form_container">
                            <form>
                                <div class="input-group mb-3">
                                    <div class="input-group-append">
                                        <span class="input-group-text"><i class="fas fa-user"></i></span>
                                    </div>
                                    <input type="text" name="" class="form-control input_user" value=""
                                           v-model="user.firstname"
                                           placeholder="First Name">
                                </div>
                                <div class="input-group mb-3">
                                    <div class="input-group-append">
                                        <span class="input-group-text"><i class="fas fa-user"></i></span>
                                    </div>
                                    <input type="text" name="" class="form-control input_user" value=""
                                           placeholder="Last Name" v-model="user.lastname">
                                </div>
                                <div class="input-group mb-3">
                                    <div class="input-group-append">
                                        <span class="input-group-text"><i class="fas fa-user"></i></span>
                                    </div>
                                    <input type="text" name="" class="form-control input_user" value=""
                                           placeholder="Email" v-model="user.email">
                                </div>
                                <div class="input-group mb-3">
                                    <div class="input-group-append">
                                        <span class="input-group-text"><i class="fas fa-user"></i></span>
                                    </div>
                                    <input type="text" name="" class="form-control input_user" value=""
                                           placeholder="Password" v-model="user.password">
                                </div>
                            </form>
                        </div>
                        <div class="d-flex justify-content-center mt-3 login_container h-75">
                            <button type="button" name="button" class="btn login_btn" @click="register">Register
                            </button>
                        </div>
                        <div class="mt-4">
                            <div class="d-flex justify-content-center links">
                                Already have an account? <a href="/#/sign_in" class="ml-2">Sign In</a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    import NavigationBar from "./HeaderFooter/NavigationBar";
    import axios from 'axios';
    export default {
        name: "Sign_up",
        components: {NavigationBar},

        data() {
            return {
                user: {
                    lastname: 's',
                    firstname: 's',
                    email: 'd@d.fr',
                    password: 'password',
                }
            }
        },
        methods: {
            register: function () {
                let user = this.user;
                axios.post(process.env.VUE_APP_URL + `/users/sign_up`, {
                    user
                })
                    .then(response => {
                        if (response.status === 200) {
                            console.log(response.statusText);
                            alert("user crée");
                            this.$router.push('#');
                        }
                    })
                    .catch(e => {
                        alert(e.response.data);

                    })
            }
        }
    }

</script>

<style scoped>


    .user_card {
        height: 50%;
        width: 350px;
        background: #F9D342;
        display: flex;
        justify-content: center;
        flex-direction: column;
        padding: 20px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        -moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        border-radius: 5px;
        border: 4px solid #292826;

    }

    .connexion {
        font-size: 30px;
        color: #292826;
    }

    .centered {
        align-items: center;
        display: flex;
        justify-content: center;
        margin-top: 120px;
    }


    .brand_logo {
        margin-top: -55%;
        width: 150px;
        border-radius: 50%;
        border: 4px solid black;
        background: #292826 !important;
    }

    .form_container {
        margin-top: 30px;
    }

    .login_btn {
        width: 100%;
        background: #292826 !important;
        color: white !important;
    }

    .login_btn:focus {
        box-shadow: none !important;
        outline: 0px !important;
    }

    .login_container {
        padding: 0 2rem;
    }

    .input-group-text {

        background: #292826 !important;
        color: white !important;
        border: 0 !important;
        border-radius: 0.25rem 0 0 0.25rem !important;
    }

    .input_user,
    .input_pass:focus {
        box-shadow: none !important;
        outline: 0px !important;
    }

    .custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {
        background-color: #292826 !important;
    }
</style>
