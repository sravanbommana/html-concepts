
//cookie will be encode so we need to decode it
const str= document.cookie;
console.log(decodeURIComponent(str))

/*********************************************************************************************************************
 * 2. Set cookie 
 * To set a value for a cookie, you compose the cookie text in the following format:
 * name=value; expires=expirationTime; path=domainPath; domain=domainName; secure
 *********************************************************************************************************************/

document.cookie = `${encodeURIComponent("username")} = ${encodeURIComponent("admin")}`;

/*********************************************************************************************************************
 * 3.Remove a cookie
 * To remove a cookie, you need to set the cookie again with the same name, path, domain, and secure option.
 * And you need to set the expiration date to some time in the past.
 *********************************************************************************************************************/
