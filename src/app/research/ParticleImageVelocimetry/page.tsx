import ResearchLayout from "@/components/ResearchLayout";

export default function WaveIcePage() {
  return (
    <ResearchLayout>
      <h1 className="text-3xl font-serif text-biolume mb-4">Wave-Ice Interaction Research</h1>

      <p className="leading-relaxed mb-4">
        During two research stays at the University of Tokyo, I investigated how orbital wave motion is affected by the formation of sea ice.
        I developed a particle image velocimetry (PIV) setup using algae as tracer particles and conducted experimental observations throughout
        the freezing process.
      </p>

      <p className="leading-relaxed mb-4">
        In 2022 I achieved initial qualitative results; in 2023, I extended the setup and evaluated particle suitability across species.
        The project bridges physics, fluid mechanics, and biological material behaviour in cryo-conditions.
      </p>

      <p className="text-sm text-right italic text-glow/80">
        Method: Particle Image Velocimetry • Tools: MATLAB, ImageJ • Location: Kashiwa Campus, University of Tokyo
      </p>
    </ResearchLayout>
  );
}
