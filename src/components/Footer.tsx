import { Instagram, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-cherry-pink py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-semibold text-cherry-dark italic mb-4">Cherry Ribow</h2>
        <p className="text-gray-500 max-w-md mx-auto mb-8">
          Sabonetes artesanais feitos com carinho, unindo a beleza da cerejeira e a delicadeza dos laços.
        </p>
        <div className="flex justify-center space-x-6 mb-8">
          <a href="https://instagram.com/cherry_ribow_sabonetes" target="_blank" rel="noopener noreferrer" className="text-cherry-dark hover:text-blossom transition-colors">
            <Instagram size={24} />
          </a>
          <a href="https://wa.me/+554591262823" target="_blank" rel="noopener noreferrer" className="text-cherry-dark hover:text-blossom transition-colors">
            <MessageCircle size={24} />
          </a>
        </div>
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Cherry Ribow. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
