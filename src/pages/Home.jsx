import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      title: 'Organic Vegetables',
      description: 'Fresh organic vegetables from local farms',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      title: 'Seasonal Fruits',
      description: 'Fresh seasonal fruits from local orchards',
      image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      title: 'Fresh Salads',
      description: 'Daily prepared fresh salads',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'John Smith',
      text: 'The best quality vegetables and fruits, always fresh',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=80&q=80',
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      text: 'Excellent service and always fresh products',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=80&q=80',
    },
    {
      id: 3,
      name: 'Michael Brown',
      text: 'The best place to buy fresh vegetables and fruits',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=80&q=80',
    },
  ];

  const sliderImages = [
    {
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      title: 'Fresh Vegetables & Fruits',
      description: 'Premium quality fresh produce from local farms'
    },
    {
      image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      title: 'Organic & Natural',
      description: '100% organic certified products'
    },
    {
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      title: 'Fresh Daily',
      description: 'Delivered fresh to your doorstep'
    },
  ];

  // Certifications data
  const certifications = [
    {
      id: 1,
      title: 'ISO 22000',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=200&q=80',
      description: 'Food Safety Management System',
    },
    {
      id: 2,
      title: 'Organic Certified',
      image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=200&q=80',
      description: 'Certified Organic Produce',
    },
    {
      id: 3,
      title: 'HACCP',
      image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=200&q=80',
      description: 'Hazard Analysis & Critical Control Points',
    },
    {
      id: 4,
      title: 'GlobalG.A.P.',
      image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=200&q=80',
      description: 'Good Agricultural Practices',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Slider */}
      <section className="relative h-screen">
        <Swiper
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          effect="fade"
          className="h-full"
        >
          {sliderImages.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-screen">
                <img
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 to-green-800/50" />
                <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4">
                  <div className="max-w-4xl">
                    <h1 className="text-5xl text-white md:text-7xl font-serif mb-6 animate-fade-in">
                      {slide.title}
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fade-in-delay">
                      {slide.description}
                    </p>
                    <Link
                      to="/products"
                      className="btn btn-primary animate-fade-in-delay-2"
                    >
                      Browse Products
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Featured Products Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <h2 className="section-title">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="card group hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif mb-2">{product.title}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <Link
                    to="/products"
                    className="text-green-600 font-medium hover:text-green-700 transition-colors duration-200 inline-flex items-center"
                  >
                    Learn More 
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="section-title">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors duration-300">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-serif mb-2">Organic Products</h3>
              <p className="text-gray-600">100% organic certified products</p>
            </div>
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors duration-300">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Quick delivery to all areas</p>
            </div>
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors duration-300">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif mb-2">Premium Quality</h3>
              <p className="text-gray-600">Highest quality standards guaranteed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section with Slider */}
      <section className="section bg-gray-50">
        <div className="container">
          <h2 className="section-title">Customer Reviews</h2>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="py-8"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="card p-6 bg-white hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-green-100"
                    />
                    <div className="ml-4">
                      <h4 className="text-lg font-medium">{testimonial.name}</h4>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.text}"</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Small Testimonials Slider Section */}
      <section className="section pt-8 pb-8 bg-white">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-serif mb-6 text-center text-[#17936d]">What Our Customers Say</h2>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500 }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="py-4"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-[#e6f4ef] rounded-xl p-6 shadow flex flex-col items-center text-center mx-2">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover mb-3 border-4 border-white shadow"
                  />
                  <p className="text-gray-700 italic mb-2">"{testimonial.text}"</p>
                  <span className="text-[#17936d] font-semibold text-sm">{testimonial.name}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Certifications Slider Section */}
      <section className="section pt-8 pb-8 bg-white">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-serif mb-6 text-center text-[#17936d]">Certifications</h2>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500 }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            className="py-4"
          >
            {certifications.map((cert) => (
              <SwiperSlide key={cert.id}>
                <div className="bg-white rounded-xl p-6 shadow flex flex-col items-center text-center mx-2 border border-[#e6f4ef]">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-20 h-20 rounded-full object-cover mb-3 border-4 border-[#17936d] shadow"
                  />
                  <h3 className="text-lg font-bold text-[#17936d] mb-1">{cert.title}</h3>
                  <p className="text-gray-500 text-sm">{cert.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Newsletter Section */}
      {/* <section className="section bg-gradient-to-r from-green-600 to-green-700">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Subscribe to Our Newsletter</h2>
          <p className="text-white mb-8">Get the latest offers and updates</p>
          <form className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Email Address"
                className="input flex-grow"
              />
              <button
                type="submit"
                className="btn btn-secondary whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </section> */}
    </div>
  );
};

export default Home; 