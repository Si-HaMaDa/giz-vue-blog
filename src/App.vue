<template>
    <div>
        <!-- Responsive navbar-->
        <MainNav />

        <!-- Page Content -->
        <router-view />

        <!-- Footer-->
        <MainFooter />
    </div>
</template>

<script>
import MainNav from "./components/global/MainNav.vue";
import MainFooter from "./components/global/MainFooter.vue";

export default {
    components: { MainNav, MainFooter },
    methods: {},
};
</script>
