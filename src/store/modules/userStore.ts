import { defineStore } from 'pinia';

interface UserStore {
  userName: String
}
export const useUserStore = defineStore('userStore', {
  state: (): UserStore => ({
    userName: ""
  }),
  getters: {
    getUserName(state) {
      return state.userName;
    },
  },
  actions: {
    setUserName(param: string) {
      this.userName = param;
    },
  },
  persist: {
    enabled: true,
    storage: sessionStorage,
    encryptionKey: 'userStore',
  },
});
