<template>
    <div>
        <!-- Header-->
        <header class="py-5">
            <div class="container px-lg-5">
                <div class="p-4 p-lg-5 bg-light rounded-3 text-center">
                    <div class="m-4 m-lg-5">
                        <h1 class="display-5 fw-bold">A warm welcome!</h1>
                        <p class="fs-4">
                            Bootstrap utility classes are used to create this
                            jumbotron since the old component has been removed
                            from the framework. Why create custom CSS when you
                            can use utilities?
                        </p>
                        <a class="btn btn-primary btn-lg" href="#!"
                            >Call to action</a
                        >
                    </div>
                </div>
            </div>
        </header>
        <!-- Page Content-->
        <section class="pt-4">
            <div class="container px-lg-5">
                <!-- Page Features-->
                <div class="row gx-lg-5">
                    <!-- Start Feature -->
                    <div
                        v-for="feature in features"
                        class="col-lg-6 col-xxl-4 mb-5"
                    >
                        <div class="card bg-light border-0 h-100">
                            <div class="card-body text-center p-4 p-lg-5">
                                <div
                                    class="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"
                                >
                                    <i :class="`bi bi-${feature.icon}`"></i>
                                </div>
                                <h2 class="fs-4 fw-bold">
                                    {{ feature.title }}
                                </h2>
                                <p class="mb-0">
                                    {{ feature.desc }}
                                </p>
                            </div>
                        </div>
                    </div>
                    <!-- End Feature -->
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            features: [
                {
                    icon: "collection",
                    title: "Fresh new layout",
                    desc: "With Bootstrap 5, we've created a fresh new layout for this template!",
                },
                {
                    icon: "cloud-download",
                    title: "Free to download",
                    desc: "With Bootstrap 5, we've created a fresh new layout for this template!",
                },
                {
                    icon: "card-heading",
                    title: "Jumbotron hero header",
                    desc: "With Bootstrap 5, we've created a fresh new layout for this template!",
                },
            ],
        };
    },
};
</script>

<style scoped>
.feature {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 4rem;
    width: 4rem;
    font-size: 2rem;
}
</style>
