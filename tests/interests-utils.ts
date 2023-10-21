import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import { InterestsAdded, OwnerSet } from "../generated/Interests/Interests"

export function createInterestsAddedEvent(
  commitment: BigInt,
  interestsUrl: string
): InterestsAdded {
  let interestsAddedEvent = changetype<InterestsAdded>(newMockEvent())

  interestsAddedEvent.parameters = new Array()

  interestsAddedEvent.parameters.push(
    new ethereum.EventParam(
      "commitment",
      ethereum.Value.fromUnsignedBigInt(commitment)
    )
  )
  interestsAddedEvent.parameters.push(
    new ethereum.EventParam(
      "interestsUrl",
      ethereum.Value.fromString(interestsUrl)
    )
  )

  return interestsAddedEvent
}

export function createOwnerSetEvent(
  oldOwner: Address,
  newOwner: Address
): OwnerSet {
  let ownerSetEvent = changetype<OwnerSet>(newMockEvent())

  ownerSetEvent.parameters = new Array()

  ownerSetEvent.parameters.push(
    new ethereum.EventParam("oldOwner", ethereum.Value.fromAddress(oldOwner))
  )
  ownerSetEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownerSetEvent
}
