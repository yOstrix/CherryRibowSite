import { motion } from 'framer-motion';
import { Gift, Home, Users, Palette } from 'lucide-react';
import SplitText from '../components/SplitText';

const Services = () => {
  const services = [
    {
      icon: <Gift className="text-cherry-dark" size={32} />,
      title: "Lembrancinhas Personalizadas",
      desc: "Desenvolvemos sabonetes exclusivos para casamentos, batizados e eventos corporativos, com cores e aromas que combinam com sua celebração."
    },
    {
      icon: <Home className="text-cherry-dark" size={32} />,
      title: "Linha Home & Decor",
      desc: "Produtos pensados para perfumar e decorar seu lavabo, trazendo sofisticação e o toque delicado da Cherry Ribow para seu lar."
    },
    {
      icon: <Users className="text-cherry-dark" size={32} />,
      title: "Kits para Presentes",
      desc: "Cestas montadas com curadoria especial, perfeitas para surpreender alguém querido com um presente artesanal e luxuoso."
    },
    {
      icon: <Palette className="text-cherry-dark" size={32} />,
      title: "Workshop de Saboaria",
      desc: "Em breve: Oficinas para quem deseja aprender a arte da saboaria artesanal e criar suas próprias peças com nossa metodologia."
    }
  ];

  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          <SplitText
            text="Nossos Serviços"
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 mb-6 italic"
            delay={80}
          />
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Na Cherry Ribow, oferecemos mais do que apenas sabonetes. Proporcionamos soluções personalizadas para tornar seus momentos ainda mais especiais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row p-6 md:p-8 rounded-3xl bg-cherry-light/20 border border-cherry-pink hover:border-blossom transition-colors group"
            >
              <div className="mb-6 sm:mb-0 sm:mr-6 p-4 bg-white rounded-2xl shadow-sm group-hover:shadow-md transition-shadow h-fit w-fit">
                {service.icon}
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 md:mt-32 relative rounded-[40px] md:rounded-[60px] overflow-hidden min-h-[400px] flex items-center justify-center text-center p-8 md:p-12">
          <div className="absolute inset-0 bg-cherry-dark opacity-90"></div>
          {/* Decorative pattern/overlay could go here */}
          <div className="relative z-10 text-white max-w-2xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif italic mb-6">Compromisso com a Qualidade</h2>
            <p className="text-lg md:text-xl mb-10 opacity-90 leading-relaxed">
              Cada etapa do nosso processo, desde a escolha da glicerina até a embalagem final com o laço perfeito, é feita com rigoroso controle de qualidade para garantir a melhor experiência para você.
            </p>
            <a 
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-cherry-dark px-8 md:px-12 py-4 rounded-full font-bold hover:bg-cherry-pink hover:text-white transition-all shadow-xl"
            >
              Conheça nosso processo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
