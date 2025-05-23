const express = require('express');
const path = require('path');
const cors = require('cors');
const performanceCalculator = require('./performance-calculator.js');

const app = express();
const port = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

// Serve static files
app.use(express.static(path.join(__dirname)));
app.use(express.json());

// API endpoints
app.post('/api/calculate-performance', (req, res) => {
    try {
        const { cpuScore, gpuScore, gameType } = req.body;
        
        const performance = {
            game: performanceCalculator.calculateGamePerformance(cpuScore, gpuScore),
            graphics: performanceCalculator.calculateGraphicsPerformance(cpuScore, gpuScore),
            office: performanceCalculator.calculateOfficePerformance(cpuScore, gpuScore),
            bottleneck: performanceCalculator.calculateBottleneck(cpuScore, gpuScore),
            stability: performanceCalculator.calculateStability(cpuScore, gpuScore),
            tips: performanceCalculator.generatePerformanceTips(gameType, cpuScore, gpuScore)
        };
        
        res.json(performance);
    } catch (error) {
        console.error('Error calculating performance:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
}); 