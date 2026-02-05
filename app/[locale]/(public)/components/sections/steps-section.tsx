export function StepsSection() {
  const steps = [
    {
      number: "1",
      title: "Ders Hedeflerini Belirleyin",
      description:
        "Kazanmak istediğiniz becerileri tanımlayın ve yol haritanızı oluşturun.",
    },
    {
      number: "2",
      title: "Eğitmeni Seçin",
      description: "İhtiyaçlarınıza ve programınıza uygun eğitmeni bulun.",
    },
    {
      number: "3",
      title: "Ders Planınızı Takip Edin",
      description: "Ders takviminizi görüntüleyin ve adım adım ilerleyin.",
    },
  ];

  return (
    <section className="flex w-full flex-col items-center justify-center space-y-14 bg-secondary py-20">
      <div className="flex w-full max-w-screen-xl items-center justify-center px-4">
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col space-y-3 border-l-2 border-secondary-foreground/30 pl-6"
            >
              <div className="text-6xl font-bold text-secondary-foreground">
                {step.number}
              </div>
              <h4 className="text-xl font-semibold text-secondary-foreground">
                {step.title}
              </h4>
              <p className="text-base text-secondary-foreground/80">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
