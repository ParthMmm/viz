import Link from 'next/link';

type Props = {};

function Navbar({}: Props) {
  return (
    <nav>
      <div className='sticky top-0 z-10 '>
        <div className='container mx-auto max-w-screen-xl p-5'>
          <div className='flex flex-row items-center justify-between align-middle sm:h-16 lg:pt-4'>
            <h1 className='text-4xl font-bold italic tracking-tight text-purple-400 md:text-6xl'>
              <Link href='/'>viz</Link>
            </h1>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
