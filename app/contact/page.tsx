"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Send, Check } from "lucide-react"

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would send the form data to a server here
    setIsSubmitted(true)
  }

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h1>
          <p className="max-w-[700px] text-slate-500 md:text-xl/relaxed dark:text-slate-400">
            Have questions about our educational resources? Get in touch with Prof. Lokesh Saini.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-12 grid max-w-6xl gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold">Get in Touch</h2>
            <p className="mt-2 text-slate-500 dark:text-slate-400">
              Fill out the form and we'll get back to you as soon as possible.
            </p>
          </div>

          {isSubmitted ? (
            <div className="rounded-lg border border-green-200 bg-green-50 p-6 dark:border-green-900 dark:bg-green-950">
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-600 dark:text-green-400" />
                <h3 className="font-medium text-green-600 dark:text-green-400">Message Sent Successfully</h3>
              </div>
              <p className="mt-2 text-sm text-green-600 dark:text-green-400">
                Thank you for reaching out! We'll respond to your inquiry within 24-48 hours.
              </p>
              <Button className="mt-4" variant="outline" onClick={() => setIsSubmitted(false)}>
                Send Another Message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="first-name"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    First Name
                  </label>
                  <Input id="first-name" placeholder="Enter your first name" required />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="last-name"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Last Name
                  </label>
                  <Input id="last-name" placeholder="Enter your last name" required />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Email
                </label>
                <Input id="email" type="email" placeholder="Enter your email" required />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="phone"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Phone Number (Optional)
                </label>
                <Input id="phone" type="tel" placeholder="Enter your phone number" />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Subject
                </label>
                <Select>
                  <SelectTrigger id="subject">
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Inquiry</SelectItem>
                    <SelectItem value="resources">Educational Resources</SelectItem>
                    <SelectItem value="purchase">Purchase Issues</SelectItem>
                    <SelectItem value="technical">Technical Support</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Message
                </label>
                <Textarea id="message" placeholder="Enter your message" className="min-h-[150px]" required />
              </div>
              <Button type="submit" className="w-full gap-1">
                <Send className="h-4 w-4" />
                Send Message
              </Button>
            </form>
          )}
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold">Contact Information</h2>
            <p className="mt-2 text-slate-500 dark:text-slate-400">
              You can also reach out to us using the following contact details.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-4 rounded-lg border p-4">
              <Mail className="mt-0.5 h-5 w-5 text-primary" />
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  For general inquiries:{" "}
                  <a href="mailto:info@lokeshsaini.edu" className="text-primary hover:underline">
                    info@lokeshsaini.edu
                  </a>
                </p>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  For support:{" "}
                  <a href="mailto:support@lokeshsaini.edu" className="text-primary hover:underline">
                    support@lokeshsaini.edu
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-lg border p-4">
              <Phone className="mt-0.5 h-5 w-5 text-primary" />
              <div>
                <h3 className="font-medium">Phone</h3>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  Office:{" "}
                  <a href="tel:100" className="text-primary hover:underline">
                    100
                  </a>
                </p>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  Support:{" "}
                  <a href="tel:1908" className="text-primary hover:underline">
                    1908 
                  </a>
                </p>
                {/* <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  Available Monday to Friday, 9:00 AM to 5:00 PM IST
                </p> */}
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-lg border p-4">
              <MapPin className="mt-0.5 h-5 w-5 text-primary" />
              <div>
                <h3 className="font-medium">Address</h3>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">PMO </p>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">New Delhi, 110001</p>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">India</p>
              </div>
            </div>
          </div>

          <div className="rounded-lg border p-4">
            <h3 className="font-medium">Office Hours</h3>
            <div className="mt-2 space-y-2">
              <div className="flex justify-between text-sm">
                <span>Monday - Friday</span>
                <span>9:00 AM - 5:00 PM</span>
              </div>
              {/* <div className="flex justify-between text-sm">
                <span>Saturday</span>
                <span>10:00 AM - 2:00 PM</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Sunday</span>
                <span>Closed</span>
              </div> */}
            </div>
          </div>

          <div className="rounded-lg border p-4">
            <h3 className="font-medium">Follow Us</h3>
            <div className="mt-4 flex gap-4">
              {/* <a
                href="#"
                className="rounded-full bg-slate-100 p-2 text-slate-500 hover:bg-primary hover:text-white dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-primary dark:hover:text-white"
              >
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
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
                <span className="sr-only">Facebook</span>
              </a> */}
              <a
                href="https://x.com/saini032kk"
                className="rounded-full bg-slate-100 p-2 text-slate-500 hover:bg-primary hover:text-white dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-primary dark:hover:text-white"
              >
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
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://www.instagram.com/lokeshsaini_14/"
                className="rounded-full bg-slate-100 p-2 text-slate-500 hover:bg-primary hover:text-white dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-primary dark:hover:text-white"
              >
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
                  className="h-5 w-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
                <span className="sr-only">Instagram</span>
              </a>
              {/* <a
                href="#"
                className="rounded-full bg-slate-100 p-2 text-slate-500 hover:bg-primary hover:text-white dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-primary dark:hover:text-white"
              >
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
                  className="h-5 w-5"
                >
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
                <span className="sr-only">YouTube</span>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
