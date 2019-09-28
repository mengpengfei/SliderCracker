(function () {
	'use strict';

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var jschacha20 = createCommonjsModule(function (module) {
	/*
	 * Copyright (c) 2017, Bubelich Mykola
	 * https, 0x//www.bubelich.com
	 *
	 * (｡◕‿‿◕｡)
	 *
	 * All rights reserved.
	 *
	 * Redistribution and use in source and binary forms, with or without
	 * modification, are permitted provided that the following conditions are met, 0x
	 *
	 * Redistributions of source code must retain the above copyright notice,
	 * this list of conditions and the following disclaimer.
	 *
	 * Redistributions in binary form must reproduce the above copyright notice,
	 * this list of conditions and the following disclaimer in the documentation
	 * and/or other materials provided with the distribution.
	 *
	 * Neither the name of the copyright holder nor the names of its contributors
	 * may be used to endorse or promote products derived from this software without
	 * specific prior written permission.
	 *
	 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDER AND CONTRIBUTORS "AS IS"
	 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
	 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
	 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
	 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
	 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
	 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
	 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
	 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
	 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
	 * POSSIBILITY OF SUCH DAMAGE.
	 *
	 * ChaCha20 is a stream cipher designed by D. J. Bernstein.
	 * It is a refinement of the Salsa20 algorithm, and it uses a 256-bit key.
	 *
	 * ChaCha20 successively calls the ChaCha20 block function, with the same key and nonce, and with successively increasing block counter parameters.
	 * ChaCha20 then serializes the resulting state by writing the numbers in little-endian order, creating a keystream block.
	 *
	 * Concatenating the keystream blocks from the successive blocks forms a keystream.
	 * The ChaCha20 function then performs an XOR of this keystream with the plaintext.
	 * Alternatively, each keystream block can be XORed with a plaintext block before proceeding to create the next block, saving some memory.
	 * There is no requirement for the plaintext to be an integral multiple of 512 bits.  If there is extra keystream from the last block, it is discarded.
	 *
	 * The inputs to ChaCha20 are
	 * - 256-bit key
	 * - 32-bit initial counter
	 * - 96-bit nonce.  In some protocols, this is known as the Initialization Vector
	 * - Arbitrary-length plaintext
	 *
	 * Implementation derived from chacha-ref.c version 20080118
	 * See for details, 0x http, 0x//cr.yp.to/chacha/chacha-20080128.pdf
	 */

	/**
	 *
	 * @param {Uint8Array} key
	 * @param {Uint8Array} nonce
	 * @param {number} counter
	 * @throws {Error}
	 *
	 * @constructor
	 */
	var JSChaCha20 = function (key, nonce, counter) {
	  if (typeof counter === 'undefined') {
	    counter = 0;
	  }

	  if (!(key instanceof Uint8Array) || key.length !== 32) {
	    throw new Error('Key should be 32 byte array!')
	  }

	  if (!(nonce instanceof Uint8Array) || nonce.length !== 12) {
	    throw new Error('Nonce should be 12 byte array!')
	  }

	  this._rounds = 20;
	  // Constants
	  this._sigma = [0x61707865, 0x3320646e, 0x79622d32, 0x6b206574];

	  // param construction
	  this._param = [
	    this._sigma[0],
	    this._sigma[1],
	    this._sigma[2],
	    this._sigma[3],
	    // key
	    this._get32(key, 0),
	    this._get32(key, 4),
	    this._get32(key, 8),
	    this._get32(key, 12),
	    this._get32(key, 16),
	    this._get32(key, 20),
	    this._get32(key, 24),
	    this._get32(key, 28),
	    // counter
	    counter,
	    // nonce
	    this._get32(nonce, 0),
	    this._get32(nonce, 4),
	    this._get32(nonce, 8)
	  ];

	  // init 64 byte keystream block //
	  this._keystream = [
	    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
	  ];

	  // internal byte counter //
	  this._byteCounter = 0;
	};

	JSChaCha20.prototype._chacha = function () {
	  var mix = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	  var i = 0;
	  var b = 0;

	  // copy param array to mix //
	  for (i = 0; i < 16; i++) {
	    mix[i] = this._param[i];
	  }

	  // mix rounds //
	  for (i = 0; i < this._rounds; i += 2) {
	    this._quarterround(mix, 0, 4, 8, 12);
	    this._quarterround(mix, 1, 5, 9, 13);
	    this._quarterround(mix, 2, 6, 10, 14);
	    this._quarterround(mix, 3, 7, 11, 15);

	    this._quarterround(mix, 0, 5, 10, 15);
	    this._quarterround(mix, 1, 6, 11, 12);
	    this._quarterround(mix, 2, 7, 8, 13);
	    this._quarterround(mix, 3, 4, 9, 14);
	  }

	  for (i = 0; i < 16; i++) {
	    // add
	    mix[i] += this._param[i];

	    // store keystream
	    this._keystream[b++] = mix[i] & 0xFF;
	    this._keystream[b++] = (mix[i] >>> 8) & 0xFF;
	    this._keystream[b++] = (mix[i] >>> 16) & 0xFF;
	    this._keystream[b++] = (mix[i] >>> 24) & 0xFF;
	  }
	};

	/**
	 * The basic operation of the ChaCha algorithm is the quarter round.
	 * It operates on four 32-bit unsigned integers, denoted a, b, c, and d.
	 *
	 * @param {Array} output
	 * @param {number} a
	 * @param {number} b
	 * @param {number} c
	 * @param {number} d
	 * @private
	 */
	JSChaCha20.prototype._quarterround = function (output, a, b, c, d) {
	  output[d] = this._rotl(output[d] ^ (output[a] += output[b]), 16);
	  output[b] = this._rotl(output[b] ^ (output[c] += output[d]), 12);
	  output[d] = this._rotl(output[d] ^ (output[a] += output[b]), 8);
	  output[b] = this._rotl(output[b] ^ (output[c] += output[d]), 7);

	  // JavaScript hack to make UINT32 :) //
	  output[a] >>>= 0;
	  output[b] >>>= 0;
	  output[c] >>>= 0;
	  output[d] >>>= 0;
	};

	/**
	 * Little-endian to uint 32 bytes
	 *
	 * @param {Uint8Array|[number]} data
	 * @param {number} index
	 * @return {number}
	 * @private
	 */
	JSChaCha20.prototype._get32 = function (data, index) {
	  return data[index++] ^ (data[index++] << 8) ^ (data[index++] << 16) ^ (data[index] << 24)
	};

	/**
	 * Cyclic left rotation
	 *
	 * @param {number} data
	 * @param {number} shift
	 * @return {number}
	 * @private
	 */
	JSChaCha20.prototype._rotl = function (data, shift) {
	  return ((data << shift) | (data >>> (32 - shift)))
	};

	/**
	 *  Encrypt data with key and nonce
	 *
	 * @param {Uint8Array} data
	 * @return {Uint8Array}
	 */
	JSChaCha20.prototype.encrypt = function (data) {
	  return this._update(data)
	};

	/**
	 *  Decrypt data with key and nonce
	 *
	 * @param {Uint8Array} data
	 * @return {Uint8Array}
	 */
	JSChaCha20.prototype.decrypt = function (data) {
	  return this._update(data)
	};

	/**
	 *  Encrypt or Decrypt data with key and nonce
	 *
	 * @param {Uint8Array} data
	 * @return {Uint8Array}
	 * @private
	 */
	JSChaCha20.prototype._update = function (data) {
	  if (!(data instanceof Uint8Array) || data.length === 0) {
	    throw new Error('Data should be type of bytes (Uint8Array) and not empty!')
	  }

	  var output = new Uint8Array(data.length);

	  // core function, build block and xor with input data //
	  for (var i = 0; i < data.length; i++) {
	    if (this._byteCounter === 0 || this._byteCounter === 64) {
	      // generate new block //

	      this._chacha();
	      // counter increment //
	      this._param[12]++;

	      // reset internal counter //
	      this._byteCounter = 0;
	    }

	    output[i] = data[i] ^ this._keystream[this._byteCounter++];
	  }

	  return output
	};

	// EXPORT //
	if (module.exports) {
	  module.exports = JSChaCha20;
	}
	});

	if (typeof window.crypto == "undefined") {
		const rand = makeRand();
		window.crypto = {
			getRandomValues(typedArray) {
				for (let i = 0; i < typedArray.length; i++) {
					typedArray[i] = rand(typedArray.BYTES_PER_ELEMENT);
				}
			}
		};
	}

	function makeRand() {
		// weakRand is used to generate start values.
		// The don't have to be "securely" random, but merely unpredictable.
		function weakRand(size) {
			let buf = new Uint8Array(size);
			for (let i = 0; i < size; i++) {
				buf[i] = Math.round(Math.random() * 256);
			}
			return buf;
		}
		const key = weakRand(32);
		const nonce = weakRand(12);
		const counter = 1;
		const chacha = new jschacha20(key, nonce, counter);

		// We will use the same buffer for keeping pre-generated bytes.
		// Start with a buffer of simply anything, as it will be turned into noise anyway.
		let buffer = new Uint8Array(Array(64).fill(1));

		// Pos is the number of invalid buffer bytes.
		let pos = buffer.length;

		// Returns a new random byte.
		function getByte() {
			// If all bytes in the buffer have been invalidated, generate a new one.
			if (pos >= buffer.length) {
				buffer = chacha.encrypt(buffer);
				pos = 0;
			}
			return buffer[pos++];
		}

		// Returns a new random integer of the given size in bytes.
		return function(size) {
			if (size < 1 || size > 16) {
				throw new Error("Invalid size argument: " + size);
			}
			let result = 0;
			while (size > 0) {
				size--;
				result = (result << 8) | getByte();
			}
			return result;
		};
	}

}());