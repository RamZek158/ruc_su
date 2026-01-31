import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import ForeignStudents from './components/ForeignStudents';
import MilitaryRegistration from './components/MilitaryRegistration';
import DocumentOrder from './components/DocumentOrder';
import { PageRoute } from './types';

const App: React.FC = () => {
  // Simple state-based routing to mimic a sub-section of a larger site
  // without needing react-router-dom complexity for this specific task.
  const [activeRoute, setActiveRoute] = useState<PageRoute>(PageRoute.FOREIGN_STUDENTS);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeRoute]);

  const renderContent = () => {
    switch (activeRoute) {
      case PageRoute.FOREIGN_STUDENTS:
        return <ForeignStudents />;
      case PageRoute.MILITARY_REGISTRATION:
        return <MilitaryRegistration />;
      case PageRoute.DOCUMENT_ORDER:
        return <DocumentOrder />;
      default:
        return <ForeignStudents />;
    }
  };

  return (
    <Layout activeRoute={activeRoute} onNavigate={setActiveRoute}>
      {renderContent()}
    </Layout>
  );
};

export default App;