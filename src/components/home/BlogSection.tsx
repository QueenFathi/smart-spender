"use client";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { blog } from "./HomepageData";
import BlogCard from "./BlogCard";

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
                {blog.map((blog) => (
                    <SwiperSlide key={blog.id}>
                        <BlogCard blog={blog} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}