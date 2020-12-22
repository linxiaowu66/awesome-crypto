import Cipher from "./../../lib/cipher";
import "mocha";
import * as chai from "chai";

const expect = chai.expect;

describe("testing cipher class", () => {
  const instance = new Cipher({
    secret: "aabbccddeeffgghh",
    iv: "1234567890123456",
  });
  it("should encrypt data with aes-128-ecb successfully", () => {
    const result = instance.encryptAES(
      "awesome-crypto",
      "aes-128-ecb",
      "base64"
    );

    expect(result).to.eq("MVWcig9Hm1XrfeDxuE3xrw==");
  });
  it("should encrypt data(hex) with aes-128-ecb successfully", () => {
    const result = instance.encryptAES("awesome-crypto", "aes-128-ecb", "hex");

    expect(result).to.eq("31559c8a0f479b55eb7de0f1b84df1af");
  });
  it("should decrypt data with aes-128-ecb successfully", () => {
    const result = instance.decryptAES(
      "MVWcig9Hm1XrfeDxuE3xrw==",
      "aes-128-ecb",
      "base64"
    );

    expect(result).to.eq("awesome-crypto");
  });
  it("should decrypt data(hex) with aes-128-ecb successfully", () => {
    const result = instance.decryptAES(
      "31559c8a0f479b55eb7de0f1b84df1af",
      "aes-128-ecb",
      "hex"
    );

    expect(result).to.eq("awesome-crypto");
  });
  it("should encrypt data with aes-128-cbc successfully", () => {
    const result = instance.encryptAES(
      "awesome-crypto",
      "aes-128-cbc",
      "base64"
    );

    expect(result).to.eq("jwY3RagPb06806AtbgXfng==");
  });
  it("should encrypt data with aes-128-cfb successfully", () => {
    const result = instance.encryptAES(
      "awesome-crypto",
      "aes-128-cfb",
      "base64"
    );

    // why nodejs result is atRndvSRACAn41/0PH8= ? but online result is anmpEqlCsM7ITlw/eVnKjA==
    expect(result).to.eq("atRndvSRACAn41/0PH8=");
  });
  it("should encrypt data with aes-128-ofb successfully", () => {
    const result = instance.encryptAES(
      "awesome-crypto",
      "aes-128-ofb",
      "base64"
    );

    // why nodejs result is atRndvSRACAn41/0PH8= ? but online result is anmpEqlCsM7ITlw/eVnKjA==
    expect(result).to.eq("atRndvSRACAn41/0PH8=");
  });
});
