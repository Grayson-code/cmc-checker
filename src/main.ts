// Copyright (c) 2022 Northern Star
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
/**
 * @author Northern Star
 * @copyright Northern Star // Cracked Minecraft Club
 */
import checker from 'minecraft-pinger'
import locationAPI from 'ip2location-nodejs'
import { IOnlineData, ILocationData } from './interfaces'
import ip from 'ip'

export namespace status {
  /**
   * Returns if the server is online and its data
   * @since 1.0.0
   * @category IServer
   * @returns {Promise<IOnlineDatas>}
   * @example
   * const data = await isOnline();
   * // Returns The Data which is <IOnlineData>
   * console.log(data);
   * // Log the data to see what it is!
   */
  export async function isOnline ():Promise<IOnlineData> {
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
  /**
   * Gives Information about your Internet
   * @since 1.1.4
   * @category Data
   * @returns {Promise<ILocationData>}
   * @example
   * // Get The data
   * const data = await location()
   * // Log it
   * console.log(data)
   */
  export async function location ():Promise<ILocationData> {
    const EST = new locationAPI.IP2Location()
    const data = EST.geoQuery(ip.address(), 100)
    return {
      data: {
        ip: data.ip,
        city: data.city,
        zipCode: data.zipCode,
        timezone: data.timeZone,
        country: data.countryLong,
        isp: data.isp,
        netSpeed: data.netSpeed
      }

    }
  }
}
