import { Question } from './quizTypes';


//stores all of the questions and answer options
export const questions: Question[] = [
    {
        id: 1,
        question: 'You find a small glowing compass buried in the school field. It spins wildly when you touch it. You...',
        options: [
            { label: 'A', text: 'Study it carefully — there must be a pattern.' },
            { label: 'B', text: 'Follow wherever it points, even if it’s straight into the unknown.' },
            { label: 'C', text: 'Feel its warmth and wonder who might have lost it.' },
            { label: 'D', text: ' Take it straight to your teacher — adventure can wait till after lunch.' },
        ],
    },

    {
        id: 2,
        question: 'Someone tells you that curiosity is dangerous. You…',
        options: [
            { label: 'A', text: 'Ask why they think that — and then ask three more questions.' },
            { label: 'B', text: 'Laugh. If curiosity’s dangerous, you’re already in trouble.' },
            { label: 'C', text: 'Feel quietly defiant — the best discoveries come from brave hearts.' },
            { label: 'D', text: 'Wander off to see if it’s true.' },
        ],
    },

    {
        id: 3,
        question: 'You’re given one extraordinary power for a day. You choose…',
        options: [
            { label: 'A', text: 'The ability to see every possible outcome before you decide.' },
            { label: 'B', text: 'The courage to do what’s right, even when you’re scared.' },
            { label: 'C', text: 'The gift to speak with animals and trees.' },
            { label: 'D', text: 'The skill to invent something no one’s ever imagined before.' },
        ],
    },

    {
        id: 4,
        question: 'A secret door appears in the library. The sign reads: “For the Brave, the Curious, and the Kind.” You…',
        options: [
            { label: 'A', text: 'Take notes first. A secret door deserves documentation.' },
            { label: 'B', text: 'Charge through — doors are made for opening!' },
            { label: 'C', text: 'Knock politely. There might be someone (or something) inside.' },
            { label: 'D', text: ' Stand back, grin, and ask, “Who’s coming with me?”' },
        ],
    },

    {
        id: 5,
        question: 'Your best friend admits they’re afraid of something big. You…',
        options: [
            { label: 'A', text: 'Listen carefully and help them find the real reason behind the fear.' },
            { label: 'B', text: 'Hold their hand and stand beside them until they feel strong again.' },
            { label: 'C', text: 'Distract them with a walk outside — the sky always helps.' },
            { label: 'D', text: 'Come up with a plan. Fear doesn’t stand a chance against strategy.' },
        ],
    },

    {
        id: 6,
        question: 'Which object feels most like you?',
        options: [
            { label: 'A', text: 'A magnifying glass that glows when someone asks a good question.' },
            { label: 'B', text: 'A flaming torch that never goes out.' },
            { label: 'C', text: 'A seed that grows faster when you whisper to it.' },
            { label: 'D', text: 'A pen that writes stories of everything it sees.' },
        ],
    },

    {
        id: 7,
        question: 'Your perfect afternoon would be spent…',
        options: [
            { label: 'A', text: 'Solving a mystery with friends.' },
            { label: 'B', text: 'Exploring a forest or an old ruin.' },
            { label: 'C', text: 'Sketching, dreaming, or making something wonderful.' },
            { label: 'D', text: 'Training for an epic quest — or planning one.' },
        ],
    },
];