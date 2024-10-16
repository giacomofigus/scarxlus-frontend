<script>
    import AppHomeHero from '../components/Home/AppHomeHero.vue'
    import AppHomeAbout from '../components/Home/AppHomeAbout.vue'
    import AppHomePlans from '../components/Home/AppHomePlans.vue';
    import AppHomeTestimonials from '../components/Home/AppHomeTestimonials.vue';
    import AppHomeEbooks from '../components/Home/AppHomeEbooks.vue';

    export default{
        components: {
            AppHomeHero,
            AppHomeAbout,
            AppHomePlans,
            AppHomeTestimonials,
            AppHomeEbooks,
        }
    }
</script>

<template>
    <main>
        <AppHomeHero/>
        <AppHomeAbout/>
        <AppHomePlans/>
        <AppHomeTestimonials/>
        <AppHomeEbooks/>
    </main>
</template>

<style scoped lang="scss">
    main {
        display: flex;
        flex-direction: column;

    }
</style>