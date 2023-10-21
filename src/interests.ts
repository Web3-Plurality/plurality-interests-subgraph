import {
  InterestsAdded as InterestsAddedEvent,
  OwnerSet as OwnerSetEvent
} from "../generated/Interests/Interests"
import { InterestsAdded, OwnerSet, InterestsMetaData } from "../generated/schema"
import { InterestsMetaDataTemplate } from "../generated/templates"
import { json, Bytes, dataSource } from '@graphprotocol/graph-ts'



export function handleInterestsAdded(event: InterestsAddedEvent): void {
  let entity = new InterestsAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.commitment = event.params.commitment
  entity.interestsUrl = event.params.interestsUrl

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  InterestsMetaDataTemplate.create(event.params.interestsUrl.substr(20))

  entity.save()
}

export function handleOwnerSet(event: OwnerSetEvent): void {
  let entity = new OwnerSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.oldOwner = event.params.oldOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleInterestsMetaData(content: Bytes): void {
  let entity = new InterestsMetaData(dataSource.stringParam())
  const value = json.fromBytes(content).toObject()
  if (value) {
    const commitment = value.get('commitment')
    const interests = value.get('interests')

    if (commitment && interests) {
      entity.commitment = commitment.toString()
      entity.interests = interests.toArray().toString()
    }
    entity.save()
  }
}