import { HexBase64BinaryEncoding, Utf8AsciiBinaryEncoding, HexBase64Latin1Encoding } from 'crypto'
import { ICipherOption } from '../lib/cipher';
export interface Deferred {
  resolve: (value?: any) => any
  reject: (reason?: any) => void
  promise: Promise<any>
}

export namespace AwesomeCrypto {
  export class Cipher {
    constructor(ICipherOption);

    encryptAES(text: string, algorithm: string, outputEncoding: HexBase64BinaryEncoding);
    decryptAES(text: string, algorithm: string, outputEncoding: Utf8AsciiBinaryEncoding);
    encrypyDES(text: string, algorithm: string, outputEncoding: HexBase64BinaryEncoding);
    decrypyDES(text: string, algorithm: string, outputEncoding: Utf8AsciiBinaryEncoding);
  }

  export class Hash {
    generateDigest(algorithm: string, text: string, encoding: HexBase64Latin1Encoding)
  }
}
