/*****************************************************************************************************************************
 * 1) Name  - a unique name that identifies the cookie. The cookie names are case-insensitive. It means that Username
 *  and username are the same cookies.
 * 2) Value – string value of the cookie. It must be URL-encoded
 * 3) Domain – a domain for which the cookie is valid.
 * 4) Path – path without the domain for which the cookie should be sent to the server. For example, you can specify that the 
 * cookie is accessible only from the https://www.javascripttutorial.net/dom/ so pages at https://www.javascripttutoiral.net/ 
 * won’t send the cookie information.
 * Expiration – timestamp that indicates when the web browser should delete the cookie (or when the browser should stop sending 
 * the cookie to the server). The expiration date is set as a date in GMT format: Wdy, DD-Mon-YYYY HH:MM:SS GMT. The expiration 
 * date allows the cookies to be stored in the user’s web browsers even after users close the web browsers.
 * Secure flag – if specified, the web browser only sends the cookie to the server only via an SSL connection (https, not http)
 *******************************************************************************************************************************/