# Activity Dashboard

## Overview

The Activity Dashboard is a React application that provides an interactive interface for visualizing and analyzing user activity data. It includes features such as total activity summaries, day-wise activity graphs, and comparative analysis across different users. The dashboard is designed with a user-friendly interface, including a fixed header and footer, a sidebar for navigation, and various data visualization components.

## Features

- **Dashboard View**: Provides a comparative view of active days and total activity across selected users.
- **Total Activity View**: Displays the total activity of a selected user, with options to filter by email.
- **Day Wise Activity View**: Shows detailed day-wise activity graphs for a selected user.
- **Responsive Design**: Ensures a seamless experience across different devices and screen sizes.

## Components

- **TotalActivities**: Displays the total activity of a user.
- **ActiveDaysGraph**: Visualizes the active days of a user.
- **ComparisonActiveDaysGraph**: Compares active days across multiple users.
- **ComparisonTotalActivityGraph**: Compares total activity across multiple users.
- **SecondaryHeader**: Displays a secondary header for different sections.

## Data Structure

The data is structured as follows:

- **AuthorWorklogRow**: Represents a user's worklog with details like name, total activity, day-wise activity, and active days.
- **DayWiseActivity**: Contains date-wise activity data with activity items.
- **ActiveDays**: Represents the active days of a user, including burnout status and insights.

## Styling

The application uses a custom CSS file (`App.css`) for styling. Key styling features include:
- Fixed header and footer
- Sidebar navigation
- Responsive design for various screen sizes
- Hover effects for enhanced interactivity

## Usage

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/activity-dashboard.git
    cd activity-dashboard
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Run the application**:
    ```bash
    npm start
    ```

## Dependencies

- **react**: Frontend library for building the user interface.
- **react-select**: For creating dropdown menus.
- **recharts**: For creating responsive charts.
- **@fortawesome/react-fontawesome**: For using FontAwesome icons.
- **@fortawesome/free-brands-svg-icons**: For brand-specific icons like LinkedIn, GitHub, and Gmail.

## Icons and Footer

The footer contains social media and contact icons:
- **LinkedIn**: [kapadnis-saksham-821213289](https://www.linkedin.com/in/kapadnis-saksham-821213289/)
- **GitHub**: [SakshamK404](https://github.com/SakshamK404)
- **Gmail**: [sakshamkaps411@gmail.com](mailto:sakshamkaps411@gmail.com)

## Author

Created by Saksham Kapadnis.


Screenshots:
![image](https://github.com/SakshamK404/DevDynamics-assignment/assets/94706568/1a20a75a-3ef8-440a-9d71-578ad9966b83)
![image](https://github.com/SakshamK404/DevDynamics-assignment/assets/94706568/b964622c-1bd6-4cb1-bc1e-53837570c910)
![image](https://github.com/SakshamK404/DevDynamics-assignment/assets/94706568/a8cf2dff-c720-4fe2-a15f-066e9c5b6a65)
![image](https://github.com/SakshamK404/DevDynamics-assignment/assets/94706568/4dd86fc2-76c5-48d3-88fe-f7e4a3e7b98c)



