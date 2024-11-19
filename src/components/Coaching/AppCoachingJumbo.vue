<script>
    export default{
        name: "AppCoachingJumbo",
    }

</script>

<template>
    <section class="jumbo">
        ciao
    </section>
</template>

<style lang="scss" scoped>
    @use '../../assets/styles/partials/variables' as *;
    @use '../../assets/styles/partials/mixins' as *;

    .jumbo{
        border: 1px solid red;
        height: calc(100vh - 80px);
        margin-top: 80px;
    }
</style>