import { Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home";
import CreateMovie from "./components/Pages/Movie/Create";
import Popular from "./components/Pages/Movie/Popular";
import NowPlaying from "./components/Pages/Movie/NowPlaying";
import TopRated from "./components/Pages/Movie/TopRated";
import Layout from "./components/Layout/Layout";
import { ThemeProvider } from "styled-components";
import theme from "./utils/constants/theme";
import GlobalStyle from "./components/GlobalStyle";




 function App() {
      return (
    <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
    <Layout>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Movie/Create" element={<CreateMovie/>} />
      <Route path="/Movie/Popular" element={<Popular/>} />
      <Route path="/Movie/Now" element={<NowPlaying/>} />
      <Route path="/Movie/Top" element={<TopRated/>} />
    </Routes>
    </Layout>
    </ThemeProvider>
    </>
  );
}

export default App;
