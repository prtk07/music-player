export default function authReducer(
  state = {
    token: "",
  },
  action: { type: string; payload: any }
) {
  switch (action.type) {
    case "addAuth":
      return { token: action.payload };

    case "removeAuth":
      return {};

    default:
      return state;
  }
}
