import PoemLayout from "@/components/Poemlayout";

export default function ThePoet() {
  return (
    <PoemLayout>
      <h1 className="text-3xl font-serif text-moonlight mb-4">The Smell of Winter</h1>
      <p className="whitespace-pre-line leading-relaxed text-moonlight font-light">
        {`This is finally a poem for you. \n
            So familiar, and yet so new. \n
            The words, they’re only dripping like rain. \n
            Slow and steady, but enough to fill a lake.\n 
            The smell of winter feels like coming home, \n
            and it all makes me feel so much less alone. \n
            I paint a picture - nonchalant and blue. \n
            But really, none of it is true. \n
            And I can’t do it, not like this. \n
            To have you half, \n
            but it’s still too much to miss. \n
            I’m scared to dream, because dreams don’t come true.\n
            Even though, all I want to dream - it’s  you. \n
            You make me so happy and my heart so sore. \n
            Because you’re just my friend, but to me -  a little more. \n
            So this finally is a poem for you.\n
            And now I can write it without faking, \n
            because I only write when my heart is breaking.\n
            `}
      </p>
    </PoemLayout>
  );
}
