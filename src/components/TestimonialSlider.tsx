import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
  service: string;
  image?: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: 'Milica Stojanović',
    rating: 5,
    text: 'Predivan salon! Osobljem je pažljivo i profesionalno. Tretman lica je bio nevjerovatno opuštajući, a rezultati su vidljivi odmah. Definitivno ću se vraćati!',
    service: 'Njega lica'
  },
  {
    id: 2,
    name: 'Jovana Marković',
    rating: 5,
    text: 'Ana i njen tim su pravi profesionalci. Moj manikir izgleda savršeno čak i nakon dvije sedmice. Ambijent salona je predivan, osećam se kao kraljica svaki put.',
    service: 'Manikir'
  },
  {
    id: 3,
    name: 'Petra Nikolić',
    rating: 5,
    text: 'Prvo sam došla zbog šminkanja za svadbu, ali sada redovno dolazim. Usluga je vrhunska, cijene su pristupačne, a osoblje uvijek ljubazno. Preporučujem!',
    service: 'Šminkanje'
  },
  {
    id: 4,
    name: 'Elena Pavlović',
    rating: 5,
    text: 'Najbolji tretman obrva ikada! Marija je prava umjetnica. Moje obrve nikada nisu izgledale ovako dobro. Glow Up je sada moja omiljena beauty destinacija.',
    service: 'Obrve i trepavice'
  },
  {
    id: 5,
    name: 'Katarina Đorđević',
    rating: 5,
    text: 'Masaža tijela kod njih je nešto posebno. Potpuno sam se opustila i zaboravila na svakodnevni stres. Atmosfera je čarobna, vratit ću se sigurno!',
    service: 'Njega tijela'
  },
  {
    id: 6,
    name: 'Sara Jovanović',
    rating: 5,
    text: 'Oduševljena sam profesionalizmom i ljubaznošću. Svaka preporuka! Rezultati su nevjerovatni, a cijene fer. Glow Up je zaista zaslužio svoje ime!',
    service: 'Tretman lica'
  }
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        goToNext();
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [currentIndex, isPaused]);

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const goToPrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    })
  };

  const currentReview = reviews[currentIndex];

  return (
    <section id="reviews" className="py-20 bg-gradient-to-b from-white to-rose-light/30 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-4">
            Što kažu naše klijentice
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Vaše zadovoljstvo i osmjeh su naša najveća nagrada
          </p>
        </motion.div>

        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 },
                scale: { duration: 0.3 }
              }}
              className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-2xl"
            >
              <div className="flex items-center justify-center mb-6">
                <Quote className="w-16 h-16 text-gold/30" />
              </div>

              <div className="flex justify-center gap-1 mb-6">
                {[...Array(currentReview.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: i * 0.1, type: "spring" }}
                  >
                    <Star className="w-6 h-6 fill-gold text-gold" />
                  </motion.div>
                ))}
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8 italic text-center"
              >
                "{currentReview.text}"
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-center pt-6 border-t dark:border-gray-700"
              >
                <p className="font-bold text-xl text-gray-900 dark:text-white mb-1">
                  {currentReview.name}
                </p>
                <p className="text-sm text-gold font-medium">{currentReview.service}</p>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          <motion.button
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.9 }}
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>

          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'w-12 h-3 bg-gold'
                    : 'w-3 h-3 bg-gray-300 dark:bg-gray-600 hover:bg-gold/50'
                }`}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <motion.div
            whileHover={{ y: -5 }}
            className="text-center bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
          >
            <div className="text-4xl font-serif font-bold text-gold mb-2">2000+</div>
            <div className="text-gray-600 dark:text-gray-400">Zadovoljnih klijenata</div>
          </motion.div>
          <motion.div
            whileHover={{ y: -5 }}
            className="text-center bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
          >
            <div className="text-4xl font-serif font-bold text-gold mb-2">5.0</div>
            <div className="text-gray-600 dark:text-gray-400">Prosječna ocjena</div>
          </motion.div>
          <motion.div
            whileHover={{ y: -5 }}
            className="text-center bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
          >
            <div className="text-4xl font-serif font-bold text-gold mb-2">500+</div>
            <div className="text-gray-600 dark:text-gray-400">5-star recenzija</div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 max-w-3xl mx-auto">
            <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-4">
              Podijelite svoje iskustvo
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Vaše mišljenje nam mnogo znači! Ostavite recenziju i pomozite drugim klijenticama da otkriju Glow Up.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://g.page/r/YOUR_GOOGLE_REVIEW_LINK/review"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold text-white px-8 py-3 rounded-full font-medium hover:bg-gold/90 transition-all duration-300 hover:shadow-lg"
              >
                Ostavi Google recenziju
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-8 py-3 rounded-full font-medium border-2 border-gray-200 dark:border-gray-700 hover:border-gold transition-all duration-300"
              >
                Posjeti Instagram
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
