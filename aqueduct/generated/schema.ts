// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Note extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Note entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Note entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Note", id.toString(), this);
  }

  static load(id: string): Note | null {
    return store.get("Note", id) as Note | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get noteNumber(): BigInt {
    let value = this.get("noteNumber");
    return value.toBigInt();
  }

  set noteNumber(value: BigInt) {
    this.set("noteNumber", Value.fromBigInt(value));
  }

  get jsonUrl(): string {
    let value = this.get("jsonUrl");
    return value.toString();
  }

  set jsonUrl(value: string) {
    this.set("jsonUrl", Value.fromString(value));
  }

  get issuer(): string {
    let value = this.get("issuer");
    return value.toString();
  }

  set issuer(value: string) {
    this.set("issuer", Value.fromString(value));
  }

  get limit(): BigInt {
    let value = this.get("limit");
    return value.toBigInt();
  }

  set limit(value: BigInt) {
    this.set("limit", Value.fromBigInt(value));
  }

  get count(): BigInt | null {
    let value = this.get("count");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set count(value: BigInt | null) {
    if (value === null) {
      this.unset("count");
    } else {
      this.set("count", Value.fromBigInt(value as BigInt));
    }
  }

  get tokens(): Array<string> | null {
    let value = this.get("tokens");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set tokens(value: Array<string> | null) {
    if (value === null) {
      this.unset("tokens");
    } else {
      this.set("tokens", Value.fromStringArray(value as Array<string>));
    }
  }

  get sales(): Array<string> | null {
    let value = this.get("sales");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set sales(value: Array<string> | null) {
    if (value === null) {
      this.unset("sales");
    } else {
      this.set("sales", Value.fromStringArray(value as Array<string>));
    }
  }

  get createdAt(): BigInt | null {
    let value = this.get("createdAt");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set createdAt(value: BigInt | null) {
    if (value === null) {
      this.unset("createdAt");
    } else {
      this.set("createdAt", Value.fromBigInt(value as BigInt));
    }
  }

  get mintPrice(): BigInt | null {
    let value = this.get("mintPrice");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set mintPrice(value: BigInt | null) {
    if (value === null) {
      this.unset("mintPrice");
    } else {
      this.set("mintPrice", Value.fromBigInt(value as BigInt));
    }
  }

  get mintPriceSetAt(): BigInt | null {
    let value = this.get("mintPriceSetAt");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set mintPriceSetAt(value: BigInt | null) {
    if (value === null) {
      this.unset("mintPriceSetAt");
    } else {
      this.set("mintPriceSetAt", Value.fromBigInt(value as BigInt));
    }
  }

  get mintPriceNonce(): BigInt | null {
    let value = this.get("mintPriceNonce");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set mintPriceNonce(value: BigInt | null) {
    if (value === null) {
      this.unset("mintPriceNonce");
    } else {
      this.set("mintPriceNonce", Value.fromBigInt(value as BigInt));
    }
  }
}

export class Token extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Token entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Token entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Token", id.toString(), this);
  }

  static load(id: string): Token | null {
    return store.get("Token", id) as Token | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get note(): string {
    let value = this.get("note");
    return value.toString();
  }

  set note(value: string) {
    this.set("note", Value.fromString(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get createdAt(): BigInt {
    let value = this.get("createdAt");
    return value.toBigInt();
  }

  set createdAt(value: BigInt) {
    this.set("createdAt", Value.fromBigInt(value));
  }

  get network(): string {
    let value = this.get("network");
    return value.toString();
  }

  set network(value: string) {
    this.set("network", Value.fromString(value));
  }

  get price(): BigInt | null {
    let value = this.get("price");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set price(value: BigInt | null) {
    if (value === null) {
      this.unset("price");
    } else {
      this.set("price", Value.fromBigInt(value as BigInt));
    }
  }

  get priceSetAt(): BigInt | null {
    let value = this.get("priceSetAt");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set priceSetAt(value: BigInt | null) {
    if (value === null) {
      this.unset("priceSetAt");
    } else {
      this.set("priceSetAt", Value.fromBigInt(value as BigInt));
    }
  }

  get transfers(): Array<string> | null {
    let value = this.get("transfers");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set transfers(value: Array<string> | null) {
    if (value === null) {
      this.unset("transfers");
    } else {
      this.set("transfers", Value.fromStringArray(value as Array<string>));
    }
  }

  get sales(): Array<string> | null {
    let value = this.get("sales");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set sales(value: Array<string> | null) {
    if (value === null) {
      this.unset("sales");
    } else {
      this.set("sales", Value.fromStringArray(value as Array<string>));
    }
  }

  get upgradeTransfer(): string | null {
    let value = this.get("upgradeTransfer");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set upgradeTransfer(value: string | null) {
    if (value === null) {
      this.unset("upgradeTransfer");
    } else {
      this.set("upgradeTransfer", Value.fromString(value as string));
    }
  }
}

export class Issuer extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Issuer entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Issuer entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Issuer", id.toString(), this);
  }

  static load(id: string): Issuer | null {
    return store.get("Issuer", id) as Issuer | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get note(): Array<string | null> {
    let value = this.get("note");
    return value.toStringArray();
  }

  set note(value: Array<string | null>) {
    this.set("note", Value.fromStringArray(value));
  }

  get noteCount(): BigInt {
    let value = this.get("noteCount");
    return value.toBigInt();
  }

  set noteCount(value: BigInt) {
    this.set("noteCount", Value.fromBigInt(value));
  }

  get earnings(): BigInt | null {
    let value = this.get("earnings");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set earnings(value: BigInt | null) {
    if (value === null) {
      this.unset("earnings");
    } else {
      this.set("earnings", Value.fromBigInt(value as BigInt));
    }
  }

  get sales(): Array<string> | null {
    let value = this.get("sales");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set sales(value: Array<string> | null) {
    if (value === null) {
      this.unset("sales");
    } else {
      this.set("sales", Value.fromStringArray(value as Array<string>));
    }
  }
}

export class Sale extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Sale entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Sale entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Sale", id.toString(), this);
  }

  static load(id: string): Sale | null {
    return store.get("Sale", id) as Sale | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get buyer(): Bytes {
    let value = this.get("buyer");
    return value.toBytes();
  }

  set buyer(value: Bytes) {
    this.set("buyer", Value.fromBytes(value));
  }

  get seller(): Bytes | null {
    let value = this.get("seller");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set seller(value: Bytes | null) {
    if (value === null) {
      this.unset("seller");
    } else {
      this.set("seller", Value.fromBytes(value as Bytes));
    }
  }

  get price(): BigInt {
    let value = this.get("price");
    return value.toBigInt();
  }

  set price(value: BigInt) {
    this.set("price", Value.fromBigInt(value));
  }

  get token(): string {
    let value = this.get("token");
    return value.toString();
  }

  set token(value: string) {
    this.set("token", Value.fromString(value));
  }

  get note(): string {
    let value = this.get("note");
    return value.toString();
  }

  set note(value: string) {
    this.set("note", Value.fromString(value));
  }

  get issuer(): string {
    let value = this.get("issuer");
    return value.toString();
  }

  set issuer(value: string) {
    this.set("issuer", Value.fromString(value));
  }

  get createdAt(): BigInt {
    let value = this.get("createdAt");
    return value.toBigInt();
  }

  set createdAt(value: BigInt) {
    this.set("createdAt", Value.fromBigInt(value));
  }

  get issuerTake(): BigInt {
    let value = this.get("issuerTake");
    return value.toBigInt();
  }

  set issuerTake(value: BigInt) {
    this.set("issuerTake", Value.fromBigInt(value));
  }

  get saleType(): string | null {
    let value = this.get("saleType");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set saleType(value: string | null) {
    if (value === null) {
      this.unset("saleType");
    } else {
      this.set("saleType", Value.fromString(value as string));
    }
  }

  get transfer(): string {
    let value = this.get("transfer");
    return value.toString();
  }

  set transfer(value: string) {
    this.set("transfer", Value.fromString(value));
  }
}

export class TokenTransfer extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save TokenTransfer entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save TokenTransfer entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("TokenTransfer", id.toString(), this);
  }

  static load(id: string): TokenTransfer | null {
    return store.get("TokenTransfer", id) as TokenTransfer | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get token(): string {
    let value = this.get("token");
    return value.toString();
  }

  set token(value: string) {
    this.set("token", Value.fromString(value));
  }

  get from(): Bytes {
    let value = this.get("from");
    return value.toBytes();
  }

  set from(value: Bytes) {
    this.set("from", Value.fromBytes(value));
  }

  get to(): Bytes {
    let value = this.get("to");
    return value.toBytes();
  }

  set to(value: Bytes) {
    this.set("to", Value.fromBytes(value));
  }

  get createdAt(): BigInt {
    let value = this.get("createdAt");
    return value.toBigInt();
  }

  set createdAt(value: BigInt) {
    this.set("createdAt", Value.fromBigInt(value));
  }

  get network(): string {
    let value = this.get("network");
    return value.toString();
  }

  set network(value: string) {
    this.set("network", Value.fromString(value));
  }
}

export class RelayPrice extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save RelayPrice entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save RelayPrice entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("RelayPrice", id.toString(), this);
  }

  static load(id: string): RelayPrice | null {
    return store.get("RelayPrice", id) as RelayPrice | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get createdAt(): BigInt {
    let value = this.get("createdAt");
    return value.toBigInt();
  }

  set createdAt(value: BigInt) {
    this.set("createdAt", Value.fromBigInt(value));
  }

  get price(): BigInt {
    let value = this.get("price");
    return value.toBigInt();
  }

  set price(value: BigInt) {
    this.set("price", Value.fromBigInt(value));
  }
}

export class MetaData extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save MetaData entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save MetaData entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("MetaData", id.toString(), this);
  }

  static load(id: string): MetaData | null {
    return store.get("MetaData", id) as MetaData | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get value(): string {
    let value = this.get("value");
    return value.toString();
  }

  set value(value: string) {
    this.set("value", Value.fromString(value));
  }
}

export class Total extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Total entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Total entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Total", id.toString(), this);
  }

  static load(id: string): Total | null {
    return store.get("Total", id) as Total | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get day(): BigInt | null {
    let value = this.get("day");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set day(value: BigInt | null) {
    if (value === null) {
      this.unset("day");
    } else {
      this.set("day", Value.fromBigInt(value as BigInt));
    }
  }

  get notes(): BigInt | null {
    let value = this.get("notes");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set notes(value: BigInt | null) {
    if (value === null) {
      this.unset("notes");
    } else {
      this.set("notes", Value.fromBigInt(value as BigInt));
    }
  }

  get tokens(): BigInt | null {
    let value = this.get("tokens");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set tokens(value: BigInt | null) {
    if (value === null) {
      this.unset("tokens");
    } else {
      this.set("tokens", Value.fromBigInt(value as BigInt));
    }
  }

  get sales(): BigInt | null {
    let value = this.get("sales");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set sales(value: BigInt | null) {
    if (value === null) {
      this.unset("sales");
    } else {
      this.set("sales", Value.fromBigInt(value as BigInt));
    }
  }

  get upgrades(): BigInt | null {
    let value = this.get("upgrades");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set upgrades(value: BigInt | null) {
    if (value === null) {
      this.unset("upgrades");
    } else {
      this.set("upgrades", Value.fromBigInt(value as BigInt));
    }
  }

  get issuers(): BigInt | null {
    let value = this.get("issuers");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set issuers(value: BigInt | null) {
    if (value === null) {
      this.unset("issuers");
    } else {
      this.set("issuers", Value.fromBigInt(value as BigInt));
    }
  }
}
