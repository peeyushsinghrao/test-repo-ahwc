import { Switch, Route, Router as WouterRouter } from "wouter";
import Home from "@/pages/Home";

function NotFound() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "sans-serif" }}>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "1.5rem", marginBottom: 8 }}>404 — पृष्ठ नहीं मिला</h1>
        <p style={{ color: "#666" }}>यह पृष्ठ उपलब्ध नहीं है।</p>
      </div>
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL?.replace(/\/$/, "") ?? ""}>
      <Router />
    </WouterRouter>
  );
}
