import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, User, Phone, Sparkles, ChevronRight, ChevronLeft, Check } from 'lucide-react';

interface BookingFormData {
  service: string;
  date: string;
  time: string;
  name: string;
  phone: string;
}

const services = [
  { id: 'njega-lica', name: 'Njega lica', icon: '✨', duration: '60-90 min' },
  { id: 'njega-tijela', name: 'Njega tijela', icon: '💆', duration: '60-120 min' },
  { id: 'manikir', name: 'Manikir/Pedikir', icon: '💅', duration: '45-90 min' },
  { id: 'sminkanje', name: 'Šminkanje', icon: '💄', duration: '30-60 min' },
  { id: 'obrve', name: 'Obrve i trepavice', icon: '👁️', duration: '30-45 min' },
  { id: 'depilacija', name: 'Depilacija', icon: '🌸', duration: '30-60 min' },
];

const timeSlots = [
  '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', 
  '15:00', '16:00', '17:00', '18:00', '19:00'
];

export default function SmartBooking() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<BookingFormData>({
    service: '',
    date: '',
    time: '',
    name: '',
    phone: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const totalSteps = 4;

  const validateStep = () => {
    const newErrors: Record<string, string> = {};
    
    if (step === 1 && !formData.service) {
      newErrors.service = 'Molimo izaberite uslugu';
    }
    if (step === 2 && !formData.date) {
      newErrors.date = 'Molimo izaberite datum';
    }
    if (step === 3 && !formData.time) {
      newErrors.time = 'Molimo izaberite vrijeme';
    }
    if (step === 4) {
      if (!formData.name.trim()) {
        newErrors.name = 'Ime je obavezno';
      }
      if (!formData.phone.trim()) {
        newErrors.phone = 'Telefon je obavezan';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) {
      if (step < totalSteps) {
        setStep(step + 1);
      } else {
        handleSubmit();
      }
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
      setErrors({});
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
    
    setTimeout(() => {
      setSubmitted(false);
      setStep(1);
      setFormData({
        service: '',
        date: '',
        time: '',
        name: '',
        phone: '',
      });
    }, 4000);
  };

  const selectedService = services.find(s => s.id === formData.service);

  const stepVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  };

  const [direction, setDirection] = useState(0);

  const goToStep = (newStep: number) => {
    if (newStep < step && newStep >= 1) {
      setDirection(-1);
      setStep(newStep);
    }
  };

  const handleNext = () => {
    setDirection(1);
    nextStep();
  };

  const handlePrev = () => {
    setDirection(-1);
    prevStep();
  };

  const minDate = new Date().toISOString().split('T')[0];

  return (
    <section id="booking" className="py-20 bg-gradient-to-b from-rose-light/30 to-white dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-sm mb-4">
            <Sparkles className="w-5 h-5 text-gold" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Smart Booking Request</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-4">
            Zakaži termin
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            U nekoliko klikova do tvog Glow Up momenta
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12 transition-colors duration-300"
        >
          {!submitted ? (
            <>
              <div className="mb-12">
                <div className="relative flex items-center justify-between mb-4">
                  {[1, 2, 3, 4].map((s) => (
                    <div key={s} className="flex items-center" style={{ flex: s === 4 ? '0 0 auto' : '1 1 0%' }}>
                      <motion.div
                        onClick={() => goToStep(s)}
                        className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                          s <= step
                            ? 'bg-gold text-white shadow-lg scale-110'
                            : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
                        } ${s < step ? 'cursor-pointer hover:scale-105' : ''}`}
                        whileHover={s < step ? { scale: 1.1 } : {}}
                      >
                        {s < step ? <Check className="w-5 h-5" /> : s}
                      </motion.div>
                      {s < 4 && (
                        <div
                          className={`flex-1 h-1 mx-2 rounded transition-all duration-300 ${
                            s < step ? 'bg-gold' : 'bg-gray-200 dark:bg-gray-700'
                          }`}
                        />
                      )}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-4 gap-2 text-xs text-gray-600 dark:text-gray-400">
                  <span className="text-center">Usluga</span>
                  <span className="text-center">Datum</span>
                  <span className="text-center">Vrijeme</span>
                  <span className="text-center">Kontakt</span>
                </div>
              </div>

              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={step}
                  custom={direction}
                  variants={stepVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                  className="min-h-[400px]"
                >
                  {step === 1 && (
                    <div className="space-y-6">
                      <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-6 text-center">
                        Izaberi uslugu
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {services.map((service) => (
                          <motion.button
                            key={service.id}
                            type="button"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setFormData({ ...formData, service: service.id })}
                            className={`p-6 rounded-2xl border-2 transition-all duration-300 text-left ${
                              formData.service === service.id
                                ? 'border-gold bg-gold/10 dark:bg-gold/20 shadow-lg'
                                : 'border-gray-200 dark:border-gray-700 hover:border-gold/50 dark:hover:border-gold/50'
                            }`}
                          >
                            <div className="text-3xl mb-2">{service.icon}</div>
                            <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-1">{service.name}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{service.duration}</p>
                          </motion.button>
                        ))}
                      </div>
                      {errors.service && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-500 text-sm text-center"
                        >
                          {errors.service}
                        </motion.p>
                      )}
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-6">
                      <div className="text-center mb-6">
                        <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-2">
                          Izaberi željeni datum
                        </h3>
                        {selectedService && (
                          <p className="text-gray-600 dark:text-gray-400">
                            Usluga: <span className="font-semibold text-gold">{selectedService.name}</span>
                          </p>
                        )}
                      </div>
                      <div className="max-w-md mx-auto">
                        <div className="bg-gradient-to-br from-rose-light to-gold-light/30 dark:from-gray-700 dark:to-gray-600 p-8 rounded-2xl">
                          <Calendar className="w-12 h-12 text-gold mx-auto mb-4" />
                          <input
                            type="date"
                            min={minDate}
                            value={formData.date}
                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                            className="w-full px-6 py-4 rounded-xl border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-gold focus:border-transparent transition-all text-lg text-center"
                          />
                        </div>
                      </div>
                      {errors.date && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-500 text-sm text-center"
                        >
                          {errors.date}
                        </motion.p>
                      )}
                    </div>
                  )}

                  {step === 3 && (
                    <div className="space-y-6">
                      <div className="text-center mb-6">
                        <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-2">
                          Izaberi okvirno vrijeme
                        </h3>
                        {formData.date && (
                          <p className="text-gray-600 dark:text-gray-400">
                            Datum: <span className="font-semibold text-gold">{new Date(formData.date + 'T00:00').toLocaleDateString('sr-RS', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                          </p>
                        )}
                      </div>
                      <div className="max-w-md mx-auto">
                        <Clock className="w-12 h-12 text-gold mx-auto mb-6" />
                        <div className="grid grid-cols-3 gap-3">
                          {timeSlots.map((time) => (
                            <motion.button
                              key={time}
                              type="button"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => setFormData({ ...formData, time })}
                              className={`py-3 px-4 rounded-xl font-medium transition-all duration-300 ${
                                formData.time === time
                                  ? 'bg-gold text-white shadow-lg'
                                  : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                              }`}
                            >
                              {time}
                            </motion.button>
                          ))}
                        </div>
                      </div>
                      {errors.time && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-500 text-sm text-center"
                        >
                          {errors.time}
                        </motion.p>
                      )}
                    </div>
                  )}

                  {step === 4 && (
                    <div className="space-y-6">
                      <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-6 text-center">
                        Tvoji kontakt podaci
                      </h3>
                      <div className="space-y-4 max-w-md mx-auto">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            <User className="w-4 h-4 inline mr-2" />
                            Ime i prezime
                          </label>
                          <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                            placeholder="Vaše ime"
                          />
                          {errors.name && (
                            <motion.p
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="text-red-500 text-sm mt-1"
                            >
                              {errors.name}
                            </motion.p>
                          )}
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            <Phone className="w-4 h-4 inline mr-2" />
                            Telefon
                          </label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                            placeholder="+387XXXXXX"
                          />
                          {errors.phone && (
                            <motion.p
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="text-red-500 text-sm mt-1"
                            >
                              {errors.phone}
                            </motion.p>
                          )}
                        </div>

                        <div className="bg-gradient-to-br from-rose-light to-gold-light/30 dark:from-gray-700 dark:to-gray-600 p-6 rounded-2xl mt-6">
                          <h4 className="font-bold text-gray-900 dark:text-white mb-3">Rezime rezervacije:</h4>
                          <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                            <p><strong>Usluga:</strong> {selectedService?.name}</p>
                            <p><strong>Datum:</strong> {formData.date && new Date(formData.date + 'T00:00').toLocaleDateString('sr-RS', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                            <p><strong>Vrijeme:</strong> {formData.time}h</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              <div className="flex justify-between mt-8 pt-6 border-t dark:border-gray-700">
                {step > 1 ? (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="button"
                    onClick={handlePrev}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 transition-all"
                  >
                    <ChevronLeft className="w-5 h-5" />
                    Nazad
                  </motion.button>
                ) : (
                  <div></div>
                )}

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  onClick={handleNext}
                  className="flex items-center gap-2 px-8 py-3 rounded-xl bg-gold text-white hover:bg-gold/90 transition-all shadow-lg ml-auto"
                >
                  {step === totalSteps ? 'Pošalji rezervaciju' : 'Dalje'}
                  {step < totalSteps && <ChevronRight className="w-5 h-5" />}
                </motion.button>
              </div>
            </>
          ) : (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center py-16"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-24 h-24 bg-gradient-to-br from-rose-powder to-gold-light rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <Check className="w-12 h-12 text-white" />
              </motion.div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-4"
              >
                Rezervacija poslata!
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-gray-600 dark:text-gray-400 text-lg"
              >
                Kontaktirat ćemo vas uskoro kako bismo potvrdili vaš termin.
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-8"
              >
                <Sparkles className="w-8 h-8 text-gold mx-auto animate-pulse" />
              </motion.div>
            </motion.div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4">Ili nas kontaktirajte direktno:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/387XXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-6 py-3 rounded-full font-medium hover:bg-green-600 transition-all duration-300 shadow-lg"
            >
              WhatsApp
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg"
            >
              Instagram DM
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
