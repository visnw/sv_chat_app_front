<template>
    <v-row class="ma-0"> 
      <v-col cols="12" sm="4">
        <v-card outlined height="100%">
          <v-list >
            <template v-for="(item, index) in items">
              <v-subheader
              v-if="item.header"
              :key="item.header"
              v-text="item.header"
              ></v-subheader>

              

              <v-list-item
              v-else
              :key="item.title"
              style="cursor: pointer"
              >
                <v-list-item-avatar>
                <v-img :src="item.avatar"></v-img>
                </v-list-item-avatar>

                <v-list-item-content
                @click="openChat(item)">
                <v-list-item-title v-html="item.title"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-divider
              v-if="!item.header"
              :key="index"
              :inset="true"
              class="mr-2"
              ></v-divider>
            </template>
          </v-list>
        </v-card>
      </v-col>
      <v-col cols="12" sm="8" class="pl-0">
          <v-row class="ma-0" style="border: thin solid rgba(0, 0, 0, 0.12); border-radius: 4px; height:100%">
            <v-col cols="12" style="display: flex; flex-direction: column;" class="pc_background">
              
              <v-row class="ma-0" style="height: 100%; display: flex; flex-direction: column">
                  <v-card flat>
                    <v-card-title class="black--text">
                      <v-avatar size="56">
                        <img
                          alt="user"
                          :src= "currentChatImg"
                        >
                      </v-avatar>
                      <p class="ml-3">
                        {{currentChatName}}
                      </p>
                    </v-card-title>
                  </v-card>
                  <v-divider></v-divider>
                <v-col>
                  <v-list class="transparent" >
                    <template v-for="(message) in messages" >
                      <v-list-item :key="message.id" style="cursor: pointer">
                        <v-row v-if="message.isReceived">
                          <v-chip
                            class="ma-2"
                            color="green"
                            text-color="white"
                            @click:close="chip3 = false"
                          >
                            {{ message.message }}
                          </v-chip>
                        </v-row>
                        <v-row v-else justify="end">
                          <v-chip
                            class="ma-2"
                            color="primary"
                            @click:close="chip3 = false"
                          >
                            {{ message.message }}
                          </v-chip>
                        </v-row>
                      </v-list-item>
                    </template>
                  </v-list>
                </v-col>
              </v-row>
              <v-row class="ma-0">
                <v-text-field
                  placeholder="Type any message ..."
                  outlined
                  flat
                  dense
                  filled
                  rounded
                  hide-details="auto"
                ></v-text-field>
                <v-btn
                icon
                large
                @click="signUp()"
                >
                  <v-icon color="primary">mdi-send</v-icon>
                </v-btn>

              </v-row>

            </v-col>

          </v-row>
      </v-col>
    </v-row>
</template>
<script src="./main_page.js"></script>
<style scoped>
.pc_background {
  background-image: url("~@/assets/pc_background.png");
}
.transparent {
  background-color: transparent!important;
  border-color: transparent!important;
 }
</style>