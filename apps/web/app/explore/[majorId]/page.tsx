"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { MAJOR_ARTICLES, STEM_FIELDS } from "@pathfinder/shared";
import ScrollProgress from "@/components/explore/ScrollProgress";
import ParallaxGlow from "@/components/explore/ParallaxGlow";
import HeroSection from "@/components/explore/HeroSection";
import ArticleSection from "@/components/explore/ArticleSection";
import CoursePills from "@/components/explore/CoursePills";
import DayTimeline from "@/components/explore/DayTimeline";
import ImpactCallouts from "@/components/explore/ImpactCallouts";
import SkillPills from "@/components/explore/SkillPills";
import WorkplaceCarousel from "@/components/explore/WorkplaceCarousel";
import SalaryChart from "@/components/explore/SalaryChart";
import GrowthCallout from "@/components/explore/GrowthCallout";
import MajorNavFooter from "@/components/explore/MajorNavFooter";
import FieldBadge from "@/components/explore/FieldBadge";

export default function MajorDetailPage() {
  const params = useParams();
  const majorId = params.majorId as string;

  const majorIndex = MAJOR_ARTICLES.findIndex((m) => m.id === majorId);
  const major = MAJOR_ARTICLES[majorIndex];

  if (!major) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-text-secondary mb-4">Major not found.</p>
          <Link href="/explore" className="btn-primary">
            Browse All Majors
          </Link>
        </div>
      </main>
    );
  }

  const field = STEM_FIELDS.find((f) => f.id === major.fieldId);
  const color = field?.color || "#7C5CFC";

  const prev = majorIndex > 0 ? MAJOR_ARTICLES[majorIndex - 1] : null;
  const next = majorIndex < MAJOR_ARTICLES.length - 1 ? MAJOR_ARTICLES[majorIndex + 1] : null;

  return (
    <>
      <ScrollProgress color={color} />
      <ParallaxGlow color={color} />

      <main className="min-h-screen px-4 py-6 relative z-10">
        {/* Sticky top bar */}
        <div className="sticky top-1 z-30 max-w-2xl mx-auto mb-6">
          <div className="bg-surface-secondary/90 backdrop-blur-lg border border-border-primary rounded-xl px-4 py-2.5 flex items-center justify-between">
            <Link href="/explore" className="text-sm text-text-tertiary hover:text-text-secondary transition-colors">
              ← All Majors
            </Link>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-text-primary">{major.icon} {major.title}</span>
            </div>
            <FieldBadge fieldId={major.fieldId} />
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Hero */}
          <HeroSection major={major} color={color} />

          {/* What You'd Study */}
          <ArticleSection title="What You'd Study">
            <CoursePills courses={major.whatYoudStudy} color={color} />
          </ArticleSection>

          {/* A Day in Your Future Life */}
          <ArticleSection title="A Day in Your Future Life">
            <DayTimeline typicalDay={major.typicalDay} color={color} />
          </ArticleSection>

          {/* Real-World Impact */}
          <ArticleSection title="Real-World Impact">
            <ImpactCallouts realWorldImpact={major.realWorldImpact} color={color} />
          </ArticleSection>

          {/* Skills You'd Build */}
          <ArticleSection title="Skills You'd Build">
            <SkillPills skills={major.skills} color={color} />
          </ArticleSection>

          {/* Where You'd Work */}
          <ArticleSection title="Where You'd Work">
            <WorkplaceCarousel workplaces={major.whereYoudWork} color={color} />
          </ArticleSection>

          {/* The Money Talk */}
          <ArticleSection title="The Money Talk">
            <SalaryChart salary={major.salary} color={color} />
          </ArticleSection>

          {/* Growth Outlook */}
          <ArticleSection title="Growth Outlook">
            <GrowthCallout growthOutlook={major.growthOutlook} color={color} />
          </ArticleSection>

          {/* Prev/Next + CTA */}
          <MajorNavFooter prev={prev} next={next} />
        </div>
      </main>
    </>
  );
}
