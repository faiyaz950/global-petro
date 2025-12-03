'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';

const CORE_SERVICES = [
  {
    title: 'Engineering Solutions',
    description:
      'Comprehensive engineering services for complex industrial projects',
    imageId: 'service-engineering',
  },
  {
    title: 'Power Systems',
    description: 'Advanced power generation and distribution solutions',
    imageId: 'service-power',
  },
  {
    title: 'Infrastructure Development',
    description: 'Building robust infrastructure for modern industries',
    imageId: 'service-infrastructure',
  },
  {
    title: 'Construction Services',
    description: 'Expert construction management and execution',
    imageId: 'service-construction',
  },
  {
    title: 'Maintenance & Support',
    description: 'Reliable maintenance services for optimal performance',
    imageId: 'service-maintenance',
  },
  {
    title: 'Industrial Automation',
    description: 'Smart automation solutions for enhanced efficiency',
    imageId: 'service-automation',
  },
];

export default function ServicesSection() {
  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600&display=swap');

        @keyframes gradient-shift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-shift 8s ease infinite;
        }
      `}</style>

      <section
        id="services"
        className="relative bg-white py-24 px-4 overflow-hidden"
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white shadow-lg shadow-[#932445]/10 border border-[#932445]/20 mb-6">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#932445] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#932445]"></span>
              </div>
              <span className="text-[#932445] font-semibold text-xs tracking-wider">
                OUR EXPERTISE
              </span>
            </div>
            <h2
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Core{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#932445] via-[#d63865] to-[#932445] animate-gradient">
                Services
              </span>
            </h2>

            <p
              className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              We provide comprehensive solutions tailored to meet the demands of
              oil & gas, power, energy, and infrastructure sectors with
              unparalleled excellence
            </p>
          </div>

          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {CORE_SERVICES.map((service, index) => {
                const image = PlaceHolderImages.find(
                  (img) => img.id === service.imageId
                );
                return (
                  <CarouselItem
                    key={index}
                    className="pl-4 md:basis-1/2 lg:basis-1/4"
                  >
                    <div className="p-1">
                      <Card className="group relative h-[440px] overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:shadow-[#932445]/20">
                        {image && (
                          <Image
                            src={image.imageUrl}
                            alt={service.title}
                            data-ai-hint={image.imageHint}
                            fill
                            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-all duration-300 group-hover:from-black/90"></div>
                        <CardContent className="relative h-full flex flex-col justify-end p-6 text-white">
                          <h3
                            className="text-2xl font-bold mb-2 transition-transform duration-300 group-hover:-translate-y-2"
                            style={{ fontFamily: 'Playfair Display, serif' }}
                          >
                            {service.title}
                          </h3>
                          <p className="text-sm opacity-80 mb-4 transition-transform duration-300 group-hover:-translate-y-2">
                            {service.description}
                          </p>
                          <button className="flex items-center gap-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                            Learn More <ArrowRight className="w-4 h-4" />
                          </button>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="absolute left-[-2rem] top-1/2 -translate-y-1/2" />
              <CarouselNext className="absolute right-[-2rem] top-1/2 -translate-y-1/2" />
            </div>
          </Carousel>
        </div>
      </section>
    </>
  );
}
