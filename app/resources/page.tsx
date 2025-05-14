import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, FileIcon as FilePresentation } from "lucide-react"

export default function ResourcesPage() {
  // Sample resources data
  const resources = [
    {
      id: 1,
      title: "International Relations",
      type: "PDF",
      category: "IR",
      price: "₹2000000",
      image: "/placeholder.svg?height=200&width=300",
      slug: "international-relations",
      description: "Comprehensive guide of International Relations of Countries for UPSC Aspirants.",
    },
    {
      id: 2,
      title: "Governance",
      type: "PPT",
      category: "Governance",
      price: "₹349",
      image: "/placeholder.svg?height=200&width=300",
      slug: "governance",
      description: "Interactive presentation explaining governance principles.",
    },
    {
      id: 3,
      title: "Indian Polity",
      type: "PDF",
      category: "IndianPolity",
      price: "₹279",
      image: "/placeholder.svg?height=200&width=300",
      slug: "indian-polity",
      description: "Complete guide to polity concepts about India.",
    }
  ]

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Educational Resources</h1>
          <p className="max-w-[700px] text-slate-500 md:text-xl/relaxed dark:text-slate-400">
            Browse and purchase high-quality educational materials by Prof. Lokesh Saini
          </p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="mt-8 grid gap-6 md:grid-cols-[250px_1fr] lg:grid-cols-[300px_1fr]">
        <div className="space-y-6">
          {/* <div className="rounded-lg border p-4">
            <h3 className="mb-4 font-medium">Search</h3>
            <div className="relative">
              <Input type="search" placeholder="Search resources..." className="pr-8" />
              <Button variant="ghost" size="icon" className="absolute right-0 top-0 h-full">
                <FileText className="h-4 w-4" />
                <span className="sr-only">Search</span>
              </Button>
            </div>
          </div> */}

          <div className="rounded-lg border p-4">
            <h3 className="mb-4 font-medium">Filter by Type</h3>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="h-4 w-4 rounded border-slate-300" />
                <span>PDF Documents</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="h-4 w-4 rounded border-slate-300" />
                <span>PowerPoint Presentations</span>
              </label>
            </div>
          </div>

          <div className="rounded-lg border p-4">
            <h3 className="mb-4 font-medium">Filter by Category</h3>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="h-4 w-4 rounded border-slate-300" />
                <span>IR</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="h-4 w-4 rounded border-slate-300" />
                <span>Governance</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="h-4 w-4 rounded border-slate-300" />
                <span>Polity</span>
              </label>
            </div>
          </div>

          {/* <div className="rounded-lg border p-4">
            <h3 className="mb-4 font-medium">Price Range</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm">Min</label>
                <Input type="number" placeholder="₹0" />
              </div>
              <div>
                <label className="text-sm">Max</label>
                <Input type="number" placeholder="₹1000" />
              </div>
            </div>
            <Button className="mt-4 w-full">Apply Filter</Button>
          </div> */}
        </div>

        <div className="space-y-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            {/* <Tabs defaultValue="all" className="w-full sm:w-auto">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="pdfs">PDFs</TabsTrigger>
                <TabsTrigger value="ppts">PPTs</TabsTrigger>
              </TabsList>
            </Tabs> */}
            {/* <div className="flex w-full items-center gap-2 sm:w-auto">
              <Select defaultValue="newest">
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="oldest">Oldest First</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div> */}
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource) => (
              <Link
                href={`/resources/${resource.slug}`}
                key={resource.id}
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
                    <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2 py-1 text-xs font-medium dark:bg-slate-800">
                      {resource.type === "PDF" ? (
                        <FileText className="h-3 w-3" />
                      ) : (
                        <FilePresentation className="h-3 w-3" />
                      )}
                      {resource.type}
                    </span>
                    <span className="font-bold text-primary">{resource.price}</span>
                  </div>
                  <h3 className="mt-2 text-lg font-bold">{resource.title}</h3>
                  <p className="mt-1 text-sm text-slate-500 line-clamp-2 dark:text-slate-400">{resource.description}</p>
                  <Button variant="ghost" size="sm" className="mt-2 w-full">
                    View Details
                  </Button>
                </div>
              </Link>
            ))}
          </div>

          <div className="flex items-center justify-center space-x-2">
            <Button variant="outline" size="icon">
              <span className="sr-only">Go to previous page</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </Button>
            <Button variant="outline" size="sm" className="h-8 w-8">
              1
            </Button>
            <Button variant="outline" size="sm" className="h-8 w-8">
              2
            </Button>
            <Button variant="outline" size="sm" className="h-8 w-8">
              3
            </Button>
            <Button variant="outline" size="icon">
              <span className="sr-only">Go to next page</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
