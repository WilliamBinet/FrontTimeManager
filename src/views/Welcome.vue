<template>
    <div>
        <NavigationBar/>
        {{user.role}}
        <Footer/>
    </div>

</template>

<script>
    import NavigationBar from "./NavigationBar";
    import Footer from "./Footer";

    export default {
        name: "Welcome",
        components: {Footer, NavigationBar},
        data() {
            return {
                user: JSON.parse(localStorage.getItem('user'))
            };
        }
    }
</script>

<style scoped>

</style>
