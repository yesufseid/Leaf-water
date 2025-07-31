import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight } from "lucide-react"

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Why Spring Water Matters: The Science Behind Natural Filtration",
      excerpt:
        "Discover how ancient volcanic rocks naturally filter and enrich our spring water with essential minerals over thousands of years.",
      image: "/leaf 2.jpg",
      author: "Dr. Alemayehu Tadesse",
      date: "March 15, 2024",
      category: "Science",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Behind the Scenes: How We Bottle Pure Ethiopian Spring Water",
      excerpt:
        "Take a virtual tour of our state-of-the-art facility and learn about our rigorous quality control processes.",
      image: "/leaf 2.jpg",
      author: "Meseret Bekele",
      date: "March 10, 2024",
      category: "Process",
      readTime: "7 min read",
    },
    {
      id: 3,
      title: "The Health Benefits of Staying Properly Hydrated",
      excerpt:
        "Learn about the importance of daily hydration and how mineral-rich spring water supports your overall health and wellness.",
      image: "/leaf 2.jpg",
      author: "Dr. Sara Mohammed",
      date: "March 5, 2024",
      category: "Health",
      readTime: "6 min read",
    },
    {
      id: 4,
      title: "Protecting Ethiopia's Water Resources for Future Generations",
      excerpt:
        "Our commitment to environmental stewardship and how we're working to preserve natural water sources across Ethiopia.",
      image: "/leaf 2.jpg",
      author: "Tadesse Girma",
      date: "February 28, 2024",
      category: "Environment",
      readTime: "8 min read",
    },
    {
      id: 5,
      title: "Community Impact: Supporting Local Schools Through Our Recycling Program",
      excerpt:
        "See how our bottle recycling initiative is making a real difference in rural Ethiopian communities and schools.",
      image: "/leaf 2.jpg",
      author: "Hanan Ahmed",
      date: "February 20, 2024",
      category: "Community",
      readTime: "4 min read",
    },
    {
      id: 6,
      title: "The Journey from Source to Bottle: Quality at Every Step",
      excerpt:
        "Follow the complete journey of Leaf Water from the pristine Bakanote spring to your table, ensuring quality at every step.",
      image: "/leaf 2.jpg",
      author: "Getachew Alemu",
      date: "February 15, 2024",
      category: "Quality",
      readTime: "6 min read",
    },
  ]

  const categories = ["All", "Science", "Health", "Environment", "Community", "Process", "Quality"]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-emerald-500 to-cyan-500">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-6">Leaf Water Blog</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Stay informed about water quality, health tips, sustainability, and the latest news from Leaf Water
              Ethiopia
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={category === "All" ? "default" : "secondary"}
                className={`cursor-pointer px-4 py-2 text-sm ${
                  category === "All"
                    ? "bg-emerald-600 text-white hover:bg-emerald-700"
                    : "bg-white text-gray-700 hover:bg-emerald-50"
                }`}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Article</h2>
          </div>
          <Card className="overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <Image
                  src={blogPosts[0].image || "/placeholder.svg"}
                  alt={blogPosts[0].title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <div className="flex items-center space-x-4 mb-4">
                  <Badge className="bg-emerald-100 text-emerald-800">{blogPosts[0].category}</Badge>
                  <span className="text-sm text-gray-500">{blogPosts[0].readTime}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{blogPosts[0].title}</h3>
                <p className="text-gray-700 mb-6">{blogPosts[0].excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{blogPosts[0].author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{blogPosts[0].date}</span>
                    </div>
                  </div>
                  <Link
                    href={`/blog/${blogPosts[0].id}`}
                    className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Articles</h2>
            <p className="text-lg text-gray-600">Discover insights about water, health, and sustainability</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-3">
                    <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                      {post.category}
                    </Badge>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-700 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      <div className="flex items-center space-x-1 mb-1">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <Link
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium text-sm"
                    >
                      Read More
                      <ArrowRight className="h-3 w-3 ml-1" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest articles about water quality, health tips, and company updates
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-emerald-300"
            />
            <button className="bg-white text-emerald-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
