<template>
    <!-- Page content-->
    <div class="container mt-5">
        <div class="row">
            <div class="col-lg-8">
                <!-- Post content-->
                <article>
                    <!-- Post header-->
                    <header class="mb-4">
                        <!-- Post title-->
                        <h1 class="fw-bolder mb-1">{{ post.title }}</h1>
                        <!-- Post meta content-->
                        <div class="text-muted fst-italic mb-2">
                            Posted on January 1, 2022 by Start Bootstrap
                        </div>
                        <!-- Post categories-->
                        <a
                            class="badge bg-secondary text-decoration-none link-light"
                            href="#!"
                            >Web Design</a
                        >
                        <a
                            class="badge bg-secondary text-decoration-none link-light"
                            href="#!"
                            >Freebies</a
                        >
                    </header>
                    <!-- Preview image figure-->
                    <figure class="mb-4">
                        <img
                            class="img-fluid rounded"
                            src="https://dummyimage.com/900x400/ced4da/6c757d.jpg"
                            alt="..."
                        />
                    </figure>
                    <!-- Post content-->
                    <section class="mb-5">
                        {{ post.body }}
                    </section>
                </article>
            </div>
            <!-- Side widgets-->
            <div class="col-lg-4">
                <SideBar />
            </div>
        </div>
    </div>
</template>

<script>
import SideBar from "../components/blogs/SideBar.vue";
export default {
    components: { SideBar },
    data() {
        return {
            post: {},
        };
    },
    created() {
        let id = this.$route.params.id;
        fetch("https://jsonplaceholder.typicode.com/posts/" + id)
            .then((response) => response.json())
            .then((resText) => {
                this.post = resText;
            });
    },
    // async created() {
    //     let id = this.$route.params.id;

    //     let post = await fetch(
    //         "https://jsonplaceholder.typicode.com/posts/" + id
    //     );

    //     post = await post.json();

    //     this.post = post;
    // },
};
</script>
