<template>

    <div class="navbar navbar-expand-md navbar-light">

        <div class="navbar-header navbar-dark d-none d-md-flex align-items-md-center">
            <div class="navbar-brand navbar-brand-md">
                <a href="index.html" class="d-inline-block">
                    <img src="/admin/images/logo_light.png" alt="">
                </a>
            </div>

            <div class="navbar-brand navbar-brand-xs">
                <a href="index.html" class="d-inline-block">
                    <img src="/admin/images/logo_icon_light.png" alt="">
                </a>
            </div>
        </div>

        <!-- Mobile controls -->
        <div class="d-flex flex-1 d-md-none">
            <div class="navbar-brand mr-auto">
                <a href="index.html" class="d-inline-block">
                    <img src="/admin/images/logo_dark.png" alt="">
                </a>
            </div>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-mobile">
                <i class="icon-tree5"></i>
            </button>

            <button class="navbar-toggler sidebar-mobile-main-toggle" type="button">
                <i class="icon-paragraph-justify3"></i>
            </button>
        </div>
        <!-- /mobile controls -->

        <div class="collapse navbar-collapse" id="navbar-mobile">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a href="#" class="navbar-nav-link sidebar-control sidebar-main-toggle d-none d-md-block">
                        <i class="icon-paragraph-justify3"></i>
                    </a>
                </li>
            </ul>

            <span class="navbar-text ml-md-3 mr-md-auto"><span class="badge bg-pink-400 badge-pill">16 orders</span></span>

            <ul class="navbar-nav">
                <li class="nav-item dropdown">
                    <a href="#" class="navbar-nav-link dropdown-toggle" data-toggle="dropdown">
                        <img src="/admin/images/lang/gb.png" class="img-flag mr-2" alt="">
                        English
                    </a>

                    <div class="dropdown-menu dropdown-menu-right">
                        <a href="#" class="dropdown-item english active"><img src="/admin/images/lang/gb.png" class="img-flag" alt=""> English</a>
                        <a href="#" class="dropdown-item ukrainian"><img src="/admin/images/lang/ua.png" class="img-flag" alt=""> Українська</a>
                        <a href="#" class="dropdown-item deutsch"><img src="/admin/images/lang/de.png" class="img-flag" alt=""> Deutsch</a>
                        <a href="#" class="dropdown-item espana"><img src="/admin/images/lang/es.png" class="img-flag" alt=""> España</a>
                        <a href="#" class="dropdown-item russian"><img src="/admin/images/lang/ru.png" class="img-flag" alt=""> Русский</a>
                    </div>
                </li>

                <li class="nav-item dropdown dropdown-user">
                    <a href="#" class="navbar-nav-link dropdown-toggle" data-toggle="dropdown">
                        <img src="/admin/images/demo/users/face11.jpg" class="rounded-circle" alt="">
                        <span>Victoria</span>
                    </a>

                    <div class="dropdown-menu dropdown-menu-right">
                        <a href="#" class="dropdown-item"><i class="icon-user-plus"></i> My profile</a>
                        <a href="#" class="dropdown-item"><i class="icon-coins"></i> My balance</a>
                        <a href="#" class="dropdown-item"><i class="icon-comment-discussion"></i> Messages <span class="badge badge-pill bg-indigo-400 ml-auto">58</span></a>
                        <div class="dropdown-divider"></div>
                        <a href="#" class="dropdown-item"><i class="icon-cog5"></i> Account settings</a>
                        <a href="#" class="dropdown-item" @click.prevent="logout"><i class="icon-switch2"></i> Logout</a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        methods: {
            logout() {
                this.$store.commit('logout');
                this.$router.push('/auth/login');
            }
        }
    };
</script>