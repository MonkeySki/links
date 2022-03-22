import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Bosses from "./routes/bosses";
import Invoice from "./routes/Invoice";
import About from "./routes/About";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="about" element={<About />} />
        <Route path="bosses" element={<Bosses />}>
        <Route
        index
        element={
          <main style={{ padding: "1rem" }}>
            <p>Select a Boss</p>
          </main>
        }
      />
      <Route path=":invoiceId" element={<Invoice />} />
    </Route>
        <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>I haven't made anything for this page</p>
        </main>
      }
    />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);