<template>
    <div class="back">
        <v-app>
            <v-navigation-drawer
                color="#264653"
                dark
                permanent
                class="fill-height"
                >
                <v-row class="ma-5" justify="center" align="center">
                    <v-avatar size="62">
                        <v-icon large dark>
                            mdi-account-circle
                        </v-icon>
                    </v-avatar>
                    <span class="white--text text-center mt-2">{{`Bem-vindo ${userLogged.userName}`}}</span>
                </v-row>
                <v-list
                    nav
                    dense
                >
                    <v-list-item-group
                        v-model="group"
                        active-class="info--text text--accent-2"
                    >
                        <v-list-item
                        v-for="item in items"
                        :key="item.title"
                        :href="item.url"
                        link
                        width="100%"
                        >
                            <v-list-item-icon>
                                <v-icon>{{ item.icon }}</v-icon>
                            </v-list-item-icon>

                            <v-list-item-content>
                                <v-list-item-title class="text-subtitle-1">{{ item.title }}</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-navigation-drawer>
        </v-app>
    </div>
</template>

<style scoped>
.back {
    background-color: #f9f9f9;
}
</style>

<script src="./index.js"></script>