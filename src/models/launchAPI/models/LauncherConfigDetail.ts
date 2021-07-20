/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AgencySerializerDetailedCommon } from './AgencySerializerDetailedCommon';
import type { Program } from './Program';

export type LauncherConfigDetail = {
    readonly id?: number;
    readonly url?: string;
    name: string;
    description?: string;
    family?: string;
    full_name?: string;
    manufacturer?: AgencySerializerDetailedCommon;
    readonly program?: Array<Program>;
    variant?: string;
    alias?: string;
    min_stage?: number | null;
    max_stage?: number | null;
    length?: number | null;
    diameter?: number | null;
    maiden_flight?: string | null;
    launch_cost?: string | null;
    launch_mass?: number | null;
    leo_capacity?: number | null;
    gto_capacity?: number | null;
    to_thrust?: number | null;
    apogee?: number | null;
    vehicle_range?: number | null;
    readonly image_url?: string | null;
    info_url?: string | null;
    wiki_url?: string | null;
    readonly total_launch_count?: number;
    readonly consecutive_successful_launches?: number;
    readonly successful_launches?: number;
    readonly failed_launches?: number;
    readonly pending_launches?: number;
}