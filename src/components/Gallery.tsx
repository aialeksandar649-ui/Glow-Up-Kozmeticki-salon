import { Sparkles } from 'lucide-react';

const galleryItems = [
  {
    category: 'Njega lica',
    description: 'Prije i poslije tretmana',
    image: 'https://images.pexels.com/photos/3762453/pexels-photo-3762453.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop'
  },
  {
    category: 'Manikir',
    description: 'Umjetnički nail art',
    image: 'https://images.pexels.com/photos/3997987/pexels-photo-3997987.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop'
  },
  {
    category: 'Šminkanje',
    description: 'Večernji look',
    image: 'https://images.pexels.com/photos/3373722/pexels-photo-3373722.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop'
  },
  {
    category: 'Obrve',
    description: 'Savršeno oblikovanje',
    image: 'https://images.pexels.com/photos/7755582/pexels-photo-7755582.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop'
  },
  {
    category: 'Tretman lica',
    description: 'Profesionalna njega',
    image: 'https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop'
  },
  {
    category: 'Ambijent',
    description: 'Naš prostor',
    image: 'https://images.pexels.com/photos/3985347/pexels-photo-3985347.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop'
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-rose-light px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-5 h-5 text-gold" />
            <span className="text-sm font-medium text-gray-700">Naši radovi</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Galerija
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Pogledajte rezultate naših tretmana i atmosferu našeg salona
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.category}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col items-center justify-end p-8">
                <h3 className="text-2xl font-serif font-bold text-white text-center mb-2">
                  {item.category}
                </h3>
                <p className="text-white/90 text-center">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-rose-light to-gold-light/30 rounded-3xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Sparkles className="w-12 h-12 text-gold mx-auto" />
            <h3 className="text-3xl font-serif font-bold text-gray-900">
              Prije i poslije tretmana
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Svaki tretman u našem salonu donosi vidljive rezultate. Naši klijenti redovno dijele svoje transformacije na društvenim mrežama - pratite nas na Instagramu da vidite najnovije radove i inspiraciju.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-gray-900 px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300"
              >
                Pratite nas na Instagramu
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">Želite da podijelite svoju transformaciju?</p>
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            Sve fotografije objavljene uz odobrenje naših klijenata. Ako želite da vaš rezultat bude dio naše galerije, javite nam nakon tretmana!
          </p>
        </div>
      </div>
    </section>
  );
}
