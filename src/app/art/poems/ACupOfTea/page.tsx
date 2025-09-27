import PoemLayout from "@/components/Poemlayout";

export default function ACupOfTea() {
  return (
    <PoemLayout>
      <h1 className="text-3xl font-serif text-moonlight mb-4">A Cup of Tea</h1>
      <p className="whitespace-pre-line leading-relaxed text-moonlight font-light">
        {`It’s not the darkness where the nightmares are woven. \n
            It’s the brightest of days, where you find the darkest coven. \n
            The cruelest of people, they don’t hide in the shadow - They laugh in your face. \n
            They hand you their poison, disguised as well brewed tea. \n
            A broken promise, a lost dream. \n
            My love, nothing but a silent plea. \n
            Your love, nothing but a faint gleam.`}
      </p>
    </PoemLayout>
  );
}
