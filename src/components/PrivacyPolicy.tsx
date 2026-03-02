import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText, Mail, Phone } from 'lucide-react';

export default function PrivacyPolicy() {
  const sections = [
    {
      icon: Shield,
      title: '1. Uvod',
      content: `Glow Up ("mi", "nas", "naš") posvećen je zaštiti privatnosti naših klijenata. Ova Politika privatnosti objašnjava kako prikupljamo, koristimo, čuvamo i štitimo vaše lične podatke kada koristite našu web stranicu i usluge.`
    },
    {
      icon: FileText,
      title: '2. Podaci koje prikupljamo',
      content: `Prikupljamo sljedeće vrste podataka:`,
      list: [
        'Lični podaci: ime, prezime, broj telefona, email adresa',
        'Podaci o rezervacijama: datum, vrijeme, odabrana usluga',
        'Tehnički podaci: IP adresa, tip pretraživača, uređaj',
        'Kolačići (cookies): za poboljšanje korisničkog iskustva'
      ]
    },
    {
      icon: Lock,
      title: '3. Kako koristimo vaše podatke',
      content: `Vaše podatke koristimo u sljedeće svrhe:`,
      list: [
        'Obrada rezervacija i zakazivanje termina',
        'Komunikacija sa vama putem telefona, emaila ili SMS-a',
        'Slanje potvrda o zakazanim terminima',
        'Informisanje o specijalnim ponudama i promocijama (uz vašu saglasnost)',
        'Poboljšanje kvaliteta naših usluga',
        'Ispunjavanje zakonskih obaveza'
      ]
    },
    {
      icon: Eye,
      title: '4. Dijeljenje podataka',
      content: `Mi ne prodajemo, ne iznajmljujemo niti dijelimo vaše lične podatke sa trećim stranama, osim u sljedećim slučajevima:`,
      list: [
        'Kada je to zakonom propisano',
        'Sa vašom izričitom saglasnošću',
        'Sa pružaocima usluga koji nam pomažu u poslovanju (npr. email servisi)',
        'U slučaju spajanja ili prodaje našeg poslovanja'
      ]
    },
    {
      icon: Shield,
      title: '5. Zaštita podataka',
      content: `Poduzimamo odgovarajuće tehničke i organizacijske mjere za zaštitu vaših podataka:`,
      list: [
        'SSL enkripcija za sve osjetljive podatke',
        'Sigurni serveri i baze podataka',
        'Ograničen pristup podacima samo ovlaštenom osoblju',
        'Redovno ažuriranje sigurnosnih protokola'
      ]
    },
    {
      icon: FileText,
      title: '6. Vaša prava',
      content: `U skladu sa zakonima o zaštiti podataka, imate pravo na:`,
      list: [
        'Pristup svojim ličnim podacima',
        'Ispravku netačnih podataka',
        'Brisanje podataka ("pravo na zaborav")',
        'Ograničenje obrade podataka',
        'Prenosivost podataka',
        'Prigovor na obradu podataka',
        'Povlačenje saglasnosti u bilo kom trenutku'
      ]
    },
    {
      icon: FileText,
      title: '7. Kolačići (Cookies)',
      content: `Naša web stranica koristi kolačiće za:`,
      list: [
        'Pamćenje vaših postavki (npr. tema - svetao/tamni mod)',
        'Analizu posjeta web stranici',
        'Poboljšanje funkcionalnosti sajta',
        'Marketing i personalizovane reklame (uz vašu saglasnost)'
      ],
      additional: 'Možete kontrolisati upotrebu kolačića kroz postavke vašeg pretraživača.'
    },
    {
      icon: Lock,
      title: '8. Čuvanje podataka',
      content: `Vaše lične podatke čuvamo samo onoliko dugo koliko je potrebno za svrhe navedene u ovoj politici:`,
      list: [
        'Podaci o rezervacijama: 2 godine od posljednje posjete',
        'Marketing podaci: do opoziva saglasnosti',
        'Zakonske obaveze: prema zakonskim propisima'
      ]
    }
  ];

  return (
    <section className="min-h-screen py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-4">
            Politika privatnosti
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Posljednje ažuriranje: 1. Mart 2026
          </p>
        </motion.div>

        <div className="space-y-8">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-rose-light/30 to-white dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-lg"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-gold" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-3">
                      {section.title}
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                      {section.content}
                    </p>
                    {section.list && (
                      <ul className="space-y-2 ml-4">
                        {section.list.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                            <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {section.additional && (
                      <p className="text-gray-600 dark:text-gray-400 mt-4 italic">
                        {section.additional}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 bg-gradient-to-br from-gold-light/30 to-rose-light/30 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8"
        >
          <h2 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-4">
            Kontaktirajte nas
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Ako imate pitanja o ovoj Politici privatnosti ili želite ostvariti svoja prava, kontaktirajte nas:
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-gold" />
              <a href="mailto:support@gmail.com" className="text-gray-900 dark:text-white hover:text-gold transition-colors">
                support@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-gold" />
              <a href="tel:+387XXXXXX" className="text-gray-900 dark:text-white hover:text-gold transition-colors">
                +387XXXXXX
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-8 text-center"
        >
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.location.hash = '';
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-block bg-gold text-white px-8 py-3 rounded-full font-medium hover:bg-gold/90 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Nazad na početnu
          </a>
        </motion.div>
      </div>
    </section>
  );
}
