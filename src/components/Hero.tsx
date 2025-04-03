
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
<<<<<<< HEAD
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Hero = () => {
  const heroSlides = [
    {
      id: 1,
      image: "/lovable-uploads/9eca4333-0b23-414b-9489-c29407b97cd9.png",
      alt: "Baby Shower Rangoli"
    },
    {
      id: 2,
      image: "/lovable-uploads/3762b776-b3e6-4d05-b291-401f6226833b.png",
      alt: "Birthday Celebration Rangoli"
    },
    {
      id: 3,
      image: "/lovable-uploads/be549bbf-4f38-41e9-9ba6-2ad03282010b.png",
      alt: "Naming Ceremony Rangoli"
    },
    {
      id: 4,
      image: "/lovable-uploads/793948c3-3b00-4a22-91c5-f8a903a2cc44.png",
      alt: "Festival Rangoli"
    },
    {
      id: 5,
      image: "/lovable-uploads/fbe2bae0-096d-491e-ad3f-662bdb6fc496.png",
      alt: "Welcome Rangoli"
    },
    {
      id: 6,
      image: "/lovable-uploads/8d4e42c5-f89a-4e04-8cea-e86c04e09b73.png",
      alt: "Welcome Rangoli"
    },
    {
      id: 7,
      image: "/lovable-uploads/5f275702-f71a-414d-bdc9-cd760d15e429.png",
      alt: "Welcome Rangoli"
    },
    {
      id: 8,
      image: "/lovable-uploads/c5990b42-47a2-4690-90ed-30cfd8e07be4.png",
      alt: "Festival Rangoli"
    },
    {
      id: 9,
      image: "/lovable-uploads/3c43ac0d-1408-4202-be58-66cfbcc9735c.png",
      alt: "Shivapuran Rangoli"
    },
    {
      id: 10,
      image: "/lovable-uploads/854b4b27-63ba-4247-8129-9590d0774e14.png",
      alt: "Ganesh Rangoli"
    },
    {
      id: 11,
      image: "/lovable-uploads/91e5e13a-e3f5-46bb-a6a2-5739cf92f412.png",
      alt: "Landscape Rangoli"
    },
    {
      id: 12,
      image: "/lovable-uploads/7cb790d6-c72d-430f-8413-10c6fa32fc9b.png",
      alt: "Landscape Rangoli"
    },
    {
      id: 13,
      image: "/lovable-uploads/48b2726b-1bc8-4e88-abe6-1fcdfc0659ed.png",
      alt: "Welcome Rangoli with Kalash"
    }
  ];

=======

const Hero = () => {
>>>>>>> b65cfcf5d492b983a9ba61a8fed63f28791ccc92
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
<<<<<<< HEAD
              <Carousel className="w-full h-full rounded-xl overflow-hidden" opts={{ loop: true }}>
                <CarouselContent className="h-full">
                  {heroSlides.map((slide) => (
                    <CarouselItem key={slide.id} className="h-full">
                      <AspectRatio ratio={4/3} className="h-full w-full">
                        <img 
                          src={slide.image} 
                          alt={slide.alt} 
                          className="object-contain w-full h-full" 
                        />
                        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-rangoli-purple/50 to-transparent h-1/4">
                          <div className="absolute bottom-2 left-3 text-white font-medium text-sm md:text-base">
                            {slide.alt}
                          </div>
                        </div>
                      </AspectRatio>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
=======
              {/* Placeholder for a beautiful rangoli image */}
              <div className="w-full h-full bg-gradient-to-br from-rangoli-purple/30 to-rangoli-orange/30 rounded-xl flex items-center justify-center">
                <span className="font-dancing text-3xl text-rangoli-purple">Rangoli Artwork</span>
              </div>
>>>>>>> b65cfcf5d492b983a9ba61a8fed63f28791ccc92
              
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
