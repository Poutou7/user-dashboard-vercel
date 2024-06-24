/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/:pathMatch(.*)*",
      component: () => import("@/views/Error.vue"),
    },
    {
      path: "/main",
      redirect: "/main",
      component: () => import("@/layouts/full/FullLayout.vue"),
      children: [
        {
          name: "home",
          path: "/",
          component: () => import("@/views/DashboardHome.vue"),
        },
        {
          name: "Account Setting",
          path: "/account-settings",
          component: () => import("@/views/AccountSettings.vue"),
        },
        {
          name: "Chat",
          path: "/chat",
          component: () => import("@/views/Chat.vue"),
        },
        {
          name: "clients",
          path: "/clients",
          component: () => import("@/views/Clients.vue"),
        },
        {
          name: "store",
          path: "/store",
          component: () => import("@/views/Store.vue"),
        },
        {
          name: "services",
          path: "/services",
          component: () => import("@/views/Services.vue"),
        },
        {
          name: "booking",
          path: "/booking",
          component: () => import("@/views/Booking.vue"),
        },
        {
          name: "reviews",
          path: "/reviews",
          component: () => import("@/views/Reviews.vue"),
        },
        {
          name: "offers",
          path: "/offers",
          component: () => import("@/views/Offers.vue"),
        },
        // {
        //   name: "permissions",
        //   path: "/permissions",
        //   component: () => import("@/views/Permissions.vue"),
        // },
        // {
        //   name: "Reports Statistics",
        //   path: "/Reports-Statistics",
        //   component: () => import("@/views/ReportsStatistics.vue"),
        // },
        // {
        //   name: "Connect Services",
        //   path: "/connect-services",
        //   component: () => import("@/views/ConnectServices.vue"),
        // },
        // {
        //   name: "Subscription Package",
        //   path: "/subscription-package",
        //   component: () => import("@/views/SubscriptionPackage.vue"),
        // },
      ],
    },
  ],
});
