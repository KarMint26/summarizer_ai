const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <div className="flex justify-center items-center gap-3">
          <img
            src='/icon-summarizer.svg'
            alt='sumz-logo'
            className='w-16 object-contain'
          />
          <h1 className='font-bold font-satoshi text-2xl'>Sumz AI</h1>
        </div>

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/KarMint26/summarizer_ai")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='orange_gradient'>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
        Simplify your reading with Summize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;
