<template>
    <div>
        <!-- Page header with logo and tagline-->
        <header class="py-5 bg-light border-bottom mb-4">
            <div class="container">
                <div class="text-center my-5">
                    <h1 class="fw-bolder">Welcome to Blog Home!</h1>
                    <p class="lead mb-0">
                        A Bootstrap 5 starter layout for your next blog homepage
                    </p>
                </div>
            </div>
        </header>
        <!-- Page content-->
        <div class="container">
            <div class="row">
                <!-- Blog entries-->
                <div class="col-lg-8">
                    <!-- Nested row for non-featured blog posts-->
                    <div class="row">
                        <BlogPost
                            v-for="post in posts"
                            :post="post"
                            :key="post.id"
                        />
                    </div>
                    <!-- Pagination-->
                    <nav aria-label="Pagination">
                        <hr class="my-0" />
                        <ul class="pagination justify-content-center my-4">
                            <li class="page-item disabled">
                                <a
                                    class="page-link"
                                    href="#"
                                    tabindex="-1"
                                    aria-disabled="true"
                                    >Newer</a
                                >
                            </li>
                            <li class="page-item active" aria-current="page">
                                <a class="page-link" href="#!">1</a>
                            </li>
                            <li class="page-item">
                                <a class="page-link" href="#!">2</a>
                            </li>
                            <li class="page-item">
                                <a class="page-link" href="#!">3</a>
                            </li>
                            <li class="page-item disabled">
                                <a class="page-link" href="#!">...</a>
                            </li>
                            <li class="page-item">
                                <a class="page-link" href="#!">15</a>
                            </li>
                            <li class="page-item">
                                <a class="page-link" href="#!">Older</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div class="col-lg-4">
                    <side-bar />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SideBar from "../components/blogs/SideBar.vue";
import BlogPost from "../components/blogs/BlogPost.vue";

export default {
    components: { SideBar, BlogPost },
    data() {
        return {
            posts: [],
        };
    },
    created() {
        fetch("https://jsonplaceholder.typicode.com/posts/")
            .then((response) => response.json())
            .then((resText) => {
                this.posts = resText;
            });
    },
    // async created() {
    //     let apiPosts = await fetch(
    //         "https://jsonplaceholder.typicode.com/posts/"
    //     );

    //     apiPosts = await apiPosts.json();

    //     this.posts = apiPosts;
    // },
};
</script>
