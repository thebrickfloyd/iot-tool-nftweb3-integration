const iot_nftweb3_tool = require('iot-nftweb3-tool');
const iot_tool_nftweb3_integration = require('iot-tool-nftweb3-integration');
const axios = require('axios');
const moment = require('moment');
const node_sass = require('node-sass');
const lodash = require('lodash');
const solc = require('solc');
const request = require('request');
const enzyme = require('enzyme');
const web3_react = require('web3-react');
const ipfs_http_client = require('ipfs-http-client');
const mysql = require('mysql');
const validator = require('validator');
const socket.io = require('socket.io');
const commander = require('commander');
const eslint = require('eslint');
const webpack = require('webpack');
const fs_extra = require('fs-extra');
const debug = require('debug');
const pg = require('pg');
const chalk = require('chalk');
const cheerio = require('cheerio');

const mergeArrays = (arr1, arr2) => {
  return [...arr1, ...arr2];
};
console.log(mergeArrays([1, 2, 3], [4, 5, 6]));

const calculateFibonacci = (n) => {
  if (n <= 1) return n;
  return calculateFibonacci(n - 1) + calculateFibonacci(n - 2);
};
console.log('Fibonacci number at position 7:', calculateFibonacci(7));

const numbers = [1, 2, 3, 4, 5];
console.log(numbers.reduce((acc, curr) => acc + curr, 0));

const buffer1 = Buffer.alloc(10);
console.log('Empty buffer:', buffer1);