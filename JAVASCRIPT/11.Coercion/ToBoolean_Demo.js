console.log(!0);
/**
 * 0-->falsy value
 * ToBoolean(0)-->returns false, so oldvalue variable is now false
 * !0--> So, returned true
 */
console.log(!-4);
/**
 * -4-->truthy
 * ToBoolean(-4)--> returns true, so oldvalue variable is now true
 * !-4-->So, returned false
 */
console.log(!{});
/**
 * {}-->truthy
 * ToBoolean({})--> returns true, so oldvalue variable is now true
 * !{}-->So, returned false
 */
console.log(!console.log(0));