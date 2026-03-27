import Layout from "@/components/Layout";
import { Users } from "lucide-react";

const teamMembers = [
  { name: "Vorstand 1", role: "1. Vorsitzende:r", tasks: "Strategie, Partnerschaften, Repräsentation" },
  { name: "Vorstand 2", role: "2. Vorsitzende:r", tasks: "Organisation, Community, Events" },
  { name: "Vorstand 3", role: "Kassenwart:in", tasks: "Finanzen, Mitgliederverwaltung" },
];

const Team = () => (
  <Layout>
    <section className="section-padding">
      <div className="container-tight">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-energy font-bold text-sm uppercase tracking-widest">Team</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mt-2 mb-6">Team & Vorstand</h1>
          <p className="text-lg text-muted-foreground">Die Menschen hinter den Cologne Seals.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((m) => (
            <div key={m.name} className="bg-card rounded-2xl p-8 border border-border text-center">
              <div className="w-20 h-20 bg-sand rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-1">{m.name}</h3>
              <p className="text-energy font-semibold text-sm mb-2">{m.role}</p>
              <p className="text-sm text-muted-foreground">{m.tasks}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Team;
