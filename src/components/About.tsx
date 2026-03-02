import { Heart, Users, Award, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Ana Petrović',
    role: 'Osnivač & Vlasnik',
    description: 'Certificirani kozmetičar sa 10+ godina iskustva u beauty industriji.'
  },
  {
    name: 'Marija Jovanović',
    role: 'Kozmetičar & Stilista',
    description: 'Specijalista za njegu lica i šminkanje, strast prema detaljima.'
  },
  {
    name: 'Sara Nikolić',
    role: 'Manikir & Pedikir',
    description: 'Umjetnica nail art dizajna, kreativnost je njena snaga.'
  }
];

const stats = [
  { icon: Users, value: '2000+', label: 'Zadovoljnih klijenata' },
  { icon: Award, value: '15+', label: 'Godina iskustva' },
  { icon: Heart, value: '100%', label: 'Posvećenost' },
  { icon: Clock, value: '5000+', label: 'Uspješnih tretmana' }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-4">
            O nama
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            U <span className="font-serif font-bold text-gold">Glow Up</span> salonu, vjerujemo da svaka žena zaslužuje da se osjeća savršeno u svojoj koži. Naša misija je stvoriti prostor gdje se ljepota susreće sa strašću, profesionalizmom i pažnjom prema svakom detalju.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-gradient-to-br from-rose-powder to-gold-light rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <Icon className="w-8 h-8 text-gold" />
                </motion.div>
                <div className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-rose-light to-white dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 md:p-12 mb-16"
        >
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h3 className="text-3xl font-serif font-bold text-gray-900 dark:text-white">
              Naša filozofija
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Svaki tretman u našem salonu je priča za sebe - kombinacija najkvalitetnijih proizvoda, savremenih tehnika i individualne pažnje. Naš cilj je da svaka žena izađe s osmijehom i sjajem koji traje.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Verujemo u moć ljepote da transformiše, inspiriše i osnažuje. U Glow Up-u, vaš sjaj je naš potpis.
            </p>
          </div>
        </motion.div>

        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-serif font-bold text-gray-900 dark:text-white text-center mb-12"
          >
            Upoznajte naš tim
          </motion.h3>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center group"
              >
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  src={`https://images.pexels.com/photos/${index === 0 ? '3985360' : index === 1 ? '3985322' : '3997379'}/pexels-photo-${index === 0 ? '3985360' : index === 1 ? '3985322' : '3997379'}.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop`}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
                />
                <h4 className="text-xl font-serif font-bold text-gray-900 dark:text-white mb-2 group-hover:text-gold transition-colors">
                  {member.name}
                </h4>
                <p className="text-gold font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
