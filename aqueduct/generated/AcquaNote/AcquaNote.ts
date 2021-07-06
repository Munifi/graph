// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class newNote extends ethereum.Event {
  get params(): newNote__Params {
    return new newNote__Params(this);
  }
}

export class newNote__Params {
  _event: newNote;

  constructor(event: newNote) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get issuer(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get noteUrl(): string {
    return this._event.parameters[2].value.toString();
  }

  get jsonUrl(): string {
    return this._event.parameters[3].value.toString();
  }

  get limit(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class newNotePrice extends ethereum.Event {
  get params(): newNotePrice__Params {
    return new newNotePrice__Params(this);
  }
}

export class newNotePrice__Params {
  _event: newNotePrice;

  constructor(event: newNotePrice) {
    this._event = event;
  }

  get noteUrl(): string {
    return this._event.parameters[0].value.toString();
  }

  get price(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class AcquaNote__noteInfoByIdResult {
  value0: BigInt;
  value1: Address;
  value2: string;
  value3: Bytes;
  value4: BigInt;
  value5: BigInt;
  value6: string;
  value7: BigInt;

  constructor(
    value0: BigInt,
    value1: Address,
    value2: string,
    value3: Bytes,
    value4: BigInt,
    value5: BigInt,
    value6: string,
    value7: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromString(this.value2));
    map.set("value3", ethereum.Value.fromBytes(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromUnsignedBigInt(this.value5));
    map.set("value6", ethereum.Value.fromString(this.value6));
    map.set("value7", ethereum.Value.fromUnsignedBigInt(this.value7));
    return map;
  }
}

export class AcquaNote__noteInfoByNoteUrlResult {
  value0: BigInt;
  value1: Address;
  value2: string;
  value3: Bytes;
  value4: BigInt;
  value5: BigInt;
  value6: string;
  value7: BigInt;

  constructor(
    value0: BigInt,
    value1: Address,
    value2: string,
    value3: Bytes,
    value4: BigInt,
    value5: BigInt,
    value6: string,
    value7: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromString(this.value2));
    map.set("value3", ethereum.Value.fromBytes(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromUnsignedBigInt(this.value5));
    map.set("value6", ethereum.Value.fromString(this.value6));
    map.set("value7", ethereum.Value.fromUnsignedBigInt(this.value7));
    return map;
  }
}

export class AcquaNote extends ethereum.SmartContract {
  static bind(address: Address): AcquaNote {
    return new AcquaNote("AcquaNote", address);
  }

  acquaRegistry(): Address {
    let result = super.call("acquaRegistry", "acquaRegistry():(address)", []);

    return result[0].toAddress();
  }

  try_acquaRegistry(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "acquaRegistry",
      "acquaRegistry():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  checkSignature(
    signedHash: Bytes,
    signature: Bytes,
    checkAddress: Address
  ): boolean {
    let result = super.call(
      "checkSignature",
      "checkSignature(bytes32,bytes,address):(bool)",
      [
        ethereum.Value.fromFixedBytes(signedHash),
        ethereum.Value.fromBytes(signature),
        ethereum.Value.fromAddress(checkAddress)
      ]
    );

    return result[0].toBoolean();
  }

  try_checkSignature(
    signedHash: Bytes,
    signature: Bytes,
    checkAddress: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "checkSignature",
      "checkSignature(bytes32,bytes,address):(bool)",
      [
        ethereum.Value.fromFixedBytes(signedHash),
        ethereum.Value.fromBytes(signature),
        ethereum.Value.fromAddress(checkAddress)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  checkSignatureFlag(): boolean {
    let result = super.call(
      "checkSignatureFlag",
      "checkSignatureFlag():(bool)",
      []
    );

    return result[0].toBoolean();
  }

  try_checkSignatureFlag(): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "checkSignatureFlag",
      "checkSignatureFlag():(bool)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  createNote(noteUrl: string, jsonUrl: string, limit: BigInt): BigInt {
    let result = super.call(
      "createNote",
      "createNote(string,string,uint256):(uint256)",
      [
        ethereum.Value.fromString(noteUrl),
        ethereum.Value.fromString(jsonUrl),
        ethereum.Value.fromUnsignedBigInt(limit)
      ]
    );

    return result[0].toBigInt();
  }

  try_createNote(
    noteUrl: string,
    jsonUrl: string,
    limit: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "createNote",
      "createNote(string,string,uint256):(uint256)",
      [
        ethereum.Value.fromString(noteUrl),
        ethereum.Value.fromString(jsonUrl),
        ethereum.Value.fromUnsignedBigInt(limit)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  createNoteFromSignature(
    noteUrl: string,
    jsonUrl: string,
    limit: BigInt,
    issuer: Address,
    signature: Bytes
  ): BigInt {
    let result = super.call(
      "createNoteFromSignature",
      "createNoteFromSignature(string,string,uint256,address,bytes):(uint256)",
      [
        ethereum.Value.fromString(noteUrl),
        ethereum.Value.fromString(jsonUrl),
        ethereum.Value.fromUnsignedBigInt(limit),
        ethereum.Value.fromAddress(issuer),
        ethereum.Value.fromBytes(signature)
      ]
    );

    return result[0].toBigInt();
  }

  try_createNoteFromSignature(
    noteUrl: string,
    jsonUrl: string,
    limit: BigInt,
    issuer: Address,
    signature: Bytes
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "createNoteFromSignature",
      "createNoteFromSignature(string,string,uint256,address,bytes):(uint256)",
      [
        ethereum.Value.fromString(noteUrl),
        ethereum.Value.fromString(jsonUrl),
        ethereum.Value.fromUnsignedBigInt(limit),
        ethereum.Value.fromAddress(issuer),
        ethereum.Value.fromBytes(signature)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getSigner(signedHash: Bytes, signature: Bytes): Address {
    let result = super.call("getSigner", "getSigner(bytes32,bytes):(address)", [
      ethereum.Value.fromFixedBytes(signedHash),
      ethereum.Value.fromBytes(signature)
    ]);

    return result[0].toAddress();
  }

  try_getSigner(
    signedHash: Bytes,
    signature: Bytes
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getSigner",
      "getSigner(bytes32,bytes):(address)",
      [
        ethereum.Value.fromFixedBytes(signedHash),
        ethereum.Value.fromBytes(signature)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  issuerTake(): BigInt {
    let result = super.call("issuerTake", "issuerTake():(uint256)", []);

    return result[0].toBigInt();
  }

  try_issuerTake(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("issuerTake", "issuerTake():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  noteIdByNoteUrl(param0: string): BigInt {
    let result = super.call(
      "noteIdByNoteUrl",
      "noteIdByNoteUrl(string):(uint256)",
      [ethereum.Value.fromString(param0)]
    );

    return result[0].toBigInt();
  }

  try_noteIdByNoteUrl(param0: string): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "noteIdByNoteUrl",
      "noteIdByNoteUrl(string):(uint256)",
      [ethereum.Value.fromString(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  noteInfoById(id: BigInt): AcquaNote__noteInfoByIdResult {
    let result = super.call(
      "noteInfoById",
      "noteInfoById(uint256):(uint256,address,string,bytes,uint256,uint256,string,uint256)",
      [ethereum.Value.fromUnsignedBigInt(id)]
    );

    return new AcquaNote__noteInfoByIdResult(
      result[0].toBigInt(),
      result[1].toAddress(),
      result[2].toString(),
      result[3].toBytes(),
      result[4].toBigInt(),
      result[5].toBigInt(),
      result[6].toString(),
      result[7].toBigInt()
    );
  }

  try_noteInfoById(
    id: BigInt
  ): ethereum.CallResult<AcquaNote__noteInfoByIdResult> {
    let result = super.tryCall(
      "noteInfoById",
      "noteInfoById(uint256):(uint256,address,string,bytes,uint256,uint256,string,uint256)",
      [ethereum.Value.fromUnsignedBigInt(id)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new AcquaNote__noteInfoByIdResult(
        value[0].toBigInt(),
        value[1].toAddress(),
        value[2].toString(),
        value[3].toBytes(),
        value[4].toBigInt(),
        value[5].toBigInt(),
        value[6].toString(),
        value[7].toBigInt()
      )
    );
  }

  noteInfoByNoteUrl(noteUrl: string): AcquaNote__noteInfoByNoteUrlResult {
    let result = super.call(
      "noteInfoByNoteUrl",
      "noteInfoByNoteUrl(string):(uint256,address,string,bytes,uint256,uint256,string,uint256)",
      [ethereum.Value.fromString(noteUrl)]
    );

    return new AcquaNote__noteInfoByNoteUrlResult(
      result[0].toBigInt(),
      result[1].toAddress(),
      result[2].toString(),
      result[3].toBytes(),
      result[4].toBigInt(),
      result[5].toBigInt(),
      result[6].toString(),
      result[7].toBigInt()
    );
  }

  try_noteInfoByNoteUrl(
    noteUrl: string
  ): ethereum.CallResult<AcquaNote__noteInfoByNoteUrlResult> {
    let result = super.tryCall(
      "noteInfoByNoteUrl",
      "noteInfoByNoteUrl(string):(uint256,address,string,bytes,uint256,uint256,string,uint256)",
      [ethereum.Value.fromString(noteUrl)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new AcquaNote__noteInfoByNoteUrlResult(
        value[0].toBigInt(),
        value[1].toAddress(),
        value[2].toString(),
        value[3].toBytes(),
        value[4].toBigInt(),
        value[5].toBigInt(),
        value[6].toString(),
        value[7].toBigInt()
      )
    );
  }

  noteOfIssuerByIndex(issuer: Address, index: BigInt): BigInt {
    let result = super.call(
      "noteOfIssuerByIndex",
      "noteOfIssuerByIndex(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(issuer),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );

    return result[0].toBigInt();
  }

  try_noteOfIssuerByIndex(
    issuer: Address,
    index: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "noteOfIssuerByIndex",
      "noteOfIssuerByIndex(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(issuer),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  notesCreatedBy(issuer: Address): BigInt {
    let result = super.call(
      "notesCreatedBy",
      "notesCreatedBy(address):(uint256)",
      [ethereum.Value.fromAddress(issuer)]
    );

    return result[0].toBigInt();
  }

  try_notesCreatedBy(issuer: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "notesCreatedBy",
      "notesCreatedBy(address):(uint256)",
      [ethereum.Value.fromAddress(issuer)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  setPrice(noteUrl: string, price: BigInt): BigInt {
    let result = super.call("setPrice", "setPrice(string,uint256):(uint256)", [
      ethereum.Value.fromString(noteUrl),
      ethereum.Value.fromUnsignedBigInt(price)
    ]);

    return result[0].toBigInt();
  }

  try_setPrice(noteUrl: string, price: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "setPrice",
      "setPrice(string,uint256):(uint256)",
      [
        ethereum.Value.fromString(noteUrl),
        ethereum.Value.fromUnsignedBigInt(price)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  setPriceFromSignature(
    noteUrl: string,
    price: BigInt,
    signature: Bytes
  ): BigInt {
    let result = super.call(
      "setPriceFromSignature",
      "setPriceFromSignature(string,uint256,bytes):(uint256)",
      [
        ethereum.Value.fromString(noteUrl),
        ethereum.Value.fromUnsignedBigInt(price),
        ethereum.Value.fromBytes(signature)
      ]
    );

    return result[0].toBigInt();
  }

  try_setPriceFromSignature(
    noteUrl: string,
    price: BigInt,
    signature: Bytes
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "setPriceFromSignature",
      "setPriceFromSignature(string,uint256,bytes):(uint256)",
      [
        ethereum.Value.fromString(noteUrl),
        ethereum.Value.fromUnsignedBigInt(price),
        ethereum.Value.fromBytes(signature)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  totalNotes(): BigInt {
    let result = super.call("totalNotes", "totalNotes():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalNotes(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalNotes", "totalNotes():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class CreateNoteCall extends ethereum.Call {
  get inputs(): CreateNoteCall__Inputs {
    return new CreateNoteCall__Inputs(this);
  }

  get outputs(): CreateNoteCall__Outputs {
    return new CreateNoteCall__Outputs(this);
  }
}

export class CreateNoteCall__Inputs {
  _call: CreateNoteCall;

  constructor(call: CreateNoteCall) {
    this._call = call;
  }

  get noteUrl(): string {
    return this._call.inputValues[0].value.toString();
  }

  get jsonUrl(): string {
    return this._call.inputValues[1].value.toString();
  }

  get limit(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class CreateNoteCall__Outputs {
  _call: CreateNoteCall;

  constructor(call: CreateNoteCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class CreateNoteFromSignatureCall extends ethereum.Call {
  get inputs(): CreateNoteFromSignatureCall__Inputs {
    return new CreateNoteFromSignatureCall__Inputs(this);
  }

  get outputs(): CreateNoteFromSignatureCall__Outputs {
    return new CreateNoteFromSignatureCall__Outputs(this);
  }
}

export class CreateNoteFromSignatureCall__Inputs {
  _call: CreateNoteFromSignatureCall;

  constructor(call: CreateNoteFromSignatureCall) {
    this._call = call;
  }

  get noteUrl(): string {
    return this._call.inputValues[0].value.toString();
  }

  get jsonUrl(): string {
    return this._call.inputValues[1].value.toString();
  }

  get limit(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get issuer(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get signature(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class CreateNoteFromSignatureCall__Outputs {
  _call: CreateNoteFromSignatureCall;

  constructor(call: CreateNoteFromSignatureCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetAcquaRegistryCall extends ethereum.Call {
  get inputs(): SetAcquaRegistryCall__Inputs {
    return new SetAcquaRegistryCall__Inputs(this);
  }

  get outputs(): SetAcquaRegistryCall__Outputs {
    return new SetAcquaRegistryCall__Outputs(this);
  }
}

export class SetAcquaRegistryCall__Inputs {
  _call: SetAcquaRegistryCall;

  constructor(call: SetAcquaRegistryCall) {
    this._call = call;
  }

  get _address(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetAcquaRegistryCall__Outputs {
  _call: SetAcquaRegistryCall;

  constructor(call: SetAcquaRegistryCall) {
    this._call = call;
  }
}

export class SetCheckSignatureFlagCall extends ethereum.Call {
  get inputs(): SetCheckSignatureFlagCall__Inputs {
    return new SetCheckSignatureFlagCall__Inputs(this);
  }

  get outputs(): SetCheckSignatureFlagCall__Outputs {
    return new SetCheckSignatureFlagCall__Outputs(this);
  }
}

export class SetCheckSignatureFlagCall__Inputs {
  _call: SetCheckSignatureFlagCall;

  constructor(call: SetCheckSignatureFlagCall) {
    this._call = call;
  }

  get newFlag(): boolean {
    return this._call.inputValues[0].value.toBoolean();
  }
}

export class SetCheckSignatureFlagCall__Outputs {
  _call: SetCheckSignatureFlagCall;

  constructor(call: SetCheckSignatureFlagCall) {
    this._call = call;
  }
}

export class SetIssuerTakeCall extends ethereum.Call {
  get inputs(): SetIssuerTakeCall__Inputs {
    return new SetIssuerTakeCall__Inputs(this);
  }

  get outputs(): SetIssuerTakeCall__Outputs {
    return new SetIssuerTakeCall__Outputs(this);
  }
}

export class SetIssuerTakeCall__Inputs {
  _call: SetIssuerTakeCall;

  constructor(call: SetIssuerTakeCall) {
    this._call = call;
  }

  get _take(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetIssuerTakeCall__Outputs {
  _call: SetIssuerTakeCall;

  constructor(call: SetIssuerTakeCall) {
    this._call = call;
  }
}

export class SetPriceCall extends ethereum.Call {
  get inputs(): SetPriceCall__Inputs {
    return new SetPriceCall__Inputs(this);
  }

  get outputs(): SetPriceCall__Outputs {
    return new SetPriceCall__Outputs(this);
  }
}

export class SetPriceCall__Inputs {
  _call: SetPriceCall;

  constructor(call: SetPriceCall) {
    this._call = call;
  }

  get noteUrl(): string {
    return this._call.inputValues[0].value.toString();
  }

  get price(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class SetPriceCall__Outputs {
  _call: SetPriceCall;

  constructor(call: SetPriceCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class SetPriceFromSignatureCall extends ethereum.Call {
  get inputs(): SetPriceFromSignatureCall__Inputs {
    return new SetPriceFromSignatureCall__Inputs(this);
  }

  get outputs(): SetPriceFromSignatureCall__Outputs {
    return new SetPriceFromSignatureCall__Outputs(this);
  }
}

export class SetPriceFromSignatureCall__Inputs {
  _call: SetPriceFromSignatureCall;

  constructor(call: SetPriceFromSignatureCall) {
    this._call = call;
  }

  get noteUrl(): string {
    return this._call.inputValues[0].value.toString();
  }

  get price(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get signature(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class SetPriceFromSignatureCall__Outputs {
  _call: SetPriceFromSignatureCall;

  constructor(call: SetPriceFromSignatureCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}