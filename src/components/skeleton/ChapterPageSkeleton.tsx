import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export function ChapterHeaderSkeleton() {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-4 mb-4">
        <Skeleton className="h-12 w-12 rounded-lg" />
        <div className="space-y-2">
          <Skeleton className="h-8 w-64" />
          <Skeleton className="h-4 w-96" />
        </div>
      </div>

      <div className="flex items-center gap-4 mb-4">
        <Skeleton className="h-6 w-20" />
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-4 w-20" />
      </div>

      <div className="space-y-2">
        <div className="flex justify-between">
          <Skeleton className="h-4 w-48" />
          <Skeleton className="h-4 w-8" />
        </div>
        <Skeleton className="h-2 w-full" />
      </div>
    </div>
  )
}

export function LessonNavigationSkeleton() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-6 w-16" />
      <div className="space-y-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <Card key={i} className="border-gray-200">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Skeleton className="h-4 w-4" />
                  <Skeleton className="h-4 w-32" />
                </div>
                <Skeleton className="h-4 w-4 rounded-full" />
              </div>
              <div className="flex items-center gap-2">
                <Skeleton className="h-3 w-3" />
                <Skeleton className="h-3 w-12" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export function LessonContentSkeleton() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Skeleton className="h-5 w-5" />
              <div className="space-y-2">
                <Skeleton className="h-6 w-48" />
                <div className="flex items-center gap-2">
                  <Skeleton className="h-4 w-4" />
                  <Skeleton className="h-4 w-16" />
                </div>
              </div>
            </div>
            <Skeleton className="h-6 w-20" />
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <div className="space-y-2 mt-6">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        </CardContent>
      </Card>

      <Card className="border-yellow-200 bg-yellow-50">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Skeleton className="h-5 w-5" />
            <Skeleton className="h-5 w-32" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex items-start gap-2">
                <Skeleton className="h-4 w-4 mt-0.5" />
                <Skeleton className="h-4 w-full" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-between items-center pt-6">
        <Skeleton className="h-10 w-24" />
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-10 w-32" />
      </div>
    </div>
  )
}

export default function ChapterPageSkeleton() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-green-100">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/90 backdrop-blur-sm">
        <div className="flex items-center justify-center">
          <div className="relative">
            <div className="h-8 w-8 bg-green-500 rounded" />
            <div className="h-4 w-4 bg-yellow-500 rounded absolute -top-1 -right-1" />
          </div>
          <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
            Smart Spender
          </span>
        </div>
        <nav className="ml-auto">
          <Skeleton className="h-4 w-24" />
        </nav>
      </header>

      <div className="container mx-auto px-4 py-8">
        <ChapterHeaderSkeleton />

        <div className="grid gap-8 lg:grid-cols-[300px_1fr]">
          <LessonNavigationSkeleton />
          <LessonContentSkeleton />
        </div>
      </div>
    </div>
  )
}
