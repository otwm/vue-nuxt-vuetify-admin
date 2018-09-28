<template>
    <div>
        <v-breadcrumbs class="bc-grey mb-2">
            <v-icon slot="divider">chevron_right</v-icon>
            <v-breadcrumbs-item
                    v-for="breadcrumb in breadcrumbs"
                    :key="breadcrumb.text"
                    :disabled="breadcrumb.disabled"
                    :href="breadcrumb.to"
            >
                {{ breadcrumb.text }}
            </v-breadcrumbs-item>
        </v-breadcrumbs>
        <h1 class="mb-2">User <small class="grey--text">list</small></h1>
        <v-card class="mb-2">
            <v-card-text>
                <v-form>
                    <v-container grid-list-md text-xs-center>
                        <v-layout row wrap>
                            <v-flex>
                                <v-text-field
                                        label="Id"
                                        placeholder="id"
                                        counter="10"
                                        clearable
                                        v-model="accountId"
                                />
                            </v-flex>
                            <v-flex>
                                <v-text-field
                                        label="Name"
                                        placeholder="홍길동"
                                        counter="10"
                                        clearable
                                        v-model="name"
                                />
                            </v-flex>
                            <v-flex>
                                <v-text-field
                                        label="Email"
                                        placeholder="abc@gmail.com"
                                        counter="50"
                                        clearable
                                        v-model="email"
                                />
                            </v-flex>
                        </v-layout>
                        <v-layout row wrap>
                            <v-flex>
                                <v-select
                                        label="Auth"
                                        :items="authItems"
                                        item-text="text"
                                        item-value="auth"
                                        v-model="auth"
                                />
                            </v-flex>
                            <v-flex>
                                <v-select
                                        label="Status"
                                        :items="statusItems"
                                        item-text="text"
                                        item-value="status"
                                        v-model="status"
                                />
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-form>
            </v-card-text>
            <v-card-actions>
                <v-spacer/>
                <v-btn color="white">
                    Reset<v-icon right>restore</v-icon>
                </v-btn>
                <v-btn color="success" @click="search">
                    Search<v-icon right>search</v-icon>
                </v-btn>
            </v-card-actions>
        </v-card>

        <v-toolbar flat color="white">
            <v-spacer/>
            <v-btn color="info" href="/users/new">New<v-icon right>add</v-icon></v-btn>
            <v-btn color="error" @click="remove">Delete<v-icon right>delete</v-icon></v-btn>
        </v-toolbar>
        <v-data-table
                select-all
                v-model="selected"
                :headers="headers"
                :items="users"
                :total-items="count"
                :pagination.sync="pagination"
                item-key="id"
                :loading="$store.state.loading"
                class="elevation-1"
        >
            <v-progress-linear slot="progress" color="blue" indeterminate></v-progress-linear>
            <template slot="items" slot-scope="props">
                <tr :active="props.selected">
                    <td class="short-column text-xs-center">
                        <v-checkbox hide-details primary
                                    v-model="props.selected"
                        />
                    </td>
                    <td class="short-column text-xs-center">{{ props.item.no }}</td>
                    <td class="text-xs-center">
                        <nuxt-link :to="{ name: 'users-id', params: { id: props.item.id } }">
                            {{ props.item.accountId }}
                        </nuxt-link>
                    </td>
                    <td class="text-xs-center">
                        <nuxt-link :to="{ name: 'users-id', params: { id: props.item.id } }">
                            {{ props.item.name }}
                        </nuxt-link>
                    </td>
                    <td class="text-sm-center">{{ props.item.email }}</td>
                    <td class="text-sm-center">{{ props.item.auth }}</td>
                    <td class="text-sm-center">{{ props.item.status }}</td>
                    <td class="text-sm-center">{{ props.item.createDate }}</td>
                </tr>
            </template>
        </v-data-table>
    </div>
</template>

<script>
    import axios from 'axios';
    import users from '../../common/mock/users';
    export default {
      data: () => ({
        breadcrumbs: [
          { text: 'Home', disabled: false, to: '/' },
          { text: 'user' },
        ],
        selected: [],
        accountId: '',
        count: 7,
        pagination: {},
        name: '',
        email: '',
        auth: '',
        status: '',
        headers: [
          { text: 'No', value: 'no', align: 'center' },
          { text: 'Id', value: 'accountId', align: 'center' },
          { text: 'Name', value: 'name', align: 'center' },
          { text: 'email', value: 'email', align: 'center' },
          { text: 'Auth', value: 'auth', align: 'center' },
          { text: 'Status', value: 'status', align: 'center' },
          { text: 'CreateDt', value: 'createDate', align: 'center' },
        ],
        authItems: [
          { text: '선택', status: null },
          { auth: 'admin', text: '관리자' },
          { auth: 'user', text: '사용자' },
          { auth: 'hospital', text: '병원' },
        ],
        statusItems: [
          { text: '선택', status: null },
          { text: '가입', status: 'join' },
          { text: '탈퇴', status: 'exit' },
        ],
        users,
      }),
      watch: {
        pagination: {
          async handler () {
            await this.search();
          },
          deep: true,
        },
      },
      methods: {
        async search () {
          try {
            const {
              accountId,
              name,
              email,
              auth,
              status,
            } = this;
            const { sortBy, descending, page, rowsPerPage } = this.pagination;
            this.$store.commit('startLoading');
            const res = await axios({
              method: 'get',
              url: '/api/users',
              data: {
                accountId,
                name,
                email,
                auth,
                status,
                sortBy,
                descending,
                page,
                rowsPerPage,
              },
            });
            this.$store.commit('endLoading');
            this.users = res.data.users;
            this.count = res.data.count;
          } catch (error) {
            console.log(error);
          }
        },
        async remove () {
          try {
            const { selected } = this;
            const res = await axios({
              method: 'delete',
              url: '/api/users',
              data: {
                selected,
              },
            });
            console.log(res);
          } catch (error) {
            console.log(error);
          }
          this.search();
        },
        reset () {
          alert(this);
        },
      },
    };
</script>
