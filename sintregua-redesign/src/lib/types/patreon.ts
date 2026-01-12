// Tipos para la integración con Patreon

export interface PatreonStats {
  totalMembers: number;
  paidMembers: number;
  lastUpdated: string;
}

export interface PatreonApiResponse {
  success: boolean;
  data: PatreonStats | null;
  error?: string;
  cached?: boolean;
}

export interface PatreonBootstrapData {
  campaign: {
    data: {
      attributes: {
        patron_count: number;
        paid_member_count: number;
      };
    };
  };
}
