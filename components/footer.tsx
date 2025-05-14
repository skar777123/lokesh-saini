import Link from "next/link"
import { BookOpen, Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container flex flex-col gap-8 py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-2">
            <Link href="/" className="flex items-center gap-2">
              <BookOpen className="h-6 w-6" />
              <span className="font-bold">Prof. Lokesh Saini</span>
            </Link>
            <p className="text-sm text-muted-foreground">Premium educational resources for students at all levels.</p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold">Resources</h3>
            <Link href="/resources/pdfs" className="text-sm text-muted-foreground hover:text-primary">
              PDFs
            </Link>
            <Link href="/resources/ppts" className="text-sm text-muted-foreground hover:text-primary">
              PowerPoint Presentations
            </Link>
            <Link href="/resources/bundles" className="text-sm text-muted-foreground hover:text-primary">
              Bundles
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold">Information</h3>
            <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">
              About Prof. Saini
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">
              Contact Us
            </Link>
            <Link href="/faq" className="text-sm text-muted-foreground hover:text-primary">
              FAQ
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold">Legal</h3>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/refund" className="text-sm text-muted-foreground hover:text-primary">
              Refund Policy
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:flex-row md:justify-between">
          <div className="flex gap-4">
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
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Prof. Lokesh Saini. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
