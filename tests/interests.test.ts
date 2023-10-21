import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { InterestsAdded } from "../generated/schema"
import { InterestsAdded as InterestsAddedEvent } from "../generated/Interests/Interests"
import { handleInterestsAdded } from "../src/interests"
import { createInterestsAddedEvent } from "./interests-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let commitment = BigInt.fromI32(234)
    let interestsUrl = "Example string value"
    let newInterestsAddedEvent = createInterestsAddedEvent(
      commitment,
      interestsUrl
    )
    handleInterestsAdded(newInterestsAddedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("InterestsAdded created and stored", () => {
    assert.entityCount("InterestsAdded", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "InterestsAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "commitment",
      "234"
    )
    assert.fieldEquals(
      "InterestsAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "interestsUrl",
      "Example string value"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
