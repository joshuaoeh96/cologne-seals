import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const Merch = () => (
  <Layout>
    <section className="section-padding">
      <div className="container-tight">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-energy font-bold text-sm uppercase tracking-widest">Merch</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mt-2 mb-6">Cologne Seals Merch</h1>
          <p className="text-lg text-muted-foreground">Rep die Seals – auf und neben dem Platz.</p>
        </div>

        <div className="bg-card rounded-2xl p-8 sm:p-12 border border-border text-center max-w-lg mx-auto">
          <div className="w-32 h-32 bg-sand rounded-2xl mx-auto mb-6 flex items-center justify-center text-4xl">👕</div>
          <h3 className="text-2xl font-bold mb-2">Cologne Seals T-Shirt</h3>
          <p className="text-muted-foreground mb-6">Unser offizielles Vereinsshirt. Produziert von unserem Partner Paradox.</p>
          <Button className="bg-energy text-energy-foreground hover:bg-energy/90 rounded-full px-8 font-bold">
            Direkt bei uns anfragen
          </Button>
        </div>
      </div>
    </section>
  </Layout>
);

export default Merch;
