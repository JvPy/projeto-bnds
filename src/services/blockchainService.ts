import { blockchainAPI } from "./api";

interface CertificateCreation {
  phone: string;
  certificate: string;
  kind: string;
}

export const BlockchainService = {
  async setCertificate(payload: CertificateCreation) {
    const { phone, certificate, kind } = payload;
    try {
      await blockchainAPI.post("/", {
        phone,
        certificate,
        kind,
      });
    } catch (error) {
      console.error(error);
    }
  },

  async getCertificate() {
    try {
      const response = await blockchainAPI.get("/");
      return response;
    } catch (error) {
      console.error(error);
    }
  },
};
