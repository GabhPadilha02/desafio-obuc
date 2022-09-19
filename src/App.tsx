import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import { Router } from "./router";

export function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </AppProvider>
  )
}
