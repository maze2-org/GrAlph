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
exports.FarmInstance = exports.Farm = void 0;
const web3_1 = require("@alephium/web3");
const Farm_ral_json_1 = __importDefault(require("../farm/Farm.ral.json"));
const contracts_1 = require("./contracts");
const types_1 = require("./types");
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
            getCrop: (params) => __awaiter(this, void 0, void 0, function* () {
                return (0, web3_1.testMethod)(this, "getCrop", params, contracts_1.getContractByCodeHash);
            }),
            hasExpired: (params) => __awaiter(this, void 0, void 0, function* () {
                return (0, web3_1.testMethod)(this, "hasExpired", params, contracts_1.getContractByCodeHash);
            }),
            createCrop: (params) => __awaiter(this, void 0, void 0, function* () {
                return (0, web3_1.testMethod)(this, "createCrop", params, contracts_1.getContractByCodeHash);
            }),
            deleteCrop: (params) => __awaiter(this, void 0, void 0, function* () {
                return (0, web3_1.testMethod)(this, "deleteCrop", params, contracts_1.getContractByCodeHash);
            }),
        };
    }
    encodeFields(fields) {
        return (0, web3_1.encodeContractFields)((0, web3_1.addStdIdToFields)(this.contract, fields), this.contract.fieldsSig, types_1.AllStructs);
    }
    at(address) {
        return new FarmInstance(address);
    }
}
// Use this object to test and deploy the contract
exports.Farm = new Factory(web3_1.Contract.fromJson(Farm_ral_json_1.default, "", "4cafea5ed660e0edd4c4a863b813eca220d89ec28631d67fce5e8a8f755b58e1", types_1.AllStructs));
// Use this class to interact with the blockchain
class FarmInstance extends web3_1.ContractInstance {
    constructor(address) {
        super(address);
        this.view = {
            getCollectionUri: (params) => __awaiter(this, void 0, void 0, function* () {
                return (0, web3_1.callMethod)(exports.Farm, this, "getCollectionUri", params === undefined ? {} : params, contracts_1.getContractByCodeHash);
            }),
            totalSupply: (params) => __awaiter(this, void 0, void 0, function* () {
                return (0, web3_1.callMethod)(exports.Farm, this, "totalSupply", params === undefined ? {} : params, contracts_1.getContractByCodeHash);
            }),
            nftByIndex: (params) => __awaiter(this, void 0, void 0, function* () {
                return (0, web3_1.callMethod)(exports.Farm, this, "nftByIndex", params, contracts_1.getContractByCodeHash);
            }),
            validateNFT: (params) => __awaiter(this, void 0, void 0, function* () {
                return (0, web3_1.callMethod)(exports.Farm, this, "validateNFT", params, contracts_1.getContractByCodeHash);
            }),
            getCrop: (params) => __awaiter(this, void 0, void 0, function* () {
                return (0, web3_1.callMethod)(exports.Farm, this, "getCrop", params, contracts_1.getContractByCodeHash);
            }),
            hasExpired: (params) => __awaiter(this, void 0, void 0, function* () {
                return (0, web3_1.callMethod)(exports.Farm, this, "hasExpired", params, contracts_1.getContractByCodeHash);
            }),
            createCrop: (params) => __awaiter(this, void 0, void 0, function* () {
                return (0, web3_1.callMethod)(exports.Farm, this, "createCrop", params, contracts_1.getContractByCodeHash);
            }),
            deleteCrop: (params) => __awaiter(this, void 0, void 0, function* () {
                return (0, web3_1.callMethod)(exports.Farm, this, "deleteCrop", params, contracts_1.getContractByCodeHash);
            }),
        };
        this.transact = {
            getCollectionUri: (params) => __awaiter(this, void 0, void 0, function* () {
                return (0, web3_1.signExecuteMethod)(exports.Farm, this, "getCollectionUri", params);
            }),
            totalSupply: (params) => __awaiter(this, void 0, void 0, function* () {
                return (0, web3_1.signExecuteMethod)(exports.Farm, this, "totalSupply", params);
            }),
            nftByIndex: (params) => __awaiter(this, void 0, void 0, function* () {
                return (0, web3_1.signExecuteMethod)(exports.Farm, this, "nftByIndex", params);
            }),
            validateNFT: (params) => __awaiter(this, void 0, void 0, function* () {
                return (0, web3_1.signExecuteMethod)(exports.Farm, this, "validateNFT", params);
            }),
            getCrop: (params) => __awaiter(this, void 0, void 0, function* () {
                return (0, web3_1.signExecuteMethod)(exports.Farm, this, "getCrop", params);
            }),
            hasExpired: (params) => __awaiter(this, void 0, void 0, function* () {
                return (0, web3_1.signExecuteMethod)(exports.Farm, this, "hasExpired", params);
            }),
            createCrop: (params) => __awaiter(this, void 0, void 0, function* () {
                return (0, web3_1.signExecuteMethod)(exports.Farm, this, "createCrop", params);
            }),
            deleteCrop: (params) => __awaiter(this, void 0, void 0, function* () {
                return (0, web3_1.signExecuteMethod)(exports.Farm, this, "deleteCrop", params);
            }),
        };
    }
    fetchState() {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, web3_1.fetchContractState)(exports.Farm, this);
        });
    }
    getContractEventsCurrentCount() {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, web3_1.getContractEventsCurrentCount)(this.address);
        });
    }
    subscribeNameCreatedEvent(options, fromCount) {
        return (0, web3_1.subscribeContractEvent)(exports.Farm.contract, this, options, "NameCreated", fromCount);
    }
    subscribeNameRenewedEvent(options, fromCount) {
        return (0, web3_1.subscribeContractEvent)(exports.Farm.contract, this, options, "NameRenewed", fromCount);
    }
    subscribeAddressSetEvent(options, fromCount) {
        return (0, web3_1.subscribeContractEvent)(exports.Farm.contract, this, options, "AddressSet", fromCount);
    }
    subscribeCapitalisationSetEvent(options, fromCount) {
        return (0, web3_1.subscribeContractEvent)(exports.Farm.contract, this, options, "CapitalisationSet", fromCount);
    }
    subscribeNameDeletedEvent(options, fromCount) {
        return (0, web3_1.subscribeContractEvent)(exports.Farm.contract, this, options, "NameDeleted", fromCount);
    }
    subscribeReverseAddressSetEvent(options, fromCount) {
        return (0, web3_1.subscribeContractEvent)(exports.Farm.contract, this, options, "ReverseAddressSet", fromCount);
    }
    subscribeReverseAddressDeletedEvent(options, fromCount) {
        return (0, web3_1.subscribeContractEvent)(exports.Farm.contract, this, options, "ReverseAddressDeleted", fromCount);
    }
    subscribeCropCreatedEvent(options, fromCount) {
        return (0, web3_1.subscribeContractEvent)(exports.Farm.contract, this, options, "CropCreated", fromCount);
    }
    subscribeCropDeletedEvent(options, fromCount) {
        return (0, web3_1.subscribeContractEvent)(exports.Farm.contract, this, options, "CropDeleted", fromCount);
    }
    subscribeAllEvents(options, fromCount) {
        return (0, web3_1.subscribeContractEvents)(exports.Farm.contract, this, options, fromCount);
    }
    multicall(...callss) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield (0, web3_1.multicallMethods)(exports.Farm, this, callss, contracts_1.getContractByCodeHash));
        });
    }
}
exports.FarmInstance = FarmInstance;
