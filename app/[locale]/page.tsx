import { getTestimonials } from "@/app/actions/testimonials";
import { getCourses } from "@/app/actions/courses";
import { getSuccessStories } from "@/app/actions/success-stories";
import { getFaqItems } from "@/app/actions/faq";
import { TestimonialsSection } from "./components/sections/testimonials-section";
import { Navbar } from "./components/navbar";
import { HeroSection } from "./components/sections/hero-section";
import { StepsSection } from "./components/sections/steps-section";
import { ActiveCoursesSection } from "./components/sections/active-courses-section";
import { SuccessStoriesSection } from "./components/sections/success-stories-section";
import { FaqSection } from "./components/sections/faq-section";
import { CTASection } from "./components/sections/cta-section";
import { Footer } from "./components/footer";

export default async function LandingPage() {
  const [testimonials, courses, successStories, faqItems] = await Promise.all([
    getTestimonials(),
    getCourses(),
    getSuccessStories(),
    getFaqItems(),
  ]);

  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <StepsSection />
      <ActiveCoursesSection courses={courses} />
      <SuccessStoriesSection stories={successStories} />
      <TestimonialsSection testimonials={testimonials} />
      <FaqSection faqItems={faqItems} />
      <CTASection />
      <Footer />
    </main>
  );
}
