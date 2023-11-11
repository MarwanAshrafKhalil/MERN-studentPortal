// import React, { useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import { useNavigate, Routes, Route, Navigate } from 'react-router-dom';
// import HomeScreens from './screens/HomeScreens';
// import LoginScreen from './screens/LoginScreen';
// import SearchScreen from './screens/SearchScreen';
// import WatchScreen from './screens/WatchScreen';
// import SubscriptionsScreen from './screens/SubscriptionsScreen';
// import ChannelScreen from './screens/ChannelScreen';
// import Header from './components/Header';
// import Sidebar from './components/Sidebar';

// const Layout: React.FC = ({ children }) => {
//   const [sidebar, toggleSidebar] = React.useState(false);

//   const handleToggleSidebar = () => {
//     toggleSidebar((value) => !value);
//   };

//   return (
//     <>
//       <Header handleToggleSidebar={handleToggleSidebar} />
//       <div className="app__container">
//         <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
//         <div className="app__main">{children}</div>
//       </div>
//     </>
//   );
// };

// const App: React.FC = () => {
//   const { accessToken, loading } = useSelector((state: any) => state.auth);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!loading && !accessToken) {
//       navigate('/auth');
//     }
//   }, [accessToken, loading, navigate]);

//   return (
//     <Routes>
//       <Route path="/" element={<Layout><HomeScreens /></Layout>} />
//       <Route path="/auth" element={<LoginScreen />} />
//       <Route path="/search/:query" element={<Layout><SearchScreen /></Layout>} />
//       <Route path="/watch/:id" element={<Layout><WatchScreen /></Layout>} />
//       <Route path="/feed/subscriptions" element={<Layout><SubscriptionsScreen /></Layout>} />
//       <Route path="/channel/:channelId" element={<Layout><ChannelScreen /></Layout>} />
//       <Route path="*" element={<Navigate to="/" />} />
//     </Routes>
//   );
// };

// export default App;
