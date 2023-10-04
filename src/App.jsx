import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { Route, Routes } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Dashboard from "./scenes/dashboard";
import SidebarApp from "./scenes/global/Sidebar";
import Team from "./scenes/team";
import Contacts from "./scenes/contacts";
// import Invoices from "./scenes/global/invoices";
// import Bar from "./scenes/global/bar";
// import Form from "./scenes/global/form";
// import Line from "./scenes/global/line";
// import Pie from "./scenes/global/pie";
// import FAQ from "./scenes/global/faq";
// import Geography from "./scenes/global/geography";
// import Calendar from "./scenes/global/calendar";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SidebarApp />
          <main className="content">
            <Topbar />
            <Routes>
              <Route exact path="/" element={<Dashboard />} />
              <Route exact path="/team" element={<Team />} />
              <Route exact path="/contacts" element={<Contacts />} />
              {/* <Route exact path="/invoices" element={<Invoices />} /> */}
              {/* <Route exact path="/form" element={<Form />} /> */}
              {/* <Route exact path="/bar" element={<Bar />} /> */}
              {/* <Route exact path="/pie" element={<Pie />} /> */}
              {/* <Route exact path="/line" element={<Line />} /> */}
              {/* <Route exact path="/faq" element={<FAQ />} /> */}
              {/* <Route exact path="/geography" element={<Geography />} /> */}
              {/* <Route exact path="/calendar" element={<Calendar />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
