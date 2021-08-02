<template>
    <div class="center">
        <v-card width="300">
            <v-card-title style="display:flex; flex-flow:column;">
                <h2 class="font-weight-light center pb-4">The Chat App</h2>
                <h4 class="font-weight-light center">LOGIN</h4>
            </v-card-title>
            <v-card-text>
                <v-text-field
                    label="Enter Mobile Number"
                    dense
                    flat
                    v-model="user_mobile_no"
                    hide-details
                    solo-inverted
                ></v-text-field>
            </v-card-text>
            <v-card-text>
                <v-text-field
                    label="Enter Password"
                    dense
                    flat
                    v-model="user_password"
                    hide-details
                    solo-inverted
                    type="password"
                ></v-text-field>
            </v-card-text>
            <v-card-text class="boxCenter">
                <v-btn tile color="#4fb68d" dark @click="handle_login">
                 LOGIN
                </v-btn>
            </v-card-text>
            <div class="boxCenter pb-3">
                <h4 class="font-weight-light blue--text pointer" @click="open_signup">
                    New Here? Signup.
                </h4>
            </div>
        </v-card>
    </div>
</template>
<script src="./login.js"></script>
<style scoped>
.center {
    margin: auto;
}
.boxCenter {
  display: flex;
  align-items: center;
  justify-content: center;
}
.pointer {
    cursor: pointer;
}
</style>
