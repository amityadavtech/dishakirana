'use client';

import { Navbar } from '@/components/navbar';
import { FeaturedProducts } from '@/components/featured-products';
import { BusinessInfo } from '@/components/business-info';
import { FloatingWhatsApp } from '@/components/floating-whatsapp';
import { ScrollReveal } from '@/components/scroll-reveal';
import { Truck, CreditCard, Star, CheckCircle, Phone, MapPin, MessageCircle, Sparkles, Timer, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

// Featured 10 products with auto-scroll
const featuredProducts = [
  { id: 1, name: 'Shampoo', image: '/images/category-essentials.jpg', category: 'Household' },
  { id: 2, name: 'Soap', image: '/images/category-essentials.jpg', category: 'Household' },
  { id: 3, name: 'Moong Dal', image: '/images/category-dal.jpg', category: 'Pulses' },
  { id: 4, name: 'Snacks', image: '/images/category-snacks.jpg', category: 'Snacks' },
  { id: 5, name: 'Basmati Rice', image: '/images/category-rice.jpg', category: 'Grains' },
  { id: 6, name: 'Toor Dal', image: '/images/category-dal.jpg', category: 'Pulses' },
  { id: 7, name: 'Turmeric Powder', image: '/images/category-spices.jpg', category: 'Spices' },
  { id: 8, name: 'Fresh Milk 1L', image: '/images/category-dairy.jpg', category: 'Dairy' },
  { id: 9, name: 'Green Tea Bags', image: '/images/category-beverages.jpg', category: 'Beverages' },
  { id: 10, name: 'Dry Fruits Mix', image: '/images/category-snacks.jpg', category: 'Snacks' },
];

// Product categories with products
const productCategories = [
  // {
  //   title: 'Fresh Vegetables',
  //   id: 'vegetables',
  //   products: [
  //     { id: 1, name: 'Fresh Tomatoes', image: '/images/category-vegetables.jpg', price: 'Rs. 40/kg' },
  //     { id: 2, name: 'Organic Onions', image: '/images/category-vegetables.jpg', price: 'Rs. 30/kg' },
  //     { id: 3, name: 'Green Carrots', image: '/images/category-vegetables.jpg', price: 'Rs. 50/kg' },
  //     { id: 4, name: 'Potatoes Premium', image: '/images/category-vegetables.jpg', price: 'Rs. 25/kg' },
  //     { id: 5, name: 'Bell Peppers Mix', image: '/images/category-vegetables.jpg', price: 'Rs. 60/kg' },
  //     { id: 6, name: 'Broccoli Fresh', image: '/images/category-vegetables.jpg', price: 'Rs. 80/kg' },
  //   ],
  // },
  // {
  //   title: 'Fresh Fruits',
  //   id: 'fruits',
  //   products: [
  //     { id: 7, name: 'Bananas Yellow', image: '/images/category-fruits.jpg', price: 'Rs. 35/kg' },
  //     { id: 8, name: 'Sweet Oranges', image: '/images/category-fruits.jpg', price: 'Rs. 60/kg' },
  //     { id: 9, name: 'Red Apples', image: '/images/category-fruits.jpg', price: 'Rs. 100/kg' },
  //     { id: 10, name: 'Sweet Mangoes', image: '/images/category-fruits.jpg', price: 'Rs. 80/kg' },
  //     { id: 11, name: 'Fresh Guavas', image: '/images/category-fruits.jpg', price: 'Rs. 50/kg' },
  //     { id: 12, name: 'Papaya Ripe', image: '/images/category-fruits.jpg', price: 'Rs. 40/kg' },
  //   ],
  // },
  {
    title: 'Grains & Pulses',
    id: 'grains',
    products: [
      { id: 13, name: 'Atta Whole Wheat', image: '/images/category-atta.jpg', price: 'Rs. 35/kg' },
      { id: 14, name: 'Basmati Rice', image: '/images/category-rice.jpg', price: 'Rs. 80/kg' },
      { id: 15, name: 'Toor Dal', image: '/images/category-dal.jpg', price: 'Rs. 120/kg' },
      { id: 16, name: 'Moong Dal Green', image: '/images/category-dal.jpg', price: 'Rs. 100/kg' },
      { id: 17, name: 'Masoor Dal Red', image: '/images/category-dal.jpg', price: 'Rs. 90/kg' },
      { id: 18, name: 'Chickpea White', image: '/images/category-dal.jpg', price: 'Rs. 110/kg' },
    ],
  },
  {
    title: 'Oils & Spices',
    id: 'oils-spices',
    products: [
      { id: 19, name: 'Cooking Oil 1L', image: '/images/category-oils.jpg', price: 'Rs. 150/L' },
      { id: 20, name: 'Mustard Oil', image: '/images/category-oils.jpg', price: 'Rs. 140/L' },
      { id: 21, name: 'Turmeric Powder', image: '/images/category-spices.jpg', price: 'Rs. 200/kg' },
      { id: 22, name: 'Red Chili Powder', image: '/images/category-spices.jpg', price: 'Rs. 180/kg' },
      { id: 23, name: 'Coriander Powder', image: '/images/category-spices.jpg', price: 'Rs. 160/kg' },
      { id: 24, name: 'Cumin Seeds', image: '/images/category-spices.jpg', price: 'Rs. 220/kg' },
    ],
  },
  {
    title: 'Dairy Products',
    id: 'dairy',
    products: [
      { id: 25, name: 'Fresh Milk 1L', image: '/images/category-dairy.jpg', price: 'Rs. 55/L' },
      { id: 26, name: 'Yogurt 500ml', image: '/images/category-dairy.jpg', price: 'Rs. 30' },
      { id: 27, name: 'Paneer 500g', image: '/images/category-dairy.jpg', price: 'Rs. 280' },
      { id: 28, name: 'Butter 200g', image: '/images/category-dairy.jpg', price: 'Rs. 120' },
      { id: 29, name: 'Cheese Block', image: '/images/category-dairy.jpg', price: 'Rs. 200' },
      { id: 30, name: 'Ghee 500ml', image: '/images/category-dairy.jpg', price: 'Rs. 450' },
    ],
  },
  {
    title: 'Bakery & Bread',
    id: 'bakery',
    products: [
      { id: 31, name: 'Whole Wheat Bread', image: '/images/category-bakery.jpg', price: 'Rs. 35' },
      { id: 32, name: 'Brown Bread', image: '/images/category-bakery.jpg', price: 'Rs. 40' },
      { id: 33, name: 'Croissants Pack', image: '/images/category-bakery.jpg', price: 'Rs. 80' },
      { id: 34, name: 'Butter Buns', image: '/images/category-bakery.jpg', price: 'Rs. 60' },
      { id: 35, name: 'Cake Fresh', image: '/images/category-bakery.jpg', price: 'Rs. 150' },
      { id: 36, name: 'Cookies Box', image: '/images/category-bakery.jpg', price: 'Rs. 100' },
    ],
  },
  {
    title: 'Beverages & Drinks',
    id: 'beverages',
    products: [
      { id: 37, name: 'Green Tea Bags', image: '/images/category-beverages.jpg', price: 'Rs. 120' },
      { id: 38, name: 'Black Tea Premium', image: '/images/category-beverages.jpg', price: 'Rs. 180' },
      { id: 39, name: 'Coffee Powder', image: '/images/category-beverages.jpg', price: 'Rs. 250' },
      { id: 40, name: 'Orange Juice 1L', image: '/images/category-beverages.jpg', price: 'Rs. 90' },
      { id: 41, name: 'Apple Juice 1L', image: '/images/category-beverages.jpg', price: 'Rs. 85' },
      { id: 42, name: 'Packaged Water 1L', image: '/images/category-beverages.jpg', price: 'Rs. 20' },
    ],
  },
  {
    title: 'Snacks & Essentials',
    id: 'snacks',
    products: [
      { id: 43, name: 'Potato Chips Pack', image: '/images/category-snacks.jpg', price: 'Rs. 30' },
      { id: 44, name: 'Biscuits Pack', image: '/images/category-snacks.jpg', price: 'Rs. 25' },
      { id: 45, name: 'Namkeen Mix', image: '/images/category-snacks.jpg', price: 'Rs. 50' },
      { id: 46, name: 'Peanuts 500g', image: '/images/category-snacks.jpg', price: 'Rs. 80' },
      { id: 47, name: 'Chocolates Assorted', image: '/images/category-snacks.jpg', price: 'Rs. 100' },
      { id: 48, name: 'Dry Fruits Mix', image: '/images/category-snacks.jpg', price: 'Rs. 300' },
    ],
  },
];

export default function Home() {
  const heroTickerImages = [
    '/images/hero-produce.jpg',
    '/images/category-dal.jpg',
    '/images/category-snacks.jpg',
    '/images/category-dairy.jpg',
    '/images/category-spices.jpg',
    '/images/category-essentials.jpg',
    '/images/category-bakery.jpg',
    '/images/category-beverages.jpg',
  ];

  return (
    <main className="bg-gradient-to-b from-[#f7f6f1] via-white to-emerald-50/40 min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 md:pt-14">
        {/* Scrolling Kirana Images Background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/60 to-white/20" />
          <div className="absolute inset-0 overflow-hidden opacity-25">
            <div className="hero-ticker">
              {heroTickerImages.concat(heroTickerImages).map((src, index) => (
                <div
                  key={`hero-ticker-${index}`}
                  className="relative w-48 h-32 md:w-64 md:h-40 rounded-2xl overflow-hidden shadow-lg"
                >
                  <Image
                    src={src}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute inset-0">
          <div className="absolute -top-24 -left-32 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.35),transparent_60%)] blur-3xl animate-aurora" />
          <div className="absolute top-32 -right-24 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.25),transparent_60%)] blur-3xl animate-aurora" />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(16,185,129,0.08),rgba(255,255,255,0)_40%,rgba(16,185,129,0.06)_80%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(180deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:36px_36px] opacity-40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
            <ScrollReveal animation="slide-in-up">
              <div>
                <div className="inline-flex flex-col items-start gap-1 rounded-2xl bg-white/90 px-8 py-4 text-lg font-semibold text-emerald-700 shadow-lg border border-emerald-100">
                  <div className="flex items-center gap-3">
                    <Sparkles size={22} />
                    <span className='sm:text-4xl font-bold'>Disha Kirana Home Delivery</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Sparkles size={22} />
                    <span className="sm:text-4xl font-bold text-emerald-600">
                      Disha Kirana Credit Card
                    </span>
                  </div>
                </div>

                <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.05]">
                  Your neighborhood kirana,
                  <span className="block bg-gradient-to-r from-emerald-600 via-green-600 to-lime-600 bg-clip-text text-transparent">
                    upgraded to wow.
                  </span>
                </h1>
                <p className="mt-5 text-lg text-muted-foreground max-w-xl">
                  Handpicked produce, pantry favorites, and daily essentials - delivered fast, packed with care, and priced for everyday living.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href="https://wa.me/919569171126"
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 text-white font-semibold shadow-lg hover:shadow-emerald-200/60 hover:scale-105 transition-smooth"
                  >
                    Order on WhatsApp
                  </a>
                  <a
                    href="tel:+919876543210"
                    className="px-6 py-3 rounded-xl border border-emerald-200 bg-white text-foreground font-semibold hover:border-emerald-400 hover:shadow-md transition-smooth"
                  >
                    Call for Delivery
                  </a>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    {/* <Timer size={16} className="text-emerald-600" />
                    30-min delivery in your area */}
                  </div>
                </div>

                <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {[
                    { label: 'Daily Essentials', value: '1000+ items' },
                    { label: 'Freshness Score', value: '98%' },
                    // { label: 'Community Love', value: '5000+ homes' },
                  ].map((stat, index) => (
                    <div key={stat.label} className="stagger-item rounded-2xl bg-white/80 border border-emerald-100 p-4 shadow-sm">
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                      <p className="text-lg font-semibold text-foreground">{stat.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-in-scale" delay={150}>
              <div className="relative">
                <div className="absolute -top-10 -right-6 h-40 w-40 rounded-full bg-emerald-200/40 blur-2xl" />
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="relative h-48 md:h-56 rounded-2xl overflow-hidden shadow-xl">
                      <Image src="/images/hero-produce.jpg" alt="Fresh produce" fill className="object-cover" priority />
                    </div>
                    <div className="relative h-40 md:h-44 rounded-2xl overflow-hidden shadow-xl">
                      <Image src="/images/category-dairy.jpg" alt="Daily dairy" fill className="object-cover" />
                    </div>
                  </div>
                  <div className="space-y-4 mt-6">
                    <div className="relative h-40 md:h-44 rounded-2xl overflow-hidden shadow-xl">
                      <Image src="/images/category-spices.jpg" alt="Spices" fill className="object-cover" />
                    </div>
                    <div className="relative h-52 md:h-60 rounded-2xl overflow-hidden shadow-xl">
                      <Image src="/images/category-essentials.jpg" alt="Essentials" fill className="object-cover" />
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-6 left-6 right-6 rounded-2xl bg-white/90 border border-emerald-100 p-4 shadow-lg backdrop-blur">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
                        <ShieldCheck size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Quality Promise</p>
                        <p className="text-base font-semibold text-foreground mb-1">Fresh, clean, and verified daily</p>
                      </div>
                    </div>
                    {/* <span className="text-sm font-semibold text-emerald-700">Since 2018</span> */}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <style jsx>{`
          .hero-ticker {
            display: flex;
            align-items: center;
            gap: 16px;
            width: max-content;
            animation: hero-scroll 45s linear infinite;
            will-change: transform;
          }
          @keyframes hero-scroll {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </section>

      {/* Category Showcase */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="slide-in-up">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-emerald-600 font-semibold">Shop the Aisles</p>
                <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">Signature categories curated for Disha Kirana</h2>
              </div>
              <p className="text-muted-foreground max-w-lg">
                From rice to pantry staples, explore the shelves that keep your kitchen running.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {productCategories.slice(0, 6).map((category, index) => (
              <ScrollReveal key={category.id} animation="fade-in-scale" delay={index * 90}>
                <div className={`group relative overflow-hidden rounded-3xl border border-emerald-100 bg-white shadow-sm hover:shadow-2xl transition-smooth ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}>
                  <div className="absolute inset-0">
                    <Image
                      src={category.products[0].image}
                      alt={category.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                  </div>
                  <div className="relative z-10 p-6 flex flex-col justify-end h-full min-h-[220px]">
                    <p className="text-xs uppercase tracking-[0.25em] text-emerald-200">{category.id}</p>
                    <h3 className="text-2xl md:text-3xl font-semibold text-white mt-2">{category.title}</h3>
                    <p className="text-white/80 mt-2">{category.products.length}+ bestsellers curated today</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Auto-Scroll Section */}
      <section id="products" className="py-16 md:py-24 bg-gradient-to-br from-white via-emerald-50/40 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-in-scale">
            <div className="text-center mb-12">
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-600 font-semibold">Top Picks</p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-display">
                Today&apos;s bestsellers at Disha Kirana
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Auto-scrolling selection of our freshest groceries and pantry heroes.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="slide-in-up" delay={120}>
            <FeaturedProducts products={featuredProducts} />
          </ScrollReveal>
        </div>
      </section>

      {/* Delivery Section */}
      <section id="delivery" className="py-16 md:py-24 bg-gradient-to-r from-emerald-50 to-lime-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <ScrollReveal animation="slide-in-left">
              <div>
                <div className="relative h-80 md:h-96 rounded-3xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/delivery-service.jpg"
                    alt="Delivery Service"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-in-scale" delay={150}>
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-emerald-600 font-semibold">Fast Delivery</p>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-display">
                  Fast & Reliable Delivery
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We deliver your groceries within minutes to your doorstep. Our delivery partners are trained to handle every order with care.
                </p>

                <div className="space-y-4">
                  {[
                    'Quick Delivery ',
                    'Trained & Professional Delivery Staff',
                    'Safe Packaging & Handling',
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3 stagger-item">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                        <CheckCircle size={18} className="text-primary-foreground" />
                      </div>
                      <span className="text-foreground font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className='mt-8'>
                  <a href="https://wa.me/919569171126" className='mt-8 px-8 py-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-smooth'>Schedule Delivery</a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Credit Facility Section */}
      <section id="credit" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-in-scale">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-600 to-lime-600 p-8 md:p-12 text-white">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

              <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-white/80 font-semibold">Shop Now, Pay Later</p>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
                    Credit Facility Available
                  </h2>
                  <p className="text-lg text-white/90 mb-8">
                    Shop now and pay later with our flexible credit facility. No hassle, no extra charges.
                  </p>

                  <div className="space-y-4 mb-2">
                    {[
                      { icon: CreditCard, text: 'Credit Limit up to Rs. 15,000' },
                      { icon: CheckCircle, text: 'Instant Approval' },
                      { icon: Truck, text: 'Flexible Payment Terms' },
                      { icon: Star, text: 'Secure & Trustworthy' },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3 stagger-item">
                        <div className="flex-shrink-0 w-6 h-6">
                          <item.icon size={24} />
                        </div>
                        <span className="font-medium">{item.text}</span>
                      </div>
                    ))}
                  </div>
                  <button className='className="mt-8 px-8 py-3 bg-white text-emerald-700 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-smooth'><a
                    href="https://wa.me/919569171126"
                  >Apply for Credit</a></button>

                  {/* <button className="mt-8 px-8 py-3 bg-white text-emerald-700 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-smooth">
                    Apply for Credit
                  </button> */}
                </div>

                <div className="relative h-80 md:h-96 hidden md:block">
                  <div className="absolute inset-0 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <CreditCard size={80} className="mb-4 mx-auto opacity-50" />
                      <p className="text-white/70 text-sm">Maximum Credit</p>
                      <p className="text-5xl font-bold">Rs. 15,000</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-16 md:py-24 bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-in-scale">
            <div className="text-center mb-12">
              <p className="text-sm uppercase tracking-[0.25em] text-emerald-600 font-semibold">Why Disha Kirana</p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-display">
                We&apos;re built for your everyday moments
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We&apos;re committed to providing the best shopping experience with quality products and excellent service.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Star,
                title: 'Premium Quality',
                description: 'We source only the freshest and highest quality products for our customers.',
              },
              {
                icon: Truck,
                title: 'Fast Delivery',
                description: 'Get your groceries delivered within minutes in your area.',
              },
              {
                icon: CreditCard,
                title: 'Flexible Payment',
                description: 'Easy credit facility and multiple payment options for your convenience.',
              },
              {
                icon: CheckCircle,
                title: 'Trusted Store',
                description: 'Serving the community for years with integrity and transparency.',
              },
              {
                icon: MapPin,
                title: 'Local Expertise',
                description: 'Understand local tastes and preferences to serve you better.',
              },
              {
                icon: Phone,
                title: 'Always On Call',
                description: 'Our friendly team is always ready to help via call or WhatsApp.',
              },
            ].map((item, index) => (
              <ScrollReveal key={index} animation="slide-in-up" delay={index * 80}>
                <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl hover-lift group">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-lime-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <item.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Business Info Section */}
      <BusinessInfo />

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-foreground to-foreground/90 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-in-scale">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">Get in Touch</h2>
              <p className="text-lg text-white/80">
                Have questions? We&apos;re here to help!
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <ScrollReveal animation="slide-in-up">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-smooth hover-lift">
                <Phone size={32} className="mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Call Us</h3>
                <a
                  href="tel:+919876543210"
                  className="text-lg font-semibold hover:text-emerald-300 transition-colors"
                >
                  +91 9569171126
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="slide-in-up" delay={100}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-smooth hover-lift">
                <MessageCircle size={32} className="mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
                <a
                  href="https://wa.me/919569171126"
                  className="text-lg font-semibold hover:text-emerald-300 transition-colors"
                >
                  Chat with Us
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="slide-in-up" delay={200}>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-emerald-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 max-w-md mx-auto text-center">

                <div className="flex items-center justify-center w-14 h-14 mx-auto mb-4 rounded-full bg-emerald-100 text-emerald-600">
                  <MapPin size={26} />
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  Location
                </h3>

                <p className="text-base font-medium text-white/90 leading-relaxed">
                  Disha Kirana<br />
                  Paharganj, Ghusiana<br />
                  Ayodhya (Faizabad), Uttar Pradesh
                </p>

              </div>
            </ScrollReveal>
          </div>

          <div className="mt-12 pt-8 border-t border-white/20 text-center text-white/70">
            <p className="mb-2">Copyright 2024 Disha Kirana - Your Trusted Neighborhood Store</p>
            <p>GST No. 09APUPM4488D1Z8 | All Rights Reserved</p>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </main>
  );
}
