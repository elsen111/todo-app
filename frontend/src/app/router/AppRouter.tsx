import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import HomePage from "../../pages/public/HomePage"
import AuthPage from "../../pages/public/auth/AuthPage"
import ForgotPasswordPage from "../../pages/public/auth/ForgotPasswordPage"
import DashboardLayout from "../layouts/DashboardLayout"
import DashboardHomePage from "../../pages/dashboard/DashboardHomePage"
import TodosPage from "../../pages/dashboard/TodosPage"
import StatisticsPage from "../../pages/dashboard/StatisticsPage"
import CalendarPage from "../../pages/dashboard/CalendarPage"
import SettingsPage from "../../pages/dashboard/SettingsPage"
import SecurityTab from "../../components/settings/SecurityTab"
import NotificationsTab from "../../components/settings/NotificationsTab"
import AccountTab from "../../components/settings/AccountTab"
import NotFoundPage from "../../pages/public/NotFoundPage"
import ProfileTab from "../../components/settings/ProfileTab"

const AppRouter = () => {
  return (
    <BrowserRouter>    
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<HomePage />} />

        {/* Auth Pages */}
        <Route path="/login" element={<AuthPage />} />
        <Route path="/register" element={<AuthPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        
        {/* Protected (Dashboard Pages) */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHomePage />} />
          <Route path="todos" element={<TodosPage />} />
          <Route path="statistics" element={<StatisticsPage />} />
          <Route path="calendar" element={<CalendarPage />} />
          <Route path="settings" element={<SettingsPage />}>
            <Route index element={<Navigate to="profile" replace />} />

            <Route path="profile" element={<ProfileTab />} />
            <Route path="security" element={<SecurityTab />} />
            <Route path="notifications" element={<NotificationsTab />} />
            <Route path="account" element={<AccountTab />} />
          </Route>
        </Route>

          <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter