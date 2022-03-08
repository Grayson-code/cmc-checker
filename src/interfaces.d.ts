// Copyright (c) 2022 Northern Star
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

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
/**
 * Interface for location
 */
export interface ILocationData {
    data: {
        /**
         * Status of the Request
         */
        status: string,
        /**
         * Full Country Name
         */
        country: string,
        /**
         * Country Code
         */
        countryCode: string,
        /**
         * Region or State Code
         */
        region: string,
        /**
         * Region or State Full name
         */
        regionName: string,
        /**
         *  The City
         */
        city: string,
        /**
         * The Zip Code
         */
        zip: string,
        /**
         * Your latitude
         */
        lat: number,
        /**
         * Your Longitude
         */
        lon: number,
        /**
         * Your Timezone
         */
        timezone: string,
        /**
         * Internet Service Provider
         */
        isp: string,
        /**
         * Network Organization
         */
        org: string,
        /**
         * AS number and organization, separated by space (RIR). Empty for IP blocks not being announced in BGP tables.
         */
        as: string,
        /**
         * Your IP
         */
        query: number,
    }
}
