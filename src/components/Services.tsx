import { Sparkles, Heart, Hand, Smile, Eye, Scissors } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Sparkles,
    title: 'Njega lica',
    description: 'Dubinsko čišćenje, piling, masaža lica i personalizovani tretmani za svježi i sjajan ten.',
    treatments: ['Dubinsko čišćenje', 'Hidratacija', 'Anti-age tretmani', 'Masaža lica']
  },
  {
    icon: Heart,
    title: 'Njega tijela',
    description: 'Opuštajuće masaže, piling tijela i tretmani oblikovanja za savršen izgled.',
    treatments: ['Relax masaža', 'Sportska masaža', 'Body scrub', 'Oblikovanje tijela']
  },
  {
    icon: Hand,
    title: 'Nokti i manikir/pedikir',
    description: 'Profesionalna njega noktiju, gel lakovi i umjetnički nail art dizajni.',
    treatments: ['Manikir', 'Pedikir', 'Gel lakiranje', 'Nadogradnja noktiju']
  },
  {
    icon: Smile,
    title: 'Šminkanje',
    description: 'Profesionalno šminkanje za sve prilike - dnevno, večernje ili za posebne događaje.',
    treatments: ['Dnevna šminka', 'Večernja šminka', 'Vjenčanje', 'Foto šminka']
  },
  {
    icon: Eye,
    title: 'Obrve i trepavice',
    description: 'Oblikovanje obrva, lifting trepavica i bojenje za izražajan pogled.',
    treatments: ['Oblikovanje obrva', 'Lash lift', 'Bojenje', 'Laminacija']
  },
  {
    icon: Scissors,
    title: 'Depilacija',
    description: 'Profesionalna i nježna depilacija voskom za dugotrajan osjećaj glatkoće.',
    treatments: ['Depilacija nogu', 'Bikini zona', 'Pazuh', 'Lice']
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-rose-light/30 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-4">
            Naše usluge
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Otkrijte paletu tretmana kreirana da istaknete vašu prirodnu ljepotu
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg transition-all duration-300 group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-16 h-16 bg-gradient-to-br from-rose-powder to-gold-light rounded-2xl flex items-center justify-center mb-6"
                >
                  <Icon className="w-8 h-8 text-gold" />
                </motion.div>
                <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-3 group-hover:text-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.treatments.map((treatment, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + idx * 0.05 }}
                      className="flex items-center text-sm text-gray-600 dark:text-gray-400"
                    >
                      <motion.span
                        whileHover={{ scale: 1.5 }}
                        className="w-1.5 h-1.5 bg-gold rounded-full mr-2"
                      ></motion.span>
                      {treatment}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#booking"
            className="inline-block bg-gold text-white px-8 py-4 rounded-full font-medium hover:bg-gold/90 transition-all duration-300 hover:shadow-lg"
          >
            Rezerviši svoj Glow Up trenutak
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
