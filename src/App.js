import Layout from "./components/layout/Layout";
import AuthProvider from "./context/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <Layout>
        
      </Layout>
    </AuthProvider>
  );
}

export default App;
