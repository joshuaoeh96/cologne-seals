import communityImg from "@/assets/community.jpg";

const AboutSection = () => (
  <section className="section-padding">
    <div className="container-tight">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative order-2 lg:order-1">
          <img
            src={communityImg}
            alt="Cologne Seals Community"
            className="w-full rounded-2xl shadow-2xl"
            loading="lazy"
            width={1280}
            height={720}
          />
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-turf rounded-2xl -z-10" />
        </div>
        <div className="order-1 lg:order-2">
          <span className="text-turf font-bold text-sm uppercase tracking-widest">Cologne Seals e.V.</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mt-2 mb-6">
            Wer wir sind
          </h2>
          <p className="text-muted-foreground text-lg mb-4">
            Wir sind der erste gemeinnützige Footvolley-Verein in Köln – gegründet 2025, um diesen Sport in der Region zu etablieren.
          </p>
          <p className="text-muted-foreground text-lg mb-6">
            Offen für alle, inklusiv und community-getrieben. Wir bringen Menschen zusammen, die Bock auf Bewegung, Sand und gute Vibes haben.
          </p>
          <div className="flex flex-wrap gap-3">
            {["Gemeinnützig", "Inklusiv", "Community-driven", "Ausbildungsverein"].map((tag) => (
              <span key={tag} className="bg-sand px-4 py-2 rounded-full text-sm font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
