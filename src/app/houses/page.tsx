import Header from "./header";

export default function HousesPage() {
  return (
<div className="min-h-screen bg-[url('/images/parchment.png')] bg-cover bg-center text-black px-6 py-10">

      <Header />

      <div className="max-w-7xl mx-auto mt-12">

        <div className="grid md:grid-cols-2 gap-16 font-serif text-lg leading-relaxed">
          <div>
            <h2 className="text-2xl font-bold text-center mb-4 uppercase tracking-wide">
              House of Wisdom
            </h2>
            <p>
              Oh, students of the House of Wisdom … how you often ask why?!
              There is no amount of answers that will satisfy your need to know.
              You are the ones of deep thought, the critical thinkers. You do not
              accept the answer purely to keep you quiet. You are a truth-seeker,
              a reader, a revealer of facts. Puzzles are your toys, and the world
              is your oyster. You will explore the corners of the globe, knowing
              that only then will you be able to find the answers you seek. You
              ask the Five Questions of 'Why' and never accept a first answer.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-center mb-4 uppercase tracking-wide">
              House of the Wild
            </h2>
            <p>
              You walk softly, save snails, and take care of the wild spaces.
              Animal lovers often find themselves in the House of the Wild, for
              you are the carers of the Earth, the nurturers, friends of the Fae
              and the wildlings. You are the keepers of the oceans and the
              saviours of the deep. You talk to the trees and say 'good morning'
              to the birds, knowing that when they tip their head, they say ‘good
              morning’ to you.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-center mb-4 uppercase tracking-wide">
              House of Wonder
            </h2>
            <p>
              Creative sorts will find themselves here, amid dusty tomes and ink
              splotches. You are the makers, the menders, the ones to come to
              when something is needed. You are a problem-solver, but you
              communicate in different ways: through pencil and paint, through
              crafting and woodwork. You are the writers, the dreamers, the ones
              who fill bookshelves with tales beyond imagining. You play with
              dragons and soar the skies on the backs of eagles, painting a sky
              full of wonder.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-center mb-4 uppercase tracking-wide">
              House of the Watch
            </h2>
            <p>
              You are the honest, the brave, and the true. You seek to speak up
              when others stay quiet, knowing that your voice is a sharp as a
              weapon. You are not afraid to stand up for those who cannot stand
              themselves. You are unflinchingly honest, yet know that the best way
              to win a war of words is with kindness and compassion. People turn
              to you when they are in need, knowing that in you there is a true
              friend, and there is someone not afraid to stand up for what is
              right.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
