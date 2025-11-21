"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { PiggyBank, Zap, Mail, Lock, Eye, EyeOff, ArrowRight, AlertCircle } from "lucide-react"
import Link from "next/link"
import { useActionState } from 'react';
import { authenticate } from '@/lib/actions';
import { useSearchParams } from 'next/navigation';
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') ?? "/profile";
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({})

  const validateForm = () => {
    const newErrors: { email?: string; password?: string } = {}

    if (!email) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email"
    }

    if (!password) {
      newErrors.password = "Password is required"
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-green-100 flex flex-col">
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <Card className="border-2 border-green-200 shadow-lg">
            <CardHeader className="space-y-2 text-center">
              <div className="flex justify-center mb-4">
                <div className="h-16 w-16 rounded-full bg-gradient-to-r from-green-500 to-yellow-500 flex items-center justify-center">
                  <div className="relative">
                    <PiggyBank className="h-8 w-8 text-white" />
                    <Zap className="h-4 w-4 text-white absolute -top-1 -right-1" />
                </div>
                </div>
              </div>
              <CardTitle className="text-3xl">Welcome Back</CardTitle>
              <CardDescription className="text-base">Sign in to continue your financial journey</CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              <form action={formAction} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      name="email"
                      onChange={(e) => {
                        setEmail(e.target.value)
                        if (errors.email) setErrors({ ...errors, email: undefined })
                      }}
                      className={`pl-10 ${errors.email ? "border-red-500 focus-visible:ring-red-500" : "border-gray-300"}`}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-sm text-red-500 flex items-center gap-1">
                      <span className="h-4 w-4">!</span>
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm font-medium">
                    Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={password}
                      name="password"
                      onChange={(e) => {
                        setPassword(e.target.value)
                        if (errors.password) setErrors({ ...errors, password: undefined })
                      }}
                      className={`pl-10 pr-10 ${errors.password ? "border-red-500 focus-visible:ring-red-500" : "border-gray-300"}`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="text-sm text-red-500 flex items-center gap-1">
                      <span className="h-4 w-4">!</span>
                      {errors.password}
                    </p>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="remember"
                      checked={rememberMe}
                      onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                    />
                    <Label htmlFor="remember" className="text-sm font-normal cursor-pointer">
                      Remember me
                    </Label>
                  </div>
                  <Link href="#" className="text-sm text-green-600 hover:text-green-700 font-medium transition-colors">
                    Forgot password?
                  </Link>
                </div>

                  <input type="hidden" name="redirectTo" value={callbackUrl}  />
                <Button
                  type="submit"
                  aria-disabled={isPending}
                   value={callbackUrl}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-2 h-11"
                >
                  {isPending ? (
                    <span className="flex items-center gap-2">
                      <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Signing in...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2" aria-disabled={isPending}>
                      Sign In
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  )}
                </Button>
              </form>
              {errorMessage && (
            <div className="flex gap-3 justify-center">
              <AlertCircle className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">{errorMessage}</p>
            </div>
          )}

              <div className="text-center">
                <p className="text-sm text-gray-600">
                  Don't have an account?{" "}
                  <Link href="/signup" className="text-green-600 hover:text-green-700 font-semibold transition-colors">
                    Sign up here
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>

          
        </div>
      </div>
    </div>
  )
}
