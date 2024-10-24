import Footer from "components/Footer";
import Header from "components/Header";
import ProductPage from "pages/ProductPage";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container mx-auto">
        <ProductPage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
