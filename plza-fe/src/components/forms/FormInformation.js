export const baseFields = [
    {name: 'username', icon: 'user', label: "Username", placeholder: "Username", content: 'Username is required', required: true},
    {name: 'password', type: 'password', icon: 'lock', label: "Password", placeholder: "Make it unique", content: 'Password is required', required: true}
]

export const verificationFields = [
    {name: 'verify_password', type: 'password', icon: 'lock', label: "Verify Password", placeholder: "Re-enter password", content: 'Passwords must match'},
    {name: 'email', type: 'email', icon: 'at', label: 'Email Address', placeholder: 'me@example.com', content: 'Valid email address is required'}
]

export const registerFields = [
    {name: 'display_name', icon: 'user secret', label: "Display Name", placeholder: "Enter a nickname, or your real name, or nothing at all", content: 'Display Name is required', required: false},
    {name: 'favorite_pizza_toppings', icon: 'food', label: "Favorite Pizza Toppings", placeholder: "Olives, mushrooms, pineapple", content: 'Enter in your favorite toppings', required: false},
    {name: 'display_location', icon: "location arrow", label: 'Location', placeholder: 'A rough approximation of where you live', content: 'Location is required'}
]

export const options = [
    { key: "g", text: "Gluten-Free", value: "gluten-free" },
    { key: "v", text: "Vegetarian", value: "vegetarian" },
    { key: "e", text: "Vegan", value: "vegan" }
]