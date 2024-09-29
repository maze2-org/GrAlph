"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const web3_1 = require("@alephium/web3");
const ts_1 = require("../artifacts/ts");
const FORWARD_NAME_RESOLVER_ID = '6ed2028d263833ada7d8ac87b4478278f2e58e09ddbe819e623b17ba9e6cae00';
const REVERSE_NAME_RESOLVERS = [
    '6c7075ed4c407c4e20ae39341820240a4065fe69c3840960d2ee2633daf8b000',
    '40be2751efbf30395c079278972fbe6838f53a6e240f7b30ebfe877b7dddcd01',
    'cff6d6016d3160fd5818d92effa79594a4dceec572895d953f1a76f0163ff902',
    '5777c6381f8dd67297793a4eb6d1e8a1f0de545f5fa4e129d25f4f08d382bd03',
];
const getName = (nameString) => __awaiter(void 0, void 0, void 0, function* () {
    const FORWARD_NAME_RESOLVER_ADDRESS = (0, web3_1.addressFromContractId)(FORWARD_NAME_RESOLVER_ID);
    const forwardNameResolver = new ts_1.ForwardNameResolverInstance(FORWARD_NAME_RESOLVER_ADDRESS);
    try {
        const nameContractId = (yield forwardNameResolver.view.getNftByName({ args: { name: (0, web3_1.stringToHex)(nameString) } })).returns;
        const nameNft = new ts_1.NameInstance((0, web3_1.addressFromContractId)(nameContractId));
        const address = (yield nameNft.view.getAddress()).returns;
        const capitalisation = (yield nameNft.view.getCapitalisation()).returns;
        const expires = (yield nameNft.view.getExpires()).returns;
        return {
            name: nameString,
            address,
            capitalisation: (0, web3_1.hexToString)(capitalisation),
            expires
        };
    }
    catch (_a) {
        return null;
    }
});
// Check that the target address has "Linked" their address
const isNameLinked = (name) => __awaiter(void 0, void 0, void 0, function* () {
    const group = (0, web3_1.groupOfAddress)(name.address);
    const reverseNameResolverContractId = REVERSE_NAME_RESOLVERS[group];
    const reverseNameResolver = new ts_1.ReverseNameResolverInstance((0, web3_1.addressFromContractId)(reverseNameResolverContractId));
    const nameString = (yield reverseNameResolver.view.getNameByAddress({ args: { address: name.address } })).returns;
    return name.name === (0, web3_1.hexToString)(nameString);
});
const isValidAddress = (address) => {
    try {
        (0, web3_1.validateAddress)(address);
        return true;
    }
    catch (_a) {
        return false;
    }
};
const isValidName = (name) => {
    if (isValidAddress(name.name)) {
        return false;
    }
    const cleanName = name.name
        .replace(/[^a-zA-Z0-9_]/g, '')
        .toLowerCase();
    if (name.name !== cleanName) {
        return false;
    }
    const cleanCapitalisation = name.capitalisation
        .toLowerCase();
    if (cleanCapitalisation !== cleanName) {
        return false;
    }
    const ONE_HOUR = 60 * 60 * 1000;
    const now = ((Date.now() - ONE_HOUR));
    // Minus 1 hour to pretect from expiry attack
    if (Number(name.expires) < now) {
        return false;
    }
    return true;
};
const resolveName = (nameString) => __awaiter(void 0, void 0, void 0, function* () {
    const name = yield getName(nameString);
    if (name) {
        const isValid = isValidName(name);
        if (isValid) {
            const isLinked = yield isNameLinked(name);
            return name;
        }
    }
    return null;
});
function command() {
    return __awaiter(this, void 0, void 0, function* () {
        web3_1.web3.setCurrentNodeProvider('https://wallet.mainnet.alephium.org');
        const deadrareName = yield resolveName('deadrare');
        console.log('deadrareName', deadrareName);
    });
}
const program = new commander_1.Command();
program
    .command('ans')
    .action((cmdObj) => __awaiter(void 0, void 0, void 0, function* () {
    yield command();
}));
program.parse(process.argv);
