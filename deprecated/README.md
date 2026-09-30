# 📝 Todo Productivity App

A full-stack personal productivity application designed to help users organize tasks, manage deadlines, track productivity, and receive timely notifications.

The application provides secure authentication, OTP-based password recovery, todo management, search and filtering, calendar views, reminders, email notifications, productivity statistics, and personal account settings.

> **Project scope:** Personal productivity application.
> No admin panel, admin role, team management, or image upload functionality.

---

## 📋 Table of Contents

* [Overview](#-overview)
* [Features](#-features)
* [Application Structure](#-application-structure)
* [User Flow](#-user-flow)
* [Frontend](#-frontend)
* [Backend](#-backend)
* [Database](#-database)
* [Authentication](#-authentication)
* [Todo Management](#-todo-management)
* [Search & Filtering](#-search--filtering)
* [Calendar](#-calendar)
* [Email & Notifications](#-email--notifications)
* [Dashboard](#-dashboard)
* [Statistics](#-statistics)
* [User Settings](#-user-settings)
* [REST API](#-rest-api)
* [Security](#-security)
* [Validation & Error Handling](#-validation--error-handling)
* [Testing](#-testing)
* [Docker & Deployment](#-docker--deployment)
* [Development Phases](#-development-phases)
* [Final Feature Scope](#-final-feature-scope)

---

# 🎯 Overview

Todo Productivity App is a personal task-management application where each user can manage their own tasks and productivity data.

Users can:

* Create an account
* Log in securely
* Recover forgotten passwords using OTP
* Create and manage todos
* Set priorities and statuses
* Add categories and tags
* Set deadlines and reminders
* Search, filter, and sort todos
* View todos on a calendar
* Receive email reminders
* Track productivity statistics
* Manage their profile
* Manage notification preferences
* Change their password
* Delete their own account

Each user's data is isolated from other users.

---

# ✨ Features

## 🔐 Authentication

* User registration
* User login
* User logout
* JWT authentication
* Refresh tokens
* Email verification
* Forgot password
* OTP verification
* Password reset
* Change password

## ✅ Todo Management

* Create todo
* View todo
* Edit todo
* Delete todo
* Mark todo as completed
* Change todo status
* Set priority
* Set due date
* Set due time
* Set reminder
* Add description
* Add categories
* Add tags
* Recurring todos

## 🔎 Search & Filtering

* Search by title
* Search by description
* Filter by status
* Filter by priority
* Filter by category
* Filter by date
* Filter overdue todos
* Filter today's todos
* Filter upcoming todos
* Sort by due date
* Sort by priority
* Sort by creation date
* Pagination

## 📅 Calendar

* Monthly calendar
* Weekly calendar
* Daily calendar
* Display todos by date
* Open todo details from calendar

## 📧 Email & Notifications

* Password reset OTP
* Todo deadline reminders
* Overdue todo notifications
* Daily productivity summary
* Weekly productivity summary
* Security notifications
* Notification preferences

## 📊 Productivity

* Dashboard
* Total todo count
* Completed todo count
* Pending todo count
* Overdue todo count
* Completion rate
* Productivity trends
* Status statistics
* Priority statistics
* Completion history

## 👤 Profile & Settings

* View profile
* Update name
* Update email
* Change password
* Manage notification preferences
* Delete own account

---

# 🏗 Application Structure

The application consists of two main areas.

```text
PUBLIC AREA
│
├── Landing Page
├── Login
├── Register
├── Forgot Password
├── OTP Verification
└── Reset Password
```

```text
AUTHENTICATED AREA
│
├── Dashboard
│
├── Todos
│   ├── All Todos
│   ├── Create Todo
│   ├── Todo Details
│   └── Edit Todo
│
├── Calendar
│
├── Statistics
│
└── Settings
    ├── Profile
    ├── Security
    ├── Notifications
    └── Account
```

---

# 🌐 Frontend

## Public Pages

### Landing Page

```text
/
```

The landing page introduces the application and its main features.

### Sections

* Hero
* Features
* How It Works
* Call to Action
* Footer

Example:

```text
Organize your day.
Get things done.

A simple and powerful todo manager
designed to help you organize tasks,
stay focused, and never miss a deadline.

[Get Started] [Login]
```

---

## Login

```text
/login
```

### Fields

* Email
* Password
* Remember Me

### Actions

* Login
* Forgot Password
* Register

---

## Register

```text
/register
```

### Fields

* Name
* Email
* Password
* Confirm Password

### Validation

* Required fields
* Valid email
* Password strength
* Password confirmation

---

## Forgot Password

```text
/forgot-password
```

Users enter their email address to receive an OTP.

```text
Forgot your password?

Enter your email address and we'll
send you a verification code.

Email
[________________]

[Send OTP]
```

---

## OTP Verification

```text
/verify-otp
```

Users enter the OTP received by email.

```text
Enter verification code

We've sent a 6-digit code to
example@email.com

[ _ ][ _ ][ _ ][ _ ][ _ ][ _ ]

Code expires in 05:00

[Verify]

Didn't receive the code?
Resend code
```

### Security

* OTP expiration
* Maximum verification attempts
* Resend cooldown
* OTP invalidation after successful verification
* Hashed OTP storage

---

## Reset Password

```text
/reset-password
```

### Fields

* New Password
* Confirm Password

After successful reset:

```text
Password successfully changed.

[Go to Login]
```

---

# 🔒 Authenticated Application

After successful authentication, users are redirected to:

```text
/dashboard
```

The authenticated layout consists of:

```text
┌───────────────────────────────────────────────┐
│ Sidebar                  Topbar               │
│                                               │
│ Dashboard                Search               │
│ Todos                    Notifications        │
│ Calendar                 Profile              │
│ Statistics                                    │
│                                               │
│ Settings                                      │
│                                               │
│                    Main Content               │
│                                               │
└───────────────────────────────────────────────┘
```

---

# 📊 Dashboard

```text
/dashboard
```

The dashboard provides a quick overview of the user's productivity.

## Statistics Cards

```text
┌────────────┐ ┌────────────┐ ┌────────────┐ ┌────────────┐
│ Total      │ │ Completed  │ │ Pending    │ │ Overdue    │
│ 42         │ │ 28         │ │ 12         │ │ 2          │
└────────────┘ └────────────┘ └────────────┘ └────────────┘
```

## Dashboard Sections

* Total todos
* Completed todos
* Pending todos
* Overdue todos
* Completion rate
* Today's tasks
* Upcoming tasks
* Productivity chart

---

# ✅ Todo Pages

## Todo List

```text
/todos
```

### Header

```text
My Todos

[+ Create Todo]
```

### Search

```text
🔍 Search todos...
```

### Filters

```text
Status       [All ▼]
Priority     [All ▼]
Category     [All ▼]
Date         [All ▼]
Sort         [Due Date ▼]
```

### Date Filters

* All
* Today
* Tomorrow
* This Week
* Overdue
* Custom Range

---

# ➕ Create Todo

```text
/todos/new
```

### Fields

* Title
* Description
* Status
* Priority
* Category
* Tags
* Due Date
* Due Time
* Reminder
* Recurrence

Example:

```text
Title
[____________________________]

Description
[____________________________]

Status
[TODO ▼]

Priority
[MEDIUM ▼]

Category
[Select Category ▼]

Tags
[Java] [Backend] [+]

Due Date
[2026-10-01]

Due Time
[18:00]

Reminder
[1 hour before ▼]

Recurring
[Does not repeat ▼]

[Cancel] [Create Todo]
```

---

# ✏️ Edit Todo

```text
/todos/:id/edit
```

The edit page contains the same fields as the create page, populated with the existing todo data.

---

# 🔍 Todo Details

```text
/todos/:id
```

Displays:

* Title
* Description
* Status
* Priority
* Category
* Tags
* Due date
* Due time
* Reminder
* Recurrence
* Created date
* Updated date
* Completed date

Actions:

* Edit
* Complete
* Delete

---

# 📅 Calendar

```text
/calendar
```

Calendar views:

* Month
* Week
* Day

Todos are displayed according to their due dates.

Clicking a todo opens its details.

The frontend can retrieve todos for a date range:

```http
GET /api/todos?from=2026-09-01&to=2026-09-30
```

---

# 📈 Statistics

```text
/statistics
```

## Statistics

### Completion Rate

```text
Completed / Total
```

### Todos by Status

```text
TODO
IN_PROGRESS
COMPLETED
```

### Todos by Priority

```text
LOW
MEDIUM
HIGH
```

### Productivity Trends

Available periods:

* Last 7 days
* Last 30 days
* Last 3 months

### Completion History

Display the number of completed todos per day/week.

---

# ⚙️ Settings

```text
/settings
```

Settings are divided into:

```text
Profile
Security
Notifications
Account
```

---

## 👤 Profile

```text
/settings/profile
```

### Fields

* Name
* Email

### Actions

```text
[Save Changes]
```

No profile image upload is included.

---

## 🔐 Security

```text
/settings/security
```

### Change Password

Fields:

* Current Password
* New Password
* Confirm New Password

### Optional

* Logout from all devices
* Last password change

---

## 🔔 Notifications

```text
/settings/notifications
```

### Email Notifications

```text
☑ Todo deadline reminders
☑ Overdue todo notifications
☐ Daily productivity summary
☐ Weekly productivity summary
```

Security-related emails such as password-reset OTPs remain transactional.

---

## ⚠️ Account

```text
/settings/account
```

### Delete Account

```text
Delete Account

Deleting your account will permanently remove
your todos and personal data.

[Delete My Account]
```

Recommended flow:

```text
Delete Account
      ↓
Enter Password
      ↓
Confirm
      ↓
Account Deleted
      ↓
Logout
      ↓
Landing Page
```

---

# 🛠 Backend

Recommended backend architecture:

```text
Controller
    ↓
Service
    ↓
Repository
    ↓
Database
```

With DTOs:

```text
Request
   ↓
Controller
   ↓
Request DTO
   ↓
Service
   ↓
Entity
   ↓
Repository
   ↓
Database
```

---

# 📁 Backend Structure

```text
src/main/java/com/todoapp
│
├── auth
│   ├── controller
│   ├── service
│   ├── dto
│   └── security
│
├── user
│   ├── controller
│   ├── service
│   ├── repository
│   ├── entity
│   └── dto
│
├── todo
│   ├── controller
│   ├── service
│   ├── repository
│   ├── entity
│   ├── dto
│   └── specification
│
├── category
│   ├── controller
│   ├── service
│   ├── repository
│   └── entity
│
├── tag
│   ├── controller
│   ├── service
│   ├── repository
│   └── entity
│
├── notification
│   ├── controller
│   ├── service
│   └── entity
│
├── email
│   ├── service
│   └── template
│
├── statistics
│   ├── controller
│   └── service
│
├── security
│   ├── jwt
│   ├── filter
│   └── config
│
└── common
    ├── exception
    ├── validation
    ├── response
    └── config
```

---

# 🗄️ Database

The initial database consists of:

```text
users
password_reset_otps
refresh_tokens
todos
categories
tags
todo_tags
notification_preferences
```

Optional:

```text
email_logs
```

---

# 👤 Users

```text
users
────────────────────────
id
name
email
password
enabled
email_verified
created_at
updated_at
```

### Rules

* `id` → UUID
* `email` → unique
* `password` → BCrypt/Argon2 hash
* Never store plaintext passwords

---

# 🔑 Refresh Tokens

```text
refresh_tokens
────────────────────────
id
user_id
token_hash
expires_at
created_at
revoked_at
```

Relationship:

```text
User 1 ─────── N RefreshTokens
```

---

# 🔢 Password Reset OTP

```text
password_reset_otps
────────────────────────
id
user_id
otp_hash
expires_at
attempts
verified
created_at
used_at
```

OTP flow:

```text
Forgot Password
       ↓
Generate OTP
       ↓
Hash OTP
       ↓
Store Hash
       ↓
Send Email
       ↓
User Enters OTP
       ↓
Verify OTP
       ↓
Generate Reset Token
       ↓
Reset Password
```

---

# 📝 Todos

```text
todos
────────────────────────
id
user_id
title
description
status
priority
category_id
due_date
due_time
reminder_at
recurrence_type
completed_at
created_at
updated_at
deleted_at
```

## Status

```text
TODO
IN_PROGRESS
COMPLETED
```

## Priority

```text
LOW
MEDIUM
HIGH
```

## Recurrence

```text
NONE
DAILY
WEEKLY
MONTHLY
```

---

# 🏷️ Categories

```text
categories
────────────────────────
id
user_id
name
created_at
updated_at
```

Example:

```text
Work
Study
Personal
Shopping
Projects
```

Each category belongs to a specific user.

---

# 🔖 Tags

```text
tags
────────────────────────
id
user_id
name
```

Many-to-many relationship:

```text
Todo N ───── N Tag
```

Join table:

```text
todo_tags
────────────────────────
todo_id
tag_id
```

Example:

```text
Todo:
"Implement JWT Authentication"

Tags:
Java
Spring
Security
Backend
```

---

# 🔔 Notification Preferences

```text
notification_preferences
────────────────────────
id
user_id
todo_reminders
overdue_notifications
daily_summary
weekly_summary
```

Transactional security emails such as OTP messages are not disabled by these preferences.

---

# 🔐 Authentication API

Base URL:

```text
/api
```

## Register

```http
POST /api/auth/register
```

```json
{
  "name": "Elshan",
  "email": "elshan@example.com",
  "password": "Password123"
}
```

---

## Login

```http
POST /api/auth/login
```

Response:

```json
{
  "accessToken": "...",
  "refreshToken": "...",
  "tokenType": "Bearer",
  "expiresIn": 900
}
```

---

## Refresh Token

```http
POST /api/auth/refresh
```

---

## Logout

```http
POST /api/auth/logout
```

---

# 🔢 Password Recovery API

## Request OTP

```http
POST /api/auth/forgot-password
```

```json
{
  "email": "elshan@example.com"
}
```

---

## Verify OTP

```http
POST /api/auth/verify-otp
```

```json
{
  "email": "elshan@example.com",
  "otp": "483921"
}
```

---

## Reset Password

```http
POST /api/auth/reset-password
```

```json
{
  "resetToken": "...",
  "newPassword": "NewPassword123"
}
```

---

# 👤 User API

## Get Current User

```http
GET /api/users/me
```

---

## Update Profile

```http
PUT /api/users/me
```

```json
{
  "name": "Elshan Hasanov"
}
```

---

## Change Password

```http
PUT /api/users/me/password
```

```json
{
  "currentPassword": "...",
  "newPassword": "..."
}
```

---

## Delete Own Account

```http
DELETE /api/users/me
```

The authenticated user's identity is extracted from the JWT.

The frontend must **not provide a user ID**.

```text
JWT
 ↓
Authenticated User
 ↓
Delete Own Account
```

---

# ✅ Todo API

## Create Todo

```http
POST /api/todos
```

```json
{
  "title": "Learn Spring Security",
  "description": "Study JWT authentication",
  "priority": "HIGH",
  "status": "TODO",
  "categoryId": "...",
  "dueDate": "2026-10-01",
  "dueTime": "18:00",
  "reminderAt": "2026-10-01T17:00:00",
  "tagIds": [
    "...",
    "..."
  ]
}
```

---

## Get Todos

```http
GET /api/todos
```

### Pagination

```http
GET /api/todos?page=0&size=20
```

---

## Search

```http
GET /api/todos?search=spring
```

---

## Filtering

```http
GET /api/todos?status=TODO
```

```http
GET /api/todos?priority=HIGH
```

```http
GET /api/todos?categoryId=...
```

---

## Combined Filtering

```http
GET /api/todos?search=spring&status=TODO&priority=HIGH&categoryId=...&from=2026-09-29&to=2026-10-05&sort=dueDate,asc&page=0&size=20
```

---

## Get Todo

```http
GET /api/todos/{id}
```

---

## Update Todo

```http
PUT /api/todos/{id}
```

---

## Delete Todo

```http
DELETE /api/todos/{id}
```

---

## Change Status

```http
PATCH /api/todos/{id}/status
```

```json
{
  "status": "COMPLETED"
}
```

---

# 🏷️ Category API

```http
GET    /api/categories
POST   /api/categories
PUT    /api/categories/{id}
DELETE /api/categories/{id}
```

---

# 🔖 Tag API

```http
GET    /api/tags
POST   /api/tags
PUT    /api/tags/{id}
DELETE /api/tags/{id}
```

---

# 🔔 Notification API

## Get Preferences

```http
GET /api/notifications/preferences
```

## Update Preferences

```http
PUT /api/notifications/preferences
```

```json
{
  "todoReminders": true,
  "overdueNotifications": true,
  "dailySummary": false,
  "weeklySummary": true
}
```

---

# 📊 Statistics API

## Overview

```http
GET /api/statistics/overview
```

Example:

```json
{
  "total": 42,
  "completed": 28,
  "pending": 12,
  "overdue": 2,
  "completionRate": 66.67
}
```

## Completion Statistics

```http
GET /api/statistics/completion?period=30d
```

## Priority Statistics

```http
GET /api/statistics/priorities
```

## Productivity Statistics

```http
GET /api/statistics/productivity?period=30d
```

---

# 📧 Email System

The application supports several email types.

## Password Reset OTP

```text
Subject:
Your Todo App Password Reset Code

Your verification code is:

483921

This code expires in 5 minutes.
```

## Todo Reminder

```text
Subject:
Reminder: Finish Spring Security

Your todo is due in 1 hour.
```

## Overdue Todo

```text
Subject:
Todo Overdue: Finish Spring Security

This todo has passed its deadline.
```

## Daily Summary

```text
Good morning!

You have:

5 tasks today
2 high-priority tasks
1 overdue task
```

## Weekly Summary

```text
Weekly Productivity Summary

23 tasks completed
5 tasks remaining
82% completion rate
```

---

# ⏰ Scheduled Jobs

A scheduled process checks for todos that require notifications.

```text
Every minute
     ↓
Find todos with reminder_at <= NOW
     ↓
Check notification preferences
     ↓
Send email
     ↓
Mark notification as processed
```

To prevent duplicate emails, use a field such as:

```text
reminder_sent_at
```

or create a dedicated notification table.

---

# 🔒 Security

Every protected request follows:

```text
HTTP Request
      ↓
JWT
      ↓
Authentication
      ↓
Authenticated User ID
      ↓
Service Layer
      ↓
Ownership Check
      ↓
Database Operation
```

## Resource Ownership

Users can only access their own:

* Todos
* Categories
* Tags
* Profile
* Notification preferences
* Statistics

For example, instead of:

```text
findById(todoId)
```

prefer a query conceptually equivalent to:

```text
findByIdAndUserId(todoId, authenticatedUserId)
```

This prevents users from accessing another user's data by changing an ID in the request.

---

# 🛡️ Authentication Security

Implement:

* Password hashing
* JWT access tokens
* Refresh tokens
* Refresh token expiration
* Token revocation
* OTP expiration
* OTP attempt limits
* OTP resend cooldown
* Login rate limiting
* Password reset rate limiting
* Input validation
* CORS configuration
* Secure HTTP headers
* HTTPS in production

---

# ⚠️ Error Handling

Use a global exception handler.

Example response:

```json
{
  "timestamp": "2026-09-29T17:20:00Z",
  "status": 404,
  "code": "TODO_NOT_FOUND",
  "message": "Todo not found"
}
```

Common error codes:

```text
VALIDATION_ERROR
INVALID_CREDENTIALS
EMAIL_ALREADY_EXISTS
TODO_NOT_FOUND
CATEGORY_NOT_FOUND
TAG_NOT_FOUND
OTP_EXPIRED
INVALID_OTP
OTP_ATTEMPTS_EXCEEDED
PASSWORD_MISMATCH
UNAUTHORIZED
FORBIDDEN
```

---

# ✅ Validation

Backend validation is required even when frontend validation exists.

## User

```text
Email
- Required
- Valid email format

Password
- Required
- Minimum 8 characters
- Uppercase
- Lowercase
- Number
```

## Todo

```text
Title
- Required
- 3–200 characters

Description
- Maximum 5000 characters

Status
- Valid enum

Priority
- Valid enum
```

---

# 📄 Pagination

Todo list responses should support pagination.

```http
GET /api/todos?page=0&size=20
```

Example response:

```json
{
  "content": [],
  "page": 0,
  "size": 20,
  "totalElements": 42,
  "totalPages": 3,
  "first": true,
  "last": false
}
```

---

# 🧪 Testing

## Backend

### Unit Tests

* Authentication service
* User service
* Todo service
* Category service
* Tag service
* OTP service
* Statistics service
* Notification service

### Integration Tests

* Registration
* Login
* Refresh token
* Logout
* Forgot password
* OTP verification
* Password reset
* Todo CRUD
* Todo ownership
* Filtering
* Pagination
* Account deletion

### Security Tests

* Unauthorized requests
* Invalid JWT
* Expired JWT
* Accessing another user's todo
* Accessing another user's category
* Accessing another user's tags

---

# 🧪 Frontend Testing

Test:

* Authentication forms
* Todo forms
* Todo list
* Search
* Filtering
* Calendar
* Dashboard
* Settings
* Account deletion
* Error states
* Loading states

---

# 🐳 Docker

The application can be containerized as:

```text
┌─────────────────────────┐
│        Frontend         │
│        Container        │
└────────────┬────────────┘
             │
             ↓
┌─────────────────────────┐
│        Backend          │
│        Container        │
└────────────┬────────────┘
             │
             ↓
┌─────────────────────────┐
│       PostgreSQL        │
│        Container        │
└─────────────────────────┘
```

Docker Compose can manage:

* Frontend
* Backend
* PostgreSQL

---

# 🚀 CI/CD

Recommended pipeline:

```text
Git Push
   ↓
GitHub Actions
   ↓
Install Dependencies
   ↓
Build
   ↓
Run Tests
   ↓
Build Docker Images
   ↓
Deploy
```

---

# 🗺️ Development Phases

## Phase 1 — Foundation

* [ ] Create backend project
* [ ] Create frontend project
* [ ] Configure PostgreSQL
* [ ] Configure Docker
* [ ] Configure database migrations
* [ ] Configure global exception handling
* [ ] Configure API response structure

---

## Phase 2 — Authentication

* [ ] Register
* [ ] Login
* [ ] Logout
* [ ] JWT
* [ ] Refresh token
* [ ] Email service
* [ ] Forgot password
* [ ] OTP
* [ ] Reset password
* [ ] Email verification

---

## Phase 3 — Todo CRUD

* [ ] Create todo
* [ ] Get todo
* [ ] Get todos
* [ ] Update todo
* [ ] Delete todo
* [ ] Complete todo
* [ ] Validation
* [ ] User ownership
* [ ] Pagination

---

## Phase 4 — Organization

* [ ] Categories
* [ ] Tags
* [ ] Priority
* [ ] Status
* [ ] Due dates
* [ ] Search
* [ ] Sorting
* [ ] Filtering

---

## Phase 5 — Productivity

* [ ] Calendar
* [ ] Reminders
* [ ] Email notifications
* [ ] Dashboard
* [ ] Statistics
* [ ] Productivity charts
* [ ] Recurring todos

---

## Phase 6 — User Settings

* [ ] Profile
* [ ] Update profile
* [ ] Change password
* [ ] Notification preferences
* [ ] Delete own account

---

## Phase 7 — Quality & Deployment

* [ ] Unit tests
* [ ] Integration tests
* [ ] Security tests
* [ ] Frontend tests
* [ ] Swagger/OpenAPI
* [ ] Docker
* [ ] Docker Compose
* [ ] CI/CD
* [ ] Production deployment

---

# 📌 Final Feature Scope

| Area                 | Features                               |
| -------------------- | -------------------------------------- |
| 🌐 Landing           | Product information, features, CTA     |
| 🔐 Authentication    | Register, Login, Logout                |
| 🛡️ Security         | JWT, Refresh Tokens                    |
| 🔑 Password          | Forgot Password, OTP, Reset Password   |
| 📧 Email             | OTP, reminders, overdue notifications  |
| ✅ Todos              | Create, Read, Update, Delete, Complete |
| 🏷️ Organization     | Categories, Tags                       |
| 🎯 Metadata          | Priority, Status, Due Date             |
| 🔎 Search            | Text search                            |
| 🔍 Filtering         | Status, Priority, Category, Date       |
| ↕️ Sorting           | Due date, priority, created date       |
| 📄 Pagination        | Paginated todo lists                   |
| 📅 Calendar          | Month, Week, Day                       |
| ⏰ Reminders          | Scheduled email reminders              |
| 🔁 Recurring         | Daily, Weekly, Monthly                 |
| 📊 Dashboard         | Productivity overview                  |
| 📈 Statistics        | Completion and productivity statistics |
| 👤 Profile           | Update profile                         |
| 🔐 Security Settings | Change password                        |
| 🔔 Notifications     | Email preferences                      |
| 🗑️ Account          | Delete own account                     |
| 🧪 Testing           | Unit, Integration, Security            |
| 🐳 DevOps            | Docker, Docker Compose                 |
| 🚀 CI/CD             | Automated build, test and deployment   |
| 📚 Documentation     | Swagger/OpenAPI                        |

---

# 🎯 Project Goal

The goal of this project is not simply to create another CRUD Todo application.

It is designed to demonstrate practical full-stack engineering through:

```text
Authentication
      +
Authorization
      +
REST API
      +
Database Design
      +
CRUD
      +
Dynamic Querying
      +
Search & Filtering
      +
Pagination
      +
Email Integration
      +
Scheduled Jobs
      +
Security
      +
Testing
      +
Docker
      +
CI/CD
      +
Production Deployment
```

The final result should remain a **simple personal productivity application from the user's perspective**, while providing enough technical depth to demonstrate real-world frontend and backend development skills.
