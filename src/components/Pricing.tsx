import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Sparkles, Clock } from 'lucide-react';

interface PricingItem {
  id: string;
  category: string;
  service: string;
  duration: string;
  price: string;
  features: string[];
}

const pricingData: PricingItem[] = [
  {
    id: '1',
    category: 'Njega lica',
    service: 'Dubinsko čišćenje',
    duration: '60 min',
    price: '50 KM',
    features: ['Analiza kože', 'Dubinsko čišćenje', 'Piling', 'Maska']
  },
  {
    id: '2',
    category: 'Njega lica',
    service: 'Anti-age tretman',
    duration: '90 min',
    price: '80 KM',
    features: ['Čišćenje', 'Serum', 'Masaža lica', 'Anti-age maska']
  },
  {
    id: '3',
    category: 'Njega lica',
    service: 'Hidratacija',
    duration: '60 min',
    price: '60 KM',
    features: ['Čišćenje', 'Piling', 'Hidro maska', 'Krema']
  },
  {
    id: '4',
    category: 'Nokti',
    service: 'Manikir',
    duration: '45 min',
    price: '25 KM',
    features: ['Oblikovanje', 'Njega kutikule', 'Masaža', 'Lak']
  },
  {
    id: '5',
    category: 'Nokti',
    service: 'Gel lakiranje',
    duration: '60 min',
    price: '40 KM',
    features: ['Manikir', 'Gel lak', 'UV sušenje', 'Sjaj']
  },
  {
    id: '6',
    category: 'Nokti',
    service: 'Pedikir',
    duration: '60 min',
    price: '30 KM',
    features: ['Kupka', 'Piling', 'Njega noktiju', 'Lak']
  },
  {
    id: '7',
    category: 'Tijelo',
    service: 'Relax masaža',
    duration: '60 min',
    price: '60 KM',
    features: ['Cijelo tijelo', 'Aroma ulja', 'Opuštanje', 'Detoks']
  },
  {
    id: '8',
    category: 'Tijelo',
    service: 'Sportska masaža',
    duration: '90 min',
    price: '80 KM',
    features: ['Duboki pritisak', 'Mišićna relaksacija', 'Strečing', 'Recovery']
  },
  {
    id: '9',
    category: 'Tijelo',
    service: 'Body scrub',
    duration: '45 min',
    price: '50 KM',
    features: ['Piling tijela', 'Hidratacija', 'Masaža', 'Glatka koža']
  },
  {
    id: '10',
    category: 'Šminka',
    service: 'Dnevna šminka',
    duration: '30 min',
    price: '30 KM',
    features: ['Prirodan look', 'Long-lasting', 'Profesionalni proizvodi']
  },
  {
    id: '11',
    category: 'Šminka',
    service: 'Večernja šminka',
    duration: '45 min',
    price: '50 KM',
    features: ['Glamur look', 'Contouring', 'Dramatic eyes', 'Premium proizvodi']
  },
  {
    id: '12',
    category: 'Šminka',
    service: 'Vjenčanje',
    duration: '90 min',
    price: '120 KM',
    features: ['Konsultacije', 'Probe', 'Cijeli look', 'Touch-up kit']
  },
  {
    id: '13',
    category: 'Obrve',
    service: 'Oblikovanje obrva',
    duration: '20 min',
    price: '15 KM',
    features: ['Konzultacije', 'Precizno oblikovanje', 'Njega']
  },
  {
    id: '14',
    category: 'Obrve',
    service: 'Lash lift',
    duration: '45 min',
    price: '40 KM',
    features: ['Lifting', 'Bojenje', 'Njega', '6-8 sedmica']
  },
  {
    id: '15',
    category: 'Depilacija',
    service: 'Depilacija nogu',
    duration: '45 min',
    price: '35 KM',
    features: ['Cijele noge', 'Voskom', 'Nježno', 'Dugotrajan efekt']
  },
];

const categories = ['Sve', 'Njega lica', 'Nokti', 'Tijelo', 'Šminka', 'Obrve', 'Depilacija'];

export default function Pricing() {
  const [selectedCategory, setSelectedCategory] = useState('Sve');

  const filteredPricing = selectedCategory === 'Sve' 
    ? pricingData 
    : pricingData.filter(item => item.category === selectedCategory);

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-white to-rose-light/30 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-sm mb-4">
            <Sparkles className="w-5 h-5 text-gold" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Transparentne cijene</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-4">
            Cjenovnik
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Kvalitet koji zaslužuješ po cijenama koje možeš priuštiti
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gold text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-md'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredPricing.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-xs font-semibold text-gold uppercase tracking-wide mb-2">
                      {item.category}
                    </div>
                    <h3 className="text-xl font-serif font-bold text-gray-900 dark:text-white group-hover:text-gold transition-colors">
                      {item.service}
                    </h3>
                  </div>
                  <motion.div
                    whileHover={{ rotate: 12, scale: 1.1 }}
                    className="bg-gradient-to-br from-rose-powder to-gold-light rounded-full p-3"
                  >
                    <Sparkles className="w-5 h-5 text-gold" />
                  </motion.div>
                </div>

                <div className="flex items-center gap-2 mb-4 text-gray-600 dark:text-gray-400">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{item.duration}</span>
                </div>

                <div className="mb-4">
                  <div className="text-3xl font-serif font-bold text-gray-900 dark:text-white">
                    {item.price}
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {item.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 + idx * 0.1 }}
                      className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                    >
                      <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#booking"
                  className="block w-full text-center bg-gradient-to-r from-rose-powder/50 to-gold-light/50 hover:from-rose-powder hover:to-gold-light text-gray-900 dark:text-gray-900 py-3 rounded-xl font-medium transition-all duration-300"
                >
                  Zakaži termin
                </motion.a>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredPricing.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Nema usluga u odabranoj kategoriji
            </p>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-gradient-to-br from-rose-light to-gold-light/30 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 md:p-12 text-center"
        >
          <Sparkles className="w-12 h-12 text-gold mx-auto mb-4" />
          <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-4">
            Paketi i popusti
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Pitajte nas o specijalnim paketima za nevjeste, grupnim tretmanima i mjesečnim članskvim karticama s popustom do 20%!
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#booking"
            className="inline-block bg-gold text-white px-8 py-4 rounded-full font-medium hover:bg-gold/90 transition-all duration-300 shadow-lg"
          >
            Saznaj više
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
