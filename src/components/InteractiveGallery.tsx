import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryItem {
  id: number;
  category: string;
  description: string;
  image: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    category: 'Njega lica',
    description: 'Prije i poslije tretmana',
    image: 'https://images.pexels.com/photos/3762453/pexels-photo-3762453.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop'
  },
  {
    id: 2,
    category: 'Manikir',
    description: 'Umjetnički nail art',
    image: 'https://images.pexels.com/photos/3997987/pexels-photo-3997987.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop'
  },
  {
    id: 3,
    category: 'Šminkanje',
    description: 'Profesionalni makeup',
    image: '/makeup-look.png'
  },
  {
    id: 4,
    category: 'Obrve',
    description: 'Savršeno oblikovanje obrva',
    image: '/eyebrows-look.png'
  },
  {
    id: 5,
    category: 'Tretman lica',
    description: 'Profesionalna njega lica',
    image: '/facial-treatment.png'
  },
  {
    id: 6,
    category: 'Ambijent',
    description: 'Naš salon',
    image: '/salon-interior.png'
  },
  {
    id: 7,
    category: 'Nokti',
    description: 'Gel lakiranje',
    image: '/gallery-nokti.png'
  },
  {
    id: 8,
    category: 'Masaža',
    description: 'Relaksacija tijela',
    image: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop'
  },
  {
    id: 9,
    category: 'Trepavice',
    description: 'Lash lift rezultat',
    image: '/gallery-trepavice.png'
  }
];

export default function InteractiveGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openModal = (id: number) => {
    setSelectedImage(id);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      const currentIndex = galleryItems.findIndex(item => item.id === selectedImage);
      const nextIndex = (currentIndex + 1) % galleryItems.length;
      setSelectedImage(galleryItems[nextIndex].id);
    }
  };

  const goToPrev = () => {
    if (selectedImage !== null) {
      const currentIndex = galleryItems.findIndex(item => item.id === selectedImage);
      const prevIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
      setSelectedImage(galleryItems[prevIndex].id);
    }
  };

  const selectedItem = galleryItems.find(item => item.id === selectedImage);

  return (
    <section id="gallery" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-rose-light dark:bg-gray-800 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-5 h-5 text-gold" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Naši radovi</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-4">
            Galerija
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Pogledajte rezultate naših tretmana i atmosferu našeg salona
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              onClick={() => openModal(item.id)}
              className="group relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <motion.img
                src={item.image}
                alt={item.category}
                className="absolute inset-0 w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end p-8">
                <motion.h3
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  className="text-2xl font-serif font-bold text-white text-center mb-2"
                >
                  {item.category}
                </motion.h3>
                <p className="text-white/90 text-center">
                  {item.description}
                </p>
                <motion.div
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ delay: 0.1 }}
                  className="mt-4 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm"
                >
                  Klikni za prikaz
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedImage !== null && selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            >
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={closeModal}
                className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/20 rounded-full p-2 backdrop-blur-sm transition-all z-10"
              >
                <X className="w-6 h-6" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => { e.stopPropagation(); goToPrev(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-white/10 hover:bg-white/20 rounded-full p-3 backdrop-blur-sm transition-all z-10"
              >
                <ChevronLeft className="w-8 h-8" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => { e.stopPropagation(); goToNext(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-white/10 hover:bg-white/20 rounded-full p-3 backdrop-blur-sm transition-all z-10"
              >
                <ChevronRight className="w-8 h-8" />
              </motion.button>

              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                onClick={(e) => e.stopPropagation()}
                className="max-w-5xl w-full"
              >
                <motion.img
                  key={selectedImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  src={selectedItem.image}
                  alt={selectedItem.category}
                  className="w-full max-h-[80vh] object-contain rounded-2xl"
                />
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="mt-6 text-center"
                >
                  <h3 className="text-2xl font-serif font-bold text-white mb-2">
                    {selectedItem.category}
                  </h3>
                  <p className="text-white/80">{selectedItem.description}</p>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-gradient-to-br from-rose-light to-gold-light/30 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 md:p-12"
        >
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Sparkles className="w-12 h-12 text-gold mx-auto" />
            <h3 className="text-3xl font-serif font-bold text-gray-900 dark:text-white">
              Prije i poslije tretmana
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Svaki tretman u našem salonu donosi vidljive rezultate. Naši klijenti redovno dijele svoje transformacije na društvenim mrežama - pratite nas na Instagramu da vidite najnovije radove i inspiraciju.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300"
              >
                Pratite nas na Instagramu
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
