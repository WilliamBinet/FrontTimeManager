<template>
    <div>
        <NavigationBar/>
        <div style="width: 50%;background: gold">
            <GrantUser/>
        </div>
        <div class="w-50">
            <GestionDeTeam/>
        </div>
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
