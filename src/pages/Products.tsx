import { motion } from 'framer-motion';
import { ShoppingCart, Star, Sparkles, Heart, Flower, Droplets, MessageCircle } from 'lucide-react';
import SplitText from '../components/SplitText';
import FadeInView from '../components/FadeInView';
import Tilt from '../components/Tilt';

// Novas fotos renomeadas pelo usuário
import morangoChampanhe from '../assets/fotos/MorangoComCampanhe.png';
import morangoChantily from '../assets/fotos/MorangoComChantily.png';
import maracujaDoce from '../assets/fotos/MaracujaDoce.png';
import lavandaFrancesa from '../assets/fotos/LavandaFrancesa.png';
import florLaranjeira from '../assets/fotos/FlorDeLaranjeira.png';

const catalog = [
  {
    line: "Linha Doce Sensações",
    name: "Morango com Champanhe",
    price: "20,00",
    unit: "unidade",
    model: "Massageador esfoliante",
    description: "Nosso sabonete de morango com champanhe, além de ser um dos mais vendidos, proporciona um prazer por ter um cheiro doce e agradável. Contendo óleo de coco em sua composição, traz maciez além de esfoliar sua pele.",
    image: morangoChampanhe,
    tag: "MASSAGEADOR ESFOLIANTE",
    icon: <Heart className="text-cherry-dark" size={14} />
  },
  {
    line: "Linha Doce Sensações",
    name: "Morango com Chantily",
    price: "25,00",
    unit: "unidade",
    model: "Retangular com corações",
    description: "Nosso sabonete de morango com chantily, além de seu design chamativo e bonito, traz uma sensação realmente cativante em seu banho. Contém extrato de morango, que proporciona maciez e hidratação para sua pele.",
    image: morangoChantily,
    tag: "RETANGULAR COM CORAÇÕES",
    icon: <Sparkles className="text-cherry-dark" size={14} />
  },
  {
    line: "Linha Doce Sensações",
    name: "Maracujá Doce",
    price: "20,00",
    unit: "unidade",
    model: "Esfoliante e massageador",
    description: "Um sabonete com aroma doce que induz a felicidade, além de seu cheiro incrível, possui uma ação calmante.",
    image: maracujaDoce,
    tag: "ESFOLIANTE E MASSAGEADOR",
    icon: <Droplets className="text-cherry-dark" size={14} />
  },
  {
    line: "Linha Doce Sensações",
    name: "Lavanda Francesa",
    price: "20,00",
    unit: "unidade",
    model: "Flor com alfazemas",
    description: "Aparência romântica e fofa, possui ações hidratantes e promove a aromaterapia. Perfeito para limpar suas energias ruins e trazer paz e tranquilidade.",
    image: lavandaFrancesa,
    tag: "AROMATERAPIA",
    icon: <Flower className="text-cherry-dark" size={14} />
  },
  {
    line: "Linha Doce Sensações",
    name: "Flor de Laranjeira",
    price: "25,00",
    unit: "unidade",
    model: "Flor com fatia de laranja",
    description: "Seu aroma quase se aproxima de um doce. Possui uma ação hidratante e é uma ótima opção para presentes.",
    image: florLaranjeira,
    tag: "HIDRATANTE",
    icon: <Sparkles className="text-cherry-dark" size={14} />
  }
];

const Products = () => {
  return (
    <div className="py-16 md:py-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16 md:mb-24">
          <div className="inline-block">
            <SplitText
              text="Linha Doce Sensações"
              className="text-4xl md:text-6xl font-serif text-gray-900 mb-6 italic"
              delay={80}
            />
            <div className="w-24 h-1 bg-cherry-dark mx-auto rounded-full mb-8"></div>
            <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed italic">
              "Sabonetes artesanais feitos com carinho, unindo o aroma das frutas e a delicadeza do cuidado."
            </p>
          </div>
        </header>

        {/* Vitrine de Produtos - Novo Design baseado nos prints */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20 mb-32">
          {catalog.map((product, index) => (
            <FadeInView key={index} delay={index * 0.1}>
              <div className="flex flex-col group">
                <Tilt className="mb-6" maxTilt={10}>
                  <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden border border-cherry-pink/30 shadow-md group-hover:shadow-xl transition-all duration-500">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Badge de categoria no topo da imagem conforme o print */}
                    <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-cherry-dark font-bold text-[9px] uppercase tracking-widest shadow-sm">
                      {product.tag.includes(' ') ? product.tag.split(' ')[0] : product.tag}
                    </div>
                  </div>
                </Tilt>
                
                <div className="px-1">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex flex-col">
                      <div className="flex items-center space-x-1.5 mb-1">
                        {product.icon}
                        <span className="text-[10px] font-bold text-cherry-dark/60 uppercase tracking-tight">{product.tag}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 leading-tight group-hover:text-cherry-dark transition-colors">{product.name}</h3>
                      <div className="flex text-cherry-dark/40 mt-1">
                        {[...Array(5)].map((_, i) => <Star key={i} size={10} fill="currentColor" />)}
                      </div>
                    </div>
                    <div className="text-right flex flex-col items-end">
                      <div className="flex items-baseline">
                        <span className="text-xs font-bold text-gray-900 mr-1 italic">R$</span>
                        <span className="text-3xl font-serif italic font-bold text-gray-900">{product.price.split(',')[0]}</span>
                        <span className="text-lg font-serif italic font-bold text-gray-900">,{product.price.split(',')[1]}</span>
                      </div>
                      <span className="text-[9px] text-gray-400 uppercase font-black tracking-tighter -mt-1">POR {product.unit.toUpperCase()}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-500 mb-8 leading-relaxed text-sm line-clamp-3">
                    {product.description}
                  </p>
                  
                  <motion.a 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={`https://wa.me/+554591262823?text=Olá Cherry Ribow! Me encantei pelo ${product.name} da Linha Doce Sensações. Está disponível?`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center space-x-3 bg-[#f06292] text-white py-4 rounded-2xl font-bold shadow-lg shadow-cherry-pink/30 hover:bg-[#ff80ab] transition-all"
                  >
                    <ShoppingCart size={20} />
                    <span>Encomendar Agora</span>
                  </motion.a>
                </div>
              </div>
            </FadeInView>
          ))}
        </div>

        {/* Tabela de Preços Organizada */}
        <FadeInView direction="none">
          <div className="bg-cherry-light/30 rounded-[40px] md:rounded-[60px] p-8 md:p-16 border border-cherry-pink/50 shadow-sm overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cherry-pink/20 rounded-full -mr-32 -mt-32 blur-3xl" />
            
            <div className="relative z-10">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-serif italic text-gray-900 mb-4">Tabela de Preços</h2>
                <p className="text-gray-500">Linha Doce Sensações - Valores por unidade</p>
              </div>

              <div className="max-w-3xl mx-auto">
                <div className="space-y-4">
                  {catalog.map((item, i) => (
                    <div 
                      key={i} 
                      className="flex justify-between items-center p-4 md:p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-cherry-pink/20 hover:border-cherry-dark/30 transition-all hover:bg-white group"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-cherry-pink rounded-xl flex items-center justify-center text-cherry-dark group-hover:rotate-12 transition-transform">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800">{item.name}</h4>
                          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tight">{item.tag}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-baseline">
                          <span className="text-[10px] font-bold text-cherry-dark mr-1 italic">R$</span>
                          <span className="text-2xl font-serif italic font-bold text-cherry-dark">{item.price}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-16 text-center">
                  <div className="inline-block p-1 bg-white rounded-full shadow-sm mb-8 border border-cherry-pink/30">
                    <div className="px-6 py-2 bg-cherry-pink text-cherry-dark rounded-full font-bold text-sm">
                      Aceitamos Cartões, Pix e Dinheiro
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
                    <a 
                      href="https://wa.me/+554591262823"
                      className="inline-flex items-center space-x-2 text-cherry-dark font-bold text-lg hover:underline group"
                    >
                      <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
                      <span>Consultar Kits Presente</span>
                    </a>
                    <div className="hidden md:block w-2 h-2 bg-cherry-pink rounded-full" />
                    <a 
                      href="https://wa.me/+554591262823"
                      className="inline-flex items-center space-x-2 text-cherry-dark font-bold text-lg hover:underline group"
                    >
                      <Droplets size={24} className="group-hover:scale-110 transition-transform" />
                      <span>Encomendas em Atacado</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeInView>
      </div>
    </div>
  );
};

export default Products;
