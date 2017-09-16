'use strict';

const EventEmitter = require('events');
const Etcd = require('node-etcd');
const pify = require('pify');

class KeyvEtcd extends EventEmitter {
  constructor(opts){
    super();

    this.redis = new Etcd("127.0.0.1:2379");

  /*  this.redis = ['get', 'set', 'del'].reduce((obj, method) => {
      obj[method] = pify(collection[method].bind())
    })*/
  }

  get(key){
    this.etcd.get(key)
        .then(value => {

        })
  }

  set(key, value, ttl){

  }

  delete(key) {

  }

  clear() {

  }

}
