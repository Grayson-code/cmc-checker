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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = exports.status = void 0;
// Copyright (c) 2022 Northern Star
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
/**
 * @author Northern Star
 * @copyright Northern Star // Cracked Minecraft Club
 * @license MIT (c) 2022 Northern Star
 */
const minecraft_pinger_1 = __importDefault(require("minecraft-pinger"));
const undici_1 = require("undici");
var status;
(function (status) {
    /**
     * Returns if the server is online and its data
     * @since 1.0.0
     * @category Status
     * @returns {Promise<IOnlineDatas>}
     * @example
     * const data = await isOnline();
     * // Returns The Data which is <IOnlineData>
     * console.log(data);
     * // Log the data
     */
    function isOnline() {
        return __awaiter(this, void 0, void 0, function* () {
            const eu = yield minecraft_pinger_1.default.pingPromise('mc.crackedminecraft.club', 25565);
            const ap = yield minecraft_pinger_1.default.pingPromise('ind.crackedminecraft.club', 25565);
            let euOnline;
            let apOnline;
            if (eu.ping) {
                euOnline = true;
            }
            if (ap.ping) {
                apOnline = true;
            }
            return {
                eu: {
                    online: euOnline,
                    ping: eu.ping,
                    timestamp: Math.round(new Date().getTime() / 1000)
                },
                ap: {
                    online: apOnline,
                    ping: ap.ping,
                    timestamp: Math.round(new Date().getTime() / 1000)
                }
            };
        });
    }
    status.isOnline = isOnline;
})(status = exports.status || (exports.status = {}));
var client;
(function (client) {
    /**
    * Gives Information about your Internet & ISP
    * @since 1.1.4
    * @category Data
    * @returns {Promise<ILocationData>}
    * @example
    * // Get The data
    * const data = await location()
    * // Log it
    * console.log(data)
    */
    function location() {
        return __awaiter(this, void 0, void 0, function* () {
            const datas = yield (0, undici_1.fetch)('http://ip-api.com/json/');
            return new Promise((resolve, reject) => {
                const data = datas.json();
                try {
                    if (data) {
                        resolve(data);
                    }
                }
                catch (e) {
                    reject(e);
                }
            });
        });
    }
    client.location = location;
})(client = exports.client || (exports.client = {}));
// Test
