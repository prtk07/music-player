import React from "react";
import { Provider } from "react-redux";
import Apploading from "expo";
import { StackNavigator } from "./routes/HomeStack";
import store from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <StackNavigator />
    </Provider>
  );
}
