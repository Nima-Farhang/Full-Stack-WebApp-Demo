import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_SAVE_ADDRESS,
} from "../constants/userConstants";

export const userRegisterReducer = (state = { address: {} }, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };

    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };

    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };

    case USER_SAVE_ADDRESS:
      return {
        ...state,
        address: action.payload,
      };
    default:
      return state;
  }
};
