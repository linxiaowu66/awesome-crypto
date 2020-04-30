import {
  HexBase64BinaryEncoding,
  Utf8AsciiBinaryEncoding,
  HexBase64Latin1Encoding,
} from "crypto";
export interface ICipherOption {
  secret: string;
  iv?: string; // ECB模式不需要
}
export interface Deferred {
  resolve: (value?: any) => any;
  reject: (reason?: any) => void;
  promise: Promise<any>;
}

export class Cipher {
  constructor(option: ICipherOption);

  encryptAES(
    text: string,
    algorithm: string,
    outputEncoding: HexBase64BinaryEncoding
  ): string;
  decryptAES(
    text: string,
    algorithm: string,
    outputEncoding: Utf8AsciiBinaryEncoding
  ): string;
  encrypyDES(
    text: string,
    algorithm: string,
    outputEncoding: HexBase64BinaryEncoding
  ): string;
  decrypyDES(
    text: string,
    algorithm: string,
    outputEncoding: Utf8AsciiBinaryEncoding
  ): string;
}
export class Hash {
  generateDigest(
    algorithm: string,
    text: string,
    encoding: HexBase64Latin1Encoding
  ): string;
  generateDigestWithHmac(
    algorithm: string,
    key: string,
    text: string,
    encoding: HexBase64Latin1Encoding
  ): string;
}
