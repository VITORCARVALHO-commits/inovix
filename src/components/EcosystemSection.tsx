import { motion } from "framer-motion";

const projects = [
  {
    name: "Plataforma",
    desc: "Plataforma de desenvolvimento de aplicativos mobile onde novos apps são apresentados e promovidos. Funciona como um hub de descoberta de aplicações.",
    logo: "/assets/plataforma.JPG",
    type: "Parceiro",
  },
  {
    name: "HawkCloud",
    desc: "Serviço de hospedagem web e infraestrutura SaaS. Fornece soluções de hospedagem para sites, aplicações e plataformas digitais.",
    logo: "/assets/hawkcloud.jpg",
    type: "Parceiro",
  },
  {
    name: "Projetos de Desenvolvimento",
    desc: "Projetos experimentais e internos desenvolvidos pela INOVIX, incluindo protótipos de software e ferramentas digitais.",
    logo: "/assets/inovix.JPG",
    type: "Projeto",
  },
  {
    name: "Refúgio Digital",
    desc: "Plataforma digital de leitura focada em conhecimento e experiências de aprendizado.",
    logo: "/assets/refugio de livros.jpg",
    type: "Projeto",
  },
  {
    name: "Rede de Ensino INOVIX",
    desc: "Projeto em andamento: Uma rede de ensino de programação diferenciada, conectada ao ecossistema INOVIX, focada em inovação, prática e colaboração.",
    logo: "/assets/inovix.JPG",
    type: "Projeto (em andamento)",
  },
];

const EcosystemSection = () => (
  <section id="ecossistema" className="section-padding navy-bg">
    <div className="w-full mx-auto">
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-16">
        <span className="text-accent text-sm font-medium uppercase tracking-widest">Ecossistema</span>
        <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-6 text-white">
          Nossos Projetos <span className="text-gradient">Conectados</span>
        </h2>
        <p className="text-white/80 max-w-2xl mx-auto text-lg">
          Cada projeto opera como um ramo do ecossistema INOVIX, conectado através de infraestrutura e visão compartilhadas.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-navy-light/50 border border-primary-foreground/10 rounded-xl p-4 sm:p-5 md:p-6 flex items-start gap-3 sm:gap-4 md:gap-5 hover:border-accent/30 transition-all duration-300 group"
          >
            <div className="w-5 h-5 sm:w-7 sm:h-7 md:w-10 md:h-10 rounded-xl flex-shrink-0 overflow-hidden">
              <img src={p.logo} alt={p.name} className="w-full h-full object-cover rounded-xl" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-display text-xl font-semibold text-white">{p.name}</h3>
                <span className="text-xs text-accent bg-accent/10 px-2 py-0.5 rounded-full">{p.type}</span>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">{p.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EcosystemSection;
