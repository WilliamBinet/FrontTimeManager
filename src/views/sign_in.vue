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
                        <div class="connexion">Connexion</div>
                        <div class="d-flex justify-content-center form_container">

                            <form>
                                <div class="input-group mb-3">
                                    <div class="input-group-append">
                                        <span class="input-group-text"><i class="fas fa-user"></i></span>
                                    </div>
                                    <input type="text" name="" class="form-control input_user" value=""
                                           placeholder="Email">
                                </div>
                                <div class="input-group mb-2">
                                    <div class="" style="bal">
                                        <span class="input-group-text"><i class="fas fa-key"></i></span>
                                    </div>
                                    <input type="password" name="" class="form-control input_pass" value=""
                                           placeholder="Password">
                                </div>
                                <div class="form-group">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="customControlInline">
                                        <label class="custom-control-label" for="customControlInline">Stay connected ?</label>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="d-flex justify-content-center mt-3 login_container">
                            <button type="button" name="button" class="btn login_btn">Login</button>
                        </div>
                        <div class="mt-4">
                            <div class="d-flex justify-content-center links">
                                Don't have an account? <a href="#" class="ml-2">Sign Up</a>
                            </div>
                            <div class="d-flex justify-content-center links">
                                <a href="#">Forgot your password?</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import NavigationBar from "./NavigationBar";

    export default {
        name: "sign_in",
        components: {NavigationBar}
    }
</script>

<style scoped>


    .user_card {
        height: 400px;
        width: 350px;
        background: #F9D342;
        display: flex;
        justify-content: center;
        flex-direction: column;
        padding: 10px;
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
        height: 150px;
        width: 150px;
        border-radius: 50%;
        border: 4px solid black;
        background: #292826 !important;
    }

    .form_container {
        margin-top: 50px;
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
