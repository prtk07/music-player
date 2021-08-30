export default function loadingReducers(
  state: boolean = false,
  action: { type: string }
) {
  switch (action.type) {
    case "isloading":
      return true;

    case "isready":
      return false;

    default:
      return state;
  }
}
