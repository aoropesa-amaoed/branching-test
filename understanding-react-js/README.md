# THINGS TO REMEMBER

### To enable edit feature
1. We develop new component that will handle edit form
2. update the state (add property - isEditing: false by default) to track if a task is being edited or not
3. you conditionally render based on the state whether you show the edit form or not
4. create a function to handle whether the edit form component wil be shown or not
5. after creating a function (pass it to TODO component) which has our icon of editing
6. bind it to the icon whenever some user press it (add event - onClick)
7. create a function to handle any changes in our todo data
8. we need to pass it to TODO FORM component since that is the component that lets you update the content
9. consume the function in TODO Form to update the content (additionally, since this is a form always remember to bind your state to the input)