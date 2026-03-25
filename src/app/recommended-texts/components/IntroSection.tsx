//This file will be used for the iniital page the user will see after they click on the 'recommended texts' button
//This will have some basic text on it and maybe some effects.


export default function IntroSection () {
    return (
        <section className="flex h-screen snap-start items-center justify-center bg-white px-6 text-center">
            <p className="animate-pulse text-xl font-semibold tracking-[0.15em] text-black md:text-3xl">
                Scroll to explore recommended texts and click to download!
            </p>
        </section>
    )
}