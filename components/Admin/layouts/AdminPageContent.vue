<template>
    <div class="page-content" style="min-height: 100vh;">
        <admin-sidebar></admin-sidebar>
        <div class="content-wrapper">
            <admin-title></admin-title>
            <div class="content pt-0">
                <router-view></router-view>
            </div>
            <admin-footer></admin-footer>
        </div>
    </div>
</template>
<script>
    import AdminFooter from './AdminFooter.vue';
    import AdminSidebar from './AdminSidebar.vue';
    import AdminTitle from './AdminTitle.vue';
    export default {
        components: {
            AdminFooter, AdminSidebar, AdminTitle
        },
    };
</script>