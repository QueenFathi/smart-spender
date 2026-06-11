import React from "react";
import { CheckCircle } from "lucide-react";
import AnimatedSection from "@/components/global/AnimatedSection";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Features } from "./HomepageData";

interface Props {
    feature: Features;
}

const FeaturesCard: React.FC<Props> = ({ feature }) => {
    const Icon = feature.icon;

    return (
        <AnimatedSection>
            <Card
                className={`group border-2 border-transparent ${feature.borderColor} transition-all duration-300 hover:shadow-md hover:-translate-y-1 rounded-2xl`}
            >
                <CardHeader>
                    <div
                        className={`me-auto mb-5 p-3 rounded-full bg-linear-to-r ${feature.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}
                    >
                        <Icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-3 text-sm">
                        {feature.features.map((feature, index) => (
                            <li key={index} className="flex items-center gap-3">
                                <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center">
                                    <CheckCircle className="h-4 w-4 text-primary" />
                                </div>
                                {feature}
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </AnimatedSection>
    );
};

export default FeaturesCard;
