import { lowerCaseValues } from "./utils";


export const ALIASES_ETHEREUM = lowerCaseValues({
    "crv": "0xD533a949740bb3306d119CC777fa900bA034cd52", // <--- CHANGE
    "minter": "0xd061D61a4d941c39E5453435B6345Dc261C2fcE0",
    "voting_escrow": "0x5f3b5DfEb7B28CDbD7FAba78963EE202a494e2A2",
    "gauge_controller": "0x2F50D538606Fa9EDD2B11E2446BEb18C9D5846bB",
    "address_provider": "0x0000000022d53366457f9d5e68ec105046fc4383",
    "router": "0xfA9a30350048B2BF66865ee20363067c66f67e58",
    "deposit_and_stake": "0x271fbE8aB7f1fB262f81C77Ea5303F03DA9d3d6A", // <--- CHANGE
    "factory": '0xb9fc157394af804a3578134a6585c0dc9cc990d4', // <--- CHANGE
    "crypto_factory": '0xF18056Bbd320E96A48e3Fbf8bC061322531aac99', // <--- CHANGE
    "registry_exchange": "",
});

export const ALIASES_POLYGON = lowerCaseValues({
    "crv": "0x172370d5cd63279efa6d502dab29171933a610af",
    "minter": "0xabC000d88f23Bb45525E447528DBF656A9D55bf5",
    "voting_escrow": "0x5f3b5DfEb7B28CDbD7FAba78963EE202a494e2A2",
    "gauge_controller": "0x2F50D538606Fa9EDD2B11E2446BEb18C9D5846bB",
    "address_provider": "0x0000000022d53366457f9d5e68ec105046fc4383",
    "router": "0xfA9a30350048B2BF66865ee20363067c66f67e58",
    "deposit_and_stake": "0x43FF7b96808988C9d19C1d05Ef19658B03e8a143",
    "factory": '0x722272d36ef0da72ff51c5a65db7b870e2e8d4ee',
    "crypto_factory": "0xE5De15A9C9bBedb4F5EC13B131E61245f2983A69",
    "registry_exchange": "",
});

export const ALIASES_AVALANCHE = lowerCaseValues({
    "crv": "0x47536F17F4fF30e64A96a7555826b8f9e66ec468",
    "minter": "0xabC000d88f23Bb45525E447528DBF656A9D55bf5",
    "voting_escrow": "0x5f3b5DfEb7B28CDbD7FAba78963EE202a494e2A2",
    "gauge_controller": "0x2F50D538606Fa9EDD2B11E2446BEb18C9D5846bB",
    "address_provider": "0x0000000022d53366457f9d5e68ec105046fc4383",
    "router": "0xfA9a30350048B2BF66865ee20363067c66f67e58",
    "deposit_and_stake": "0xB7De33440B7171159a9718CBE748086cecDd9685",
    "factory": '0xb17b674D9c5CB2e441F8e196a2f048A81355d031',
    "crypto_factory": '0xF18056Bbd320E96A48e3Fbf8bC061322531aac99', // <--- TODO CHANGE
    "registry_exchange": "",
});

export const ALIASES_FANTOM = lowerCaseValues({
    "crv": "0x1E4F97b9f9F913c46F1632781732927B9019C68b",
    "minter": "0xabC000d88f23Bb45525E447528DBF656A9D55bf5",
    "voting_escrow": "0x5f3b5DfEb7B28CDbD7FAba78963EE202a494e2A2",
    "gauge_controller": "0x2F50D538606Fa9EDD2B11E2446BEb18C9D5846bB",
    "address_provider": "0x0000000022d53366457f9d5e68ec105046fc4383",
    "router": "0xfA9a30350048B2BF66865ee20363067c66f67e58",
    "deposit_and_stake": "0xB7De33440B7171159a9718CBE748086cecDd9685",
    "factory": "0x686d67265703d1f124c45e33d47d794c566889ba",
    "crypto_factory": "0xE5De15A9C9bBedb4F5EC13B131E61245f2983A69",
    "registry_exchange": "",
});
