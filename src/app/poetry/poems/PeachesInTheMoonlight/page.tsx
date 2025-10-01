import PoemLayout from "@/components/Poemlayout";

export default function PeachesInTheMoonlight() {
  return (
    <PoemLayout>
      <h1 className="text-3xl font-serif text-moonlight mb-4">Peaches in the Moonlight</h1>
      <p className="whitespace-pre-line leading-relaxed text-moonlight font-light">
        {`I look back and wish I had kissed you that night. \n
            My heart cries, it wouldn’t have been right. But it’s years later, and I still think of the waves, \n
            The ships on the other side of the sea. \n
            I close my eyes and send a silent plea. \n
            You meet everyone at the perfect time, that night wasn’t ours, it was mine. \n
            You held my hand and I knew things would be hard for a while \n
            Leave my life in shambles just to build something new. \n
            Years later, and I wish it would have been you. `}
      </p>
    </PoemLayout>
  );
}
