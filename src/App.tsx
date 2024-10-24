import Footer from "components/Footer";
import Header from "components/Header";
import ProductPage from "pages/ProductPage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container mx-auto">
        <ProductPage />
      </main>
      <Footer />

      <Toaster />
    </div>
  );
}

export default App;
