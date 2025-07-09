import React from 'react';
import { PRODUCT_CATEGORIES, CheckCircleIcon, HeadsetIcon, generatePlaceholder } from '../constants';
import type { Product } from '../types';
import BackButton from './ui/BackButton';
import Card from './ui/Card';
import Button from './ui/Button';

interface ProductsPageProps {
  products: Product[];
  onNavigate: (path: string) => void;
  onRequestQuote: (topic: string) => void;
  canGoBack: boolean;
  onGoBack: () => void;
}

const ProductCard: React.FC<{ product: Product, onRequestQuote: (topic: string) => void }> = ({ product, onRequestQuote }) => (
    <Card className="flex flex-col bg-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:-translate-y-1">
        <div className="relative">
            <img src={product.imageUrl} alt={product.name} className="rounded-lg w-full h-48 object-cover mb-4" />
            <span className="absolute top-2 right-2 bg-slate-900/50 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">{product.brand}</span>
        </div>
        <div className="flex flex-col flex-grow">
            <h3 className="text-xl font-bold text-white">{product.name}</h3>
            <p className="text-slate-400 mt-2 text-sm flex-grow">{product.description}</p>
            <ul className="space-y-2 my-6 text-slate-300 text-sm">
            {product.features.map((feature, i) => (
                <li key={i} className="flex items-center">
                <CheckCircleIcon className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                <span>{feature}</span>
                </li>
            ))}
            </ul>
            <Button variant="outline" className="w-full mt-auto" onClick={() => onRequestQuote(`Product: ${product.name}`)}>
                Request Quote
            </Button>
        </div>
    </Card>
);


const ProductsPage: React.FC<ProductsPageProps> = ({ products, onNavigate, onRequestQuote, canGoBack, onGoBack }) => {
  return (
    <main className="animate-fade-in-up">
      {/* Hero Section */}
      <section 
          className="relative bg-cover bg-center py-32 md:py-48 text-white" 
          style={{ backgroundImage: `url('${generatePlaceholder(1920, 1080, 'Our Products')}')` }}
      >
        {canGoBack && (
            <div className="absolute top-8 left-8 z-10">
                <BackButton onClick={onGoBack} className="text-white bg-black/20 backdrop-blur-sm p-2 rounded-md" />
            </div>
        )}
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            Get the Right Gear for Your Network
          </h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto">
            We offer a curated selection of high-performance hardware, tested and approved by our engineers to guarantee optimal performance with our network.
          </p>
        </div>
      </section>

      {/* Main Products Section */}
      <section className="py-20 sm:py-32 bg-black">
        <div className="container mx-auto px-6">
          <div className="space-y-24">
            {PRODUCT_CATEGORIES.map(category => (
              <div key={category.id} id={category.id}>
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-slate-800 border-2 border-slate-700 mb-6">
                        {category.icon}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">{category.title}</h2>
                    <p className="mt-4 text-slate-400">{category.description}</p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                  {products.filter(p => p.category === category.title).map(product => (
                    <ProductCard key={product.id} product={product} onRequestQuote={onRequestQuote} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
       <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6 text-center">
            <Card className="max-w-3xl mx-auto bg-slate-800 border-primary/20">
                <HeadsetIcon className="h-12 w-12 text-primary mx-auto mb-4"/>
                <h2 className="text-3xl font-bold text-white mb-2">Need Help Choosing?</h2>
                <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-6">
                    Our experts can help you select the perfect equipment for your home, business, or hotspot project. Contact us for a free consultation and custom pricing.
                </p>
                <Button 
                    variant="primary" 
                    className="px-8 py-3 text-base" 
                    onClick={() => onNavigate('sales')}
                >
                    Contact Sales
                </Button>
            </Card>
        </div>
    </section>
    </main>
  );
};

export default ProductsPage;
