import Image from "next/image";
import { type SuccessStory } from "@/app/actions/success-stories";

interface SuccessStoriesSectionProps {
  stories: SuccessStory[];
}

export function SuccessStoriesSection({ stories }: SuccessStoriesSectionProps) {
  return (
    <section className="flex w-full flex-col items-center justify-center space-y-10 bg-surface py-20">
      <h2 className="text-4xl font-semibold text-foreground">
        Başarı Hikayelerimiz
      </h2>
      <div className="grid w-full max-w-screen-lg grid-cols-1 gap-8 px-4 sm:grid-cols-2 lg:grid-cols-3">
        {stories.map((story) => (
          <div
            key={story.id}
            className="group relative h-[430px] w-full overflow-hidden rounded-2xl bg-primary shadow-none transition-shadow hover:shadow-lg"
          >
            <Image
              src={story.image}
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              fill
              alt={story.title}
            />
            <div className="absolute inset-0 flex h-full w-full flex-col items-start justify-end bg-linear-to-t from-black/60 to-transparent px-6 py-6">
              <h4 className="text-xl font-semibold text-white">
                {story.title}
              </h4>
              <p className="text-sm text-white/80">{story.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
