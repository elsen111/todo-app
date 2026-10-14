# ☕ Todo Productivity App — Backend Development Tasks

> **Stack:** Java 25 LTS + Spring Boot 4.x + Spring Security + Spring Data JPA + PostgreSQL + Liquibase + Gradle + JWT + Docker
>
> **Goal:** Build a complete, secure and production-ready REST API for the Todo Productivity App, covering authentication, user management, todo operations, productivity features, testing, Dockerization, CI/CD and deployment.

---

# 🗺️ Development Roadmap

```text
Phase 01  → Project Setup
Phase 02  → Architecture & Common Components
Phase 03  → Database Design & Liquibase
Phase 04  → Authentication & Security
Phase 05  → Token Management
Phase 06  → Email Service & OTP
Phase 07  → Password Recovery
Phase 08  → User Management
Phase 09  → Todo Management
Phase 10  → Categories
Phase 11  → Tags
Phase 12  → Search, Filtering, Sorting & Pagination
Phase 13  → Dashboard
Phase 14  → Calendar
Phase 15  → Reminders
Phase 16  → Recurrence
Phase 17  → Statistics
Phase 18  → Notifications
Phase 19  → Background Jobs
Phase 20  → Validation & Security Hardening
Phase 21  → Testing
Phase 22  → API Documentation
Phase 23  → Docker
Phase 24  → CI/CD
Phase 25  → Deployment
Phase 26  → Production QA & Documentation
```

---

# 01 — 🚀 Project Setup

## Issue 01 — Initialize Spring Boot Project

- [ ] Create Spring Boot project using Gradle.
- [ ] Configure Java 25.
- [ ] Configure Spring Boot 4.x.
- [ ] Configure Gradle Wrapper.
- [ ] Configure Java toolchain.
- [ ] Configure application name.
- [ ] Configure application entry point.
- [ ] Verify development startup.
- [ ] Verify Gradle build.

## Issue 02 — Install Backend Dependencies

- [ ] Spring Web MVC
- [ ] Spring Data JPA
- [ ] Spring Security
- [ ] Spring Validation
- [ ] Spring Mail
- [ ] PostgreSQL Driver
- [ ] Liquibase
- [ ] Lombok
- [ ] MapStruct
- [ ] JWT library
- [ ] Bucket4j
- [ ] Springdoc OpenAPI
- [ ] JUnit
- [ ] Mockito
- [ ] Testcontainers

## Issue 03 — Configure Application Environments

- [ ] Create `application.yaml`.
- [ ] Create `application-dev.yaml`.
- [ ] Create `application-prod.yaml`.
- [ ] Configure Spring profiles.
- [ ] Configure environment variables.
- [ ] Configure PostgreSQL connection.
- [ ] Configure JPA properties.
- [ ] Configure Liquibase.
- [ ] Configure Hibernate `ddl-auto=validate`.
- [ ] Configure logging.
- [ ] Create `.env.example`.
- [ ] Ensure credentials are not committed.
- [ ] Verify development profile.
- [ ] Verify production configuration.

## Issue 04 — Configure Code Quality

- [ ] Configure Java formatting.
- [ ] Configure Gradle test tasks.
- [ ] Configure compiler warnings.
- [ ] Configure annotation processing.
- [ ] Configure Lombok and MapStruct integration.
- [ ] Configure Git ignore rules.
- [ ] Verify clean build.

---

# 02 — 🏗️ Architecture & Common Components

## Issue 05 — Create Backend Package Structure

```text
com.todoapp
│
├── TodoApplication.java
│
├── common
│   ├── config
│   ├── constant
│   ├── exception
│   ├── response
│   ├── shared
│   │   ├── base
│   │   └── enums
│   └── util
│
├── security
│   ├── config
│   ├── jwt
│   ├── filter
│   ├── handler
│   └── service
│
├── auth
│   ├── controller
│   ├── dto
│   ├── entity
│   ├── mapper
│   ├── repository
│   └── service
│
├── user
│   ├── controller
│   ├── dto
│   ├── entity
│   ├── mapper
│   ├── repository
│   └── service
│
├── todo
│   ├── controller
│   ├── dto
│   ├── entity
│   ├── mapper
│   ├── repository
│   ├── service
│   └── specification
│
├── category
├── tag
├── dashboard
├── calendar
├── reminder
├── recurrence
├── statistics
└── notification
```

Tasks:

- [ ] Create feature-based packages.
- [ ] Separate controllers, services, repositories and DTOs.
- [ ] Create common base entity.
- [ ] Create common audit fields.
- [ ] Define entity relationship conventions.
- [ ] Establish package dependency conventions.
- [ ] Keep business logic outside controllers.

## Issue 06 — Create Common API Responses

- [ ] Create `ApiResponse<T>`.
- [ ] Create `ErrorResponse`.
- [ ] Define consistent success responses.
- [ ] Define consistent error responses.
- [ ] Include timestamps where appropriate.
- [ ] Include validation error details.
- [ ] Apply consistent response format across controllers.

Example:

```json
{
  "success": true,
  "message": "Todo created successfully",
  "data": {
    "id": "uuid",
    "title": "Learn Spring Security"
  },
  "timestamp": "2026-10-15T10:30:00Z"
}
```

## Issue 07 — Implement Global Exception Handling

- [ ] Create `GlobalExceptionHandler`.
- [ ] Handle validation exceptions.
- [ ] Handle resource-not-found exceptions.
- [ ] Handle duplicate-resource exceptions.
- [ ] Handle authentication exceptions.
- [ ] Handle access-denied exceptions.
- [ ] Handle database constraint violations.
- [ ] Handle unexpected exceptions.
- [ ] Return consistent error responses.
- [ ] Avoid exposing internal exception details.

## Issue 08 — Create Common Utilities

- [ ] Create date/time utilities where necessary.
- [ ] Create pagination response DTO.
- [ ] Create reusable constants.
- [ ] Configure UUID generation.
- [ ] Configure entity auditing.
- [ ] Create common validation utilities where justified.

---

# 03 — 🗄️ Database Design & Liquibase

## Issue 09 — Design Database Schema

Identify the main entities and relationships.

Core entities:

```text
User
 ├── Todo
 ├── Category
 ├── Tag
 ├── RefreshToken
 ├── PasswordResetOtp
 ├── NotificationPreference
 └── Notification

Todo
 ├── Category
 ├── Tags
 ├── Reminder
 └── Recurrence
```

Recommended tables:

- [ ] users
- [ ] todos
- [ ] categories
- [ ] tags
- [ ] todo_tags
- [ ] refresh_tokens
- [ ] password_reset_otps
- [ ] notification_preferences
- [ ] notifications (if in-app notification history is required)

## Issue 10 — Create Database Migrations

- [ ] Create Liquibase master changelog.
- [ ] Create users table.
- [ ] Create refresh_tokens table.
- [ ] Create password_reset_otps table.
- [ ] Create todos table.
- [ ] Create categories table.
- [ ] Create tags table.
- [ ] Create todo_tags join table.
- [ ] Create notification_preferences table.
- [ ] Create notifications table if required.
- [ ] Add foreign keys.
- [ ] Add unique constraints.
- [ ] Add indexes.
- [ ] Add timestamp columns.
- [ ] Verify migrations on a clean database.

## Issue 11 — Implement JPA Entities

- [ ] Create User entity.
- [ ] Create RefreshToken entity.
- [ ] Create PasswordResetOtp entity.
- [ ] Create Todo entity.
- [ ] Create Category entity.
- [ ] Create Tag entity.
- [ ] Create NotificationPreference entity.
- [ ] Create Notification entity if required.
- [ ] Implement entity relationships.
- [ ] Configure fetch strategies.
- [ ] Avoid unnecessary bidirectional relationships.
- [ ] Prevent recursive JSON serialization.
- [ ] Verify entity mappings against Liquibase schema.

## Issue 12 — Create Enums

- [ ] TodoStatus: `TODO`, `IN_PROGRESS`, `COMPLETED`.
- [ ] TodoPriority: `LOW`, `MEDIUM`, `HIGH`.
- [ ] RecurrenceType: `NONE`, `DAILY`, `WEEKLY`, `MONTHLY`.
- [ ] ReminderType.
- [ ] NotificationType if required.

---

# 04 — 🔐 Authentication & Security

## Issue 13 — Implement User Registration

- [ ] Create registration request DTO.
- [ ] Create registration response DTO.
- [ ] Implement registration service.
- [ ] Validate name.
- [ ] Validate email format.
- [ ] Enforce unique email.
- [ ] Validate password strength.
- [ ] Hash passwords using BCrypt.
- [ ] Create user with default settings.
- [ ] Assign default user role.
- [ ] Handle duplicate email.
- [ ] Write registration tests.

## Issue 14 — Implement Login

- [ ] Create login request DTO.
- [ ] Implement authentication service.
- [ ] Authenticate using Spring Security.
- [ ] Validate credentials.
- [ ] Generate access token.
- [ ] Generate refresh token.
- [ ] Persist refresh token securely.
- [ ] Return user information.
- [ ] Handle invalid credentials.
- [ ] Write login tests.

## Issue 15 — Implement JWT Access Token

- [ ] Configure JWT secret/key.
- [ ] Define token expiration.
- [ ] Implement token generation.
- [ ] Implement token validation.
- [ ] Extract user identity.
- [ ] Validate token expiration.
- [ ] Validate token signature.
- [ ] Implement JWT authentication filter.
- [ ] Configure Spring Security context.

## Issue 16 — Implement Refresh Token Management

- [ ] Create refresh token entity.
- [ ] Generate cryptographically secure refresh tokens.
- [ ] Store refresh token hashes in the database.
- [ ] Implement refresh endpoint.
- [ ] Implement token rotation.
- [ ] Revoke old refresh tokens.
- [ ] Handle expired refresh tokens.
- [ ] Handle revoked refresh tokens.
- [ ] Prevent refresh token reuse.
- [ ] Handle concurrent refresh requests.
- [ ] Implement session revocation.

## Issue 17 — Implement Logout

- [ ] Create logout endpoint.
- [ ] Revoke current refresh token.
- [ ] Clear refresh cookie.
- [ ] Handle already revoked sessions.
- [ ] Test logout behavior.

## Issue 18 — Configure Spring Security

- [ ] Configure stateless authentication.
- [ ] Configure public endpoints.
- [ ] Protect private endpoints.
- [ ] Configure authentication entry point.
- [ ] Configure access-denied handler.
- [ ] Configure CORS.
- [ ] Configure CSRF according to cookie/token architecture.
- [ ] Configure password encoder.
- [ ] Configure security filter chain.
- [ ] Test unauthorized access.
- [ ] Test forbidden access.

---

# 05 — 🔑 Token Management

## Issue 19 — Implement Authentication Session Management

- [ ] Associate refresh tokens with users.
- [ ] Track token expiration.
- [ ] Track token revocation.
- [ ] Support multiple active sessions if required.
- [ ] Implement logout from current session.
- [ ] Implement logout from all sessions.
- [ ] Revoke sessions after password changes.
- [ ] Clean up expired refresh tokens.
- [ ] Test session lifecycle.

---

# 06 — 📧 Email Service & OTP

## Issue 20 — Configure Email Service

- [ ] Configure Spring Mail.
- [ ] Configure SMTP properties.
- [ ] Configure email credentials using environment variables.
- [ ] Create email service.
- [ ] Create reusable email templates.
- [ ] Implement HTML email support.
- [ ] Handle email delivery errors.
- [ ] Verify development email delivery.

## Issue 21 — Implement OTP Generation

- [ ] Generate cryptographically secure OTP codes.
- [ ] Configure OTP expiration.
- [ ] Hash OTP before database storage.
- [ ] Associate OTP with user.
- [ ] Implement OTP verification.
- [ ] Implement resend OTP.
- [ ] Implement resend cooldown.
- [ ] Limit verification attempts.
- [ ] Invalidate previously issued OTPs.
- [ ] Prevent OTP reuse.
- [ ] Write OTP tests.

---

# 07 — 🔄 Password Recovery

## Issue 22 — Implement Forgot Password

- [ ] Create forgot-password request DTO.
- [ ] Create forgot-password endpoint.
- [ ] Validate email.
- [ ] Generate password reset OTP.
- [ ] Send OTP email.
- [ ] Avoid exposing whether an email exists.
- [ ] Handle resend requests.
- [ ] Implement rate limiting.

## Issue 23 — Implement OTP Verification

- [ ] Create OTP verification DTO.
- [ ] Create verification endpoint.
- [ ] Validate OTP.
- [ ] Validate expiration.
- [ ] Validate maximum attempts.
- [ ] Generate short-lived reset authorization token.
- [ ] Prevent OTP reuse.
- [ ] Write verification tests.

## Issue 24 — Implement Password Reset

- [ ] Create reset-password request DTO.
- [ ] Create reset-password endpoint.
- [ ] Validate reset authorization token.
- [ ] Validate new password.
- [ ] Hash new password.
- [ ] Update user password.
- [ ] Invalidate used OTPs.
- [ ] Revoke existing refresh tokens.
- [ ] Handle expired reset authorization.
- [ ] Write password reset tests.

---

# 08 — 👤 User Management

## Issue 25 — Get Current User

- [ ] Create current-user endpoint.
- [ ] Extract authenticated user.
- [ ] Load user profile.
- [ ] Return user DTO.
- [ ] Exclude password and sensitive fields.

## Issue 26 — Update User Profile

- [ ] Create profile update DTO.
- [ ] Create profile update endpoint.
- [ ] Validate name.
- [ ] Validate email if email changes are supported.
- [ ] Handle duplicate email.
- [ ] Update user information.
- [ ] Return updated profile.
- [ ] Write profile update tests.

## Issue 27 — Change Password

- [ ] Create change-password DTO.
- [ ] Create change-password endpoint.
- [ ] Validate current password.
- [ ] Validate new password.
- [ ] Hash new password.
- [ ] Revoke existing refresh tokens.
- [ ] Return success response.
- [ ] Write tests.

## Issue 28 — Delete User Account

- [ ] Create account deletion endpoint.
- [ ] Require password confirmation if appropriate.
- [ ] Validate user identity.
- [ ] Delete or anonymize associated data.
- [ ] Handle foreign key relationships.
- [ ] Revoke active refresh tokens.
- [ ] Delete related OTP records.
- [ ] Delete notification preferences.
- [ ] Return deletion confirmation.
- [ ] Write account deletion tests.

---

# 09 — ✅ Todo Management

## Issue 29 — Design Todo Entity

Recommended fields:

```text
Todo
 ├── id
 ├── user
 ├── title
 ├── description
 ├── status
 ├── priority
 ├── category
 ├── tags
 ├── dueDate
 ├── dueTime
 ├── completedAt
 ├── createdAt
 └── updatedAt
```

Tasks:

- [ ] Define todo fields.
- [ ] Define TodoStatus.
- [ ] Define TodoPriority.
- [ ] Define category relationship.
- [ ] Define tag relationship.
- [ ] Define due date and time.
- [ ] Define completion timestamp.
- [ ] Configure indexes.
- [ ] Configure entity constraints.

## Issue 30 — Create Todo

- [ ] Create todo request DTO.
- [ ] Create todo response DTO.
- [ ] Create todo mapper.
- [ ] Create todo repository.
- [ ] Implement todo creation service.
- [ ] Create todo endpoint.
- [ ] Validate title.
- [ ] Validate description.
- [ ] Validate status.
- [ ] Validate priority.
- [ ] Validate due date and time.
- [ ] Validate category ownership.
- [ ] Validate tag ownership.
- [ ] Associate todo with authenticated user.
- [ ] Return created todo.
- [ ] Write tests.

## Issue 31 — Get User Todos

- [ ] Create get-todos endpoint.
- [ ] Retrieve todos belonging to authenticated user.
- [ ] Return paginated results.
- [ ] Map entities to response DTOs.
- [ ] Avoid returning unnecessary relationships.
- [ ] Verify user data isolation.

## Issue 32 — Get Todo By ID

- [ ] Create todo details endpoint.
- [ ] Retrieve todo by ID.
- [ ] Validate todo ownership.
- [ ] Return todo details.
- [ ] Handle nonexistent todos.
- [ ] Handle unauthorized access.

## Issue 33 — Update Todo

- [ ] Create update request DTO.
- [ ] Create update endpoint.
- [ ] Load existing todo.
- [ ] Validate ownership.
- [ ] Validate updated fields.
- [ ] Update category.
- [ ] Update tags.
- [ ] Update due date and time.
- [ ] Update priority and status.
- [ ] Update completion timestamp when necessary.
- [ ] Return updated todo.
- [ ] Write tests.

## Issue 34 — Complete Todo

- [ ] Create status update endpoint.
- [ ] Validate todo ownership.
- [ ] Update todo status.
- [ ] Set completed timestamp.
- [ ] Clear completion timestamp when reopened.
- [ ] Return updated todo.
- [ ] Write tests.

## Issue 35 — Delete Todo

- [ ] Create delete endpoint.
- [ ] Validate todo ownership.
- [ ] Delete associated relationships.
- [ ] Handle dependent reminder records.
- [ ] Delete todo.
- [ ] Return success response.
- [ ] Write tests.

---

# 10 — 🏷️ Categories

## Issue 36 — Implement Category Entity

- [ ] Define category fields.
- [ ] Associate category with user.
- [ ] Define category name constraints.
- [ ] Add category indexes.
- [ ] Configure unique category names per user.

## Issue 37 — Implement Category CRUD

- [ ] Create category DTOs.
- [ ] Create category mapper.
- [ ] Create category repository.
- [ ] Create category service.
- [ ] Implement create category endpoint.
- [ ] Implement get categories endpoint.
- [ ] Implement get category by ID endpoint.
- [ ] Implement update category endpoint.
- [ ] Implement delete category endpoint.
- [ ] Validate category ownership.
- [ ] Handle categories associated with todos.
- [ ] Write tests.

---

# 11 — 🔖 Tags

## Issue 38 — Implement Tag Entity

- [ ] Define tag fields.
- [ ] Associate tags with users.
- [ ] Define tag name constraints.
- [ ] Configure unique tag names per user.
- [ ] Configure many-to-many todo relationship.

## Issue 39 — Implement Tag CRUD

- [ ] Create tag DTOs.
- [ ] Create tag mapper.
- [ ] Create tag repository.
- [ ] Create tag service.
- [ ] Implement create tag endpoint.
- [ ] Implement get tags endpoint.
- [ ] Implement update tag endpoint.
- [ ] Implement delete tag endpoint.
- [ ] Validate tag ownership.
- [ ] Handle associated todos.
- [ ] Write tests.

## Issue 40 — Implement Todo Tag Assignment

- [ ] Add tags when creating a todo.
- [ ] Update tags when editing a todo.
- [ ] Remove assigned tags.
- [ ] Validate all tags belong to the authenticated user.
- [ ] Return assigned tags in todo responses.
- [ ] Write relationship tests.

---

# 12 — 🔎 Search, Filtering, Sorting & Pagination

## Issue 41 — Implement Todo Search

- [ ] Add search query parameter.
- [ ] Search by todo title.
- [ ] Search by description if required.
- [ ] Implement case-insensitive search.
- [ ] Restrict search to authenticated user.
- [ ] Optimize database queries.
- [ ] Write search tests.

## Issue 42 — Implement Status Filtering

- [ ] Filter by TODO.
- [ ] Filter by IN_PROGRESS.
- [ ] Filter by COMPLETED.
- [ ] Support multiple statuses if required.
- [ ] Validate status parameters.

## Issue 43 — Implement Priority Filtering

- [ ] Filter by LOW.
- [ ] Filter by MEDIUM.
- [ ] Filter by HIGH.
- [ ] Support multiple priorities if required.

## Issue 44 — Implement Category & Tag Filtering

- [ ] Filter by category ID.
- [ ] Filter by tag ID.
- [ ] Validate category ownership.
- [ ] Validate tag ownership.
- [ ] Support combined filters.

## Issue 45 — Implement Date Filtering

- [ ] Filter by due date.
- [ ] Filter by start date.
- [ ] Filter by end date.
- [ ] Filter today's todos.
- [ ] Filter tomorrow's todos.
- [ ] Filter this week's todos.
- [ ] Filter overdue todos.
- [ ] Support custom date ranges.

## Issue 46 — Implement Sorting

- [ ] Sort by due date ascending.
- [ ] Sort by due date descending.
- [ ] Sort by priority.
- [ ] Sort by creation date.
- [ ] Sort by updated date.
- [ ] Validate supported sorting fields.
- [ ] Prevent arbitrary property sorting.

## Issue 47 — Implement Pagination

- [ ] Configure page parameter.
- [ ] Configure size parameter.
- [ ] Configure default page size.
- [ ] Configure maximum page size.
- [ ] Create pagination response DTO.
- [ ] Return total elements.
- [ ] Return total pages.
- [ ] Return current page.
- [ ] Return page size.
- [ ] Write pagination tests.

## Issue 48 — Implement Combined Todo Query

Support:

```text
search
status
priority
categoryId
tagId
from
to
sort
direction
page
size
```

Example:

```http
GET /api/v1/todos?search=spring&status=TODO&priority=HIGH&page=0&size=20
```

Tasks:

- [ ] Create todo filter request model.
- [ ] Implement JPA Specifications.
- [ ] Combine optional filters dynamically.
- [ ] Apply user ownership restriction.
- [ ] Apply sorting.
- [ ] Apply pagination.
- [ ] Validate query parameters.
- [ ] Test combined filters.

---

# 13 — 📊 Dashboard

## Issue 49 — Implement Dashboard Overview

- [ ] Create dashboard response DTO.
- [ ] Create dashboard service.
- [ ] Create dashboard endpoint.
- [ ] Calculate total todos.
- [ ] Calculate completed todos.
- [ ] Calculate pending todos.
- [ ] Calculate in-progress todos.
- [ ] Calculate overdue todos.
- [ ] Restrict calculations to authenticated user.
- [ ] Optimize aggregate queries.

## Issue 50 — Implement Dashboard Todo Sections

- [ ] Retrieve today's todos.
- [ ] Retrieve upcoming todos.
- [ ] Retrieve overdue todos.
- [ ] Apply appropriate ordering.
- [ ] Apply result limits.
- [ ] Return separate dashboard sections.

## Issue 51 — Implement Dashboard Productivity Data

- [ ] Define productivity response DTO.
- [ ] Calculate completed todos over time.
- [ ] Support selected reporting period.
- [ ] Group results by date.
- [ ] Return chart-friendly data.
- [ ] Handle empty datasets.
- [ ] Optimize aggregate queries.

---

# 14 — 📅 Calendar

## Issue 52 — Implement Calendar Todo Retrieval

- [ ] Create calendar endpoint.
- [ ] Accept start date.
- [ ] Accept end date.
- [ ] Validate date range.
- [ ] Retrieve todos within the range.
- [ ] Include due date and time.
- [ ] Restrict results to authenticated user.
- [ ] Return calendar event DTOs.
- [ ] Optimize date queries.

## Issue 53 — Support Calendar Views

- [ ] Support month date ranges.
- [ ] Support week date ranges.
- [ ] Support day date ranges.
- [ ] Handle timezone conversion.
- [ ] Handle todos without due times.
- [ ] Verify boundary dates.

## Issue 54 — Create Todos From Calendar

- [ ] Support todo creation with selected date.
- [ ] Validate selected date.
- [ ] Save todo with due date.
- [ ] Return calendar-compatible response.
- [ ] Test calendar creation flow.

---

# 15 — ⏰ Reminders

## Issue 55 — Design Reminder Model

- [ ] Define reminder fields.
- [ ] Associate reminder with todo.
- [ ] Associate reminder with user.
- [ ] Define reminder date/time.
- [ ] Define reminder status.
- [ ] Define notification delivery status.
- [ ] Add database indexes.

## Issue 56 — Implement Reminder Management

- [ ] Create reminder DTOs.
- [ ] Create reminder repository.
- [ ] Create reminder service.
- [ ] Create reminder endpoint or integrate with todo endpoints.
- [ ] Support no reminder.
- [ ] Support reminder at due time.
- [ ] Support 5 minutes before.
- [ ] Support 15 minutes before.
- [ ] Support 30 minutes before.
- [ ] Support 1 hour before.
- [ ] Support 1 day before.
- [ ] Validate reminder against due date/time.
- [ ] Update reminder when todo changes.
- [ ] Cancel reminder when todo is deleted.
- [ ] Cancel or resolve reminder when todo is completed.

---

# 16 — 🔁 Recurrence

## Issue 57 — Design Recurrence Model

- [ ] Define recurrence fields.
- [ ] Associate recurrence with todo.
- [ ] Define recurrence type.
- [ ] Define recurrence interval if required.
- [ ] Define recurrence end date.
- [ ] Define next occurrence date.
- [ ] Define recurrence timezone.

## Issue 58 — Implement Recurring Todos

- [ ] Support no recurrence.
- [ ] Support daily recurrence.
- [ ] Support weekly recurrence.
- [ ] Support monthly recurrence.
- [ ] Calculate next occurrence.
- [ ] Generate subsequent todos when appropriate.
- [ ] Prevent duplicate occurrence generation.
- [ ] Handle completed recurring todos.
- [ ] Handle deleted recurring todos.
- [ ] Handle recurrence updates.
- [ ] Write recurrence tests.

---

# 17 — 📈 Statistics

## Issue 59 — Implement Statistics Overview

- [ ] Create statistics response DTOs.
- [ ] Create statistics service.
- [ ] Create statistics controller.
- [ ] Calculate total todos.
- [ ] Calculate completed todos.
- [ ] Calculate pending todos.
- [ ] Calculate overdue todos.
- [ ] Calculate completion percentage.

## Issue 60 — Implement Status Statistics

- [ ] Calculate TODO count.
- [ ] Calculate IN_PROGRESS count.
- [ ] Calculate COMPLETED count.
- [ ] Return chart-friendly data.

## Issue 61 — Implement Priority Statistics

- [ ] Calculate LOW priority count.
- [ ] Calculate MEDIUM priority count.
- [ ] Calculate HIGH priority count.
- [ ] Return chart-friendly data.

## Issue 62 — Implement Productivity Trends

- [ ] Support last 7 days.
- [ ] Support last 30 days.
- [ ] Support last 3 months.
- [ ] Calculate daily completed todos.
- [ ] Group statistics by date.
- [ ] Return chronological results.
- [ ] Handle days without completed todos.
- [ ] Optimize aggregate queries.

## Issue 63 — Implement Completion Statistics

- [ ] Calculate completion trends.
- [ ] Support date ranges.
- [ ] Calculate completion rate.
- [ ] Return daily or weekly statistics.
- [ ] Test date boundaries.

---

# 18 — 🔔 Notifications

## Issue 64 — Implement Notification Preferences

- [ ] Create notification preference entity.
- [ ] Create preference DTOs.
- [ ] Create preference repository.
- [ ] Create preference service.
- [ ] Create get preferences endpoint.
- [ ] Create update preferences endpoint.
- [ ] Support todo reminders.
- [ ] Support overdue notifications.
- [ ] Support daily summaries.
- [ ] Support weekly summaries.
- [ ] Initialize default preferences.
- [ ] Validate user ownership.

## Issue 65 — Implement In-App Notifications

- [ ] Create notification entity if required.
- [ ] Create notification DTOs.
- [ ] Create notification repository.
- [ ] Create notification service.
- [ ] Implement get notifications endpoint.
- [ ] Implement unread notification count.
- [ ] Implement mark-as-read endpoint.
- [ ] Implement mark-all-as-read endpoint.
- [ ] Implement notification deletion if required.
- [ ] Add pagination.
- [ ] Restrict notifications to their owners.

## Issue 66 — Implement Email Notifications

- [ ] Create reminder email template.
- [ ] Create overdue email template.
- [ ] Create daily summary email template.
- [ ] Create weekly summary email template.
- [ ] Respect user notification preferences.
- [ ] Handle email delivery failures.
- [ ] Prevent duplicate notifications.

---

# 19 — ⚙️ Background Jobs

## Issue 67 — Configure Scheduled Tasks

- [ ] Enable Spring Scheduling.
- [ ] Configure scheduler.
- [ ] Configure timezone.
- [ ] Define scheduling intervals.
- [ ] Separate scheduled jobs from business services.

## Issue 68 — Process Todo Reminders

- [ ] Retrieve pending reminders.
- [ ] Identify reminders due for delivery.
- [ ] Check user notification preferences.
- [ ] Send reminder notifications.
- [ ] Mark reminders as processed.
- [ ] Handle delivery failures.
- [ ] Prevent duplicate processing.
- [ ] Add retry strategy where appropriate.

## Issue 69 — Process Overdue Todos

- [ ] Identify overdue todos.
- [ ] Exclude completed todos.
- [ ] Check notification preferences.
- [ ] Create overdue notifications.
- [ ] Prevent duplicate notifications.

## Issue 70 — Generate Productivity Summaries

- [ ] Generate daily summaries.
- [ ] Generate weekly summaries.
- [ ] Respect user preferences.
- [ ] Send summary emails.
- [ ] Handle timezone differences.
- [ ] Prevent duplicate summaries.

## Issue 71 — Database Cleanup Jobs

- [ ] Remove expired OTP records.
- [ ] Remove expired refresh tokens.
- [ ] Clean up obsolete notification records where appropriate.
- [ ] Configure cleanup schedules.
- [ ] Verify cleanup operations.

---

# 20 — 🛡️ Validation & Security Hardening

## Issue 72 — Implement Request Validation

- [ ] Validate all request DTOs.
- [ ] Validate required fields.
- [ ] Validate string lengths.
- [ ] Validate email formats.
- [ ] Validate passwords.
- [ ] Validate dates and date ranges.
- [ ] Validate enum values.
- [ ] Validate pagination parameters.
- [ ] Return field-level validation errors.

## Issue 73 — Implement Ownership Validation

- [ ] Restrict todo access to owners.
- [ ] Restrict category access to owners.
- [ ] Restrict tag access to owners.
- [ ] Restrict notification access to owners.
- [ ] Restrict user settings to owners.
- [ ] Prevent cross-user relationship assignment.
- [ ] Test IDOR scenarios.

## Issue 74 — Configure Rate Limiting

- [ ] Configure Bucket4j.
- [ ] Limit login attempts.
- [ ] Limit registration requests.
- [ ] Limit forgot-password requests.
- [ ] Limit OTP verification attempts.
- [ ] Limit OTP resend requests.
- [ ] Configure HTTP 429 responses.
- [ ] Test rate limit behavior.

## Issue 75 — Security Review

- [ ] Verify password hashing.
- [ ] Verify JWT signature validation.
- [ ] Verify refresh token rotation.
- [ ] Verify refresh token revocation.
- [ ] Verify endpoint authorization.
- [ ] Verify CORS configuration.
- [ ] Verify CSRF strategy.
- [ ] Verify SQL injection protection.
- [ ] Verify sensitive data exposure.
- [ ] Verify secure cookie configuration if used.
- [ ] Verify production secret management.
- [ ] Review dependency vulnerabilities.

---

# 21 — 🧪 Testing

## Issue 76 — Configure Testing Infrastructure

- [ ] Configure JUnit.
- [ ] Configure Mockito.
- [ ] Configure Spring Boot Test.
- [ ] Configure MockMvc.
- [ ] Configure Testcontainers.
- [ ] Configure PostgreSQL test container.
- [ ] Configure test profiles.
- [ ] Configure test data setup.
- [ ] Configure test coverage.

## Issue 77 — Unit Tests

Test:

- [ ] Authentication service.
- [ ] JWT service.
- [ ] Refresh token service.
- [ ] OTP service.
- [ ] User service.
- [ ] Todo service.
- [ ] Category service.
- [ ] Tag service.
- [ ] Dashboard service.
- [ ] Calendar service.
- [ ] Reminder service.
- [ ] Recurrence service.
- [ ] Statistics service.
- [ ] Notification service.

## Issue 78 — Repository Tests

Test:

- [ ] User repository.
- [ ] Todo repository.
- [ ] Category repository.
- [ ] Tag repository.
- [ ] Refresh token repository.
- [ ] OTP repository.
- [ ] Notification repository.
- [ ] Custom query methods.
- [ ] JPA Specifications.
- [ ] Pagination and sorting.
- [ ] Database relationships.

## Issue 79 — Controller Integration Tests

Test:

- [ ] Registration endpoint.
- [ ] Login endpoint.
- [ ] Refresh endpoint.
- [ ] Logout endpoint.
- [ ] Forgot-password endpoint.
- [ ] OTP verification endpoint.
- [ ] Password reset endpoint.
- [ ] Profile endpoints.
- [ ] Todo CRUD endpoints.
- [ ] Category endpoints.
- [ ] Tag endpoints.
- [ ] Dashboard endpoint.
- [ ] Calendar endpoint.
- [ ] Statistics endpoints.
- [ ] Notification endpoints.

## Issue 80 — Security Integration Tests

Test:

- [ ] Access without token.
- [ ] Access with invalid token.
- [ ] Access with expired token.
- [ ] Access with revoked refresh token.
- [ ] Access to another user's todo.
- [ ] Access to another user's category.
- [ ] Access to another user's tags.
- [ ] Unauthorized account modifications.
- [ ] Rate limiting.
- [ ] Authentication session expiration.

## Issue 81 — End-to-End API Tests

Test complete user journeys:

```text
Registration
    ↓
Login
    ↓
Create Todo
    ↓
Create Category
    ↓
Create Tag
    ↓
Assign Category and Tags
    ↓
Update Todo
    ↓
Complete Todo
    ↓
Retrieve Dashboard
    ↓
Retrieve Statistics
    ↓
Logout
```

Also test:

```text
Forgot Password
    ↓
Request OTP
    ↓
Verify OTP
    ↓
Reset Password
    ↓
Login With New Password
```

---

# 22 — 📚 API Documentation

## Issue 82 — Configure Swagger / OpenAPI

- [ ] Configure Springdoc OpenAPI.
- [ ] Configure API title.
- [ ] Configure API description.
- [ ] Configure API version.
- [ ] Configure JWT Bearer authentication.
- [ ] Document authentication endpoints.
- [ ] Document user endpoints.
- [ ] Document todo endpoints.
- [ ] Document category endpoints.
- [ ] Document tag endpoints.
- [ ] Document dashboard endpoints.
- [ ] Document calendar endpoints.
- [ ] Document statistics endpoints.
- [ ] Document notification endpoints.
- [ ] Document request examples.
- [ ] Document response examples.
- [ ] Document error responses.
- [ ] Verify Swagger UI.

## Issue 83 — Create API Documentation

Create:

```text
docs/
├── architecture.md
├── database-schema.md
├── authentication.md
├── api-reference.md
├── error-handling.md
├── security.md
├── testing.md
├── docker.md
└── deployment.md
```

Tasks:

- [ ] Document project architecture.
- [ ] Document database relationships.
- [ ] Document authentication flow.
- [ ] Document refresh token flow.
- [ ] Document API endpoints.
- [ ] Document error response structure.
- [ ] Document environment variables.
- [ ] Document deployment configuration.

---

# 23 — 🐳 Docker

## Issue 84 — Create Production Dockerfile

- [ ] Create multi-stage Dockerfile.
- [ ] Configure Gradle build stage.
- [ ] Configure Java 25 build environment.
- [ ] Build application JAR.
- [ ] Configure lightweight Java runtime image.
- [ ] Copy application JAR.
- [ ] Configure application startup.
- [ ] Expose application port.
- [ ] Configure container health check.
- [ ] Run application as non-root user where practical.

## Issue 85 — Configure Docker Compose

Create:

```text
docker-compose.yml
```

Services:

```text
Backend
   |
   └── PostgreSQL
```

Tasks:

- [ ] Configure backend service.
- [ ] Configure PostgreSQL service.
- [ ] Configure Docker network.
- [ ] Configure database volume.
- [ ] Configure environment variables.
- [ ] Configure service dependencies.
- [ ] Configure database health check.
- [ ] Verify backend-to-database connection.
- [ ] Verify Liquibase migrations.
- [ ] Verify persistent database storage.

## Issue 86 — Test Docker Deployment

- [ ] Build backend image.
- [ ] Start containers.
- [ ] Verify application startup.
- [ ] Verify database connection.
- [ ] Verify Liquibase execution.
- [ ] Verify authentication endpoints.
- [ ] Verify todo endpoints.
- [ ] Verify API documentation.
- [ ] Verify application logs.
- [ ] Verify container restart behavior.

---

# 24 — 🔄 CI/CD

## Issue 87 — Configure GitHub Actions

Create:

```text
.github/
└── workflows/
    └── backend.yml
```

Tasks:

- [ ] Configure workflow triggers.
- [ ] Trigger on push.
- [ ] Trigger on pull requests.
- [ ] Configure JDK 25.
- [ ] Configure Gradle.
- [ ] Cache Gradle dependencies.
- [ ] Run compilation.
- [ ] Run unit tests.
- [ ] Run integration tests.
- [ ] Run code quality checks.
- [ ] Build application JAR.
- [ ] Verify successful workflow execution.

## Issue 88 — Configure Docker CI

- [ ] Build Docker image in CI.
- [ ] Verify Docker build.
- [ ] Tag Docker image.
- [ ] Authenticate with container registry.
- [ ] Push image to registry if required.
- [ ] Manage registry credentials securely.

## Issue 89 — Configure Deployment Pipeline

- [ ] Configure deployment provider.
- [ ] Configure production environment variables.
- [ ] Configure deployment credentials.
- [ ] Deploy backend application.
- [ ] Verify deployment health.
- [ ] Configure automatic deployment if required.

---

# 25 — 🌍 Production Deployment

## Issue 90 — Prepare Production Environment

- [ ] Select backend hosting provider.
- [ ] Select PostgreSQL hosting provider.
- [ ] Configure production database.
- [ ] Configure environment variables.
- [ ] Configure database credentials.
- [ ] Configure JWT signing key.
- [ ] Configure SMTP credentials.
- [ ] Configure production Spring profile.
- [ ] Configure application port.
- [ ] Configure CORS origins.
- [ ] Configure HTTPS.
- [ ] Configure database backups.

## Issue 91 — Deploy Backend

- [ ] Build production JAR or Docker image.
- [ ] Configure hosting environment.
- [ ] Deploy application.
- [ ] Verify application startup.
- [ ] Verify database connection.
- [ ] Verify Liquibase migrations.
- [ ] Verify health endpoint.
- [ ] Verify Swagger availability.
- [ ] Verify API connectivity.

## Issue 92 — Connect Frontend and Backend

- [ ] Configure frontend API base URL.
- [ ] Configure backend CORS.
- [ ] Verify registration.
- [ ] Verify login.
- [ ] Verify refresh token flow.
- [ ] Verify logout.
- [ ] Verify password recovery.
- [ ] Verify todo CRUD.
- [ ] Verify categories and tags.
- [ ] Verify search and filtering.
- [ ] Verify pagination.
- [ ] Verify calendar.
- [ ] Verify statistics.
- [ ] Verify reminders.
- [ ] Verify user settings.

---

# 26 — 🔍 Production QA & Documentation

## Issue 93 — Production API Verification

Test:

- [ ] Authentication.
- [ ] Authorization.
- [ ] User isolation.
- [ ] Token expiration.
- [ ] Token refresh.
- [ ] Password recovery.
- [ ] Todo CRUD.
- [ ] Category management.
- [ ] Tag management.
- [ ] Search.
- [ ] Filtering.
- [ ] Sorting.
- [ ] Pagination.
- [ ] Dashboard.
- [ ] Calendar.
- [ ] Reminders.
- [ ] Recurrence.
- [ ] Statistics.
- [ ] Notifications.
- [ ] User settings.

## Issue 94 — Monitoring & Logging

- [ ] Configure structured application logging.
- [ ] Configure appropriate log levels.
- [ ] Avoid logging passwords and tokens.
- [ ] Add request correlation IDs.
- [ ] Configure Spring Boot Actuator.
- [ ] Configure health indicators.
- [ ] Monitor database connectivity.
- [ ] Monitor scheduled jobs.
- [ ] Verify production error logs.

## Issue 95 — Create Backend README

Document:

- [ ] Project overview.
- [ ] Technology stack.
- [ ] Features.
- [ ] Architecture.
- [ ] Database schema.
- [ ] Project structure.
- [ ] Installation instructions.
- [ ] Environment variables.
- [ ] Local development.
- [ ] API documentation.
- [ ] Testing instructions.
- [ ] Docker instructions.
- [ ] Deployment instructions.

---

# 🏁 Final Development Order

```text
01. Project Setup
       ↓
02. Architecture & Common Components
       ↓
03. Database Design & Liquibase
       ↓
04. Authentication & Security
       ↓
05. Token Management
       ↓
06. Email Service & OTP
       ↓
07. Password Recovery
       ↓
08. User Management
       ↓
09. Todo Management
       ↓
10. Categories
       ↓
11. Tags
       ↓
12. Search + Filtering + Sorting + Pagination
       ↓
13. Dashboard
       ↓
14. Calendar
       ↓
15. Reminders
       ↓
16. Recurrence
       ↓
17. Statistics
       ↓
18. Notifications
       ↓
19. Background Jobs
       ↓
20. Validation & Security Hardening
       ↓
21. Testing
       ↓
22. API Documentation
       ↓
23. Docker
       ↓
24. CI/CD
       ↓
25. Production Deployment
       ↓
26. Production QA & Documentation
```

# 🎯 Development Principles

1. **Build incrementally:** Each issue should represent one independently completable development unit.
2. **Follow layered architecture:** Keep controllers, services, repositories, entities and DTOs separated.
3. **Use DTOs:** Never expose JPA entities directly through REST endpoints.
4. **Validate ownership:** Every private resource must be accessible only to its owner.
5. **Use database migrations:** Manage schema changes exclusively through Liquibase.
6. **Write tests:** Test business logic, database queries, controllers and security.
7. **Avoid overengineering:** Start with a modular monolith instead of microservices.
8. **Document APIs:** Maintain consistent request and response structures.
9. **Think about production:** Consider security, logging, performance and deployment from the beginning.

The backend should be developed alongside the frontend, implementing and integrating each feature before moving to the next major module.

---

# 🏆 Final Project Completion Criteria

- [ ] Complete REST API.
- [ ] Secure authentication and authorization.
- [ ] JWT access and refresh token management.
- [ ] Email OTP and password recovery.
- [ ] User profile and account management.
- [ ] Todo CRUD.
- [ ] Categories and tags.
- [ ] Search, filtering, sorting and pagination.
- [ ] Dashboard and calendar APIs.
- [ ] Reminders and recurring todos.
- [ ] Productivity statistics.
- [ ] Notification preferences and delivery.
- [ ] Background job processing.
- [ ] Global exception handling.
- [ ] Request validation.
- [ ] Rate limiting.
- [ ] Unit and integration tests.
- [ ] Swagger documentation.
- [ ] Docker and Docker Compose.
- [ ] GitHub Actions CI/CD.
- [ ] Production deployment.
- [ ] README and technical documentation.
