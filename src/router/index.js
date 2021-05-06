import {
    createRouter,
    createWebHistory
} from "vue-router";
import Home from "../views/Home.vue";

const routes = [{
    path: '/',
    redirect: '/warehousing'
}, {
    path: "/",
    name: "Home",
    component: Home,
    children: [{
        path: "/warehousing",
        name: "warehousing",
        meta: {
            title: '资产入库'
        },
        component: () => import(
            /* webpackChunkName: "dashboard" */
            "../views/AssetWarehousing.vue")
    }, {
        path: '/list',
        name: 'list',
        meta: {
            title: '资产列表'
        },
        component: () => import( /* webpackChunkName: "list" */
            '../views/AssetList.vue')
    }, {
        path: '/collect',
        name: 'collect',
        meta: {
            title: '领用&退还'
        },
        component: () => import( /* webpackChunkName: "collect" */
            '../views/CollectAndReturn.vue')
    }, {
        path: '/newCollect',
        name: 'newCollect',
        meta: {
            title: '新建领用'
        },
        component: () => import( /* webpackChunkName: "newCollect" */
            '../views/NewCollect.vue')
    }, {
        path: '/collectDetail',
        name: 'collectDetail',
        meta: {
            title: '领用详情'
        },
        component: () => import( /* webpackChunkName: "collectDetail" */
            '../views/CollectDetail.vue')
    }, {
        path: '/newReturn',
        name: 'newReturn',
        meta: {
            title: '新建退还'
        },
        component: () => import( /* webpackChunkName: "newReturn" */
            '../views/NewReturn.vue')
    }, {
        path: '/returnDetail',
        name: 'returnDetail',
        meta: {
            title: '退还详情'
        },
        component: () => import( /* webpackChunkName: "returnDetail" */
            '../views/ReturnDetail.vue')
    }, {
        path: '/borrow',
        name: 'borrow',
        meta: {
            title: '借用&归还'
        },
        component: () => import( /* webpackChunkName: "borrow" */
            '../views/BorrowAndRevert.vue')
    }, {
        path: '/newBorrow',
        name: 'newBorrow',
        meta: {
            title: '新建借用'
        },
        component: () => import( /* webpackChunkName: "newBorrow" */
            '../views/NewBorrow.vue')
    }, {
        path: '/borrowDetail',
        name: 'borrowDetail',
        meta: {
            title: '借用详情'
        },
        component: () => import( /* webpackChunkName: "borrowDetail" */
            '../views/BorrowDetail.vue')
    }, {
        path: '/newRevert',
        name: 'newRevert',
        meta: {
            title: '新建归还'
        },
        component: () => import( /* webpackChunkName: "newRevert" */
            '../views/NewRevert.vue')
    }, {
        path: '/revertDetail',
        name: 'revertDetail',
        meta: {
            title: '归还详情'
        },
        component: () => import( /* webpackChunkName: "revertDetail" */
            '../views/RevertDetail.vue')
    }, {
        path: '/scrap',
        name: 'scrap',
        meta: {
            title: '报废管理'
        },
        component: () => import( /* webpackChunkName: "scrap" */
            '../views/Scrap.vue')
    }, {
        path: '/allocation',
        name: 'allocation',
        meta: {
            title: '调拨管理'
        },
        component: () => import( /* webpackChunkName: "allocation" */
            '../views/Allocation.vue')
    }, {
        path: '/repair',
        name: 'repair',
        meta: {
            title: '维修管理'
        },
        component: () => import( /* webpackChunkName: "repair" */
            '../views/Repair.vue')
    }, {
        path: '/newAllocation',
        name: 'newAllocation',
        meta: {
            title: '新建调拨'
        },
        component: () => import( /* webpackChunkName: "newAllocation" */
            '../views/NewAllocation.vue')
    }, {
        path: '/allocationDetail',
        name: 'allocationDetail',
        meta: {
            title: '调拨详情'
        },
        component: () => import( /* webpackChunkName: "allocationDetail" */
            '../views/AllocationDetail.vue')
    }, {
        path: '/newRepair',
        name: 'newRepair',
        meta: {
            title: '新建维修'
        },
        component: () => import( /* webpackChunkName: "newRepair" */
            '../views/NewRepair.vue')
    }, {
        path: '/repairDetail',
        name: 'repairDetail',
        meta: {
            title: '维修详情'
        },
        component: () => import( /* webpackChunkName: "repairDetail" */
            '../views/RepairDetail.vue')
    }, {
        path: '/newScrap',
        name: 'newScrap',
        meta: {
            title: '新建报废'
        },
        component: () => import( /* webpackChunkName: "newScrap" */
            '../views/NewScrap.vue')
    }, {
        path: '/scrapDetail',
        name: 'scrapDetail',
        meta: {
            title: '报废详情'
        },
        component: () => import( /* webpackChunkName: "scrapDetail" */
            '../views/ScrapDetail.vue')
    }]
}, {
    path: "/login",
    name: "Login",
    meta: {
        title: '登录'
    },
    component: () => import(
        /* webpackChunkName: "login" */
        "../views/Login.vue")
}];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} | vue-manage-system`;
    const role = localStorage.getItem('ms_username');
    if (!role && to.path !== '/login') {
        next('/login');
    } else if (to.meta.permission) {
        // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
        role === 'admin' ?
            next() :
            next('/403');
    } else {
        next();
    }
});

export default router;