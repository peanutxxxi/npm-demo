/**
 * 简单的工具函数库，用于演示 npm 发包流程
 */

function greet(name) {
  return `Hello, ${name}!`;
}

function add(a, b) {
  return a + b;
}

function isEven(n) {
  return n % 2 === 0;
}

module.exports = { greet, add, isEven };
