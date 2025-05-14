import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { BookOpen, FileText, Download, Award, Users, ChevronRight } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Lokesh Saini Educational Resources
                </h1>
                <p className="max-w-[600px] text-slate-500 md:text-xl dark:text-slate-400">
                  High-quality educational materials to enhance your learning journey. Premium PDFs and PPTs created by
                  Prof. Lokesh Saini.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/resources">
                  <Button size="lg" className="gap-1">
                    Browse Resources <ChevronRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button size="lg" variant="outline">
                    About Prof. Saini
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/ls.jpeg"
                width={550}
                height={450}
                alt="Professor Lokesh Saini"
                className="rounded-lg object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-slate-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-slate-100 px-3 py-1 text-sm dark:bg-slate-800">
                Premium Resources
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Choose Our Materials?</h2>
              <p className="max-w-[900px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-slate-400">
                Prof. Lokesh Saini's educational resources are meticulously crafted to help students excel in their
                studies.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-10">
            <div className="grid gap-6">
              <div className="flex items-start gap-4">
                <BookOpen className="h-10 w-10 text-primary" />
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Comprehensive Content</h3>
                  <p className="text-slate-500 dark:text-slate-400">
                    Our PDFs and PPTs cover all essential topics with detailed explanations and examples.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FileText className="h-10 w-10 text-primary" />
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Well-Structured Materials</h3>
                  <p className="text-slate-500 dark:text-slate-400">
                    Organized content that follows a logical progression to enhance understanding.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Download className="h-10 w-10 text-primary" />
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Instant Access</h3>
                  <p className="text-slate-500 dark:text-slate-400">
                    Purchase and download resources instantly to start learning right away.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid gap-6">
              <div className="flex items-start gap-4">
                <Award className="h-10 w-10 text-primary" />
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Expert Knowledge</h3>
                  <p className="text-slate-500 dark:text-slate-400">
                    Created by Prof. Lokesh Saini with years of teaching experience and expertise.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Users className="h-10 w-10 text-primary" />
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Student-Focused</h3>
                  <p className="text-slate-500 dark:text-slate-400">
                    Designed with students in mind, focusing on clarity and practical application.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FileText className="h-10 w-10 text-primary" />
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Regular Updates</h3>
                  <p className="text-slate-500 dark:text-slate-400">
                    Materials are regularly updated to include the latest information and research.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resources Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50 dark:bg-slate-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Resources</h2>
              <p className="max-w-[900px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-slate-400">
                Explore our most popular educational materials
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Advanced Mathematics",
                type: "PDF",
                price: "₹299",
                image: "/placeholder.svg?height=200&width=300",
                slug: "advanced-mathematics",
              },
              {
                title: "Physics Fundamentals",
                type: "PPT",
                price: "₹349",
                image: "/placeholder.svg?height=200&width=300",
                slug: "physics-fundamentals",
              },
              {
                title: "Chemistry Essentials",
                type: "PDF",
                price: "₹279",
                image: "/placeholder.svg?height=200&width=300",
                slug: "chemistry-essentials",
              },
            ].map((resource, index) => (
              <Link
                href={`/resources/${resource.slug}`}
                key={index}
                className="group relative overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition-all hover:shadow-md dark:border-slate-700 dark:bg-slate-900"
              >
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={resource.image || "/placeholder.svg"}
                    alt={resource.title}
                    width={300}
                    height={200}
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <span className="inline-block rounded-full bg-slate-100 px-2 py-1 text-xs font-medium dark:bg-slate-800">
                      {resource.type}
                    </span>
                    <span className="font-bold text-primary">{resource.price}</span>
                  </div>
                  <h3 className="mt-2 text-lg font-bold">{resource.title}</h3>
                  <Button variant="ghost" size="sm" className="mt-2 w-full">
                    View Details
                  </Button>
                </div>
              </Link>
            ))}
          </div>
          <div className="flex justify-center">
            <Link href="/resources">
              <Button size="lg" variant="outline">
                View All Resources
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-slate-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Student Testimonials</h2>
              <p className="max-w-[900px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-slate-400">
                Hear what our students have to say about Prof. Saini's educational materials
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Rahul Sharma",
                text: "Prof. Saini's materials helped me score top marks in my exams. The content is clear and comprehensive.",
                image: "/placeholder.svg?height=100&width=100",
              },
              {
                name: "Priya Patel",
                text: "The PPTs are visually engaging and make complex concepts easy to understand. Highly recommended!",
                image: "/placeholder.svg?height=100&width=100",
              },
              {
                name: "Amit Kumar",
                text: "I've been using these resources for my competitive exam preparation. They're concise and cover all important topics.",
                image: "/placeholder.svg?height=100&width=100",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900"
              >
                <div className="flex items-center space-x-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <div className="flex text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-slate-500 dark:text-slate-400">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Excel in Your Studies?
              </h2>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Get access to Prof. Lokesh Saini's premium educational resources today.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/resources">
                <Button size="lg" variant="secondary" className="gap-1">
                  Browse Resources <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
