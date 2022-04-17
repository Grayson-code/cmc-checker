import { IOnlineData, ILocationData } from '.';
export declare namespace status {
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
    function isOnline(): Promise<IOnlineData>;
}
export declare namespace client {
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
    function location(): Promise<ILocationData>;
}
