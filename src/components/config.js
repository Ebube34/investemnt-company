export const API_URL = process.env.NODE_ENV === 'production' 
  ? process.env.API_URL
  : 'http://localhost:8000';

export const config = {
  appID: "236566c19cfd7fcc",
  agentUID: "ecommerce-agent",
};