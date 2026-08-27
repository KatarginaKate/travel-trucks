export function validateBookingForm(name: string, email: string) {
  const invalidName = name.length < 3 || /\d/.test(name);
  const invalidEmail = !email || !/^\S+@\S+\.\S+$/.test(email);

  return {
    name: invalidName,
    email: invalidEmail,
  };
}