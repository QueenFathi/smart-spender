import React from "react";
import { Features } from "./HomepageData";
import { CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import AnimatedSection from "@/components/global/AnimatedSection";

interface Props {
    feature: Features;
}

const FeaturesCard: React.FC<Props> = ({ feature }) => {
    const Icon = feature.icon;

    return (
        <AnimatedSection>
            <Card
                className={`group border-2 border-transparent ${feature.borderColor} transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
            >
                <CardHeader className="text-center">
                    <div
                        className={`mx-auto mb-4 h-16 w-16 rounded-full bg-gradient-to-r ${feature.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}
                    >
                        <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-3 text-sm">
                        {feature.features.map((feature, index) => (
                            <li key={index} className="flex items-center gap-3">
                                <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center">
                                    <CheckCircle className="h-4 w-4 text-green-500" />
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
