import { Client } from "./Client";

export interface Appointment{
    _id: {
        $oid: string;
    };
    service: string;
    date: {
        $date: string;
    };
    time: string;
    location: string;
    assistance: string;
    client: Client;
    __v: number;
}