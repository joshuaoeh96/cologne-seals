import Layout from "@/components/Layout";
import { FileText, Shield, Building } from "lucide-react";

const Transparenz = () => (
  <Layout>
    <section className="section-padding">
      <div className="container-tight">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-muted-foreground font-bold text-sm uppercase tracking-widest">Transparenz</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mt-2 mb-6">Transparenz</h1>
          <p className="text-lg text-muted-foreground">Offenheit gehört zu unseren Werten – auch bei Vereinsdokumenten.</p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { icon: FileText, title: "Satzung", desc: "Unsere Vereinssatzung zum Download." },
            { icon: Shield, title: "Gemeinnützigkeit", desc: "Offiziell anerkannter gemeinnütziger Verein." },
            { icon: Building, title: "Verbandsmitglied", desc: "Mitglied im Landessportbund NRW." },
          ].map((item) => (
            <div key={item.title} className="bg-card rounded-2xl p-8 border border-border text-center">
              <div className="inline-flex p-3 rounded-xl bg-sand mb-4"><item.icon className="h-6 w-6 text-muted-foreground" /></div>
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Transparenz;
