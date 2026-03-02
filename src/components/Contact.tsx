import { MapPin, Phone, Mail, Clock, Instagram, Facebook, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const workingHours = [
  { day: 'Ponedjeljak - Petak', hours: '09:00 - 20:00' },
  { day: 'Subota', hours: '09:00 - 18:00' },
  { day: 'Nedjelja', hours: 'Zatvoreno' }
];

const contactInfo = [
  {
    icon: MapPin,
    title: 'Adresa',
    info: 'Ulica Ljepote 25, Sarajevo',
    link: 'https://www.google.com/maps/search/?api=1&query=Ulica+Ljepote+25+Sarajevo'
  },
  {
    icon: Phone,
    title: 'Telefon',
    info: '+387XXXXXX',
    link: 'tel:+387XXXXXX'
  },
  {
    icon: Mail,
    title: 'Email',
    info: 'support@gmail.com',
    link: 'mailto:support@gmail.com'
  }
];

const socialLinks = [
  {
    icon: Instagram,
    name: 'Instagram',
    url: 'https://instagram.com/',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Facebook,
    name: 'Facebook',
    url: 'https://facebook.com/',
    color: 'from-blue-600 to-blue-700'
  },
  {
    icon: MessageCircle,
    name: 'WhatsApp',
    url: 'https://wa.me/387XXXXXX',
    color: 'from-green-500 to-green-600'
  }
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-4">
            Kontaktirajte nas
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Rado ćemo odgovoriti na sva vaša pitanja i pomoći vam da zakažete termin
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-rose-light to-white dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8"
            >
              <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-6">
                Informacije
              </h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.a
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 10 }}
                      href={item.link}
                      target={item.link.startsWith('http') ? '_blank' : undefined}
                      rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-start space-x-4 group"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="w-12 h-12 bg-white dark:bg-gray-900 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform"
                      >
                        <Icon className="w-6 h-6 text-gold" />
                      </motion.div>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white mb-1">{item.title}</p>
                        <p className="text-gray-600 dark:text-gray-400 group-hover:text-gold transition-colors">
                          {item.info}
                        </p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-gold-light/30 to-white dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8"
            >
              <div className="flex items-center space-x-3 mb-6">
                <Clock className="w-6 h-6 text-gold" />
                <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white">
                  Radno vrijeme
                </h3>
              </div>
              <div className="space-y-4">
                {workingHours.map((schedule, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex justify-between items-center"
                  >
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{schedule.day}</span>
                    <span className="text-gray-900 dark:text-white font-semibold">{schedule.hours}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-xl font-serif font-bold text-gray-900 dark:text-white mb-4">
                Društvene mreže
              </h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`bg-gradient-to-r ${social.color} text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 flex items-center space-x-2`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{social.name}</span>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden shadow-2xl h-[600px]"
          >
            <div className="w-full h-full bg-gradient-to-br from-rose-powder via-rose-light to-gold-light dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 flex items-center justify-center">
              <div className="text-center space-y-4 p-8">
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <MapPin className="w-16 h-16 text-white mx-auto" />
                </motion.div>
                <p className="text-white text-xl font-serif">Lokacija na mapi</p>
                <p className="text-white/90">Ulica Ljepote 25, Sarajevo</p>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.google.com/maps/search/?api=1&query=Ulica+Ljepote+25+Sarajevo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-gray-900 px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all mt-4"
                >
                  Otvori u Google Maps
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-rose-light to-gold-light/30 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 md:p-12 text-center"
        >
          <h3 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-4">
            Imate pitanja?
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Naš tim je tu za vas! Kontaktirajte nas putem telefona, emaila ili društvenih mreža, a mi ćemo vam odgovoriti u najkraćem roku.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#booking"
            className="inline-block bg-gold text-white px-8 py-4 rounded-full font-medium hover:bg-gold/90 transition-all duration-300 hover:shadow-lg"
          >
            Zakaži termin odmah
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
