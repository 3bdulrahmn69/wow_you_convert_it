import RepoBtn from './components/RepoBtn';
import Header from './components/Header';
import RenderArea from './components/RenderArea';

const App = () => {
  return (
    <main className="bg-cYellow min-h-screen text-white cursor-default overflow-hidden">
      <Header />
      <RenderArea />
      <RepoBtn />
    </main>
  );
};

export default App;
