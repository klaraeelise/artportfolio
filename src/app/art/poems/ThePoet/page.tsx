import PoemLayout from "@/components/Poemlayout";

export default function ThePoet() {
  return (
    <PoemLayout>
      <h1 className="text-3xl font-serif text-moonlight mb-4">The Poet</h1>
      <p className="whitespace-pre-line leading-relaxed text-moonlight font-light">
        {`I’m happy now, but at what cost? \n
            Is it just my words that I have lost?\n
            \n
            I used to find comfort in sadness, \n
            and entertainment in madness\n
            There was music in my head -\n
            with every word that i read \n
            played the sonnet of the lonely child \n
            about those who never got to be wild\n
            \n
            I used to be a poet, \n
            and now I’m merely a writer\n
                but the world - it’s so much brighter 
            now, \n
            and I’m happy for now, \n
            it lies at my feet \n
            none, and yet all, expectations to meet\n
            I’m supposed to be happy,\n
            but I don’t trust in happiness

            Because my mood - \n
            it changes like the seasons\n
            and this is one of all the reasons \n

            why I hate the summer, \n
            because the summer is fleeting, \n
            the abundance of light - depleting \n

            i’m happy for now but at what cost? \n
            because it’s more than just my words i’ve lost `}
      </p>
    </PoemLayout>
  );
}
