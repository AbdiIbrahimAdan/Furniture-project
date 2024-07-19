
export const isAdmin = (req, res, next) => {
    const { role } = req.user; 
    if (role !== 'admin') {
      return res.status(403).json({ success: false, message: 'Unauthorized' });
    }
    next();
  };
  