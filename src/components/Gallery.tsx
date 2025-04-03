<<<<<<< HEAD
=======

>>>>>>> b65cfcf5d492b983a9ba61a8fed63f28791ccc92
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
<<<<<<< HEAD
  description?: string;
}

const Gallery = () => {
  const galleryItems: GalleryItem[] = [
    { 
      id: 1, 
      title: "Baby Shower Rangoli", 
      category: "celebration", 
      image: "/lovable-uploads/9eca4333-0b23-414b-9489-c29407b97cd9.png",
      description: "Colorful rangoli design for baby shower ceremony with baby illustration"
    },
    { 
      id: 2, 
      title: "Birthday Celebration", 
      category: "birthday", 
      image: "/lovable-uploads/3762b776-b3e6-4d05-b291-401f6226833b.png",
      description: "Beautiful peacock-themed birthday rangoli design with floral elements"
    },
    { 
      id: 3, 
      title: "Naming Ceremony", 
      category: "celebration", 
      image: "/lovable-uploads/be549bbf-4f38-41e9-9ba6-2ad03282010b.png",
      description: "Elegant rangoli for naming ceremony with traditional elements"
    },
    { 
      id: 7, 
      title: "Welcome Rangoli", 
      category: "welcome", 
      image: "/lovable-uploads/fbe2bae0-096d-491e-ad3f-662bdb6fc496.png",
      description: "Welcoming rangoli design with warm elements"
    },
    { 
      id: 8, 
      title: "Welcome Rangoli", 
      category: "welcome", 
      image: "/lovable-uploads/8d4e42c5-f89a-4e04-8cea-e86c04e09b73.png",
      description: "Elegant welcome rangoli with traditional motifs"
    },
    { 
      id: 9, 
      title: "Welcome Rangoli", 
      category: "welcome", 
      image: "/lovable-uploads/5f275702-f71a-414d-bdc9-cd760d15e429.png",
      description: "Welcoming rangoli design with intricate patterns"
    },
    { 
      id: 11, 
      title: "Happy Diwali", 
      category: "festival", 
      image: "/lovable-uploads/793948c3-3b00-4a22-91c5-f8a903a2cc44.png",
      description: "Festive Diwali rangoli celebration design"
    },
    { 
      id: 12, 
      title: "Festival Rangoli", 
      category: "festival", 
      image: "/lovable-uploads/c5990b42-47a2-4690-90ed-30cfd8e07be4.png",
      description: "Vibrant festival rangoli with scenic elements"
    },
    { 
      id: 13, 
      title: "Shivapuran Rangoli", 
      category: "festival", 
      image: "/lovable-uploads/3c43ac0d-1408-4202-be58-66cfbcc9735c.png",
      description: "Festival rangoli inspired by Shivapuran themes"
    },
    { 
      id: 14, 
      title: "Ganesh Rangoli", 
      category: "festival", 
      image: "/lovable-uploads/854b4b27-63ba-4247-8129-9590d0774e14.png",
      description: "Festive Ganesh-themed rangoli design"
    },
    { 
      id: 15, 
      title: "Landscape Rangoli", 
      category: "landscape", 
      image: "/lovable-uploads/91e5e13a-e3f5-46bb-a6a2-5739cf92f412.png",
      description: "Beautiful landscape-inspired rangoli design"
    },
    { 
      id: 16, 
      title: "Landscape Rangoli", 
      category: "landscape", 
      image: "/lovable-uploads/7cb790d6-c72d-430f-8413-10c6fa32fc9b.png",
      description: "Scenic landscape rangoli with traditional elements"
    },
    { 
      id: 19, 
      title: "Welcome Rangoli with Kalash", 
      category: "welcome", 
      image: "/lovable-uploads/48b2726b-1bc8-4e88-abe6-1fcdfc0659ed.png",
      description: "Welcome rangoli featuring traditional kalash design"
    },
=======
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
>>>>>>> b65cfcf5d492b983a9ba61a8fed63f28791ccc92
  ];

  const [activeTab, setActiveTab] = useState("all");

<<<<<<< HEAD
  const categories = ["all", ...new Set(galleryItems.map(item => item.category))];

=======
>>>>>>> b65cfcf5d492b983a9ba61a8fed63f28791ccc92
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
<<<<<<< HEAD
            Each design is handcrafted with precision and creativity for various occasions.
=======
            Each design is handcrafted with precision and creativity.
>>>>>>> b65cfcf5d492b983a9ba61a8fed63f28791ccc92
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
<<<<<<< HEAD
          <div className="flex justify-center mb-8 overflow-x-auto">
            <TabsList className="bg-rangoli-cream border border-rangoli-purple/10 p-1 flex flex-wrap justify-center">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category}
                  value={category} 
                  onClick={() => setActiveTab(category)}
                  className="data-[state=active]:bg-rangoli-purple data-[state=active]:text-white capitalize"
                >
                  {category === "all" ? "All Designs" : category}
                </TabsTrigger>
              ))}
=======
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
>>>>>>> b65cfcf5d492b983a9ba61a8fed63f28791ccc92
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

<<<<<<< HEAD
          {categories.filter(cat => cat !== "all").map((category) => (
=======
          {/* Render filtered items for each category */}
          {["festival", "wedding", "corporate", "home"].map((category) => (
>>>>>>> b65cfcf5d492b983a9ba61a8fed63f28791ccc92
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
