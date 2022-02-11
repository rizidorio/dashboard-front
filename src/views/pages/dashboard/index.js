import Api from "../../../services/apiService/apiService";

export default {
   async created() {
       await this.login();
       this.getOrders();
    },

    data: () => ({
        apiService: Api,
        loading: false,
        error: false,
        show: true,
        errorMessage: "",
        orders: [],
        page: 1,
        totalPages: 1,
        pageSize: 20,
        sizes: [10, 20, 40, 80, 160],
        filter: {
            page: 1,
            pageSize: 20,
        },
        headers: [
            {
                text: "Pedido",
                align: "center",
                class: "item",
                value: "order",
            },
            {
                text: "Address",
                align: "center",
                class: "item",
                value: "address",
                width: 300,
            },
            {
                text: "Valor Pedido",
                align: "center",
                class: "item",
                value: "value",
            },
            {
                text: "Itens",
                align: "center",
                class: "item",
                value: "itemsQuantity",
            },
            {
                text: "Time Entrega",
                align: "center",
                class: "item",
                value: "deliveryTeam",
            },
        ],
        headerProps: {
            sortByText: "Ordenar por",
        },
    }),

    methods: {
        async login() {
            const loginModel = {
                Email: "user@teste.com",
                Password: "teste123",
            };

            await this.apiService.post("auth/login", loginModel)
                .then((response) => {
                    const user = JSON.stringify(response.data.content.user);
                    const tokenExpires = response.data.content.expiration;
                    const userToken = response.data.content.token;
                    this.$store.commit("USER_LOGGED", user);
                    this.$store.commit("TOKEN_EXPIRES", tokenExpires);
                    this.$store.commit("CURRENT_USER_TOKEN", userToken);
                })
                .catch((err) => {
                    this.show = false;
                    this.error = true;
                    this.errorMessage = err.response.data.message;

                    setTimeout(() => {
                        this.error = false;
                    }, 4000);
                });            
        },

        async getOrders() {
            await this.apiService.post("/dashboard/listOrders", this.filter)
                .then((response) => {
                    this.orders = [];
                    this.totalPages = response.data.content.totalPages;
                    console.log(response)
                    response.data.content.objects.map((order) => {
                        const orderModel = {
                            orderNumber: order.id,
                            orderAddress: order.address,
                            orderValue: new Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(order.totalValue),
                            items: order.itemsOrders.length,
                            deliveryTeam: order.deliveryTeam.name,
                        }
                        this.orders.push(orderModel);
                    });
                }).catch((err) => {
                    console.log(err)
                    this.show = false;
                    this.error = true;
                    this.errorMessage = err.response.data.message;

                    setTimeout(() => {
                        this.error = false;
                    }, 4000);
                });
        },
    },
    watch: {
        pageSize() {
            this.filter.pageSize = this.pageSize;
            this.filter.page = 1;
            this.getOrders();
        },

        page() {
            this.filter.page = this.page;
            this.getOrders();
        }
    },
};