export interface Event {
    name: string;
    description: string;
    image: string;
    price: number;
    nbTickets: number;
    nbParticipation: number; // Assuming it's a count or an ID reference
    like: boolean;
}
