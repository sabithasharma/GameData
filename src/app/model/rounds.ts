export interface Round {
    id: string;
    created: string;
    operatorId: number;
    gameId: number;
    gameName: string;
    accountId: string;
    status: string;
    purchaseMode: string;
    clientMode: string;
    totalBet: string;
    totalWin: string;
    currency: string;
    feature: boolean;
    competitionAffected: boolean;
}
