"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FileText, FileIcon as FilePresentation, Trash2, ShoppingCart, ChevronRight } from "lucide-react"

export default function CartPage() {
  // Sample cart items
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "International Relations",
      type: "PDF",
      price: 2000000,
      image: "/placeholder.svg?height=100&width=150",
      slug: "international-relations",
    },
  ])

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce((total, item) => total + item.price, 0)
  const tax = subtotal * 0.18 // 18% tax
  const total = subtotal + tax

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Your Cart</h1>
          <p className="max-w-[700px] text-slate-500 md:text-xl/relaxed dark:text-slate-400">
            Review your selected educational resources before checkout
          </p>
        </div>
      </div>

      {cartItems.length === 0 ? (
        <div className="mt-12 flex flex-col items-center justify-center space-y-4 text-center">
          <ShoppingCart className="h-16 w-16 text-muted-foreground" />
          <h2 className="text-2xl font-bold">Your cart is empty</h2>
          <p className="text-slate-500 dark:text-slate-400">
            Looks like you haven't added any educational resources to your cart yet.
          </p>
          <Link href="/resources">
            <Button size="lg" className="gap-1">
              Browse Resources <ChevronRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      ) : (
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="rounded-lg border">
              <div className="p-6">
                <h2 className="text-xl font-bold">Cart Items ({cartItems.length})</h2>
              </div>
              <div className="border-t">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-6 border-b last:border-b-0">
                    <div className="flex items-center gap-4">
                      <div className="relative h-20 w-20 overflow-hidden rounded-md">
                        <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                      </div>
                      <div>
                        <Link href={`/resources/${item.slug}`} className="font-medium hover:underline">
                          {item.title}
                        </Link>
                        <div className="mt-1 flex items-center gap-2">
                          <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2 py-1 text-xs font-medium dark:bg-slate-800">
                            {item.type === "PDF" ? (
                              <FileText className="h-3 w-3" />
                            ) : (
                              <FilePresentation className="h-3 w-3" />
                            )}
                            {item.type}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="font-medium">₹{item.price}</div>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-red-500 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950"
                        onClick={() => removeItem(item.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Remove</span>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="rounded-lg border">
              <div className="p-6">
                <h2 className="text-xl font-bold">Order Summary</h2>
                <div className="mt-4 space-y-4">
                  <div className="flex justify-between">
                    <span className="text-slate-500 dark:text-slate-400">Subtotal</span>
                    <span>₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 dark:text-slate-400">Tax (18%)</span>
                    <span>₹{tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between font-bold">
                      <span>Total</span>
                      <span>₹{total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-t p-6">
                <Button
                  className="w-full"
                  size="lg"
                  onClick={() => alert("This would proceed to checkout in a real application")}
                >
                  Proceed to Checkout
                </Button>
                <div className="mt-4">
                  <Link href="/resources" className="text-sm text-primary hover:underline">
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-lg border p-6">
              <h3 className="font-medium">Have a coupon?</h3>
              <div className="mt-2 flex gap-2">
                <Input placeholder="Enter coupon code" />
                <Button variant="outline">Apply</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
