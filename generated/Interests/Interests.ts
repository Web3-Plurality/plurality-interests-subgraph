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

export class InterestsAdded extends ethereum.Event {
  get params(): InterestsAdded__Params {
    return new InterestsAdded__Params(this);
  }
}

export class InterestsAdded__Params {
  _event: InterestsAdded;

  constructor(event: InterestsAdded) {
    this._event = event;
  }

  get commitment(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get interestsUrl(): string {
    return this._event.parameters[1].value.toString();
  }
}

export class OwnerSet extends ethereum.Event {
  get params(): OwnerSet__Params {
    return new OwnerSet__Params(this);
  }
}

export class OwnerSet__Params {
  _event: OwnerSet;

  constructor(event: OwnerSet) {
    this._event = event;
  }

  get oldOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Interests extends ethereum.SmartContract {
  static bind(address: Address): Interests {
    return new Interests("Interests", address);
  }

  getInterests(commitment: BigInt): string {
    let result = super.call("getInterests", "getInterests(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(commitment)
    ]);

    return result[0].toString();
  }

  try_getInterests(commitment: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall(
      "getInterests",
      "getInterests(uint256):(string)",
      [ethereum.Value.fromUnsignedBigInt(commitment)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  getOwner(): Address {
    let result = super.call("getOwner", "getOwner():(address)", []);

    return result[0].toAddress();
  }

  try_getOwner(): ethereum.CallResult<Address> {
    let result = super.tryCall("getOwner", "getOwner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  userInterests(param0: BigInt): string {
    let result = super.call(
      "userInterests",
      "userInterests(uint256):(string)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return result[0].toString();
  }

  try_userInterests(param0: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall(
      "userInterests",
      "userInterests(uint256):(string)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ChangeOwnerCall extends ethereum.Call {
  get inputs(): ChangeOwnerCall__Inputs {
    return new ChangeOwnerCall__Inputs(this);
  }

  get outputs(): ChangeOwnerCall__Outputs {
    return new ChangeOwnerCall__Outputs(this);
  }
}

export class ChangeOwnerCall__Inputs {
  _call: ChangeOwnerCall;

  constructor(call: ChangeOwnerCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ChangeOwnerCall__Outputs {
  _call: ChangeOwnerCall;

  constructor(call: ChangeOwnerCall) {
    this._call = call;
  }
}

export class StoreInterestsCall extends ethereum.Call {
  get inputs(): StoreInterestsCall__Inputs {
    return new StoreInterestsCall__Inputs(this);
  }

  get outputs(): StoreInterestsCall__Outputs {
    return new StoreInterestsCall__Outputs(this);
  }
}

export class StoreInterestsCall__Inputs {
  _call: StoreInterestsCall;

  constructor(call: StoreInterestsCall) {
    this._call = call;
  }

  get commitment(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get interestsUrl(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class StoreInterestsCall__Outputs {
  _call: StoreInterestsCall;

  constructor(call: StoreInterestsCall) {
    this._call = call;
  }
}