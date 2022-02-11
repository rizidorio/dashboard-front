import Dashboard from "../dashboard/dashboard.vue";
import Layout from "../../Layouts/internal/layout/layout.vue";

const DashboardRoutes = {
    component: Layout,
    children: [
        {
            path: "/",
            name: "dashboard",
            component: Dashboard,
        },
    ],
};

export default DashboardRoutes;