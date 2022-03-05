// Copyright (c) 2022 Northern Star
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import checker from 'minecraft-pinger'

export interface IOnlineData {
 /**
       * CMCs Eu Data
       */
  eu: {
    /**
     * If eu node is online
     */
    online: boolean,
    /**
     * The latency your getting
     */
    ping: number,
    /**
     * The Timestamp of function execution in unix timestamp
     */
    timestamp: number
  },
  /**
   * AP Nodes Data
   */
  ap: {
    /**
     * if  ap node is online
     */
    online: boolean,
    /**
     * The latency your getting
     */
    ping: number,
    /**
     * The Timestamp of function execution in unix timestamp
     */
    timestamp: number
  }
}

export namespace status {
  /**
   * Returns if the server is online and its data
   * @returns {Promise<IOnlineData>}
   * @example
   * await isOnline()
   */
  export async function isOnline () {
    const eu = await checker.pingPromise('mc.crackedminecraft.club', 25565)
    const ap = await checker.pingPromise('ind.crackedminecraft.club', 25565)
    let euOnline!: boolean
    let apOnline!: boolean
    if (eu.ping) {
      euOnline = true
    }
    if (ap.ping) {
      apOnline = true
    }
    return {
      /**
       * CMCs Eu Data
       */
      eu: {
        /**
         * If eu node is online
         */
        online: euOnline,
        /**
         * The latency your getting
         */
        ping: eu.ping,
        /**
         * The Timestamp of function execution in unix timestamp
         */
        timestamp: Math.round(new Date().getTime() / 1000)
      },
      /**
       * AP Nodes Data
       */
      ap: {
        /**
         * if  ap node is online
         */
        online: apOnline,
        /**
         * The latency your getting
         */
        ping: ap.ping,
        /**
         * The Timestamp of function execution in unix timestamp
         */
        timestamp: Math.round(new Date().getTime() / 1000)
      }
    }
  }
}
