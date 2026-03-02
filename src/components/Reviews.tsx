import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Milica Stojanović',
    rating: 5,
    text: 'Predivan salon! Osobljem je pažljivo i profesionalno. Tretman lica je bio nevjerovatno opuštajući, a rezultati su vidljivi odmah. Definitivno ću se vraćati!',
    service: 'Njega lica'
  },
  {
    name: 'Jovana Marković',
    rating: 5,
    text: 'Ana i njen tim su pravi profesionalci. Moj manikir izgleda savršeno čak i nakon dvije sedmice. Ambijent salona je predivan, osećam se kao kraljica svaki put.',
    service: 'Manikir'
  },
  {
    name: 'Petra Nikolić',
    rating: 5,
    text: 'Prvo sam došla zbog šminkanja za svadbu, ali sada redovno dolazim. Usluga je vrhunska, cijene su pristupačne, a osoblje uvijek ljubazno. Preporučujem!',
    service: 'Šminkanje'
  },
  {
    name: 'Elena Pavlović',
    rating: 5,
    text: 'Najbolji tretman obrva ikada! Marija je prava umjetnica. Moje obrve nikada nisu izgledale ovako dobro. Glow Up je sada moja omiljena beauty destinacija.',
    service: 'Obrve i trepavice'
  },
  {
    name: 'Katarina Đorđević',
    rating: 5,
    text: 'Masaža tijela kod njih je nešto posebno. Potpuno sam se opustila i zaboravila na svakodnevni stres. Atmosfera je čarobna, vratit ću se sigurno!',
    service: 'Njega tijela'
  },
  {
    name: 'Sara Jovanović',
    rating: 5,
    text: 'Oduševljena sam profesionalizmom i ljubaznošću. Svaka preporuka! Rezultati su nevjerovatni, a cijene fer. Glow Up je zaista zaslužio svoje ime!',
    service: 'Tretman lica'
  }
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-gradient-to-b from-white to-rose-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Što kažu naše klijentice
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Vaše zadovoljstvo i osmjeh su naša najveća nagrada
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-rose-powder" />
              </div>

              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{review.text}"
              </p>

              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900 mb-1">{review.name}</p>
                <p className="text-sm text-gray-500">{review.service}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-3xl mx-auto">
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
              Podijelite svoje iskustvo
            </h3>
            <p className="text-gray-600 mb-6">
              Vaše mišljenje nam mnogo znači! Ostavite recenziju i pomozite drugim klijenticama da otkriju Glow Up.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://g.page/r/YOUR_GOOGLE_REVIEW_LINK/review"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold text-white px-8 py-3 rounded-full font-medium hover:bg-gold/90 transition-all duration-300 hover:shadow-lg"
              >
                Ostavi Google recenziju
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-gray-900 px-8 py-3 rounded-full font-medium border-2 border-gray-200 hover:border-gold transition-all duration-300"
              >
                Posjeti Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-8 bg-white rounded-full px-8 py-4 shadow-lg">
            <div className="text-center">
              <div className="text-3xl font-serif font-bold text-gray-900 mb-1">2000+</div>
              <div className="text-sm text-gray-600">Zadovoljnih klijenata</div>
            </div>
            <div className="h-12 w-px bg-gray-200"></div>
            <div className="text-center">
              <div className="text-3xl font-serif font-bold text-gray-900 mb-1">5.0</div>
              <div className="text-sm text-gray-600">Prosječna ocjena</div>
            </div>
            <div className="h-12 w-px bg-gray-200"></div>
            <div className="text-center">
              <div className="text-3xl font-serif font-bold text-gray-900 mb-1">500+</div>
              <div className="text-sm text-gray-600">5-star recenzija</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
