<template>
    <div class="center">
        <v-card width="300" v-if="login">
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
            <v-card-text class="pb-0">
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
                  <h3>LOGIN</h3>
                </v-btn>
            </v-card-text>
            <v-card-text class="boxCenter">
                <h4 class="font-weight-light blue--text pointer">
                    New Here? Signup.
                </h4>
            </v-card-text>
        </v-card>
        <v-card width="300" height="500" v-if="$store.state.signup">
            <v-card-title style="display:flex; flex-flow:column;">
                <h2 class="font-weight-light center pb-4">The Chat App</h2>
                <h4 class="font-weight-light center">SIGNUP</h4>
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
                    label="Enter Email"
                    dense
                    flat
                    v-model="user_email"
                    hide-details
                    solo-inverted
                ></v-text-field>
            </v-card-text>
            <v-card-text>
                <v-text-field
                    label="Enter Full Name"
                    dense
                    flat
                    v-model="user_fullname"
                    hide-details
                    solo-inverted
                ></v-text-field>
            </v-card-text>
            <v-card-text>
                <v-text-field
                    label="Enter User Name"
                    dense
                    flat
                    v-model="user_name"
                    hide-details
                    solo-inverted
                ></v-text-field>
            </v-card-text>
            <v-card-text class="pb-0">
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
                <v-btn tile color="#4fb68d" dark @click="handle_signup">
                  <h3>signup</h3>
                </v-btn>
            </v-card-text>
        </v-card>
    </div>
</template>
<script src="./signin.js"></script>
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
