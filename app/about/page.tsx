import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Eye, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-emerald-500 to-cyan-500">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-6">About Leaf Water</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Born from a vision to bring Ethiopia's purest spring water to families across the nation, Leaf Water
              represents the perfect harmony between nature and quality.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Mountain Agricultural Development was founded with a simple belief: that access to pure, natural water
                is a fundamental right. When we discovered the pristine Bakanote spring in the Gurage mountains, we knew
                we had found something special.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                For generations, local communities have known about this natural wonder. The spring's water, filtered
                through ancient volcanic rock, emerges crystal clear and rich in essential minerals. We saw an
                opportunity to share this gift with all of Ethiopia.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Today, Leaf Water stands as a testament to our commitment to quality, sustainability, and community
                development. Every bottle we produce supports local communities and protects the natural environment
                that makes our water possible.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/leaf 1.jpg"
                alt="Our Story"
                width={800}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8 dark:bg-gray-700 dark:border-gray-600">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <Target className="h-12 w-12 text-emerald-600 mr-4" />
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Our Mission</h3>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  To provide Ethiopian families with access to the purest, most natural spring water while supporting
                  local communities and preserving our precious natural resources for future generations.
                </p>
              </CardContent>
            </Card>
            <Card className="p-8 dark:bg-gray-700 dark:border-gray-600">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <Eye className="h-12 w-12 text-cyan-600 mr-4" />
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Our Vision</h3>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  To become Ethiopia's most trusted water brand, known for uncompromising quality, environmental
                  stewardship, and positive community impact across the nation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">The principles that guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-emerald-100 dark:bg-emerald-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-10 w-10 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Quality First</h3>
              <p className="text-gray-700 dark:text-gray-300">
                We never compromise on quality. Every drop of Leaf Water meets the highest international standards for
                purity and safety.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-cyan-100 dark:bg-cyan-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-cyan-600 dark:text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Community Impact</h3>
              <p className="text-gray-700 dark:text-gray-300">
                We believe in giving back to the communities that make our business possible, creating jobs and
                supporting local development.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 dark:bg-green-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="h-10 w-10 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Environmental Stewardship</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Protecting the natural environment is not just good business—it's our responsibility to future
                generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-emerald-50 dark:bg-emerald-900/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Key milestones in our development</p>
          </div>
          <div className="max-w4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  year: "2020",
                  title: "Discovery of Bakanote Spring",
                  description: "Our team discovered the pristine spring source in the Gurage mountains.",
                },
                {
                  year: "2021",
                  title: "Water Quality Testing",
                  description: "Comprehensive testing confirmed exceptional water quality and mineral content.",
                },
                {
                  year: "2022",
                  title: "Facility Construction",
                  description: "Built state-of-the-art bottling facility with international standards.",
                },
                {
                  year: "2023",
                  title: "International Certification",
                  description: "Achieved ISO 22000 and other international quality certifications.",
                },
                {
                  year: "2024",
                  title: "Market Launch",
                  description: "Officially launched Leaf Water across Ethiopian markets.",
                },
              ].map((milestone, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="bg-emerald-600 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-lg">
                    {milestone.year}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{milestone.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
