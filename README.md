## Sales Management System API

This project involves the development of a robust RESTful API designed for managing sales within an e-commerce platform. The API will encompass the capability to create, read, update, and delete both products and sales transactions. To achieve this, a MySQL database will be utilized to store and manage data. Additionally, comprehensive unit tests will be created to ensure the functionality of the implemented features, a crucial skill for any developer.

### Project Objectives

In this project, the primary objectives are as follows:

1. **Interacting with MySQL Database**: Implement the ability to interact with a relational MySQL database, facilitating data storage and retrieval for the sales management system.

2. **Layered Architecture**: Develop the API utilizing a structured layered architecture to ensure code maintainability and scalability.

3. **Data Validation**: Create robust data validation mechanisms to ensure that the data received by the API is accurate, complete, and follows the specified formats.

4. **Endpoint Testing**: Write comprehensive unit tests for the API endpoints to guarantee their proper functionality and to achieve a high level of test coverage.

### Implemented Endpoints

The project features the following API endpoints:

#### List Products

- **GET /products**: Allows the retrieval of a list of all products. The list is sorted in ascending order based on the "id" field.
- **GET /products/:id**: Permits the retrieval of a specific product using its unique ID.

#### List Sales

- **GET /sales**: Enables the retrieval of a list of all sales transactions. The list is sorted in ascending order based on the "saleId" field. In the case of tied values, it is also sorted in ascending order based on the "productId" field.
- **GET /sales/:id**: Facilitates the retrieval of a specific sale transaction using its unique ID.

#### Create Products

- **POST /products**: Allows for the creation of a new product. The request body should include the product's name in the specified format:
  ```
  {
    "name": "Product Name"
  }
  ```

#### Validations for Product Creation

- The product creation endpoint includes data validation to ensure that only valid data is accepted, and appropriate error messages are returned for invalid requests.

#### Create Sales

- **POST /sales**: Provides the capability to create new sales transactions, including multiple product sales within a single request. The request body format is as follows:
  ```
  [
    {
      "productId": 1,
      "quantity": 1
    },
    {
      "productId": 2,
      "quantity": 5
    }
  ]
  ```

Feedback and Acknowledgment
We value your feedback! If you have any comments, suggestions, or feedback regarding this project, please feel free to reach out. Your input is essential for our ongoing improvement.

Acknowledgment
This project was completed as part of the coursework at @betrybe, an educational platform that prepares students for careers in technology. We acknowledge the support and guidance provided by the Trybe team and colleagues during the development of this project.


### Getting Started

To get started with this project:

1. Clone the repository to your local environment.
2. Configure the MySQL database with the appropriate credentials and import the database schema if necessary.
3. Install dependencies using `npm install` or `yarn install`.
4. Start the API server using `npm start` or `yarn start`.
5. Access the API via the provided endpoints as described above.

Remember to set up your environment, define environment variables, and adjust database configurations as needed. Enjoy coding! 😊

## Contributing

Contributions to this project are welcome! If you have bug fixes, feature additions, or improvements, please feel free to open an issue or submit a pull request.

## Acknowledgments

I would like to acknowledge and express my gratitude to [Trybe](https://www.betrybe.com/) for their support and guidance throughout the development of this educational resource.
