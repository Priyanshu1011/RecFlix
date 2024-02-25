import Image from "next/image";
import { features } from "@/data/features";
import FeatureCard from "@/components/Home/FeatureCard";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      {/* Hero section */}
      <section className="flex flex-col justify-around items-center text-center gap-y-4 my-4">
        <Image src="/assets/images/logo.png" width={160} height={50} priority />
        <h2 className="text-2xl">Entertainment Recommendation System</h2>
        <p className="text-md">
          Want some entertainment? We've got the right recommendations!
        </p>
        <Image
          src="/assets/images/hero-img-3.png"
          width={900}
          height={450}
          priority
          className="no_select"
        />
      </section>

      {/* Features section */}
      <section
        id="features"
        className="flex flex-col justify-around items-center text-center gap-y-10 mt-10 mb-6"
      >
        <h2 className="text-4xl font-bold">What We Offer</h2>
        <div className="flex flex-row justify-center items-center flex-wrap gap-y-8 md:gap-x-8 lg:gap-x-14 lg:gap-y-0">
          {features.map((feature) => (
            <FeatureCard
              key={feature.key}
              title={feature.title}
              content={feature.content}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
