<template>
    <v-main class="pa-2">
        <v-toolbar flat>
            <v-toolbar-title>
                <v-icon color="black" large class="mr-5">mdi-chart-tree</v-icon>
                {{error ? errorMessage : 'Dashboard'}}
            </v-toolbar-title>
        </v-toolbar>
        <v-row class="my-0 py-0" v-show="show">
            <v-col cols="12">
                <v-data-table
                    :loading="loading"
                    loading-text="Carregando dados"
                    no-data-text="Nenhum dado encontrado"
                    :headers="headers"
                    :header-props="headerProps"
                    :items="orders"
                    :items-per-page="pageSize"
                    hide-default-footer
                >
                    <template v-slot:[`item.order`]="{ item }"> 
                        {{ item.orderNumber }}
                    </template>
                    <template v-slot:[`item.address`]="{ item }"> 
                        {{ item.orderAddress }}
                    </template>
                    <template v-slot:[`item.value`]="{ item }"> 
                        {{ item.orderValue }}
                    </template>
                    <template v-slot:[`item.itemsQuantity`]="{ item }"> 
                        {{ item.items }}
                    </template>
                    <template v-slot:[`item.deliveryTeam`]="{ item }"> 
                        {{ item.deliveryTeam }}
                    </template>
                </v-data-table>
            </v-col>
        </v-row>
        <v-row class="my-0 text-center d-flex" justify="center" align="center" v-show="show">
            <v-menu bottom offset-y v-show="show">
                <template v-slot:activator="{ on, attrs}">
                    <v-btn
                        v-show="show"
                        style="position: absolute; left: 0"
                        v-bind="attrs"
                        v-on="on"
                        color="#0BAAAD"
                        class="white--text"
                    >
                        Qtde: {{ pageSize }}
                        <v-icon class="ml-1">mdi-chevron-down</v-icon>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item
                        v-for="(size, i) in sizes"
                        :key="i"
                        @click="pageSize = size"
                    >
                        <v-list-item-title>{{ size }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>

            <v-pagination
                v-show="show"
                v-model="page"
                :length="totalPages"
                :total-visible="5"
                color="#0BAAAD"
            >
            </v-pagination>
        </v-row>
    </v-main>
</template>

<script src="./index.js"></script>