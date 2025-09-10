'use client';

import { motion } from 'framer-motion';
import { CalendarDaysIcon, SparklesIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { Button } from '@/components/ui/Button';
import { Header } from '@/components/ui/Header';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-warm">
      <Header />
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-100/30 to-primary-300/30"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-serif text-4xl md:text-6xl lg:text-7xl text-secondary-900 mb-6"
            >
              <span className="text-gradient-gold">Transform</span> Your Beauty
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-secondary-700 mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              Experience professional cosmetology services tailored to enhance your natural beauty with luxury and elegance
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <a href="#contact">
                <Button className="text-xl px-12 py-4">
                  Book Appointment
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary-200 rounded-full opacity-50 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-primary-300 rounded-full opacity-60 animate-pulse delay-1000"></div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-secondary-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-secondary-900 mb-4">
              Our <span className="text-gradient-gold">Premium</span> Services
            </h2>
            <div className="w-24 h-1 bg-gradient-gold mx-auto mb-6"></div>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Discover our range of luxurious treatments designed to enhance your natural beauty
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group bg-white rounded-2xl overflow-hidden shadow-warm hover:shadow-warm-xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <div className="w-full h-full">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-white to-primary-50/30">
                  <h3 className="font-serif text-xl text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-secondary-700 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button after Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-16"
          >
            <p className="text-lg text-secondary-600 mb-6 max-w-2xl mx-auto">
              Ready to experience our premium services? Book your appointment today and begin your beauty transformation.
            </p>
            <a href="#contact">
              <Button className="text-lg px-10 py-4">
                Book Appointment
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-primary-100 to-primary-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-secondary-900 mb-4">
                About <span className="text-gradient-gold">Serenity</span> Aesthetics
              </h2>
              <div className="w-24 h-1 bg-gradient-gold mx-auto mb-6"></div>
              <p className="text-lg text-secondary-700 max-w-3xl mx-auto leading-relaxed">
                With over a decade of experience in professional cosmetology, we are dedicated to helping you achieve your beauty goals through personalized treatments and cutting-edge techniques.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-center group"
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-gold rounded-full flex items-center justify-center shadow-warm group-hover:shadow-warm-lg transition-all duration-300 group-hover:scale-110">
                  <SparklesIcon className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-serif text-xl text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors">Expert Care</h3>
                <p className="text-secondary-700 leading-relaxed">
                  Our certified Medical Aesthetician bring years of experience and continuous education to every treatment.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center group"
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-gold rounded-full flex items-center justify-center shadow-warm group-hover:shadow-warm-lg transition-all duration-300 group-hover:scale-110">
                  <UserGroupIcon className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-serif text-xl text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors">Personalized Approach</h3>
                <p className="text-secondary-700 leading-relaxed">
                  Every treatment is customized to your unique skin type and beauty goals for optimal results.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-center group"
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-gold rounded-full flex items-center justify-center shadow-warm group-hover:shadow-warm-lg transition-all duration-300 group-hover:scale-110">
                  <CalendarDaysIcon className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-serif text-xl text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors">Convenient Scheduling</h3>
                <p className="text-secondary-700 leading-relaxed">
                  Flexible appointment times and online booking to fit your busy lifestyle.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-secondary-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-secondary-900 mb-4">
                Get in <span className="text-gradient-gold">Touch</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-gold mx-auto mb-6"></div>
              <p className="text-lg text-secondary-700 max-w-2xl mx-auto leading-relaxed">
                Ready to start your beauty journey? Contact us today to schedule your consultation or learn more about our services.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="space-y-8"
              >
                <div className="bg-white rounded-2xl p-6 shadow-warm hover:shadow-warm-lg transition-all duration-300">
                  <h3 className="font-serif text-xl text-secondary-900 mb-4 text-gradient-gold">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-gold rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">📞</span>
                      </div>
                      <p className="text-secondary-700">
                        <span className="font-medium">Phone:</span>
                        <a
                          href="https://wa.me/14372341523"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-600 hover:text-primary-700 transition-colors duration-200 ml-1 underline"
                        >
                          (437) 234-1523
                        </a>
                      </p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-gold rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">✉️</span>
                      </div>
                      <p className="text-secondary-700">
                        <span className="font-medium">Email:</span> info@serenityaesthetics.pro
                      </p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-gold rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">📍</span>
                      </div>
                      <p className="text-secondary-700">
                        <span className="font-medium">Address:</span>
                        <a
                          href="https://maps.google.com/?q=Vaughan,+ON"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-600 hover:text-primary-700 transition-colors duration-200 ml-1 underline"
                        >
                          Vaughan, ON
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-warm hover:shadow-warm-lg transition-all duration-300">
                  <h3 className="font-serif text-xl text-secondary-900 mb-4 text-gradient-gold">Business Hours</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-primary-100">
                      <span className="text-secondary-700 font-medium">Monday - Friday</span>
                      <span className="text-secondary-600">9:00 AM - 7:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-primary-100">
                      <span className="text-secondary-700 font-medium">Saturday</span>
                      <span className="text-secondary-600">9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-secondary-700 font-medium">Sunday</span>
                      <span className="text-secondary-600">Closed</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-white rounded-2xl p-8 shadow-warm hover:shadow-warm-lg transition-all duration-300"
              >
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 hover:border-primary-300"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 hover:border-primary-300"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 hover:border-primary-300"
                      placeholder="14372341523"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 hover:border-primary-300 resize-none"
                      placeholder="Tell us about your beauty goals and how we can help..."
                    ></textarea>
                  </div>

                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const services = [
  {
    title: 'Facial Treatments',
    description: 'Experience our signature facial treatments designed to rejuvenate and revitalize your skin. Using premium products and advanced techniques for optimal results.',
    image: '/assets/services/pic10.jpg',
  },
  {
    title: 'Anti-Aging Solutions',
    description: 'Turn back time with our specialized anti-aging treatments. Targeting fine lines and wrinkles while promoting collagen production for youthful skin.',
    image: '/assets/services/pic11.jpg',
  },
  {
    title: 'Face Massage',
    description: 'A refined lymphatic facial massage that decongests, restores glow, and leaves the skin visibly refreshed and sculpted',
    image: '/assets/services/pic12.jpg',
  },
  {
    title: 'Chemical Peels',
    description: 'Reveal fresh, glowing skin with our professional chemical peels. Perfect for treating acne, sun damage, and uneven skin tone.',
    image: '/assets/services/pic13.jpg',
  },
  {
    title: 'SMAS Lifting (HIFU)',
    description: 'An advanced HIFU treatment working beneath the surface, redefining facial contours, smoothing fine lines, and unveiling youthful firmness.',
    image: '/assets/services/pic14.jpg',
  },
  {
    title: 'LED Light Therapy',
    description: 'State-of-the-art LED treatment to promote skin healing and rejuvenation. Different light wavelengths target various skin concerns.',
    image: '/assets/services/pic15.jpg',
  },
  {
    title: 'Body Sculpt & Wraps',
    description: 'A state-of-the-art silhouette ritual: cutting-edge massage, vacuum contouring, RF lifting, and cavitation merge to refine curves and reduce centimeters.',
    image: '/assets/services/pic15.jpg',
  },
  {
    title: 'Waxing',
    description: 'Impeccably smooth skin in record time — from silky legs to the fastest flawless bikini in just 15 minutes.',
    image: '/assets/services/pic15.jpg',
  },
  {
    title: 'Exosome Therapy',
    description: 'A breakthrough in biotechnology — often called the “youth elixir.” Exosomes rejuvenate from within, revitalizing skin texture and defying visible aging.',
    image: '/assets/services/pic15.jpg',
  },
  {
    title: 'Glow & Warm Therapy',
    description: 'A cocooning facial wrap with therapeutic warmth — hydrating, soothing, and easing seasonal discomfort. The ultimate indulgence for colder days.',
    image: '/assets/services/pic15.jpg',
  },
  {
    title: 'RF-Lifting',
    description: 'Radiowave energy awakens collagen renewal, lifting and firming the skin. Experience a sculpted, youthful complexion without downtime.',
    image: '/assets/services/pic15.jpg',
  },
  {
    title: 'Microcurrent Therapy',
    description: 'Subtle currents activate cellular vitality and muscle tone, smoothing fine lines while imparting a refreshed, radiant allure.',
    image: '/assets/services/pic15.jpg',
  },


];
