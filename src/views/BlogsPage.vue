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
            posts: [
                {
                    id: 1,
                    title: "sunt aut facere",
                    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
                },
                {
                    id: 2,
                    title: "qui est esse",
                    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
                },
                {
                    id: 3,
                    title: "ea molestias quasi",
                    body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
                },
                {
                    id: 4,
                    title: "eum et est occaecati",
                    body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
                },
                {
                    id: 5,
                    title: "nesciunt quas odio",
                    body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
                },
                {
                    userId: 1,
                    id: 6,
                    title: "dolorem eum magni eos",
                    body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
                },
            ],
        };
    },
};
</script>
