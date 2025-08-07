"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination } from "swiper/modules";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, BarChart3, Clock, DollarSign, Lightbulb } from "lucide-react"
import { Badge } from "../ui/badge"

export default function BlogSection() {
    return (
        <div>
            <Swiper
        speed={1000}
        spaceBetween={30}
        breakpoints={{
            912: { slidesPerView: 3 },
            600: { slidesPerView: 2 }, // medium screen size (e.g. tablet)
            200: { slidesPerView: 1 }, // small screen size (e.g. mobile)
          }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
            <SwiperSlide><Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <div className="aspect-video bg-gradient-to-br from-green-500 to-green-600 rounded-t-lg flex items-center justify-center">
                    <DollarSign className="h-12 w-12 text-white" />
                </div>
                <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                        <Clock className="h-4 w-4" />
                        <span>3 min read</span>
                        <Badge variant="secondary" className="text-xs">Budgeting</Badge>
                    </div>
                    <CardTitle className="text-lg group-hover:text-green-600 transition-colors">
                        The 50/30/20 Rule That Actually Works
                    </CardTitle>
                    <CardDescription>
                        Discover why this simple budgeting method has helped millions take control of their finances...
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">Dec 15, 2024</span>
                        <ArrowRight className="h-4 w-4 text-green-500 group-hover:translate-x-1 transition-transform" />
                    </div>
                </CardContent>
            </Card></SwiperSlide>

            <SwiperSlide><Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <div className="aspect-video bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-t-lg flex items-center justify-center">
                    <BarChart3 className="h-12 w-12 text-white" />
                </div>
                <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                        <Clock className="h-4 w-4" />
                        <span>5 min read</span>
                        <Badge variant="secondary" className="text-xs">Investing</Badge>
                    </div>
                    <CardTitle className="text-lg group-hover:text-green-600 transition-colors">
                        Start Investing with Just $25
                    </CardTitle>
                    <CardDescription>
                        Think you need thousands to start investing? Think again. Here's how to begin your wealth journey...
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">Dec 12, 2024</span>
                        <ArrowRight className="h-4 w-4 text-green-500 group-hover:translate-x-1 transition-transform" />
                    </div>
                </CardContent>
            </Card></SwiperSlide>

            <SwiperSlide><Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <div className="aspect-video bg-gradient-to-br from-green-600 to-yellow-500 rounded-t-lg flex items-center justify-center">
                    <Lightbulb className="h-12 w-12 text-white" />
                </div>
                <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                        <Clock className="h-4 w-4" />
                        <span>4 min read</span>
                        <Badge variant="secondary" className="text-xs">Credit</Badge>
                    </div>
                    <CardTitle className="text-lg group-hover:text-green-600 transition-colors">
                        5 Credit Score Hacks That Work
                    </CardTitle>
                    <CardDescription>
                        Boost your credit score by 100+ points in 90 days with these proven strategies...
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">Dec 10, 2024</span>
                        <ArrowRight className="h-4 w-4 text-green-500 group-hover:translate-x-1 transition-transform" />
                    </div>
                </CardContent>
            </Card></SwiperSlide>
            </Swiper>
        </div>
    )
}