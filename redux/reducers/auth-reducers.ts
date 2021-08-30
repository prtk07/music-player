export default function authReducer(
  state = {
    isLoading: false,
    token: "",
  },
  action: { type: string; payload: any }
) {
  switch (action.type) {
    case "addAuth":
      return { isLoading: false, token: action.payload };

    case "removeAuth":
      return {
        isLoading: false,
      };

    default:
      return state;
  }
}
