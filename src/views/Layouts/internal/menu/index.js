//import Api from "../../../services/apiService/apiService";

export default {
    created() {
        this.userLogged = JSON.parse(localStorage.getItem("userLogged"))
    },

    data: () => ({
        group: null,
        userLogged: {},
        items: [
            { title: 'Dashboard', icon: 'mdi-chart-tree' },
          ],
    }),

    methods: {
        logout() {
            localStorage.removeItem("userLogged");
            this.$router.push("/auth");
        }
    },
};