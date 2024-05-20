import { Toaster } from "sonner";
import AppRoute from "./app/routes/app.routes";

function App() {
  return (
    <>
      <div>
        <Toaster position="top-center" />
        <AppRoute />
      </div>
    </>
  );
}

export default App;
