import * as React from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {NavigationContainer} from '@react-navigation/native';
import PublicRoutes from './src/routes/PublicRoutes';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <PublicRoutes />
      </NavigationContainer>
    </QueryClientProvider>
  );
};
export default App;
