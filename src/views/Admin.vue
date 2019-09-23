<template>
    <div>
        <NavigationBar/>
        <div style="">
            <GrantUser/>
        </div>


        <GestionDeTeam/>
        <Footer/>
    </div>
</template>

<script>
    import GrantUser from "./GrantUser";
    import GestionDeTeam from "./TeamsModule/GestionDeTeam";
    import NavigationBar from "./HeaderFooter/NavigationBar";
    import Footer from "./HeaderFooter/Footer";

    export default {
        components: {Footer, NavigationBar, GestionDeTeam, GrantUser},
        data() {
            return {
                value: null,
                options: ['list', 'of', 'options']
            }
        },
    }
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style scoped>
</style>
