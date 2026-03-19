import { motion } from "framer-motion";
import portfolioFinance1 from "@/assets/portfolio-finance-1.jpg";
import portfolioFinance2 from "@/assets/portfolio-finance-2.png";
import portfolioFinance3 from "@/assets/portfolio-finance-3.png";
import portfolioReading from "@/assets/portfolio-reading.jpg";
import inovixLogo from "@/assets/inovix.jpg";
import refugioLogo from "@/assets/refugio de livros.jpg";
import { ExternalLink } from "lucide-react";
import { useEffect, useRef, useState } from "react";
// Carousel vertical automático
function VerticalAutoCarousel({ images, interval = 2500 }) {
  const [active, setActive] = useState(0);
  const timeoutRef = useRef();

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearTimeout(timeoutRef.current);
  }, [active, images.length, interval]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative">
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={"carousel " + (idx + 1)}
          className={`w-full h-full object-contain transition-opacity duration-700 absolute top-0 left-0 ${active === idx ? "opacity-100 z-10" : "opacity-0 z-0"}`}
          style={{ maxHeight: '100%', maxWidth: '100%' }}
        />
      ))}
    </div>
  );
}

const portfolioItems = [
  {
    name: "App Financeiro",
    category: "Fintech · Mobile",
    logo: inovixLogo,
    images: [portfolioFinance1, portfolioFinance2, portfolioFinance3],
    desc: "Aplicativo de controle financeiro com painel de lucros, despesas e estimativas fiscais."
  },
  {
    name: "Refúgio Digital",
    category: "EdTech · Plataforma Web",
    logo: refugioLogo,
    image: portfolioReading,
    desc: "Plataforma digital de leitura com biblioteca, coleções e recomendações."
  },
];

const PortfolioSection = () => (
  <section id="portfolio" className="section-padding bg-secondary/50">
    <div className="w-full mx-auto">
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-16">
        <span className="text-accent text-sm font-medium uppercase tracking-widest">Portfólio</span>
        <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-6 text-primary">
          Projetos <span className="text-gradient">Entregues</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Uma seleção de plataformas e produtos construídos dentro do ecossistema INOVIX.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6">
        {portfolioItems.map((item, i) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card overflow-hidden group hover:shadow-lg transition-all duration-300"
          >
            <div className="aspect-video bg-secondary flex items-center justify-center overflow-hidden">
              {/* Imagens do projeto com efeito de rolagem automática vertical */}
              {item.images ? (
                <VerticalAutoCarousel images={item.images} />
              ) : (
                <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              )}
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-display font-semibold text-lg text-primary">{item.name}</h3>
                <ExternalLink className="text-muted-foreground group-hover:text-accent transition-colors" size={16} />
              </div>
              <span className="text-xs text-accent font-medium">{item.category}</span>
              <p className="text-muted-foreground text-sm mt-2">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PortfolioSection;
