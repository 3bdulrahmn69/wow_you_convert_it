import RepoBtn from './components/RepoBtn';
import Header from './components/Header';
import RenderArea from './components/RenderArea';
import Links from './components/Links';

const App = () => {
  return (
    <>
      <main className="bg-cYellow min-h-screen text-white cursor-default overflow-hidden">
        <Header />
        <RenderArea />
        <RepoBtn />
      </main>
      <div className="bg-cYellow flex justify-center items-center pb-8">
        <div className="bg-cOrange w-11/12 md:px-16 px-8 md:py-8 py-4 rounded-2xl flex flex-col items-center gap-4">
          <Links />
          <p className="text-white">
            BY:{'   '}
            <a
              href="https://3bdulrahmn.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-cYellow duration-300 text-lg"
            >
              Abdulrahman Moussa
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default App;
