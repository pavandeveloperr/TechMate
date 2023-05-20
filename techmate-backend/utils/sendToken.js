/**
 * Sends a token as a cookie in the response and provides a JSON response.
 *
 * @param {object} res - The response object
 * @param {object} user - The user object
 * @param {string} message - A message to include in the response
 * @param {number} [statusCode=200] - The HTTP status code (default: 200)
 */
export const sendToken = (res, user, message, statusCode = 200) => {
  // Get the JWT token for the user
  const token = user.getJWTToken();

  // Set options for the token cookie
  const options = {
    expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000), // Token expires in 15 days
    httpOnly: true, // Token accessible only via HTTP
    // secure: true, // Token sent only over HTTPS
    sameSite: "none", // Token sent only for same-site requests
  };

  // Set the token as a cookie in the response
  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    message,
    user,
  });
};
