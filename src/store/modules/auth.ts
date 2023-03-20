import type { InjectionKey } from "vue";
import type { Store } from "vuex";

// define your typings for the store state
export interface State {
  userSteamID: string;
  username: string;
  profilePictureLink: string;
}

interface LoginData {
  steamID: string;
  username: string;
  picture: string;
}

// initial state
const state = {
  userSteamID: "",
  username: "",
  profilePictureLink: "",
};

// getters
const getters = {
  userSteamID: (state: State) => state.userSteamID,
  username: (state: State) => state.username,
  profilePictureLink: (state: State) => state.profilePictureLink,
};

const mutations = {
  SET_USER(state: State, { steamID, username, picture }: LoginData) {
    state.userSteamID = steamID;
    state.username = username;
    state.profilePictureLink = picture;
  },
  LOG_OUT(state: State) {
    state.username = "";
    state.userSteamID = "";
    state.profilePictureLink = "";
  },
};

// actions
const actions = {};

export const key: InjectionKey<Store<State>> = Symbol();

export default {
  state,
  getters,
  mutations,
  actions,
};
