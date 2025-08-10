import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "../ui/card"

export default function ChapterCardSkeleton() {
  return (
    <Card className="border border-gray-200 bg-white cursor-default animate-pulse">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <Skeleton className="h-12 w-12 rounded-lg" />

          <div className="flex flex-col items-end gap-1">
            <Skeleton className="h-5 w-5 rounded-full" />
            <Skeleton className="h-6 w-16 rounded-full" />
          </div>
        </div>

        <div className="space-y-2 mt-4">
          <Skeleton className="h-6 w-3/4 rounded" />
          <Skeleton className="h-4 w-full max-w-sm rounded" />
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <Skeleton className="h-4 w-20 rounded" />
            <Skeleton className="h-4 w-16 rounded" />
          </div>
          <div className="flex justify-between text-sm">
            <Skeleton className="h-4 w-24 rounded" />
            <Skeleton className="h-4 w-20 rounded" />
          </div>
          <Skeleton className="h-2 rounded" />
          <Skeleton className="h-8 w-24 rounded ml-auto mt-2" />
        </div>
      </CardContent>
    </Card>
  )
}
