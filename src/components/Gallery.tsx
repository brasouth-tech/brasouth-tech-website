import React, { useState, useEffect } from 'react'
import { Eye, ArrowRight, X } from 'phosphor-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface GalleryItem {
  id: number
  image: string
  title: string
  description: string
  category: string
}

const Gallery: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById('gallery')
    if (section) {
      observer.observe(section)
    }

    return () => {
      if (section) {
        observer.unobserve(section)
      }
    }
  }, [])

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      image: '/past-jobs/wall-prep-one.jpeg',
      title: 'Professional Wall Preparation',
      description: 'Complete wall preparation and surface treatment for optimal paint adhesion and finish quality.',
      category: 'Interior Painting'
    },
    {
      id: 2,
      image: '/past-jobs/wall-prep-two.jpeg',
      title: 'Detailed Surface Preparation',
      description: 'Meticulous attention to detail in preparing surfaces for professional painting results.',
      category: 'Interior Painting'
    },
    {
      id: 3,
      image: '/past-jobs/wall-prep-three.jpeg',
      title: 'Quality Wall Repair Work',
      description: 'Expert wall repair and preparation ensuring smooth, professional finish for painting projects.',
      category: 'Wall Repair'
    },
    {
      id: 4,
      image: '/past-jobs/wall-prep-four.jpeg',
      title: 'Comprehensive Wall Treatment',
      description: 'Thorough wall preparation including patching, sanding, and priming for lasting results.',
      category: 'Interior Painting'
    },
    {
      id: 5,
      image: '/past-jobs/wall-prep-five.jpeg',
      title: 'Professional Finish Work',
      description: 'High-quality finish work demonstrating attention to detail and professional standards.',
      category: 'Interior Painting'
    },
    {
      id: 6,
      image: '/past-jobs/wall-prep-six.jpeg',
      title: 'Expert Surface Preparation',
      description: 'Professional surface preparation techniques ensuring optimal paint application and longevity.',
      category: 'Interior Painting'
    }
  ]

  const openModal = (item: GalleryItem): void => {
    setSelectedImage(item)
    setIsModalOpen(true)
  }

  const closeModal = (): void => {
    setIsModalOpen(false)
    setSelectedImage(null)
  }

  const scrollToContact = (): void => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="gallery" className="section bg-white">
      <div className="container">
        <div className={`text-center mb-16 ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-neutral-900 mb-6">
            Our <span className="text-gradient-primary">Recent Work</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Take a look at some of our recent projects. From wall preparation to complete renovations, 
            we take pride in delivering quality results that exceed expectations.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {galleryItems.map((item, index) => (
            <Card
              key={item.id}
              className={`group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                isVisible ? 'fade-in visible' : 'fade-in'
              }`}
              style={{
                animationDelay: `${index * 150}ms`
              }}
              onClick={() => openModal(item)}
            >
              <CardContent className="p-0">
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={`${item.title} - ${item.description}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Eye className="w-8 h-8 mx-auto mb-2" weight="duotone" />
                      <p className="text-sm font-medium">View Details</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <Badge className="mb-3 bg-primary-100 text-primary-700 border-primary-200">
                    {item.category}
                  </Badge>
                  <h3 className="font-heading font-semibold text-lg text-neutral-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-neutral-50 rounded-2xl p-8 md:p-12">
          <h3 className="font-heading font-bold text-2xl md:text-3xl text-neutral-900 mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
            Let us bring the same level of quality and attention to detail to your home. 
            Contact us today for a free consultation and estimate.
          </p>
          <Button
            onClick={scrollToContact}
            size="lg"
            className="btn-primary inline-flex items-center space-x-2"
          >
            <span>Get Your Free Estimate</span>
            <ArrowRight className="w-5 h-5" weight="bold" />
          </Button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl">
            <Button
              onClick={closeModal}
              variant="outline"
              size="icon"
              className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white text-neutral-900"
            >
              <X className="w-5 h-5" weight="bold" />
            </Button>
            
            <div className="grid md:grid-cols-2 gap-0">
              <div className="aspect-square md:aspect-auto">
                <img 
                  src={selectedImage.image} 
                  alt={`${selectedImage.title} - ${selectedImage.description}`}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <Badge className="mb-4 bg-primary-100 text-primary-700 border-primary-200 w-fit">
                  {selectedImage.category}
                </Badge>
                <h3 className="font-heading font-bold text-2xl md:text-3xl text-neutral-900 mb-4">
                  {selectedImage.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed mb-8">
                  {selectedImage.description}
                </p>
                <Button
                  onClick={scrollToContact}
                  size="lg"
                  className="btn-primary inline-flex items-center space-x-2 w-fit"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="w-5 h-5" weight="bold" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery