/**
 * @constructor
 * Initialize your data structure here.
 */
var TrieNode = function() {
    this.storage = {};
    this.wordEnd = false;
};

var Trie = function() {
    this.root = TrieNode();
};

/**
 * @param {string} word
 * @return {void}
 * Inserts a word into the trie.
 */
Trie.prototype.insert = function(word) {
  var position = this;
  word.split('').forEach(function(letter, index){
    if (!position[letter]) {
      position[letter] = new TrieNode;
    }
    position = position[letter];
    if (index === word.length-1) {
      position.wordEnd = true;
    }
  })
};

/**
 * @param {string} word
 * @return {boolean}
 * Returns if the word is in the trie.
 */
Trie.prototype.search = function(word) {
  var position = this;
  var result;
  word.split('').forEach(function(letter, index){
    position = position[letter] || {};
    if (index === word.length-1) {
      result = position.wordEnd || false;
    }
  })
  return result;
};

/**
 * @param {string} prefix
 * @return {boolean}
 * Returns if there is any word in the trie
 * that starts with the given prefix.
 */
Trie.prototype.startsWith = function(prefix) {
  var position = this;
  var result;
  prefix.split('').forEach(function(letter, index){
    position = position[letter] || {empty: true};
    if (index === prefix.length-1) {
      result = !position.empty;
    }
  })
  return result;
};
 