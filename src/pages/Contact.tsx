import { motion } from 'framer-motion';
import { Instagram, MessageCircle, MapPin, Mail, Phone } from 'lucide-react';
import SplitText from '../components/SplitText';

const Contact = () => {
  return (
    <div className="py-16 md:py-24 bg-cherry-light/20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <SplitText
            text="Entre em Contato"
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 mb-6 italic"
            delay={80}
          />
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Estamos prontos para atender você. Seja para uma compra, dúvida ou projeto personalizado, escolha o canal de sua preferência.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Contact Methods */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6 md:space-y-8"
          >
            <div className="bg-white p-6 md:p-10 rounded-[32px] shadow-xl border border-cherry-pink">
              <h2 className="text-2xl md:text-3xl font-serif italic text-gray-800 mb-8 underline decoration-cherry-pink decoration-2 underline-offset-8">Canais Oficiais</h2>
              
              <div className="space-y-6">
                <a 
                  href="https://wa.me/5500000000000" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center p-4 md:p-6 rounded-2xl hover:bg-green-50 transition-all border border-transparent hover:border-green-200 group shadow-sm hover:shadow-md"
                >
                  <div className="bg-green-500 text-white p-3 md:p-4 rounded-full mr-4 md:mr-6 group-hover:scale-110 transition-transform">
                    <MessageCircle size={24} className="md:w-7 md:h-7" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg">WhatsApp</h3>
                    <p className="text-gray-500 text-sm md:text-base">Atendimento imediato e vendas</p>
                  </div>
                </a>

                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center p-4 md:p-6 rounded-2xl hover:bg-pink-50 transition-all border border-transparent hover:border-pink-200 group shadow-sm hover:shadow-md"
                >
                  <div className="bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white p-3 md:p-4 rounded-full mr-4 md:mr-6 group-hover:scale-110 transition-transform">
                    <Instagram size={24} className="md:w-7 md:h-7" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg">Instagram</h3>
                    <p className="text-gray-500 text-sm md:text-base">Acompanhe nossas novidades diárias</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-white p-6 md:p-10 rounded-[32px] shadow-xl border border-cherry-pink">
              <h2 className="text-2xl font-serif italic text-gray-800 mb-8">Informações de Atendimento</h2>
              <div className="space-y-6">
                <div className="flex items-center text-gray-600 group">
                  <div className="w-10 h-10 bg-cherry-pink/30 rounded-full flex items-center justify-center mr-4 group-hover:bg-cherry-pink transition-colors">
                    <Mail className="text-cherry-dark" size={20} />
                  </div>
                  <span className="text-sm md:text-base">contato@cherryribow.com.br</span>
                </div>
                <div className="flex items-center text-gray-600 group">
                  <div className="w-10 h-10 bg-cherry-pink/30 rounded-full flex items-center justify-center mr-4 group-hover:bg-cherry-pink transition-colors">
                    <Phone className="text-cherry-dark" size={20} />
                  </div>
                  <span className="text-sm md:text-base">(00) 00000-0000</span>
                </div>
                <div className="flex items-center text-gray-600 group">
                  <div className="w-10 h-10 bg-cherry-pink/30 rounded-full flex items-center justify-center mr-4 group-hover:bg-cherry-pink transition-colors">
                    <MapPin className="text-cherry-dark" size={20} />
                  </div>
                  <span className="text-sm md:text-base">Atendimento online para todo o Brasil</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Social Proof/Visual - Better handling for mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative h-[300px] md:h-[500px] lg:h-full rounded-[40px] overflow-hidden shadow-2xl border-4 border-white"
          >
            <div className="absolute inset-0 bg-cherry-dark/10 z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1600857062241-98e5dba7f214?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
              alt="Cherry Blossom Decor" 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 z-20 bg-white/90 backdrop-blur-sm p-6 md:p-8 rounded-2xl text-center">
              <p className="text-cherry-dark font-serif italic text-lg md:text-xl mb-2">
                "Onde o perfume encontra a delicadeza."
              </p>
              <div className="w-12 h-1 bg-cherry-dark mx-auto rounded-full"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
