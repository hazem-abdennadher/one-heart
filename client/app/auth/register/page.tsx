import { Metadata } from "next"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Command } from "@/components/ui/command"
import { SignUpForm } from "@/components/auth/sign-up-form"

export const metadata: Metadata = {
  title: "Register",
  description: "Register to your account",
}

export default function RegisterPage() {
  return (
    <section className="container grid items-center gap-6  md:py-10 ">
      <div className="container relative flex  h-[800px]  flex-col items-center justify-center overflow-hidden rounded-lg shadow-lg md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Link
          href={siteConfig.links.auth.login}
          className={cn(
            buttonVariants({ variant: "ghost", size: "sm" }),
            "absolute left-4 top-4 md:left-8 md:top-8"
          )}
        >
          Login
        </Link>
        <div className=" lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Create an account
              </h1>
            </div>
            <SignUpForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div
            className="absolute inset-0 bg-cover"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80)",
            }}
          />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <Command className="mr-2 h-6 w-6" /> One Heart
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;oneHeart is the best app ever !&rdquo;
              </p>
              <footer className="text-sm">Hazem Abdennadher</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
