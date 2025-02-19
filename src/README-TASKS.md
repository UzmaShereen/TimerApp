✅ 1. UI Consistency
Ensured the app's UI matches the given screenshots for a seamless user experience.
✅ 2. Support for Simultaneous Timers
Updated the app to allow multiple timers to run at the same time, rather than limiting to one.
✅ 3. Improved Snack Bar Behavior
When a timer completes, a snack bar notification now appears.
The notification sound keeps playing until the snack bar is dismissed.
✅ 4. Fixed Snack Bar Console Error
Resolved the console error occurring when clicking the snack bar's dismiss button.
✅ 5. Extracted Common Components
Refactored buttons in the Add/Edit Timer Modal into a separate reusable component.
Replaced all similar buttons across the app with this new component.
✅ 6. Consolidated Modal Code
Refactored the code to use a single modal component for both adding and editing timers, eliminating duplication.
✅ 7. Enhanced Validation Feedback
Previously, the Submit button was disabled for invalid forms.
Now, an error snack bar displays when an invalid form is submitted.
✅ 8. Responsive Snack Bar Placement
Desktop devices: Snack bars appear in the top-right corner.
Mobile devices: Snack bars appear at the bottom of the screen.
<!-- ✅ 9. Added Tests for Reliability
Unit tests for the validation.ts file to ensure validation rules work correctly.
Component tests for reusable components like TimerItem and ModalButtons.
✅ 10. Timer Persistence Across Refreshes
Implemented localStorage to ensure timers persist even after a page refresh -->