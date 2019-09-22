<template>
    <div>
        <NavigationBar/>
    </div>

</template>

<script>
    import NavigationBar from "./HeaderFooter/NavigationBar";
    import Footer from "./HeaderFooter/Footer";

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
