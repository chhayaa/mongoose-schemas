# Mongoose Schemas for User and Demo Models

This project provides reusable Mongoose schemas for user and demo models, designed to be shared across different Node.js applications. It offers a structured way to define and manage data models for MongoDB databases using Mongoose.

## Repository Structure

The repository is organized as follows:

- `index.js`: The main entry point that exports the models.
- `models/`: Directory containing the Mongoose schema definitions.
  - `new-user.model.js`: Defines the schema for user data.
  - `demo.model.js`: Defines the schema for demo data.
- `package.json`: Defines project metadata and dependencies.

## Usage Instructions

### Installation

To use these schemas in your project, follow these steps:

1. Ensure you have Node.js (version 12 or higher) and npm installed.
2. Install the package in your project:

```bash
npm install git+https://github.com/chhayaa/mongoose-schemas.git
```

3. Install the peer dependency:

```bash
npm install mongoose@5.13.23
```

### Getting Started

To use the schemas in your application:

1. Import the models in your code:

```javascript
const { newUser, demoModel } = require('mongoose-schemas');
```

2. Use the models to interact with your MongoDB database:

```javascript
// Example: Creating a new user
const user = new newUser({
  cognitousername: 'johndoe',
  email: 'john@example.com',
  personalDetails: {
    name: 'John',
    lastname: 'Doe',
    gender: 'Male'
  }
});

await user.save();

// Example: Creating a new demo
const demo = new demoModel({
  userId: user._id,
  astrologerId: someAstrologerId,
  channelName: 'AstroChannel'
});

await demo.save();
```


## Model Registration

```javascript
const newUsers = mongoose.models.newUser || mongoose.model('newUser', newUser) [[1]]
// (https://arunangshudas.medium.com/understanding-documents-objects-and-collections-in-mongoose-39a57a4e8a40)



### Models

#### New User Model

The `newUser` model includes fields for:

- Cognitive username
- Device information
- Contact details
- Personal information
- Location details
- Birth and death information
- Marriage details
- Medical information
- Work history
- Education details

For a complete list of fields and their types, refer to the `new-user.model.js` file.

#### Demo Model

The `demoModel` includes:

- `userId`: ObjectId of the associated user
- `astrologerId`: ObjectId of the associated astrologer
- `channelName`: String representing the channel name

### Configuration

No additional configuration is required to use these schemas. However, ensure that your MongoDB connection is properly set up in your application before using these models.

### Troubleshooting

If you encounter issues:

1. Verify that you're using a compatible version of Mongoose (5.13.23).
2. Check your MongoDB connection string and ensure the database is accessible.
3. For schema-related errors, review the model definitions in the `models/` directory.

## Data Flow

The data flow in applications using these schemas typically follows this pattern:

1. Application receives data (e.g., from a user input or API request)
2. Data is validated against the Mongoose schema
3. If valid, data is saved to the MongoDB database
4. For retrieval, queries are made using the Mongoose models
5. Retrieved data is then used in the application logic or sent as a response

```
[User Input/API Request] -> [Mongoose Schema Validation] -> [MongoDB Database]
                                        ^                          |
                                        |                          |
                                        |                          v
                            [Application Logic/API Response] <- [Data Retrieval]
```

Note: Ensure proper data validation and sanitization before saving to the database, as these schemas provide structure but do not enforce all possible business logic constraints.