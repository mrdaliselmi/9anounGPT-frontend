import { useAuth } from '@clerk/clerk-react';

export const useAuthMiddleware = async (req, res, next) => {
  const { getToken } = useAuth();
  const token = await getToken();
  req.headers.authorization = `Bearer ${token}`;
  next();
};
