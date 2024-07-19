
import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import {isAdmin} from './../Middleware/Admin.Middleware.js'
const router = Router();
const prisma = new PrismaClient();



router.get('/users', isAdmin, async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json({ success: true, users });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ success: false, message: 'Error fetching users' });
  }
});


router.post("/products", async (req, res) => {
  const { name, description, price, imageUrl } = req.body;

  try {
    const product = await prisma.product.create({
      data: {
        name,
        description,
        price,
        imageUrl,
      },
    });
    res.status(201).json({ success: true, product });
  } catch (error) {
    console.error('Error adding product:', error);
    res.status(500).json({ success: false, message:error.message });
  }
});


router.get('/products', async (req, res) => {
  try {
    const products = await prisma.product.findMany();
    res.status(200).json({ success: true, products });
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ success: false, message: 'Error fetching products' });
  }
});

router.post('/orders', async (req, res) => {
  const { userId, cartItems, status = 'pending' } = req.body;

  try {
    const orders = await Promise.all(cartItems.map(async (item) => {
      return prisma.order.create({
        data: {
          userId,
          productId: item.id,
          quantity: item.quantity,
          status,
        },
      });
    }));

    res.status(201).json({ success: true, orders });
  } catch (error) {
    console.error('Error processing order:', error);
    res.status(500).json({ success: false, message: 'Error processing order' });
  }
});

router.get('/orders/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    const orders = await prisma.order.findMany({
      where: { userId: parseInt(userId) },
      include: {
        product: true,
        user: true, 
      },
    });
    res.status(200).json({ success: true, orders });
  } catch (error) {
    console.error('Error fetching order history:', error);
    res.status(500).json({ success: false, message: 'Error fetching order history' });
  }
});

router.put('/orders/:orderId', async (req, res) => {
  const { orderId } = req.params;
  const { status } = req.body;

  try {
    const order = await prisma.order.update({
      where: { id: parseInt(orderId) },
      data: { status },
    });
    res.status(200).json({ success: true, order });
  } catch (error) {
    console.error('Error updating order status:', error);
    res.status(500).json({ success: false, message: 'Error updating order status' });
  }
});


export default router;
