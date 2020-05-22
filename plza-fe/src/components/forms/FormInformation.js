export const baseFields = [
  {
    name: "username",
    icon: "user",
    label: "Username",
    placeholder: "Username",
    content: "Username is required",
    required: true,
  },
  {
    name: "password",
    type: "password",
    icon: "lock",
    label: "Password",
    placeholder: "Make it unique",
    content: "Password is required",
    required: true,
  },
];

export const verificationFields = [
  {
    name: "verify_password",
    type: "password",
    icon: "lock",
    label: "Verify Password",
    placeholder: "Re-enter password",
    content: "Passwords must match",
  },
  {
    name: "email",
    type: "email",
    icon: "at",
    label: "Email Address",
    placeholder: "me@example.com",
    content: "Valid email address is required",
  },
];

export const userRegisterFields = [
  {
    name: "display_name",
    icon: "user secret",
    label: "Display Name",
    placeholder: "Enter a nickname, or your real name, or nothing at all",
    content: "Display Name is required",
    required: false,
  },
  {
    name: "favorite_pizza_toppings",
    icon: "food",
    label: "Favorite Pizza Toppings",
    placeholder: "Olives, mushrooms, pineapple",
    content: "Enter in your favorite toppings",
    required: false,
  },
  {
    name: "display_location",
    icon: "location arrow",
    label: "Location",
    placeholder: "A rough approximation of where you live",
    content: "Location is required",
  },
];

export const locationRegisterFields = [
  {
    name: "business_name",
    icon: "building",
    label: "Business Name",
    placeholder: "Business Name",
    content: "Business Name is required",
  },
  {
    name: "first_name",
    icon: "user circle",
    label: "First Name",
    placeholder: "First Name",
    content: "Enter in your first name",
    required: false,
  },
  {
    name: "last_name",
    icon: "user circle",
    label: "Last Name",
    placeholder: "Last Name",
    content: "Enter in your last name",
    required: false,
  },
  {
    name: "address",
    icon: "location arrow",
    label: "Street Address",
    placeholder: "123 Pizza Pie Ln, Somewhere, TX 12345",
    content: "Street address is required",
  },
  {
    name: "website_url",
    icon: "computer",
    label: "Website URL",
    placeholder: "https://example.com",
    content: "Enter in your website url",
    required: false,
  },
];

export const options = [
  { key: "e", text: "Vegan", value: "vegan" },
  { key: "g", text: "Gluten-Free", value: "gluten-free" },
  { key: "l", text: "Lacto-vegetarian", value: "lacto-vegetarian" },
  { key: "o", text: "Ovo-vegetarian", value: "ovo-vegetarian" },
  { key: "p", text: "Pescetarian", value: "pescetarian" },
  { key: "v", text: "Vegetarian", value: "vegetarian" },
  { key: "n", text: "None", value: "" },
];
