import Header from './header';

export default function ShopPage() {
    return (
      <div className="min-h-screen bg-[url('/images/parchment.png')] bg-cover bg-center text-black px-6 py-10">
        <Header />

        <div className="mt-10 flex flex=col md:flex-row justify-center items-center gap-10">
          <img
          src="book1.png"
          alt="Book 1"
          width={500}
          height={600}
          />

          <img
          src="book2.png"
          alt="Book 2"
          width={500}
          height={600}
          />
        </div>
      </div>
    );
  }