import * as crypto from "crypto";
import { BinaryToTextEncoding } from "crypto";

export default class Hash {
  /**
   * 生成信息摘要
   * @param algorithm Hash算法，比如md5/sha256
   * @param text 需要做Hash算法的原数据
   * @param encoding 输出的结果编码
   */
  public generateDigest(
    algorithm: string,
    text: string,
    encoding: BinaryToTextEncoding
  ) {
    const hash = crypto.createHash(algorithm);
    const dataDigest = hash.update(text).digest(encoding);
    return dataDigest;
  }

  /**
   * 使用Hmac生成信息摘要
   * @param algorithm Hmac算法，比如sha256/sha512
   * @param key
   * @param text 需要做Hash算法的原数据
   * @param encoding 输出的结果编码
   */
  public generateDigestWithHmac(
    algorithm: string,
    key: string,
    text: string,
    encoding: BinaryToTextEncoding
  ) {
    const hash = crypto.createHmac(algorithm, key);
    const dataDigest = hash.update(text).digest(encoding);
    return dataDigest;
  }
}
