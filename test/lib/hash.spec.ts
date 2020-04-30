import Hash from "./../../lib/hash";
import "mocha";
import * as chai from "chai";

const expect = chai.expect;

describe("testing hash class", () => {
  const instance = new Hash();
  it("should generate data digest successfully", () => {
    const result = instance.generateDigest("md5", "awesome-crypto", "base64");
    expect(result).to.eq("/5Tm6wvb5SWXF11eKG6Pog==");
  });
  it("should generate data digest with hmac sha256 successfully", () => {
    const result = instance.generateDigestWithHmac(
      "sha256",
      "GfG",
      "GeeksforGeeks",
      "base64"
    );
    expect(result).to.eq("oIEWkF6SYz5PMO79EnYgayWTBch4NkL8W39RwIkYeTk=");
  });
});
