import { userAtom, introAtom, loadingAtom } from '../utils/store';
import { useAtom } from 'jotai';
import Intro from './Home/Intro';
import Landing from './Home/Landing';
import Loading from './Home/Loading';
type Props = {};

function Main({}: Props) {
  const [user, setUser] = useAtom(userAtom);
  const [intro, setIntro] = useAtom(introAtom);
  const [loading, setLoading] = useAtom(loadingAtom);

  if (intro) {
    return <Intro />;
  }
  if (loading) {
    return <Loading />;
  }

  return <Landing />;
}

export default Main;
