export function authenticated(user: any) {
  return {
    type: "addAuth",
    payload: user,
  };
}

export function unauthenticated() {
  return {
    type: "removeAuth",
  };
}
