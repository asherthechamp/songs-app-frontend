"use client";

import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import store from "../store";
import theme from "../theme";

import SongsList from "./_components/SongsList";
//function MyApp({ Component, pageProps }) {
function MyApp() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* <Component {...pageProps} /> */}
        <div>
          <h1 className="mg-10 text-center text-2xl text-blue-800 p-10">
            Songs App
          </h1>
          <SongsList />
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
