import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Award,
  BookOpen,
  GraduationCap,
  Users,
  ChevronRight,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            About Prof. Lokesh Saini
          </h1>
          <p className="max-w-[700px] text-slate-500 md:text-xl/relaxed dark:text-slate-400">
           International Relations - Governance - Indian Polity
          </p>
        </div>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Meet Prof. Lokesh Saini</h2>
            <p className="text-slate-500 dark:text-slate-400">
              Lokesh Saini is currently serving as a Policy Advisor to the
              Standing Committees at the Ministry of External Affairs,
              Government of India. With a strong focus on International
              Relations, Internal Security, and Polity, he is also a dedicated
              UPSC faculty.
            </p>
            {/* <p className="text-slate-500 dark:text-slate-400">
              His teaching philosophy centers on clarity, practical application,
              and student engagement. Prof. Saini believes that well-structured
              educational materials can transform the learning experience,
              making complex concepts accessible to all students regardless of
              their background.
            </p>
            <p className="text-slate-500 dark:text-slate-400">
              Throughout his career, Prof. Saini has authored numerous
              textbooks, created comprehensive course materials, and developed
              innovative teaching methodologies that have helped thousands of
              students excel in their academic pursuits.
            </p> */}
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link href="/resources">
              <Button size="lg" className="gap-1">
                Browse Resources <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline">
                Contact Prof. Saini
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/ls2.jpeg"
            width={400}
            height={500}
            alt="Professor Lokesh Saini"
            className="rounded-lg object-cover"
          />
        </div>
      </div>

      {/* <div className="mt-16">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Academic Background</h2>
            <p className="max-w-[700px] text-slate-500 md:text-xl/relaxed dark:text-slate-400">
              Prof. Saini's extensive educational journey and achievements
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg border p-6 text-center">
            <GraduationCap className="mx-auto h-10 w-10 text-primary" />
            <h3 className="mt-4 font-bold">Ph.D. in Education</h3>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Delhi University, 2008
            </p>
          </div>
          <div className="rounded-lg border p-6 text-center">
            <BookOpen className="mx-auto h-10 w-10 text-primary" />
            <h3 className="mt-4 font-bold">M.Ed. with Distinction</h3>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Rajasthan University, 2003
            </p>
          </div>
          <div className="rounded-lg border p-6 text-center">
            <Award className="mx-auto h-10 w-10 text-primary" />
            <h3 className="mt-4 font-bold">National Teaching Award</h3>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Ministry of Education, 2015
            </p>
          </div>
          <div className="rounded-lg border p-6 text-center">
            <Users className="mx-auto h-10 w-10 text-primary" />
            <h3 className="mt-4 font-bold">15+ Years Teaching</h3>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Helping thousands of students
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Teaching Philosophy</h2>
            <p className="max-w-[700px] text-slate-500 md:text-xl/relaxed dark:text-slate-400">
              The core principles that guide Prof. Saini's educational approach
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-3">
          <div className="rounded-lg border p-6">
            <h3 className="font-bold">Clarity and Accessibility</h3>
            <p className="mt-2 text-slate-500 dark:text-slate-400">
              Prof. Saini believes that even the most complex concepts can be
              explained clearly and made accessible to all students. His
              materials focus on breaking down difficult topics into
              understandable components.
            </p>
          </div>
          <div className="rounded-lg border p-6">
            <h3 className="font-bold">Practical Application</h3>
            <p className="mt-2 text-slate-500 dark:text-slate-400">
              Knowledge becomes meaningful when students can apply it to
              real-world situations. Prof. Saini's resources emphasize practical
              examples and applications to help students connect theory with
              practice.
            </p>
          </div>
          <div className="rounded-lg border p-6">
            <h3 className="font-bold">Student-Centered Approach</h3>
            <p className="mt-2 text-slate-500 dark:text-slate-400">
              Understanding that each student has unique learning needs, Prof.
              Saini designs his educational materials to accommodate different
              learning styles and paces, ensuring that no student is left
              behind.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">
              Publications and Achievements
            </h2>
            <p className="max-w-[700px] text-slate-500 md:text-xl/relaxed dark:text-slate-400">
              Prof. Saini's contributions to education and academic achievements
            </p>
          </div>
        </div>

        <div className="mt-8 space-y-6">
          <div className="rounded-lg border p-6">
            <h3 className="font-bold">Published Works</h3>
            <ul className="mt-4 space-y-2 text-slate-500 dark:text-slate-400">
              <li>
                • "Modern Approaches to Mathematics Education" - Textbook, 2018
              </li>
              <li>
                • "Effective Teaching Methodologies for Science Subjects" -
                Research Paper, 2016
              </li>
              <li>
                • "Digital Learning: Transforming Education in the 21st Century"
                - Book, 2020
              </li>
              <li>
                • "Integrating Technology in Classroom Teaching" - Journal
                Article, 2019
              </li>
              <li>
                • "Student-Centered Learning: A Comprehensive Guide" - Textbook,
                2021
              </li>
            </ul>
          </div>

          <div className="rounded-lg border p-6">
            <h3 className="font-bold">Awards and Recognition</h3>
            <ul className="mt-4 space-y-2 text-slate-500 dark:text-slate-400">
              <li>• National Teaching Excellence Award, 2015</li>
              <li>
                • Best Educational Content Creator, EdTech Summit India, 2019
              </li>
              <li>
                • Distinguished Educator Award, State Education Department, 2017
              </li>
              <li>• Innovation in Teaching Methodology Award, 2020</li>
              <li>
                • Lifetime Achievement in Education, Alumni Association, 2022
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-16 rounded-lg bg-primary p-8 text-primary-foreground">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">
              Ready to Transform Your Learning Experience?
            </h2>
            <p className="max-w-[700px] md:text-xl/relaxed">
              Explore Prof. Lokesh Saini's premium educational resources and
              take your studies to the next level.
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
                Contact Prof. Saini
              </Button>
            </Link>
          </div>
        </div>
      </div> */}
    </div>
  );
}
