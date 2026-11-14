🚀 Node.js Event-Driven Microservices
A robust, scalable microservices architecture built with Node.js, TypeScript, Express, and Apache Kafka, featuring a centralized API Gateway for routing and authentication, and event-driven background workers.

🏗️ Architecture Overview
This project implements a decoupled microservices pattern:

API Gateway : Acts as the single entry point for all client requests. It handles routing, authorization, and secret header verification (x-gateway-secret) before forwarding traffic downstream.

Kafka Event Bus: Enables asynchronous, decoupled communication between microservices using topics (e.g., task events, media events).

Microservices (Workers & APIs):

Workflow Service: Consumes domain events from Kafka, validates them, persists workflows to the database, and provides role-based access control (RBAC) endpoints.

Product/Client Service: Renders server-side views (EJS) and fetches data dynamically via the API Gateway.

Database & Vector Search: Powered by Supabase / PostgreSQL with pgvector for embedding matches and structured storage.
