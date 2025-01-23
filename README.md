I am using version 19 and I have done all the things like auth,service,login logout,list,routing and so on .
I have no git but writing the command because I am working on a Canadian project so unable add extra repo.
first I will create a repo.
After that I will clone it into my system then will put my whole code into that will use "git add ."
after that will use "git commit -m "merge comment"  "
then git push .




1. Project Structure
This Angular application follows a modular architecture with well-defined components, services, and routing.

2. Authentication Module (auth)
Key Features
Login: Allows users to log in with email and password.
Signup: Allows new users to register.
Auth Guard: Protects routes like user-management, document-management, etc.
3. User Management Module (user-management)
This module provides the user interface for managing users, assigning roles, and displaying user details. It is restricted to admins.

user-management.component.ts: Displays and manages the user list.
user-management.routes.ts: Defines routes for the user management section.
user-management.service.ts: Handles API calls for fetching and managing users.
4. Document Management Module (document-management)
This module handles document upload and management, including listing and retrieving documents.

document-upload.component.ts: Interface to upload new documents.
document-list.component.ts: Displays a list of uploaded documents.
document-management.service.ts: Manages API calls for document operations.
Key Features
Document Upload: Allows users to upload documents.
Document List: Displays all uploaded documents with options to manage them.
5. Ingestion Management Module (ingestion-management)
This module allows the user to trigger and monitor the ingestion process, which generates embeddings for document retrieval in the Q&A interface.

ingestion.component.ts: Interface to trigger ingestion and display its status.
ingestion.service.ts: Manages API calls for triggering and monitoring the ingestion process.
6. Q&A Module (qna)
This module provides a user-friendly interface to ask questions and receive answers, as well as display relevant document excerpts using RAG.

qna.component.ts: Allows users to ask questions and display answers.
qna.service.ts: Manages API calls to retrieve answers based on the questions.
7. App Component and Routing (app.component.ts, app-routing.module.ts)
app.component.ts: The root component where the navigation bar and layout structure are defined.
app-routing.module.ts: Handles all routing for the application, defining the paths for each module and setting up lazy loading for efficient page navigation.
This module handles the user authentication process. It includes login, signup components, authentication service, and a guard for protected routes.

login.component.ts: Handles user login, authenticating credentials, and storing the JWT token.
signup.component.ts: Handles user registration and credential creation.
auth.service.ts: Manages authentication state, login/logout actions, and token storage.
auth.guard.ts: Protects routes from unauthorized access by checking authentication status.
Key Routes
/auth/login: Login page
/auth/signup: Signup page
/users: User Management page (admin only)
/documents: Document Management page
/ingestion: Ingestion Management page
/qna: Q&A page
