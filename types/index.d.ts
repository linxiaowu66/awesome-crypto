import { Encoding, BinaryToTextEncoding } from "crypto";
export interface ICipherOption {
  secret: string;
  iv?: string; // ECB模式不需要
}

export class Cipher {
  constructor(option: ICipherOption);

  encryptAES(text: string, algorithm: string, outputEncoding: Encoding): string;
  decryptAES(text: string, algorithm: string, inputEncoding: Encoding): string;
  encrypyDES(text: string, algorithm: string, outputEncoding: Encoding): string;
  decrypyDES(text: string, algorithm: string, inputEncoding: Encoding): string;
}
export class Hash {
  generateDigest(
    algorithm: string,
    text: string,
    encoding: BinaryToTextEncoding
  ): string;
  generateDigestWithHmac(
    algorithm: string,
    key: string,
    text: string,
    encoding: BinaryToTextEncoding
  ): string;
}
