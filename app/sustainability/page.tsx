import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Leaf, Recycle, Users, Droplets, TreePine, Heart } from "lucide-react"

export default function SustainabilityPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-500 to-emerald-500">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-6">Our Commitment to Sustainability</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Protecting Ethiopia's natural resources while building a sustainable future for our communities
            </p>
          </div>
        </div>
      </section>

      {/* Environmental Responsibility */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Environmental Stewardship</h2>
            <p className="text-xl text-gray-600">Our comprehensive approach to environmental protection</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardContent className="p-0 text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Droplets className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Water Conservation</h3>
                <p className="text-gray-700 mb-4">
                  We extract only what nature can sustainably provide, maintaining the spring's natural flow and
                  ecosystem balance.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Sustainable extraction rate</span>
                    <span>85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0 text-center">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TreePine className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Forest Protection</h3>
                <p className="text-gray-700 mb-4">
                  We maintain a 500-hectare protected watershed around our spring source, preserving native forests and
                  wildlife habitats.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Protected area</span>
                    <span>500 hectares</span>
                  </div>
                  <Progress value={100} className="h-2" />
                </div>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Recycle className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Waste Reduction</h3>
                <p className="text-gray-700 mb-4">
                  Our zero-waste facility recycles 100% of production waste and uses renewable energy for 70% of our
                  operations.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Renewable energy use</span>
                    <span>70%</span>
                  </div>
                  <Progress value={70} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Bottle Recycling Program */}
      <section className="py-20 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Bottle Recycling Program</h2>
              <p className="text-lg text-gray-700 mb-6">
                Join our community recycling initiative and help us create a circular economy. Every bottle returned
                makes a difference for our environment.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Collect & Clean</h4>
                    <p className="text-gray-700">Rinse your empty Leaf Water bottles</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Drop Off</h4>
                    <p className="text-gray-700">Bring them to any participating store or collection point</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Earn Rewards</h4>
                    <p className="text-gray-700">Get discounts on future purchases and support local schools</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 p-4 bg-white rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Program Impact (2024)</h4>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-emerald-600">125,000</div>
                    <div className="text-sm text-gray-600">Bottles Recycled</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-emerald-600">15</div>
                    <div className="text-sm text-gray-600">Schools Supported</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/leaf 1.jpg"
                alt="Recycling Program"
                width={800}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Community Development</h2>
            <p className="text-xl text-gray-600">Investing in the communities that make our business possible</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardContent className="p-0 text-center">
                <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Local Employment</h3>
                <div className="text-3xl font-bold text-cyan-600 mb-2">150+</div>
                <p className="text-gray-700">Direct and indirect jobs created in rural communities</p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0 text-center">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Education Support</h3>
                <div className="text-3xl font-bold text-emerald-600 mb-2">25</div>
                <p className="text-gray-700">Schools supported with clean water access and infrastructure</p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0 text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Agricultural Training</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
                <p className="text-gray-700">Farmers trained in sustainable agriculture practices</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sustainability Goals */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our 2030 Goals</h2>
            <p className="text-xl text-gray-600">Ambitious targets for a sustainable future</p>
          </div>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-900">Carbon Neutral Operations</h3>
                <span className="text-emerald-600 font-semibold">Target: 2028</span>
              </div>
              <Progress value={45} className="h-3 mb-2" />
              <p className="text-gray-700">
                45% reduction achieved through renewable energy and efficiency improvements
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-900">100% Recyclable Packaging</h3>
                <span className="text-emerald-600 font-semibold">Target: 2026</span>
              </div>
              <Progress value={80} className="h-3 mb-2" />
              <p className="text-gray-700">80% of packaging now uses recyclable materials, working toward 100%</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-900">Water Access for 10,000 Families</h3>
                <span className="text-emerald-600 font-semibold">Target: 2030</span>
              </div>
              <Progress value={25} className="h-3 mb-2" />
              <p className="text-gray-700">
                2,500 families now have improved water access through our community programs
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-900">1 Million Trees Planted</h3>
                <span className="text-emerald-600 font-semibold">Target: 2030</span>
              </div>
              <Progress value={15} className="h-3 mb-2" />
              <p className="text-gray-700">150,000 trees planted in watershed protection and reforestation efforts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-emerald-500 to-green-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Join Our Sustainability Journey</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Every bottle you choose makes a difference. Together, we can protect Ethiopia's natural resources and build
            stronger communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Find Recycling Centers
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Learn More About Our Impact
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
