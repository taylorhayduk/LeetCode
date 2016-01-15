/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
  var result;
  var pointer;
  var carry = 0;

  // while at least one linked list has digits left
  while(l1 || l2){
    // get values or 0 for each list
    var l1_val = l1 === null ? 0 : l1.val;
    var l2_val = l2 === null ? 0 : l2.val;
    // calculate nextDigit by adding values and carried digit
    var nextDigit = l1_val+l2_val+carry;
    // if nextDigit is over 10, set the carry to 1 and subtract 10 from digit
    if (nextDigit >= 10) {
      nextDigit = nextDigit - 10;
      carry = 1;
    } else {
      carry = 0;
    }
    // set original result and pointer
    if (result === undefined) {
      result = new ListNode(nextDigit);
      pointer = result;
    }
    // add new digits to result linkedList
    else {
      pointer.next = new ListNode(nextDigit);
      pointer = pointer.next;
    }
    // move to next digit and avoid error calling .next on null
    l1 = l1 === null ? null : l1.next;
    l2 = l2 === null ? null : l2.next;
  }
  // if there is a final carry digit, add here
  if (carry) {
    pointer.next = new ListNode(1);
  }
  return result;
};