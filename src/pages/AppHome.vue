<script>
    import AppHomeHero from '../components/Home/AppHomeHero.vue'
    import AppHomeAbout from '../components/Home/AppHomeAbout.vue'
    import AppHomePlans from '../components/Home/AppHomePlans.vue';
    import AppHomeTestimonials from '../components/Home/AppHomeTestimonials.vue';

    export default{
        components: {
            AppHomeHero,
            AppHomeAbout,
            AppHomePlans,
            AppHomeTestimonials
        }
    }
</script>

<template>
    <main>
        <AppHomeHero/>
        <AppHomeAbout/>
        <AppHomePlans/>
        <AppHomeTestimonials/>
    </main>
</template>

<style scoped lang="scss">
    main {
        display: flex;
        flex-direction: column;

    }
</style>