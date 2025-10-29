import React from "react";
import { Blog } from "./HomepageData";
import { Clock, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Props {
    blog: Blog;
}

const BlogCard: React.FC<Props> = ({ blog }) => {
    const Icon = blog.icon;

    return (
        <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
            <div
                className={`aspect-video bg-gradient-to-br ${blog.gradient} rounded-t-lg flex items-center justify-center`}
            >
                <Icon className="h-12 w-12 text-white" />
            </div>

            <CardHeader>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <Clock className="h-4 w-4" />
                    <span>{blog.readTime}</span>
                    <Badge variant="secondary" className="text-xs">
                        {blog.category}
                    </Badge>
                </div>

                <CardTitle className="text-lg group-hover:text-green-600 transition-colors">
                    {blog.title}
                </CardTitle>

                <CardDescription>{blog.description}</CardDescription>
            </CardHeader>

            <CardContent>
                <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{blog.date}</span>
                    <ArrowRight className="h-4 w-4 text-green-500 group-hover:translate-x-1 transition-transform" />
                </div>
            </CardContent>
        </Card>
    );
};

export default BlogCard;
