import NewBook from "./book/NewBook";
import TableBook from "./book/TableBook";
import { ProvideUrl } from "./hooks/useUrl";
import MainPage from "./view/MainPage";

function App() {
  return (
    <ProvideUrl>
      <MainPage>
        <NewBook></NewBook>
        <TableBook></TableBook>
      </MainPage>
    </ProvideUrl>
  );
}

export default App;
