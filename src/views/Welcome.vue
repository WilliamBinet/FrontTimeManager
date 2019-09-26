<template>
    <div>
        <NavigationBar/>
    </div>

</template>

<script>
    import NavigationBar from "./HeaderFooter/NavigationBar";
    import Footer from "./HeaderFooter/Footer";
    import jwtDecoder from 'jwt-decode'

    export default {
        name: "Welcome",
        components: {Footer, NavigationBar},
        data() {
            return {
                user: localStorage.getItem('jwt') !== null ?  jwtDecoder(localStorage.getItem('jwt')) :  null
            };
        }
    }
</script>

<style scoped>

</style>
