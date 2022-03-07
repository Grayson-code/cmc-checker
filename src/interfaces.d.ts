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
             * Your IP
             */
        ip: string | number,
        /**
         * Your City
         */
        city: string,
        /**
         * Your ZIP code
         */
        zipCode: string,
        /**
         * The Timezone
         */
        timezone: any,
        /**
         * Your Country
         */
        country: string,
        /**
         * Your ISP, or internet service provider
         */
        isp: string,
        /**
         * Your bandwith speed
         */
        netSpeed: any,
    }

}
