import { Content } from "components/Content";
import { Topbar } from "components/Topbar";

import { useFilterContext } from "context/filter";
import { useHomesContext } from "context/homes";

function App() {
  const {
    error: filterCtxError
  } = useFilterContext();

  const {
    error: homesCtxError
  } = useHomesContext();

  const hasErrorFromApi = filterCtxError || homesCtxError;

  if (hasErrorFromApi) {
    return (
      <main className="Funny-Error">
        <h1>Oops, an error has occurred!</h1>
        <p>Well that's unexpected and <strong>never</strong> happens.</p>
        <p>
          The gnomes wizards are trying to figure out what happened and this page will come back shortly,
          take this time to relax and perhaps do something that you always promised that you would do.
        </p>
      </main>
    )
  }

  return (
    <main className="App">
      <Topbar />
      <Content />
    </main>
  );
}

export default App;
