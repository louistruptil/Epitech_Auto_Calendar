# Epitech Auto Calendar

## Introduction

This script allows you to automatically sync your Epitech calendar with your Google Calendar. By following the steps below, you can easily set up and maintain this synchronization.

## Usage

### Prerequisites

Before you begin, make sure you have the following:

- Access to your Epitech account
- Google API credentials (Client ID, Client Secret, Refresh Token)

### Steps

1. **Obtain User Cookie:**
   - Visit the Epitech intranet.
   - Open developer tools (F12 or right-click and select "Inspect").
   - Go to the "Application" tab.
   - Under "Cookies," find and copy the user cookie.

2. **Configure Google API Credentials:**
   - Obtain your Google API credentials by following this tutorial: [link to tutorial](https://www.youtube.com/watch?v=zrLf4KMs71E&t=2028s).
   
3. **Modify Script Parameters:**
   - Open the script (`index.js`) in a text editor.
   - Locate the `apiUrl` variable and adjust the start and end dates as per your preferences.

4. **Run the Script:**
   - Execute the script using the following command:
     ```bash
     node index.js
     ```

## Customization

You can customize the behavior of the script by modifying certain parameters:

- **Date Range:** Adjust the start and end dates in the `apiUrl` variable to specify the period for fetching the calendar data.

## Additional Notes

- To streamline the process, consider creating an alias for the script in your shell configuration file (e.g., `.zshrc`). For example:
  ```bash
  alias epical='node /path/to/index.js'
