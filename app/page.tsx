"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Droplets, Leaf, Shield, Award, MapPin } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function HomePage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/leaf 1.jpg"
            alt="Bakanote Spring Water Source"
            fill
            className="object-cover"
            priority
          />
          {/* <div className="absolute inset-0 bg-black/30" /> */}
        </div>
        {/* <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            {t.hero.title}
            <br />
            <span className="text-cyan-400">{t.hero.subtitle}</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">{t.hero.description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 text-lg">
              {t.hero.exploreWater}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg bg-transparent"
            >
              {t.hero.ourStory}
            </Button>
          </div>
        </div> */}
      </section>

      {/* About the Source */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">{t.aboutSource.title}</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">{t.aboutSource.description1}</p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">{t.aboutSource.description2}</p>
              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-emerald-600" />
                <span className="text-gray-700 dark:text-gray-300">{t.aboutSource.location}</span>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/leaf 1.jpg"
                alt="Bakanote Spring Location"
                width={800}
                height={600}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <Droplets className="h-8 w-8 text-cyan-500" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Natural Spring</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Est. 1000+ years</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Highlights */}
      <section className="py-20 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t.products.title}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{t.products.description}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(t.products.sizes).map(([size, details], index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <CardContent className="p-6">
                  <Image
                    src="/leaf 2.jpg"
                    alt={`${size} Leaf Water Bottle`}
                    width={150}
                    height={200}
                    className="mx-auto mb-4 object-center"
                  />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{size}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">{details.use}</p>
                  <p className="text-lg font-semibold text-emerald-600 dark:text-emerald-400">{details.price}</p>
                  <div className="mt-4 space-y-2">
                    <Badge
                      variant="secondary"
                      className="bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200"
                    >
                      {t.products.features.mineralRich}
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200"
                    >
                      {t.products.features.bottledAtSource}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Leaf Water */}
      <section className="py-20 bg-emerald-50 dark:bg-emerald-900/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t.whyChoose.title}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">{t.whyChoose.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-cyan-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Droplets className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {t.whyChoose.naturallyFiltered.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">{t.whyChoose.naturallyFiltered.description}</p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {t.whyChoose.untouchedByPollution.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">{t.whyChoose.untouchedByPollution.description}</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {t.whyChoose.certifiedForSafety.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">{t.whyChoose.certifiedForSafety.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Partnerships */}
      <section className="py-20 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t.trust.title}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">{t.trust.description}</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            <div className="flex items-center space-x-2">
              <Award className="h-8 w-8 text-emerald-600" />
              <span className="text-lg font-semibold text-gray-900 dark:text-white">Bureau Veritas</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-blue-600" />
              <span className="text-lg font-semibold text-gray-900 dark:text-white">ISO 22000</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="h-8 w-8 text-green-600" />
              <span className="text-lg font-semibold text-gray-900 dark:text-white">Ethiopian Health Authority</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-cyan-600" />
              <span className="text-lg font-semibold text-gray-900 dark:text-white">HACCP Certified</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500 to-emerald-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">{t.cta.title}</h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">{t.cta.description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 text-lg">
              {t.cta.findStore}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 text-lg bg-transparent"
            >
              {t.cta.contactUs}
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
