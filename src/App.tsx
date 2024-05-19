import { createTheme, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Root from "./routes/Root";
import Chatbot from "./routes/Chatbot";
import Landing from "./routes/Landing";
import NavbarLayout from "./layouts/NavbarLayout";
import ChatbotGemini from "./routes/ChatbotGemini";
import SentimentAnalysis from "./routes/SentimentAnalysis";
import ABSA from "./routes/ABSA";
// import NavbarLayout from "./layouts/NavbarLayout";
function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Root />}>
              <Route element={<NavbarLayout />}>
                <Route path="" element={<Landing />} />
                <Route path="Chatbot (Regex)" element={<Chatbot />} />
                <Route path="Chatbot (Gemini)" element={<ChatbotGemini />} />
                <Route
                  path="Sentiment Analysis"
                  element={<SentimentAnalysis />}
                />
                <Route path="ABSA" element={<ABSA />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
