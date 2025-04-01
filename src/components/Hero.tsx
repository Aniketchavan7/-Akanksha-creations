
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative py-20 md:py-32 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-rangoli-orange/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-rangoli-purple/10 rounded-full translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-10 mb-10 md:mb-0 z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-rangoli-purple">
              Beautiful <span className="text-rangoli-orange">Rangoli</span> Designs for Every Occasion
            </h1>
            <p className="text-lg mb-8 text-gray-700">
              Akanksha Creations brings the ancient art of rangoli to your doorstep. 
              We create stunning designs for festivals, weddings, corporate events, and more.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                className="bg-rangoli-purple hover:bg-rangoli-orange text-white px-8 py-6 text-lg group" 
                onClick={() => window.location.href="#order"}
              >
                Book a Design
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                className="border-rangoli-purple text-rangoli-purple hover:bg-rangoli-purple/5 px-8 py-6 text-lg"
                onClick={() => window.location.href="#enquiry"}
              >
                Join Our Classes
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 relative z-10">
            <div className="w-full h-80 md:h-96 bg-white p-4 rounded-2xl rangoli-shadow overflow-hidden relative">
              {/* Placeholder for a beautiful rangoli image */}
              <div className="w-full h-full bg-gradient-to-br from-rangoli-purple/30 to-rangoli-orange/30 rounded-xl flex items-center justify-center">
                <span className="font-dancing text-3xl text-rangoli-purple">Rangoli Artwork</span>
              </div>
              
              {/* Floating design elements */}
              <div className="absolute top-10 left-10 w-16 h-16 bg-rangoli-gold/30 rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
              <div className="absolute bottom-20 right-10 w-10 h-10 bg-rangoli-teal/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-40 right-20 w-14 h-14 bg-rangoli-pink/30 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
