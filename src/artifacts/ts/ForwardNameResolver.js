"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForwardNameResolverInstance = exports.ForwardNameResolver = void 0;
const web3_1 = require("@alephium/web3");
const ForwardNameResolver_ral_json_1 = __importDefault(require("../forward_name_resolver/ForwardNameResolver.ral.json"));
const contracts_1 = require("./contracts");
const types_1 = require("./types");
const web3_2 = require("@alephium/web3");
class Factory extends web3_1.ContractFactory {
    constructor() {
        super(...arguments);
        this.eventIndex = {
            NameCreated: 0,
            NameRenewed: 1,
            AddressSet: 2,
            CapitalisationSet: 3,
            NameDeleted: 4,
            ReverseAddressSet: 5,
            ReverseAddressDeleted: 6,
            CropCreated: 7,
            CropDeleted: 8,
        };
        this.consts = {
            ErrorCodes: {
                OnlyParentAllowed: BigInt("0"),
                NFTNotFound: BigInt("1"),
                NFTNotPartOfCollection: BigInt("2"),
                OnlyNftOwnerAllowed: BigInt("3"),
                NameHasNotExpired: BigInt("4"),
                CannotRenewName: BigInt("5"),
                TokenAlreadyGenerated: BigInt("6"),
                ReverseAddressNotFound: BigInt("7"),
                OnlyNftOwnerOrHolderAllowed: BigInt("8"),
                IncorrectFarmInputAmount: BigInt("9"),
                CropHasNotExpired: BigInt("10"),
                FarmInputAmountNotConsumed: BigInt("11"),
                FarmAlreadyGenerated: BigInt("12"),
            },
            Keys: { Names: "01", Token: "02", Farm: "03" },
        };
        this.tests = {
            getCollectionUri: (params) => __awaiter(this, void 0, void 0, function* () {
                return (0, web3_1.testMethod)(this, "getCollectionUri", params, contracts_1.getContractByCodeHash);
            }),
            totalSupply: (params) => __awaiter(this, void 0, void 0, function* () {
                return (0, web3_1.testMethod)(this, "totalSupply", params, contracts_1.getContractByCodeHash);
            }),
            nftByIndex: (params) => __awaiter(this, void 0, void 0, function* () {
                return (0, web3_1.testMethod)(this, "nftByIndex", params, contracts_1.getContractByCodeHash);
            }),
            validateNFT: (params) => __awaiter(this, void 0, void 0, function* () {
                return (0, web3_1.testMethod)(this, "validateNFT", params, contracts_1.getContractByCodeHash);
            }),
            getFarmKey: (params) => __awaiter(this, void 0, void 0, function* () {
                return (0, web3_1.testMethod)(this, "getFarmKey", params, contracts_1.getContractByCodeHash);
            }),
            getFarm: (params) => __awaiter(this, void 0, void 0, function* () {
                return (0, web3_1.testMethod)(this, "getFarm", params, contracts_1.getContractByCodeHash);
            }),
            generateFarm: (params) => __awaiter(this, void 0, void 0, function* () {
                return (0, web3_1.testMethod)(this, "generateFarm", params, contracts_1.getContractByCodeHash);
            }),
            handleCropRewardTokens: (params) => __awaiter(this, void 0, void 0, function* () {
                return (0, web3_1.testMethod)(this, "handleCropRewardTokens", params, contracts_1.getContractByCodeHash);
            }),
            mintCrop: (params) => __awaiter(this, void 0, void 0, function* () {
                return (0, web3_1.testMethod)(this, "mintCrop", params, contracts_1.getContractByCodeHash);
            }),
            deleteCrop: (params) => __awaiter(this, void 0, void 0, function* () {
                return (0, web3_1.testMethod)(this, "deleteCrop", params, contracts_1.getContractByCodeHash);
            }),
            getNftKey: (params) => __awaiter(this, void 0, void 0, function* () {
                return (0, web3_1.testMethod)(this, "getNftKey", params, contracts_1.getContractByCodeHash);
            }),
            getRewardTokenKey: (params) => __awaiter(this, void 0, void 0, function* () {
                return (0, web3_1.testMethod)(this, "getRewardTokenKey", params, contracts_1.getContractByCodeHash);
            }),
            getNftByName: (params) => __awaiter(this, void 0, void 0, function* () {
                return (0, web3_1.testMethod)(this, "getNftByName", params, contracts_1.getContractByCodeHash);
            }),
            containsNftByName: (params) => __awaiter(this, void 0, void 0, function* () {
                return (0, web3_1.testMethod)(this, "containsNftByName", params, contracts_1.getContractByCodeHash);
            }),
            getRewardToken: (params) => __awaiter(this, void 0, void 0, function* () {
                return (0, web3_1.testMethod)(this, "getRewardToken", params, contracts_1.getContractByCodeHash);
            }),
            hasExpired: (params) => __awaiter(this, void 0, void 0, function* () {
                return (0, web3_1.testMethod)(this, "hasExpired", params, contracts_1.getContractByCodeHash);
            }),
            canRenew: (params) => __awaiter(this, void 0, void 0, function* () {
                return (0, web3_1.testMethod)(this, "canRenew", params, contracts_1.getContractByCodeHash);
            }),
            generateToken: (params) => __awaiter(this, void 0, void 0, function* () {
                return (0, web3_1.testMethod)(this, "generateToken", params, contracts_1.getContractByCodeHash);
            }),
            createName: (params) => __awaiter(this, void 0, void 0, function* () {
                return (0, web3_1.testMethod)(this, "createName", params, contracts_1.getContractByCodeHash);
            }),
            handleRewardTokens: (params) => __awaiter(this, void 0, void 0, function* () {
                return (0, web3_1.testMethod)(this, "handleRewardTokens", params, contracts_1.getContractByCodeHash);
            }),
            mint: (params) => __awaiter(this, void 0, void 0, function* () {
                return (0, web3_1.testMethod)(this, "mint", params, contracts_1.getContractByCodeHash);
            }),
            setAddress: (params) => __awaiter(this, void 0, void 0, function* () {
                return (0, web3_1.testMethod)(this, "setAddress", params, contracts_1.getContractByCodeHash);
            }),
            setCapitalisation: (params) => __awaiter(this, void 0, void 0, function* () {
                return (0, web3_1.testMethod)(this, "setCapitalisation", params, contracts_1.getContractByCodeHash);
            }),
            renewName: (params) => __awaiter(this, void 0, void 0, function* () {
                return (0, web3_1.testMethod)(this, "renewName", params, contracts_1.getContractByCodeHash);
            }),
            deleteExpired: (params) => __awaiter(this, void 0, void 0, function* () {
                return (0, web3_1.testMethod)(this, "deleteExpired", params, contracts_1.getContractByCodeHash);
            }),
        };
    }
    encodeFields(fields) {
        return (0, web3_1.encodeContractFields)((0, web3_1.addStdIdToFields)(this.contract, fields), this.contract.fieldsSig, types_1.AllStructs);
    }
    at(address) {
        return new ForwardNameResolverInstance(address);
    }
}
// Use this object to test and deploy the contract
exports.ForwardNameResolver = new Factory(web3_1.Contract.fromJson(ForwardNameResolver_ral_json_1.default, "=82-2+e8=2-1+1d=2+66=3-4+7=2-2+3d=1657-1+6=179-1+b=38+7a7e0214696e73657274206174206d617020706174683a2000=565-1+5=118+7a7e021472656d6f7665206174206d617020706174683a2000=22", "12d5fe816ec12ff59234e5e6da6a8a4d67f16aaa3d6c1799be5e8c115f99ba0c", types_1.AllStructs));
// Use this class to interact with the blockchain
class ForwardNameResolverInstance extends web3_1.ContractInstance {
    constructor(address) {
        super(address);
        this.maps = {
            nameNftIndex: new web3_2.RalphMap(exports.ForwardNameResolver.contract, this.contractId, "nameNftIndex"),
        };
        this.view = {
            getCollectionUri: (params) => __awaiter(this, void 0, void 0, function* () {
                return (0, web3_1.callMethod)(exports.ForwardNameResolver, this, "getCollectionUri", params === undefined ? {} : params, contracts_1.getContractByCodeHash);
            }),
            totalSupply: (params) => __awaiter(this, void 0, void 0, function* () {
                return (0, web3_1.callMethod)(exports.ForwardNameResolver, this, "totalSupply", params === undefined ? {} : params, contracts_1.getContractByCodeHash);
            }),
            nftByIndex: (params) => __awaiter(this, void 0, void 0, function* () {
                return (0, web3_1.callMethod)(exports.ForwardNameResolver, this, "nftByIndex", params, contracts_1.getContractByCodeHash);
            }),
            validateNFT: (params) => __awaiter(this, void 0, void 0, function* () {
                return (0, web3_1.callMethod)(exports.ForwardNameResolver, this, "validateNFT", params, contracts_1.getContractByCodeHash);
            }),
            getFarmKey: (params) => __awaiter(this, void 0, void 0, function* () {
                return (0, web3_1.callMethod)(exports.ForwardNameResolver, this, "getFarmKey", params === undefined ? {} : params, contracts_1.getContractByCodeHash);
            }),
            getFarm: (params) => __awaiter(this, void 0, void 0, function* () {
                return (0, web3_1.callMethod)(exports.ForwardNameResolver, this, "getFarm", params === undefined ? {} : params, contracts_1.getContractByCodeHash);
            }),
            generateFarm: (params) => __awaiter(this, void 0, void 0, function* () {
                return (0, web3_1.callMethod)(exports.ForwardNameResolver, this, "generateFarm", params === undefined ? {} : params, contracts_1.getContractByCodeHash);
            }),
            mintCrop: (params) => __awaiter(this, void 0, void 0, function* () {
                return (0, web3_1.callMethod)(exports.ForwardNameResolver, this, "mintCrop", params, contracts_1.getContractByCodeHash);
            }),
            deleteCrop: (params) => __awaiter(this, void 0, void 0, function* () {
                return (0, web3_1.callMethod)(exports.ForwardNameResolver, this, "deleteCrop", params, contracts_1.getContractByCodeHash);
            }),
            getNftKey: (params) => __awaiter(this, void 0, void 0, function* () {
                return (0, web3_1.callMethod)(exports.ForwardNameResolver, this, "getNftKey", params, contracts_1.getContractByCodeHash);
            }),
            getRewardTokenKey: (params) => __awaiter(this, void 0, void 0, function* () {
                return (0, web3_1.callMethod)(exports.ForwardNameResolver, this, "getRewardTokenKey", params === undefined ? {} : params, contracts_1.getContractByCodeHash);
            }),
            getNftByName: (params) => __awaiter(this, void 0, void 0, function* () {
                return (0, web3_1.callMethod)(exports.ForwardNameResolver, this, "getNftByName", params, contracts_1.getContractByCodeHash);
            }),
            containsNftByName: (params) => __awaiter(this, void 0, void 0, function* () {
                return (0, web3_1.callMethod)(exports.ForwardNameResolver, this, "containsNftByName", params, contracts_1.getContractByCodeHash);
            }),
            getRewardToken: (params) => __awaiter(this, void 0, void 0, function* () {
                return (0, web3_1.callMethod)(exports.ForwardNameResolver, this, "getRewardToken", params === undefined ? {} : params, contracts_1.getContractByCodeHash);
            }),
            hasExpired: (params) => __awaiter(this, void 0, void 0, function* () {
                return (0, web3_1.callMethod)(exports.ForwardNameResolver, this, "hasExpired", params, contracts_1.getContractByCodeHash);
            }),
            canRenew: (params) => __awaiter(this, void 0, void 0, function* () {
                return (0, web3_1.callMethod)(exports.ForwardNameResolver, this, "canRenew", params, contracts_1.getContractByCodeHash);
            }),
            generateToken: (params) => __awaiter(this, void 0, void 0, function* () {
                return (0, web3_1.callMethod)(exports.ForwardNameResolver, this, "generateToken", params === undefined ? {} : params, contracts_1.getContractByCodeHash);
            }),
            mint: (params) => __awaiter(this, void 0, void 0, function* () {
                return (0, web3_1.callMethod)(exports.ForwardNameResolver, this, "mint", params, contracts_1.getContractByCodeHash);
            }),
            setAddress: (params) => __awaiter(this, void 0, void 0, function* () {
                return (0, web3_1.callMethod)(exports.ForwardNameResolver, this, "setAddress", params, contracts_1.getContractByCodeHash);
            }),
            setCapitalisation: (params) => __awaiter(this, void 0, void 0, function* () {
                return (0, web3_1.callMethod)(exports.ForwardNameResolver, this, "setCapitalisation", params, contracts_1.getContractByCodeHash);
            }),
            renewName: (params) => __awaiter(this, void 0, void 0, function* () {
                return (0, web3_1.callMethod)(exports.ForwardNameResolver, this, "renewName", params, contracts_1.getContractByCodeHash);
            }),
            deleteExpired: (params) => __awaiter(this, void 0, void 0, function* () {
                return (0, web3_1.callMethod)(exports.ForwardNameResolver, this, "deleteExpired", params, contracts_1.getContractByCodeHash);
            }),
        };
        this.transact = {
            getCollectionUri: (params) => __awaiter(this, void 0, void 0, function* () {
                return (0, web3_1.signExecuteMethod)(exports.ForwardNameResolver, this, "getCollectionUri", params);
            }),
            totalSupply: (params) => __awaiter(this, void 0, void 0, function* () {
                return (0, web3_1.signExecuteMethod)(exports.ForwardNameResolver, this, "totalSupply", params);
            }),
            nftByIndex: (params) => __awaiter(this, void 0, void 0, function* () {
                return (0, web3_1.signExecuteMethod)(exports.ForwardNameResolver, this, "nftByIndex", params);
            }),
            validateNFT: (params) => __awaiter(this, void 0, void 0, function* () {
                return (0, web3_1.signExecuteMethod)(exports.ForwardNameResolver, this, "validateNFT", params);
            }),
            getFarmKey: (params) => __awaiter(this, void 0, void 0, function* () {
                return (0, web3_1.signExecuteMethod)(exports.ForwardNameResolver, this, "getFarmKey", params);
            }),
            getFarm: (params) => __awaiter(this, void 0, void 0, function* () {
                return (0, web3_1.signExecuteMethod)(exports.ForwardNameResolver, this, "getFarm", params);
            }),
            generateFarm: (params) => __awaiter(this, void 0, void 0, function* () {
                return (0, web3_1.signExecuteMethod)(exports.ForwardNameResolver, this, "generateFarm", params);
            }),
            mintCrop: (params) => __awaiter(this, void 0, void 0, function* () {
                return (0, web3_1.signExecuteMethod)(exports.ForwardNameResolver, this, "mintCrop", params);
            }),
            deleteCrop: (params) => __awaiter(this, void 0, void 0, function* () {
                return (0, web3_1.signExecuteMethod)(exports.ForwardNameResolver, this, "deleteCrop", params);
            }),
            getNftKey: (params) => __awaiter(this, void 0, void 0, function* () {
                return (0, web3_1.signExecuteMethod)(exports.ForwardNameResolver, this, "getNftKey", params);
            }),
            getRewardTokenKey: (params) => __awaiter(this, void 0, void 0, function* () {
                return (0, web3_1.signExecuteMethod)(exports.ForwardNameResolver, this, "getRewardTokenKey", params);
            }),
            getNftByName: (params) => __awaiter(this, void 0, void 0, function* () {
                return (0, web3_1.signExecuteMethod)(exports.ForwardNameResolver, this, "getNftByName", params);
            }),
            containsNftByName: (params) => __awaiter(this, void 0, void 0, function* () {
                return (0, web3_1.signExecuteMethod)(exports.ForwardNameResolver, this, "containsNftByName", params);
            }),
            getRewardToken: (params) => __awaiter(this, void 0, void 0, function* () {
                return (0, web3_1.signExecuteMethod)(exports.ForwardNameResolver, this, "getRewardToken", params);
            }),
            hasExpired: (params) => __awaiter(this, void 0, void 0, function* () {
                return (0, web3_1.signExecuteMethod)(exports.ForwardNameResolver, this, "hasExpired", params);
            }),
            canRenew: (params) => __awaiter(this, void 0, void 0, function* () {
                return (0, web3_1.signExecuteMethod)(exports.ForwardNameResolver, this, "canRenew", params);
            }),
            generateToken: (params) => __awaiter(this, void 0, void 0, function* () {
                return (0, web3_1.signExecuteMethod)(exports.ForwardNameResolver, this, "generateToken", params);
            }),
            mint: (params) => __awaiter(this, void 0, void 0, function* () {
                return (0, web3_1.signExecuteMethod)(exports.ForwardNameResolver, this, "mint", params);
            }),
            setAddress: (params) => __awaiter(this, void 0, void 0, function* () {
                return (0, web3_1.signExecuteMethod)(exports.ForwardNameResolver, this, "setAddress", params);
            }),
            setCapitalisation: (params) => __awaiter(this, void 0, void 0, function* () {
                return (0, web3_1.signExecuteMethod)(exports.ForwardNameResolver, this, "setCapitalisation", params);
            }),
            renewName: (params) => __awaiter(this, void 0, void 0, function* () {
                return (0, web3_1.signExecuteMethod)(exports.ForwardNameResolver, this, "renewName", params);
            }),
            deleteExpired: (params) => __awaiter(this, void 0, void 0, function* () {
                return (0, web3_1.signExecuteMethod)(exports.ForwardNameResolver, this, "deleteExpired", params);
            }),
        };
    }
    fetchState() {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, web3_1.fetchContractState)(exports.ForwardNameResolver, this);
        });
    }
    getContractEventsCurrentCount() {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, web3_1.getContractEventsCurrentCount)(this.address);
        });
    }
    subscribeNameCreatedEvent(options, fromCount) {
        return (0, web3_1.subscribeContractEvent)(exports.ForwardNameResolver.contract, this, options, "NameCreated", fromCount);
    }
    subscribeNameRenewedEvent(options, fromCount) {
        return (0, web3_1.subscribeContractEvent)(exports.ForwardNameResolver.contract, this, options, "NameRenewed", fromCount);
    }
    subscribeAddressSetEvent(options, fromCount) {
        return (0, web3_1.subscribeContractEvent)(exports.ForwardNameResolver.contract, this, options, "AddressSet", fromCount);
    }
    subscribeCapitalisationSetEvent(options, fromCount) {
        return (0, web3_1.subscribeContractEvent)(exports.ForwardNameResolver.contract, this, options, "CapitalisationSet", fromCount);
    }
    subscribeNameDeletedEvent(options, fromCount) {
        return (0, web3_1.subscribeContractEvent)(exports.ForwardNameResolver.contract, this, options, "NameDeleted", fromCount);
    }
    subscribeReverseAddressSetEvent(options, fromCount) {
        return (0, web3_1.subscribeContractEvent)(exports.ForwardNameResolver.contract, this, options, "ReverseAddressSet", fromCount);
    }
    subscribeReverseAddressDeletedEvent(options, fromCount) {
        return (0, web3_1.subscribeContractEvent)(exports.ForwardNameResolver.contract, this, options, "ReverseAddressDeleted", fromCount);
    }
    subscribeCropCreatedEvent(options, fromCount) {
        return (0, web3_1.subscribeContractEvent)(exports.ForwardNameResolver.contract, this, options, "CropCreated", fromCount);
    }
    subscribeCropDeletedEvent(options, fromCount) {
        return (0, web3_1.subscribeContractEvent)(exports.ForwardNameResolver.contract, this, options, "CropDeleted", fromCount);
    }
    subscribeAllEvents(options, fromCount) {
        return (0, web3_1.subscribeContractEvents)(exports.ForwardNameResolver.contract, this, options, fromCount);
    }
    multicall(...callss) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield (0, web3_1.multicallMethods)(exports.ForwardNameResolver, this, callss, contracts_1.getContractByCodeHash));
        });
    }
}
exports.ForwardNameResolverInstance = ForwardNameResolverInstance;
