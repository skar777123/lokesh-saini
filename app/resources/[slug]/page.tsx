"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, FileIcon as FilePresentation, Download, ShoppingCart, Check, Star, ChevronRight } from "lucide-react"

export default function ResourcePage({ params }: { params: { slug: string } }) {
  const [isAddedToCart, setIsAddedToCart] = useState(false)

  // This would normally come from a database
  const resource = {
    id: 1,
    title: "International Relations",
    type: "PDF",
    category: "IR",
    price: "₹20000000",
    image: "/",
    slug: "internation-relations",
    description: "-",
    longDescription: `
      -
    `,
    pages: 120,
    fileSize: "15 GB",
    language: "English",
    lastUpdated: "May 14",
    features: [
      "Comprehensive coverage ",
      "Step-by-step understanding",
      "Supplementary online resources",
    ],
    // reviews: [
    //   {
    //     name: "Rahul Sharma",
    //     rating: 5,
    //     comment:
    //       "Excellent resource! The explanations are clear and the practice problems helped me prepare for my exams.",
    //     date: "March 10, 2023",
    //   },
    //   {
    //     name: "Priya Patel",
    //     rating: 4,
    //     comment: "Very comprehensive content. I particularly liked the visual explanations of complex topics.",
    //     date: "February 22, 2023",
    //   },
    //   {
    //     name: "Amit Kumar",
    //     rating: 5,
    //     comment:
    //       "Prof. Saini's teaching style is exceptional. This PDF helped me understand concepts I've been struggling with for months.",
    //     date: "January 15, 2023",
    //   },
    // ],
    // relatedResources: [
    //   {
    //     id: 2,
    //     title: "Calculus Fundamentals",
    //     type: "PDF",
    //     price: "₹249",
    //     image: "/placeholder.svg?height=200&width=300",
    //     slug: "calculus-fundamentals",
    //   },
    //   {
    //     id: 3,
    //     title: "Linear Algebra Essentials",
    //     type: "PPT",
    //     price: "₹279",
    //     image: "/placeholder.svg?height=200&width=300",
    //     slug: "linear-algebra-essentials",
    //   },
    //   {
    //     id: 4,
    //     title: "Statistics and Probability",
    //     type: "PDF",
    //     price: "₹299",
    //     image: "/placeholder.svg?height=200&width=300",
    //     slug: "statistics-probability",
    //   },
    // ],
  }

  const handleAddToCart = () => {
    setIsAddedToCart(true)
    // In a real app, you would add the item to the cart here
  }

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-primary">
          Home
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link href="/resources" className="hover:text-primary">
          Resources
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span>{resource.title}</span>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <div className="overflow-hidden rounded-lg border">
            <Image
              src={resource.image || "/placeholder.svg"}
              alt={resource.title}
              width={600}
              height={400}
              className="w-full object-cover"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <Image
              src="/placeholder.svg?height=100&width=150"
              alt="Preview 1"
              width={150}
              height={100}
              className="cursor-pointer rounded-lg border object-cover hover:border-primary"
            />
            <Image
              src="/placeholder.svg?height=100&width=150"
              alt="Preview 2"
              width={150}
              height={100}
              className="cursor-pointer rounded-lg border object-cover hover:border-primary"
            />
            <Image
              src="/placeholder.svg?height=100&width=150"
              alt="Preview 3"
              width={150}
              height={100}
              className="cursor-pointer rounded-lg border object-cover hover:border-primary"
            />
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2 py-1 text-xs font-medium dark:bg-slate-800">
                {resource.type === "PDF" ? <FileText className="h-3 w-3" /> : <FilePresentation className="h-3 w-3" />}
                {resource.type}
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2 py-1 text-xs font-medium dark:bg-slate-800">
                {resource.category}
              </span>
            </div>
            <h1 className="mt-2 text-3xl font-bold">{resource.title}</h1>
            <div className="mt-2 flex items-center gap-2">
              <div className="flex text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              {/* <span className="text-sm text-muted-foreground">({resource.reviews.length} reviews)</span> */}
            </div>
          </div>

          <div className="text-3xl font-bold text-primary">{resource.price}</div>

          <p className="text-slate-500 dark:text-slate-400">{resource.description}</p>

          <div className="space-y-4 rounded-lg border p-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium">Pages</p>
                <p className="text-sm text-muted-foreground">{resource.pages}</p>
              </div>
              <div>
                <p className="text-sm font-medium">File Size</p>
                <p className="text-sm text-muted-foreground">{resource.fileSize}</p>
              </div>
              <div>
                <p className="text-sm font-medium">Language</p>
                <p className="text-sm text-muted-foreground">{resource.language}</p>
              </div>
              <div>
                <p className="text-sm font-medium">Last Updated</p>
                <p className="text-sm text-muted-foreground">{resource.lastUpdated}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              size="lg"
              className="w-full gap-2"
              onClick={() => {
                // In a real app, this would redirect to checkout
                alert("This would redirect to checkout in a real application")
              }}
            >
              <Download className="h-5 w-5" />
              Buy Now
            </Button>
            <Button
              variant={isAddedToCart ? "outline" : "secondary"}
              size="lg"
              className="w-full gap-2"
              onClick={handleAddToCart}
              disabled={isAddedToCart}
            >
              {isAddedToCart ? (
                <>
                  <Check className="h-5 w-5" />
                  Added to Cart
                </>
              ) : (
                <>
                  <ShoppingCart className="h-5 w-5" />
                  Add to Cart
                </>
              )}
            </Button>
          </div>

          <div className="rounded-lg border p-4">
            <h3 className="font-medium">What You'll Get</h3>
            <ul className="mt-2 space-y-2">
              {resource.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 text-green-500" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <Tabs defaultValue="description">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="description">Description</TabsTrigger>
            {/* <TabsTrigger value="reviews">Reviews ({resource.reviews.length})</TabsTrigger> */}
          </TabsList>
          <TabsContent value="description" className="mt-6">
            <div className="prose max-w-none dark:prose-invert">
              <p>{resource.longDescription}</p>
              {/* <h3>Key Topics Covered</h3>
              <ul>
                <li>Advanced Calculus and Its Applications</li>
                <li>Linear Algebra and Vector Spaces</li>
                <li>Differential Equations</li>
                <li>Complex Analysis</li>
                <li>Numerical Methods</li>
                <li>Probability and Statistics</li>
              </ul>
              <h3>Who This Resource Is For</h3>
              <p>
                This resource is designed for college students studying mathematics, engineering, physics, or any
                discipline requiring a strong foundation in advanced mathematics. It's also suitable for professionals
                looking to refresh their mathematical knowledge.
              </p>
              <h3>How to Use This Resource</h3>
              <p>
                After purchase, you'll receive an immediate download link for the PDF. The document is bookmarked and
                searchable, making it easy to navigate to specific topics. We recommend working through the chapters
                sequentially, completing the practice problems as you go.
              </p> */}
            </div>
          </TabsContent>
          {/* <TabsContent value="reviews" className="mt-6">
            <div className="space-y-6">
              {resource.reviews.map((review, index) => (
                <div key={index} className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">{review.name}</h4>
                    <span className="text-sm text-muted-foreground">{review.date}</span>
                  </div>
                  <div className="mt-1 flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < review.rating ? "fill-current" : "stroke-current fill-transparent"}`}
                      />
                    ))}
                  </div>
                  <p className="mt-2 text-sm">{review.comment}</p>
                </div>
              ))}
            </div>
          </TabsContent> */}
        </Tabs>
      </div>

      {/* <div className="mt-12">
        <h2 className="text-2xl font-bold">Related Resources</h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {resource.relatedResources.map((relatedResource) => (
            <Link
              href={`/resources/${relatedResource.slug}`}
              key={relatedResource.id}
              className="group relative overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition-all hover:shadow-md dark:border-slate-700 dark:bg-slate-900"
            >
              <div className="aspect-video overflow-hidden">
                <Image
                  src={relatedResource.image || "/placeholder.svg"}
                  alt={relatedResource.title}
                  width={300}
                  height={200}
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2 py-1 text-xs font-medium dark:bg-slate-800">
                    {relatedResource.type === "PDF" ? (
                      <FileText className="h-3 w-3" />
                    ) : (
                      <FilePresentation className="h-3 w-3" />
                    )}
                    {relatedResource.type}
                  </span>
                  <span className="font-bold text-primary">{relatedResource.price}</span>
                </div>
                <h3 className="mt-2 text-lg font-bold">{relatedResource.title}</h3>
                <Button variant="ghost" size="sm" className="mt-2 w-full">
                  View Details
                </Button>
              </div>
            </Link>
          ))}
        </div>
      </div> */}
    </div>
  )
}
