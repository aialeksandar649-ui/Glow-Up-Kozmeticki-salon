import { Sparkles, Instagram, Facebook, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Početna', href: '#home' },
    { name: 'Usluge', href: '#services' },
    { name: 'Cjenovnik', href: '#pricing' },
    { name: 'Rezerviši', href: '#booking' },
  ];

  const services = [
    { name: 'Njega lica', href: '#services' },
    { name: 'Njega tijela', href: '#services' },
    { name: 'Manikir/Pedikir', href: '#services' },
    { name: 'Šminkanje', href: '#services' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <Sparkles className="w-8 h-8 text-gold" />
              <span className="text-2xl font-serif font-bold">Glow Up</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Tvoj sjaj, naš potpis. Mjesto gdje ljepota postaje vaš savršen potpis.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1, backgroundColor: 'rgb(212, 175, 55)' }}
                whileTap={{ scale: 0.9 }}
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, backgroundColor: 'rgb(212, 175, 55)' }}
                whileTap={{ scale: 0.9 }}
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, backgroundColor: 'rgb(212, 175, 55)' }}
                whileTap={{ scale: 0.9 }}
                href="https://wa.me/387XXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <MessageCircle className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-serif font-bold mb-6">Brze veze</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-gold transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-serif font-bold mb-6">Usluge</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-gold transition-colors duration-300"
                  >
                    {service.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-serif font-bold mb-6">Kontakt</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  Ulica Ljepote 25<br />Sarajevo
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <a href="tel:+387XXXXXX" className="text-gray-300 hover:text-gold transition-colors">
                  +387XXXXXX
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <a href="mailto:support@gmail.com" className="text-gray-300 hover:text-gold transition-colors">
                  support@gmail.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              Copyright © {currentYear} Glow Up. Sva prava zadržana.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#politika-privatnosti" className="text-gray-400 hover:text-gold transition-colors">
                Politika privatnosti
              </a>
              <a href="#uslovi-koristenja" className="text-gray-400 hover:text-gold transition-colors">
                Uslovi korištenja
              </a>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="bg-gradient-to-r from-rose-powder via-gold to-rose-powder h-1 origin-left"
      ></motion.div>
    </footer>
  );
}
