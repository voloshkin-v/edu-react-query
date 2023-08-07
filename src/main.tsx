import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import App from './components/App.tsx';

import './index.css';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<QueryClientProvider client={queryClient}>
				<App />

				<ReactQueryDevtools
					initialIsOpen={false}
					position="bottom-right"
				/>
			</QueryClientProvider>
		</BrowserRouter>
	</React.StrictMode>
);
