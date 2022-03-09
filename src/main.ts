// Copyright (c) 2022 Northern Star
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
/**
 * @author Northern Star
 * @copyright Northern Star // Cracked Minecraft Club
 * @license MIT (c) 2022 Northern Star
 */
import checker from 'minecraft-pinger'
import { fetch } from 'undici'
import { IOnlineData, ILocationData } from './interfaces'

export namespace status {
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
  export async function isOnline (): Promise<IOnlineData> {
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
       * CMC AP Nodes Data
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

export namespace client {
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
  export async function location (): Promise<ILocationData> {
    const datas = await fetch('http://ip-api.com/json/')
    return new Promise((resolve, reject) => {
      const data: any = datas.json()
      try {
        if (data) {
          resolve(data)
        }
      } catch (e) {
        reject(e)
      }
    })
  }
}
