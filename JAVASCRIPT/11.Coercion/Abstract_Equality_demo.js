console.log(null == undefined);//true
console.log(undefined == null);//true
console.log(10 == '10');
/**
 * ToNumber('10')-->10
 * again == is called
 * 10==10 -->true
 */
console.log(10 == '12');
/**
 * ToNumber('12')-->12
 * again == is called
 * 10==12 -->false
 */
console.log('99' == 99);
/**
 * ToNumber('99')-->99
 * again == is called
 * 99==99 -->true
 */
console.log(false == 0);
/**
 * ToNumber(false)-->0
 * again == is called
 * 0==0 -->true
 */
console.log(true == 10);
/**
 * ToNumber(true)-->1
 * again == is called
 *  1==10 -->false
 */
console.log(10 == { valueOf() { return 10; } });
/**
 * { valueOf() { return 10; } } --> Object So,
 * called ToPrimitive on { valueOf() { return 10; } } with hint number
 * so, valueOf is called which returns 10
 * and again == is called
 * 10 == 10-->true
 */

console.log(null == "10");//false