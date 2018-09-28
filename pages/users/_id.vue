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
        <h1 class="mb-2">User <small class="grey--text">new</small></h1>
        <v-card>
            <v-card-text>
                <v-form>
                    <v-text-field
                            label="Id"
                            placeholder="id"
                            counter="10"
                            clearable
                            required
                    >
                        <v-tooltip
                                slot="prepend"
                                bottom
                        >
                            <v-icon slot="activator">info</v-icon>
                            Id를 입력해 주십시오.
                        </v-tooltip>
                    </v-text-field>
                    <v-text-field
                        label="Name"
                        placeholder="홍길동"
                        counter="10"
                        clearable
                        required
                    >
                        <v-tooltip
                            slot="prepend"
                            bottom
                        >
                            <v-icon slot="activator">info</v-icon>
                            이름을 입력해 주십시오.
                        </v-tooltip>
                    </v-text-field>
                    <v-text-field
                            label="Email"
                            placeholder="abc@gmail.com"
                            counter="100"
                            clearable
                            required
                    >
                        <v-tooltip
                                slot="prepend"
                                bottom
                        >
                            <v-icon slot="activator">info</v-icon>
                            email을 입력해 주십시오.
                        </v-tooltip>
                    </v-text-field>
                    <v-select
                            label="Auth"
                            :items="authItems"
                            item-text="text"
                            item-value="auth"
                            hint="권한 선택이 필요합니다."
                            persistent-hint
                    >
                        <v-tooltip
                                slot="prepend"
                                bottom
                        >
                            <v-icon slot="activator">info</v-icon>
                            권한 선택이 필요합니다.
                        </v-tooltip>
                    </v-select>
                    <v-switch
                            label="enabled"
                    ></v-switch>
                </v-form>
            </v-card-text>
            <v-card-actions>
                <v-spacer/>
                <v-btn color="white">
                    Reset<v-icon right>restore</v-icon>
                </v-btn>
                <v-btn color="info">
                    Save<v-icon right>save</v-icon>
                </v-btn>
                <v-btn color="orange" href="/users" dark>
                    <v-icon left dark>arrow_back</v-icon>List
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
    export default {
      validate ({ params }) {
        return /^(\d+|new)$/.test(params.id);
      },
      data: () => ({
        breadcrumbs: [
          { text: 'Home', to: '/' },
          { text: 'user', to: '/users' },
          { text: 'new' },
        ],
        authItems: [
          { auth: 'admin', text: '관리자' },
          { auth: 'user', text: '사용자' },
          { auth: 'hospital', text: '병원' },
        ],
      }),
      methods: {
        handleClick: () => {
          console.log('clicked');
        },
      },
    };
</script>