

| Note: This repository is a submodule to our main Hackathon submission repository. The code and demo urls of the plurality onboarding dApp that integrates this subgraph can be found in the parent repository [Plurality ETH Online Hackathon Repository](https://github.com/Web3-Plurality/plurality-eth-online) |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |


# Plurality Interests Subgraph

Plurality is a web3 onboarding protocol that enables social media users and content creators to onboard to blockchain-based web3 social networks by linking, verifying, and aggregating their existing social reputation and interests.

## How does Plurality work

Plurality aggregates users' real-world reputation and interests from their web2 social profiles and links them to their wallet addresses via zero-knowledge proofs to preserve user privacy. This anonymized reputation and interest data a.k.a. user's **Social Capital** is stored in arweave and mapped to collision-resistant decentralized identifiers generated in the user's MetaMask wallet. If a user wants he/she can allow certain dApps to access part of the social capital by generating the required zero-knowledge proof. 

## Role of The Graph in Plurality

We use The Graph to index and provide the user's aggregated data by indexing the user's off-chain social capital. For this purpose, we have written this subgraph that consolidates the plurality smart contract and user's interest data in arweave. We have used state-of-the-art Arweave integration as an external off-chain data source. 

This subgraph would provide the much-needed decentralization in plurality's architecture and would help easy integration with external (web2 and web3) applications while keeping the user's privacy and sovereignty over his/her social capital. It would also enable a plethora of use cases such as social reputation passports, decentralized job platforms, gig marketplaces, e-commerce platforms, interests-based advertisement platforms, etc. It also serves as a core data availability layer in plurality protocol which considers The Graph as its data layer and builds social profiles on top. 

## Features

- **Index Plurality Smart Contract Data:** Indexes Plurality Protocol smart contract data for efficient retrieval.
- **Aggregate and Index Web2 Social Data:** Indexes users' real-world reputation and interests from their web2 social profiles stored off-chain in Arweave linked by Plurality and ZKPs
- **Real-Time Updates:** User can add or remove their data and allow certain apps access by generating zkps.
- **Custom Queries:** Allows developers to craft tailored queries to meet specific application needs.
- **Enhanced User Experience:** Empowers developers to create responsive and user-friendly apps using this data. This data can be consumed by both web2 and web3 apps by using The Graph API. 

## Use Cases

1. **Interests:** Retrieve anonymized interests and reputation of all users that have linked their social capital with the plurality
2. **Interests against decentralized identifier:** Retrieve anonymized interests and reputation of a particular user against their decentralized identifier that could be linked by the user by generating zero-knowledge proofs.
3. **Analytics and Reporting:** Utilize user interests and reputation data for valuable insights and enable the next billion use cases of web3. 

---

## Demo

1. The Subgraph is currently deployed on the graph studio and could not be published to The Graph Testnet because the associated smart contract is on Ethereum Sepolia. The screenshorts from the graph studio are attached below. 


    Here are some example curl query commands from the subgraph studio using it's API
    - To query user's interests metadata (first N results)
    ```
    curl --header 'content-type: application/json' --url 'https://api.studio.thegraph.com/query/43869/plurality-social-interests/version/latest' --data '{"query":"{interestsMetaDatas(first: 5) {id commitment interests}}"}'
    ```
    - To query user's interests metadata (against a decentralized id commitment)
    ```
    curl --header 'content-type: application/json' --url 'https://api.studio.thegraph.com/query/43869/plurality-social-interests/version/latest' --data '{"query":"{interestsMetaDatas(where:{commitment:\"21297926345342893482618925740202550643146613557347510477263423286932144896019\"}) {id commitment interests}}"}'
    ```
    - To query interests against multiple id commitments
    ```
    curl --header 'Content-Type: application/json' --url 'https://api.studio.thegraph.com/query/43869/plurality-social-interests/version/latest' --data '{
        "query": "{interestsMetaDatas(where:{commitment_in:[\"21297926345342893482618925740202550643146613557347510477263423286932144896019\",\"12531765124198704714097650669808257753514349600949208348904055652637483504656\"]}){id commitment interests}}"}'
    ```
2. Our original submission to ETH Online is Plurality Onboaring dApp where this subgraph is utilized to load user profile after linking the anonymized data. The subgraph integration is part of the main demo and this repository is a submodule. The code and video of the plurality onboarding dApp can be found in the parent repository [Plurality Hackathon](https://github.com/Web3-Plurality/plurality-hackathon). 


---
## Subgraph Studio details
**Deployment ID:** `QmRbc3wMA2KkJiAd16zNDbMDK9yZhVfZefhC5FN6mKxUn9`

**Development Query URL:** 
https://thegraph.com/studio/subgraph/plurality-social-interests/

**Indexed Network:** Sepolia

**Plurality Interests CONTRACT ADDRESS:** `0xEEA22585F28aed481612E36080fcE6CE6c8520b6`

---
![image](https://github.com/Web3-Plurality/plurality-interests-subgraph/assets/8026367/7b0c8bea-c286-46c6-82a6-e605a36835e7)
![image](https://github.com/Web3-Plurality/plurality-interests-subgraph/assets/8026367/95ecf3f5-a0e6-4c48-b4ca-a93e18a1cb54)
![image](https://github.com/Web3-Plurality/plurality-interests-subgraph/assets/8026367/2947251b-6a1b-48b4-82a7-a6ab68ac1985)
