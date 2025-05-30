# Microservices Architecture - Flight Booking System

This project implements a microservices-based architecture for a flight booking system. The system consists of multiple services that work together to provide a complete booking experience.

## Architecture Overview

The system is composed of the following microservices:

1. **API Gateway** (Port: 3005)
   - Entry point for all client requests
   - Handles request routing and authentication
   - Implements rate limiting
   - Uses proxy middleware for service routing

2. **Authentication Service** (Port: 3001)
   - Handles user authentication and authorization
   - Validates JWT tokens
   - Provides authentication middleware for other services

3. **Booking Service** (Port: 3002)
   - Manages flight bookings
   - Handles seat allocation
   - Calculates booking costs
   - Integrates with Flight Service for seat availability

4. **Flight Service** (Port: 3003)
   - Manages flight information
   - Handles seat inventory
   - Provides flight details and pricing

## Service Details

### API Gateway
- Built with Express.js
- Implements rate limiting (11 requests per 2 minutes)
- Uses Morgan for request logging
- Routes requests to appropriate microservices
- Handles authentication verification

### Booking Service
- Built with Express.js and Sequelize ORM
- Features:
  - Booking creation and management
  - Seat availability checking
  - Cost calculation
  - Integration with Flight Service
  - Message queue integration for notifications
- Database: Uses Sequelize with a Booking model
- Implements repository pattern for data access

### Authentication Service
- Handles user authentication
- JWT token validation
- Provides authentication middleware for other services

## Technical Stack

- **Backend Framework**: Node.js with Express
- **Database**: Sequelize ORM
- **Message Broker**: RabbitMQ (for async communication)
- **Authentication**: JWT-based authentication
- **API Documentation**: Available for each service
- **Error Handling**: Custom error classes and middleware

## API Endpoints

### Booking Service
- `POST /api/v1/bookings` - Create a new booking
- `GET /api/v1/home` - Service health check

### API Gateway
- `GET /home` - Gateway health check
- `/bookingservice/*` - Routes to Booking Service
- Implements authentication middleware for protected routes

## Security Features

1. **Rate Limiting**
   - Implemented at API Gateway level
   - 11 requests per 2-minute window

2. **Authentication**
   - JWT-based authentication
   - Token validation for protected routes
   - Secure header-based token passing

3. **Error Handling**
   - Custom error classes
   - Proper error status codes
   - Detailed error messages

## Getting Started

1. Install dependencies for each service:
```bash
npm install
```

2. Set up environment variables for each service

3. Start the services in the following order:
   - Authentication Service
   - Flight Service
   - Booking Service
   - API Gateway

## Environment Variables

Each service requires specific environment variables:

### API Gateway
- `PORT`: 3005

### Booking Service
- `PORT`: 3002
- `FLIGHT_SERVICE_PATH`: Flight service URL
- `EXCHANGE_NAME`: Message broker exchange name
- `REMINDER_BINDING_KEY`: Message queue binding key
- `MESSAGE_BROKER_URL`: Message broker URL

## Error Handling

The system implements a robust error handling mechanism:
- Custom error classes (ServiceError, ValidationError, RepositoryError)
- HTTP status codes for different error types
- Detailed error messages and explanations

## Message Queue Integration

The system uses RabbitMQ for asynchronous communication:
- Booking notifications
- Service-to-service communication
- Event-driven architecture support

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request
