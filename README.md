# QR Code Generator

A simple and elegant desktop application built with Electron to generate QR codes from text input.

## Features

* Generate QR codes from any text.
* Clean and intuitive user interface.
* Cross-platform compatibility (Windows, macOS, Linux).

## Technologies Used

* **Electron**: For building cross-platform desktop applications with web technologies.
* **Node.js**: JavaScript runtime for the backend logic.
* **`qrcode` library**: For generating QR code data URLs.

## Setup and Installation

To get this project up and running on your local machine, follow these steps:

1. **Clone the repository (if applicable):**

    ```bash
    git clone <repository-url>
    cd qr-gen
    ```

    *(If you just followed the previous steps, you are already in the correct directory.)*

2. **Install dependencies:**
    Navigate to the project directory and install the required Node.js packages:

    ```bash
    npm install
    ```

## Usage

To start the application, run the following command in your terminal from the project's root directory:

```bash
npm start
```

Once the application window appears:

1. Enter the text you wish to encode into a QR code in the input field.
2. Click the "Generate" button.
3. The generated QR code will appear below the input field.

## License

This project is licensed under the ISC License.
