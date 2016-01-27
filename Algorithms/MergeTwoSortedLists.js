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
var mergeTwoLists = function(l1, l2) {
  var result;
  var resultPointer;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      if (result) {
        resultPointer.next = l1;
        resultPointer = resultPointer.next;
      } else {
        result = l1;
        resultPointer = result;
      }
      l1 = l1.next;
    } else {
      if (result) {
        resultPointer.next = l2;
        resultPointer = resultPointer.next;
      } else {
        result = l2;
        resultPointer = result;
      }
      l2 = l2.next;
    }
  }
  var last = l1 ? l1 : l2;
  if (last && resultPointer) {
    resultPointer.next = last;
  }else if (last) {
    result = last;
  }
  return result || [];
};