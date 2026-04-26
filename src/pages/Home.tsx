import { motion } from 'framer-motion';
import { ArrowRight, Heart, Sparkles, Star, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import SplitText from '../components/SplitText';
import FadeInView from '../components/FadeInView';
import Dither from '../components/Dither';

const Home = () => {
  return (
    <div className="relative overflow-hidden bg-white w-full">
      {/* Background Decor - Dither Component */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Dither 
          waveColor={[0.98, 0.89, 0.92]} // #fce4ec em RGB normalizado
          waveSpeed={0.05}
          waveFrequency={2}
          waveAmplitude={0.4}
          pixelSize={2}
        />
      </div>

      {/* Background Decor Layer 2 */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-cherry-light/60 -skew-x-0 lg:-skew-x-12 lg:translate-x-1/4 z-0 opacity-50 lg:opacity-100" />
      
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <FadeInView direction="down" delay={0.2}>
              <div className="inline-flex items-center space-x-2 bg-cherry-pink text-cherry-dark px-4 py-2 rounded-full mb-6 font-medium text-sm shadow-sm border border-cherry-dark/10">
                <motion.div
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <Sparkles size={16} />
                </motion.div>
                <span>Saboaria Artesanal Premium</span>
              </div>
            </FadeInView>
            
            <div className="mb-8">
              <SplitText
                text="Cherry Ribow"
                className="text-6xl md:text-7xl lg:text-8xl font-serif text-gray-900 leading-[1.1] italic"
                delay={80}
              />
            </div>
            
            <FadeInView delay={0.4}>
              <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0 font-sans">
                A delicadeza da cerejeira encontra a elegância dos laços em sabonetes feitos para transformar seu ritual de cuidado em um momento de puro luxo.
              </p>
            </FadeInView>
            
            <FadeInView delay={0.6} direction="none">
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
                <Link to="/produtos" className="btn-primary group font-sans">
                  Explorar Coleção 
                  <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={20} />
                </Link>
                <Link to="/contato" className="flex items-center justify-center px-8 py-3 border-2 border-cherry-pink text-gray-700 rounded-full font-semibold hover:bg-cherry-pink hover:text-white transition-all font-sans group">
                  <MessageCircle className="mr-2 group-hover:scale-110 transition-transform" size={20} />
                  Encomendas via WhatsApp
                </Link>
              </div>
            </FadeInView>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center"
          >
            <div className="relative z-20 bg-white/80 backdrop-blur-sm p-4 rounded-[40px] shadow-2xl border border-cherry-pink max-w-[400px] w-full">
              <div className="rounded-[32px] overflow-hidden bg-cherry-light aspect-square flex items-center justify-center p-8 md:p-12 relative group">
                <img 
                  src={logo} 
                  alt="Cherry Ribow" 
                  fetchPriority="high"
                  className="w-full h-auto object-contain drop-shadow-xl z-10 transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 z-20" />
              </div>
            </div>
            
            <motion.div 
              animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 md:-top-10 md:-right-10 z-30 bg-blossom text-white p-6 md:p-8 rounded-full shadow-2xl"
            >
              <Heart fill="white" size={32} className="md:w-10 md:h-10" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-cherry-light relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInView>
            <div className="mb-16 inline-block relative">
              <SplitText
                text="Nossa Essência"
                className="text-4xl md:text-5xl font-serif italic text-gray-800"
                delay={100}
              />
              <motion.span 
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute -bottom-2 left-0 h-1 bg-cherry-dark rounded-full"
              ></motion.span>
            </div>
          </FadeInView>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {[
              { title: "Toque de Seda", desc: "Sabonetes que hidratam enquanto limpam, deixando sua pele macia como pétalas.", icon: <Heart size={28} /> },
              { title: "Perfume Duradouro", desc: "Essências de cerejeira importadas que perfumam todo o ambiente.", icon: <Sparkles size={28} /> },
              { title: "Presente Perfeito", desc: "Embalagens com laços sofisticados, prontas para encantar quem você ama.", icon: <Star size={28} /> }
            ].map((item, i) => (
              <FadeInView key={i} delay={i * 0.2}>
                <div className="bg-white p-8 md:p-10 rounded-3xl border border-cherry-pink shadow-lg hover:shadow-2xl transition-all hover:-translate-y-3 group overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-cherry-light rounded-bl-full -mr-12 -mt-12 transition-all group-hover:scale-150 group-hover:bg-cherry-pink/30" />
                  
                  <div className="w-16 h-16 bg-cherry-pink rounded-2xl flex items-center justify-center mx-auto mb-6 relative z-10 transition-transform group-hover:rotate-12">
                    <div className="text-cherry-dark">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 font-serif italic relative z-10">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed font-sans relative z-10">{item.desc}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
