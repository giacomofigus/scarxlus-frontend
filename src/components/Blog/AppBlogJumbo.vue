<script>
    export default{
        name: "AppBlogJumbo",
    }

</script>

<template>
    <main>
        <section class="jumbo">
            ciao
        </section>
    </main>
</template>

<style lang="scss" scoped>
    @use '../../assets/styles/partials/variables' as *;
    @use '../../assets/styles/partials/mixins' as *;

    .jumbo{
        border: 1px solid green;
        height: calc(100vh - 80px);
        margin-top: 80px;
    }
</style>