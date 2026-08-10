import { useEffect } from 'react';
import LegacyPage from './LegacyPage.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Agents from './pages/Agents.jsx';
import Blog from './pages/Blog.jsx';
import Contact from './pages/Contact.jsx';
import Payment from './pages/Payment.jsx';
import Properties from './pages/Properties.jsx';
import PropertyDetails from './pages/PropertyDetails.jsx';

const pages = {
  '/': Home,
  '/about': About,
  '/agents': Agents,
  '/blog': Blog,
  '/contact': Contact,
  '/payment': Payment,
  '/properties': Properties,
  '/property-details': PropertyDetails,
};

export { LegacyPage };

export default function App() {
  useEffect(() => {
    if (window.location.pathname.endsWith('.html')) {
      const clean = window.location.pathname.replace(/\.html$/, '') || '/';
      window.history.replaceState({}, '', `${clean}${window.location.search}${window.location.hash}`);
    }
  }, []);
  const route = window.location.pathname.replace(/\.html$/, '').replace(/\/$/, '') || '/';
  const Page = pages[route] || Home;
  return <Page />;
}
