"use client"

import Image from "next/image"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, Droplets, Leaf, Shield, Award } from "lucide-react"

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState(0)

  const products = [
    {
      size: "0.3L",
      name: "Leaf Water Mini",
      description: "Perfect for kids and on-the-go hydration",
      price: "15 ETB",
      image: "/leaf 2.jpg",
      features: ["BPA-Free bottle", "Child-friendly cap", "Perfect for lunch boxes", "Ideal for short trips"],
      specs: {
        volume: "330ml",
        height: "18cm",
        diameter: "5.5cm",
        weight: "15g (empty)",
      },
    },
    {
      size: "0.6L",
      name: "Leaf Water Personal",
      description: "Ideal for personal daily hydration needs",
      price: "25 ETB",
      image: "/leaf 2.jpg",
      features: ["Ergonomic design", "Easy-grip bottle", "Perfect for workouts", "Fits in car cup holders"],
      specs: {
        volume: "600ml",
        height: "22cm",
        diameter: "6.5cm",
        weight: "25g (empty)",
      },
    },
    {
      size: "1L",
      name: "Leaf Water Family",
      description: "Great for family meals and sharing",
      price: "35 ETB",
      image: "/leaf 2.jpg",
      features: ["Family-sized portion", "Resealable cap", "Perfect for dining", "Great value"],
      specs: {
        volume: "1000ml",
        height: "28cm",
        diameter: "7.5cm",
        weight: "35g (empty)",
      },
    },
    {
      size: "2L",
      name: "Leaf Water Jumbo",
      description: "Perfect for events, offices, and large gatherings",
      price: "55 ETB",
      image: "/leaf 2.jpg",
      features: ["Economy size", "Event-friendly", "Office water cooler", "Best value per liter"],
      specs: {
        volume: "2000ml",
        height: "32cm",
        diameter: "9cm",
        weight: "50g (empty)",
      },
    },
  ]

  const waterQuality = [
    { parameter: "pH Level", value: "7.2", unit: "", status: "Optimal" },
    { parameter: "Total Dissolved Solids", value: "180", unit: "mg/L", status: "Excellent" },
    { parameter: "Calcium", value: "45", unit: "mg/L", status: "Good" },
    { parameter: "Magnesium", value: "12", unit: "mg/L", status: "Good" },
    { parameter: "Sodium", value: "8", unit: "mg/L", status: "Low" },
    { parameter: "Fluoride", value: "0.3", unit: "mg/L", status: "Safe" },
    { parameter: "Nitrates", value: "<1", unit: "mg/L", status: "Safe" },
    { parameter: "Bacteria Count", value: "0", unit: "CFU/ml", status: "Pure" },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-cyan-500 to-emerald-500">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-6">Our Premium Water Collection</h1>
            <p className="text-xl max-w-3xl mx-auto">
              From personal hydration to family gatherings, we have the perfect size for every occasion
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Product Showcase */}
      <section className="py-20 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center">
              <Image
                src={products[selectedProduct].image || "/placeholder.svg"}
                alt={products[selectedProduct].name}
                width={300}
                height={400}
                className="mx-auto mb-6"
              />
              <div className="grid grid-cols-4 gap-4">
                {products.map((product, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedProduct(index)}
                    className={`p-2 rounded-lg border-2 transition-colors ${
                      selectedProduct === index
                        ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20"
                        : "border-gray-200 dark:border-gray-700 hover:border-emerald-300 dark:hover:border-emerald-600"
                    }`}
                  >
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={80}
                      height={100}
                      className="mx-auto"
                    />
                    <p className="text-sm font-medium mt-2 text-gray-900 dark:text-white">{product.size}</p>
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {products[selectedProduct].name}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">{products[selectedProduct].description}</p>
              <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-6">
                {products[selectedProduct].price}
              </div>

              <Tabs defaultValue="features" className="w-full">
                <TabsList className="grid w-full grid-cols-2 dark:bg-gray-800">
                  <TabsTrigger value="features" className="dark:data-[state=active]:bg-gray-700">
                    Features
                  </TabsTrigger>
                  <TabsTrigger value="specs" className="dark:data-[state=active]:bg-gray-700">
                    Specifications
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="features" className="space-y-4">
                  <ul className="space-y-3">
                    {products[selectedProduct].features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </TabsContent>
                <TabsContent value="specs" className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(products[selectedProduct].specs).map(([key, value]) => (
                      <div key={key} className="border-b border-gray-200 dark:border-gray-700 pb-2">
                        <p className="text-sm text-gray-600 dark:text-gray-400 capitalize">
                          {key.replace(/([A-Z])/g, " $1")}
                        </p>
                        <p className="font-semibold text-gray-900 dark:text-white">{value}</p>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>

              <div className="mt-8 space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200">Mineral-rich</Badge>
                  <Badge className="bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200">
                    Bottled at Source
                  </Badge>
                  <Badge className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">BPA-Free</Badge>
                  <Badge className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
                    Recyclable
                  </Badge>
                </div>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Find Store Near You</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Water Quality Report */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Water Quality Report</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Transparency in every drop - our latest laboratory test results
            </p>
            <Button variant="outline" className="mb-8 bg-transparent dark:border-gray-600 dark:text-gray-300">
              <Download className="h-4 w-4 mr-2" />
              Download Full Report (PDF)
            </Button>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="dark:bg-gray-700 dark:border-gray-600">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {waterQuality.map((item, index) => (
                    <div key={index} className="text-center">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{item.parameter}</h3>
                      <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-1">
                        {item.value} {item.unit}
                      </div>
                      <Badge
                        variant="secondary"
                        className={`
                          ${item.status === "Excellent" ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200" : ""}
                          ${item.status === "Good" ? "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200" : ""}
                          ${item.status === "Optimal" ? "bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200" : ""}
                          ${item.status === "Safe" || item.status === "Pure" || item.status === "Low" ? "bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200" : ""}
                        `}
                      >
                        {item.status}
                      </Badge>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg">
                  <p className="text-sm text-emerald-800 dark:text-emerald-200">
                    <strong>Test Date:</strong> January 2024 | <strong>Laboratory:</strong> Ethiopian Standards Agency |
                    <strong>Certification:</strong> ISO/IEC 17025 Accredited
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Benefits */}
      <section className="py-20 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Why Choose Leaf Water?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Every bottle delivers nature's best</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-cyan-100 dark:bg-cyan-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplets className="h-8 w-8 text-cyan-600 dark:text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Natural Minerals</h3>
              <p className="text-gray-700 dark:text-gray-300">Rich in essential minerals like calcium and magnesium</p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-100 dark:bg-emerald-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Pure Source</h3>
              <p className="text-gray-700 dark:text-gray-300">Directly from protected mountain springs</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Quality Assured</h3>
              <p className="text-gray-700 dark:text-gray-300">Rigorous testing and international certifications</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 dark:bg-green-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Eco-Friendly</h3>
              <p className="text-gray-700 dark:text-gray-300">Sustainable packaging and responsible sourcing</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
