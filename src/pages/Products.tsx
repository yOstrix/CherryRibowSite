import { motion } from 'framer-motion';
import { ShoppingCart, MessageCircle, Star } from 'lucide-react';
import foto1 from '../assets/fotos/foto1.png';
import foto2 from '../assets/fotos/foto2.png';
import foto3 from '../assets/fotos/foto3.png';
import SplitText from '../components/SplitText';
import Tilt from '../components/Tilt';

const products = [
  { 
    id: 1, 
    name: "Sabonete Pétalas de Cerejeira", 
    price: "R$ 32,00", 
    image: foto1, 
    tag: "Mais Vendido",
    desc: "Nossa essência clássica com notas florais suaves e espuma cremosa. O acabamento em laço de cetim torna-o um presente inesquecível." 
  },
  { 
    id: 2, 
    name: "Edição Especial Ribow Gold", 
    price: "R$ 45,00", 
    image: foto2, 
    tag: "Luxo",
    desc: "Enriquecido com manteiga de karité e um design exclusivo de laço esculpido. Perfeito para momentos especiais de autocuidado." 
  },
  { 
    id: 3, 
    name: "Kit Brisa de Primavera", 
    price: "R$ 38,00", 
    image: foto3, 
    tag: "Novo",
    desc: "Um frescor revigorante que remete às manhãs de sol. Design minimalista com a elegância característica da Cherry Ribow." 
  },
];

const Products = () => {
  return (
    <div className="py-16 md:py-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16 md:mb-24">
          <div className="inline-block">
            <SplitText
              text="Coleção Demonstração"
              className="text-4xl md:text-6xl font-serif text-gray-900 mb-6 italic"
              delay={80}
            />
            <div className="w-24 h-1 bg-cherry-dark mx-auto rounded-full mb-8"></div>
            <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Cada barra é uma obra de arte única, moldada à mão com os melhores ingredientes e finalizada com a nossa assinatura em laços.
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col group"
            >
              <Tilt className="mb-8" maxTilt={15}>
                <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden border border-cherry-pink shadow-lg group-hover:shadow-2xl transition-all duration-500">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-cherry-dark font-bold text-xs uppercase tracking-widest shadow-sm">
                    {product.tag}
                  </div>
                </div>
              </Tilt>
              
              <div className="px-2 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-1 group-hover:text-cherry-dark transition-colors">{product.name}</h3>
                    <div className="flex text-cherry-dark">
                      {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                    </div>
                  </div>
                  <span className="text-2xl font-serif italic text-gray-900">{product.price}</span>
                </div>
                
                <p className="text-gray-500 mb-8 leading-relaxed flex-grow">
                  {product.desc}
                </p>
                
                <a 
                  href={`https://wa.me/5500000000000?text=Olá Cherry Ribow! Me encantei pelo ${product.name}. Está disponível?`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full py-4 text-lg"
                >
                  <ShoppingCart size={20} className="mr-2" />
                  Encomendar Agora
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 md:mt-32 bg-cherry-light rounded-[40px] md:rounded-[60px] p-8 md:p-20 text-center md:text-left overflow-hidden relative"
        >
          <div className="relative z-10 max-w-xl mx-auto md:mx-0">
            <h2 className="text-3xl md:text-5xl font-serif italic text-gray-900 mb-6">Pedidos sob medida</h2>
            <p className="text-lg text-gray-700 mb-10 leading-relaxed">
              Precisa de lembrancinhas para seu evento ou um kit personalizado para presente? Criamos designs exclusivos que combinam com seu momento especial.
            </p>
            <a 
              href="https://wa.me/5500000000000"
              className="inline-flex items-center text-cherry-dark font-bold text-xl hover:underline group"
            >
              Consultar opções personalizadas 
              <MessageCircle size={24} className="ml-2 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
