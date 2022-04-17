"use strict";
// Copyright (c) 2022 Northern Star
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
function test() {
    return __awaiter(this, void 0, void 0, function* () {
        yield main_1.status.isOnline().then(console.log);
        yield main_1.client.location().then(console.log);
    });
}
test();
