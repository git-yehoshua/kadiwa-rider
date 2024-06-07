import { Toaster } from "sonner";
import AppRoute from "./app/routes/app.routes";
// import { AuthProvider } from "./app/services/helpers/auth.context";
// import { UpdateProvider } from "./app/services/helpers/update.context";
// import ProtectedRoute from "./app/services/helpers/protected.routes";

function App() {
  return (
    <>
      {/* <AuthProvider>
        <UpdateProvider> */}
      <Toaster position="top-center" />
      {/* <ProtectedRoute> */}
      <AppRoute />
      {/* </ProtectedRoute> */}
      {/* </UpdateProvider>
      </AuthProvider> */}
    </>
  );
}

export default App;
