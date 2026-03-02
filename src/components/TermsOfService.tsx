import { motion } from 'framer-motion';
import { FileText, CheckCircle, AlertCircle, Users, Shield, Ban } from 'lucide-react';

export default function TermsOfService() {
  const sections = [
    {
      icon: FileText,
      title: '1. Prihvatanje uslova',
      content: `Korištenjem web stranice Glow Up i naših usluga, prihvatate ove Uslove korištenja u potpunosti. Ako se ne slažete sa bilo kojim dijelom ovih uslova, ne smijete koristiti našu web stranicu ili usluge.`
    },
    {
      icon: Users,
      title: '2. Zakazivanje termina',
      content: `Pravila zakazivanja i otkazivanja termina:`,
      list: [
        'Termini se zakazuju putem kontakt forme, telefona ili društvenih mreža',
        'Potvrda termina biće poslata putem SMS-a ili emaila',
        'Molimo da stignete 5-10 minuta prije zakazanog termina',
        'Otkazivanje termina mora biti najmanje 24 sata unaprijed',
        'Kasna otkazivanja ili nedolazak mogu rezultirati naplatom 50% cijene usluge',
        'Zadržavamo pravo odbijanja usluge u opravdanim slučajevima'
      ]
    },
    {
      icon: CheckCircle,
      title: '3. Korištenje usluga',
      content: `Pristupanjem našim uslugama, slažete se da ćete:`,
      list: [
        'Pružiti tačne i potpune informacije prilikom zakazivanja',
        'Obavijestiti nas o bilo kojim alergijama ili zdravstvenim stanjima',
        'Poštovati naše osoblje i druge klijente',
        'Pridržavati se higijenskih standarda salona',
        'Čuvati svoje lične stvari (ne odgovaramo za izgubljene predmete)',
        'Poštovati pravila ponašanja u salonu'
      ]
    },
    {
      icon: AlertCircle,
      title: '4. Cijene i plaćanje',
      content: `Finansijska pravila:`,
      list: [
        'Sve cijene su izražene u konvertibilnim markama (KM)',
        'Cijene mogu biti izmijenjene bez prethodne najave',
        'Plaćanje se vrši u gotovini odmah nakon usluge',
        'Specijalne ponude i popusti vrijede samo za označeni period',
        'Poklon bonovi vrijede 6 mjeseci od datuma kupovine',
        'Ne vraćamo novac za već pružene usluge'
      ]
    },
    {
      icon: Shield,
      title: '5. Odgovornost i garancije',
      content: `Glow Up se obavezuje da:`,
      list: [
        'Koristi kvalitetne i sigurne proizvode',
        'Održava visoke standarde higijene',
        'Pruža usluge od strane obučenog osoblja',
        'Poštuje medicinske i sigurnosne protokole'
      ],
      additional: 'Međutim, ne odgovaramo za:',
      additionalList: [
        'Alergijske reakcije koje niste prijavili',
        'Komplikacije usljed nepoštovanja uputa za njegu nakon tretmana',
        'Nezadovoljstvo rezultatom zbog nerealistinih očekivanja',
        'Štetu nastalu van kontrole salona (vis maior)'
      ]
    },
    {
      icon: Ban,
      title: '6. Zabrane',
      content: `Zabranjeno je:`,
      list: [
        'Kopirati, reproducirati ili distribuirati naš sadržaj bez dozvole',
        'Koristiti web stranicu za bilo kakve nezakonite svrhe',
        'Pokušati neovlašteni pristup našim sistemima',
        'Zloupotrebljavati kontakt forme (spam, prevara)',
        'Unositi viruse ili zlonamjerni kod',
        'Vrijeđati osoblje ili druge klijente'
      ]
    },
    {
      icon: FileText,
      title: '7. Intelektualno vlasništvo',
      content: `Sav sadržaj na ovoj web stranici, uključujući:`,
      list: [
        'Tekstove, slike i grafike',
        'Logo i zaštitni znaci',
        'Dizajn web stranice',
        'Fotografije radova'
      ],
      additional: 'je vlasništvo Glow Up-a i zaštićeno je zakonima o autorskim pravima.'
    },
    {
      icon: Shield,
      title: '8. Ograničenje odgovornosti',
      content: `Glow Up neće biti odgovoran za:`,
      list: [
        'Privremenu nedostupnost web stranice',
        'Tehničke greške ili prekide',
        'Gubitak podataka',
        'Bilo kakvu indirektnu ili posljedičnu štetu',
        'Grešaka u informacijama na sajtu'
      ]
    },
    {
      icon: CheckCircle,
      title: '9. Izmjene uslova',
      content: `Zadržavamo pravo da u bilo kom trenutku:`,
      list: [
        'Izmijenimo ove Uslove korištenja',
        'Promijenimo ili ukinemo bilo koji dio usluga',
        'Ažuriramo cjenovnik',
        'Izmjenimo pravila zakazivanja'
      ],
      additional: 'Nastavak korištenja usluga nakon promjena smatra se prihvatanjem novih uslova.'
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
            Uslovi korištenja
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
                      <ul className="space-y-2 ml-4 mb-4">
                        {section.list.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                            <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {section.additional && (
                      <>
                        <p className="text-gray-700 dark:text-gray-300 mt-4 font-medium">
                          {section.additional}
                        </p>
                        {section.additionalList && (
                          <ul className="space-y-2 ml-4 mt-2">
                            {section.additionalList.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                                <span className="w-1.5 h-1.5 bg-rose-powder rounded-full mt-2 flex-shrink-0"></span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </>
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
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-12 bg-gradient-to-br from-gold-light/30 to-rose-light/30 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8"
        >
          <h2 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-4">
            Važna napomena
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Ovi Uslovi korištenja čine pravno obavezujući sporazum između vas i Glow Up-a. 
            Molimo vas da ih pažljivo pročitate. Ako imate bilo kakva pitanja ili nedoumice, 
            slobodno nas kontaktirajte prije korištenja naših usluga.
          </p>
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
