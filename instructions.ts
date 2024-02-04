/**
 * Welcome to the technical test for prospective candidates for Libellus at "The Zeeth"!
 *
 * ## Task Overview:
 * In this test, you'll be building a simple activities dashboard, drawing inspiration from libellus.
 * Follow the steps below to demonstrate your skills in TypeScript and React:
 *
 * ### Step 1:
 * Create a file named "Activities.tsx"
 *
 * ### Step 2:
 * - Create a file named "Activity.tsx" and utilize it within "Activities.tsx".
 * - Apply styles to the components using emotion. (See image for reference)
 *   import styled from "@emotion/styled" (it has the same api that styled components).
 * - Display some activities with mock data, for instance, all the activities could have same name: "Activity name" or "Meeting with team",
 *   and some dates as a string.
 *   (real data will be used in nexts steps, the purpose here is to make the components and styles).
 *
 * ### Step 3:
 * Create a new file: "src/activityController.ts" and implement a function that takes the activities
 * from activities.json and return an activities array.
 * Transform the activities in this controller to follow this signature:
 *
 * ```typescript
 * {
 *    id: string,
 *    description: string
 *    name: string,
 *    startTime: Date,
 *    endTime: Date
 * }
 * ```
 *
 * ### Step 4: In Activities.tsx get the activities using the function created in Step 3.
 * Modify "Activities.tsx" and "Activity.tsx" to display the real activities data:
 * - Display the name, startTime, and endTime of each activity. Format dates using localeString.
 *
 * ### Step 5:
 * Define the necessary types to ensure type safety in your application.
 *
 * ### Step 6:
 *   - Create an "ActivityDetails.tsx" component as a sibling to "Activities" within "App.tsx".
 *   - Add an onClick callback to the Activity component to show details of the clicked activity in ActivityDetails.
 *   - Implement the necessary states and logic to display activity details when an activity is clicked.
 *   - Change the border of an Activity when it is selected.
 *
 * ### Bonuses:
 *   1. Address and resolve any performance issues that arise when selecting an activity.
 *   2. Propose a solution for prop drilling (implementation not required).
 *
 * ## Style tokens:
 * title-text: #FFFFFF
 * activity-text: #54339d
 * activity-background: #b7b7ec
 * activity-border: #8f5ef0
 */
