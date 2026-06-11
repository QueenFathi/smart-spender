import React from "react";
import { Clock, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Blog } from "./HomepageData";

interface Props {
    blog: Blog;
}

const BlogCard: React.FC<Props> = ({ blog }) => {
    const Icon = blog.icon;

    return (
        <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
            <div
                className={`aspect-video bg-linear-to-br ${blog.gradient} rounded-t-lg flex items-center justify-center`}
            >
                <Icon className="h-12 w-12 text-white" />
            </div>

            <CardHeader>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <Clock className="h-4 w-4" />
                    <span>{blog.readTime}</span>
                    <Badge className="text-xs">
                        {blog.category}
                    </Badge>
                </div>

                <CardTitle className="text-lg">
                    {blog.title}
                </CardTitle>

                <CardDescription>{blog.description}</CardDescription>
            </CardHeader>

            <CardContent>
                <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{blog.date}</span>
                    <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
                </div>
            </CardContent>
        </Card>
    );
};

export default BlogCard;
