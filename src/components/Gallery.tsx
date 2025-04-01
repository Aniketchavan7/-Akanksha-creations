
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
}

const Gallery = () => {
  // Sample gallery data - to be replaced with actual images
  const galleryItems: GalleryItem[] = [
    { id: 1, title: "Diwali Special", category: "festival", image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07" },
    { id: 2, title: "Wedding Entrance", category: "wedding", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb" },
    { id: 3, title: "Corporate Event", category: "corporate", image: "https://images.unsplash.com/photo-1466442929976-97f336a657be" },
    { id: 4, title: "Ganesh Chaturthi", category: "festival", image: "https://images.unsplash.com/photo-1472396961693-142e6e269027" },
    { id: 5, title: "Home Decor", category: "home", image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07" },
    { id: 6, title: "Wedding Stage", category: "wedding", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb" },
  ];

  const [activeTab, setActiveTab] = useState("all");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-rangoli-purple mb-4">Our Rangoli Gallery</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse through our collection of beautiful rangoli designs created by Akanksha Creations.
            Each design is handcrafted with precision and creativity.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-rangoli-cream border border-rangoli-purple/10 p-1">
              <TabsTrigger 
                value="all" 
                onClick={() => setActiveTab("all")}
                className="data-[state=active]:bg-rangoli-purple data-[state=active]:text-white"
              >
                All Designs
              </TabsTrigger>
              <TabsTrigger 
                value="festival" 
                onClick={() => setActiveTab("festival")}
                className="data-[state=active]:bg-rangoli-purple data-[state=active]:text-white"
              >
                Festivals
              </TabsTrigger>
              <TabsTrigger 
                value="wedding" 
                onClick={() => setActiveTab("wedding")}
                className="data-[state=active]:bg-rangoli-purple data-[state=active]:text-white"
              >
                Weddings
              </TabsTrigger>
              <TabsTrigger 
                value="corporate" 
                onClick={() => setActiveTab("corporate")}
                className="data-[state=active]:bg-rangoli-purple data-[state=active]:text-white"
              >
                Corporate
              </TabsTrigger>
              <TabsTrigger 
                value="home" 
                onClick={() => setActiveTab("home")}
                className="data-[state=active]:bg-rangoli-purple data-[state=active]:text-white"
              >
                Home
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-0">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {galleryItems.map((item) => (
                <motion.div 
                  key={item.id} 
                  className="rangoli-card group overflow-hidden"
                  variants={itemVariants}
                >
                  <div className="w-full h-64 overflow-hidden rounded-lg mb-4 relative">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-rangoli-purple/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        <p className="text-sm capitalize">{item.category}</p>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-rangoli-purple">{item.title}</h3>
                  <p className="text-sm text-gray-500 capitalize">{item.category}</p>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          {/* Render filtered items for each category */}
          {["festival", "wedding", "corporate", "home"].map((category) => (
            <TabsContent key={category} value={category} className="mt-0">
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {galleryItems
                  .filter(item => item.category === category)
                  .map((item) => (
                    <motion.div 
                      key={item.id} 
                      className="rangoli-card group overflow-hidden"
                      variants={itemVariants}
                    >
                      <div className="w-full h-64 overflow-hidden rounded-lg mb-4 relative">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-rangoli-purple/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <div className="p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <h3 className="text-xl font-bold">{item.title}</h3>
                            <p className="text-sm capitalize">{item.category}</p>
                          </div>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-rangoli-purple">{item.title}</h3>
                      <p className="text-sm text-gray-500 capitalize">{item.category}</p>
                    </motion.div>
                  ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Gallery;
