import { ServiceProvider } from '@xyz/lib-ui-core';
import { SharedPage } from '@xyz/ui-search';
import { Greeting } from './pages/greeting';

export function App() {
  return (
    <ServiceProvider>
      <Greeting />
      <SharedPage />
    </ServiceProvider>
  );
}
