import express from 'express';
import cors from 'cors';

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// Professional Bio-Intelligence Data
const dailyVitality = {
  consumed: { calories: 1250, protein: 95, carbs: 140, fat: 42 },
  targets: { calories: 2000, protein: 150, carbs: 200, fat: 60 },
  segments: [
    { id: '1', type: 'BREAKFAST', food: 'Matcha Protein Bowl', kcal: 420, p: 32 },
    { id: '2', type: 'LUNCH', food: 'Elite Sashimi Platter', kcal: 830, p: 63 }
  ],
  insights: [
    { id: '1', title: 'Metabolic Optimization', message: 'Your protein density is synchronized with your 2026 performance goals.' }
  ]
};

app.get('/api/vitality', (req, res) => {
  res.json({ data: dailyVitality, error: null });
});

app.listen(port, () => {
  console.log(`[Stitch Intelligence] Vitality Gateway active at http://localhost:${port}`);
});
